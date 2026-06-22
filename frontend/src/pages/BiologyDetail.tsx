import { useState, useEffect, useRef, type FC, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { biologyJungleLevels } from "../data/biologyJungleLevels";

const SOUND_SUCCESS =
  "https://assets.mixkit.co/active_storage/sfx/2019/2019-84.wav";
const SOUND_WRONG =
  "https://assets.mixkit.co/active_storage/sfx/2572/2572-84.wav";

function ForestGameStyles() {
  return (
    <style>{`
      @keyframes pop-3d {
        0% { transform: perspective(600px) translateZ(0) scale(1); }
        50% { transform: perspective(600px) translateZ(25px) scale(1.05); }
        100% { transform: perspective(600px) translateZ(0) scale(1); }
      }
      @keyframes shake-3d {
        0%, 100% { transform: perspective(600px) rotateY(0deg) translateX(0); }
        25% { transform: perspective(600px) rotateY(-15deg) translateX(-6px); }
        75% { transform: perspective(600px) rotateY(15deg) translateX(6px); }
      }
      @keyframes float-3d {
        0%, 100% { transform: perspective(600px) rotateX(3deg) rotateY(-3deg) translateY(0); }
        50% { transform: perspective(600px) rotateX(-3deg) rotateY(3deg) translateY(-8px); }
      }
      .animate-pop-3d { animation: pop-3d 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275) 1; }
      .animate-shake-3d { animation: shake-3d 0.25s ease-in-out 2; }
      .animate-float-3d { animation: float-3d 4s ease-in-out infinite; }
    `}</style>
  );
}

const SEED_COMMENTS: Record<number, string[]> = {
  1: ["Арыстан падыша абдан сулуу!", "Жырткычтар тобу туура табылды 🦁"],
  2: ["Кояндар сабизди жакшы көрүшөт 🥕"],
};

const DEFAULT_LIKES: Record<number, number> = { 1: 35, 2: 48 };
const DEFAULT_SHARES: Record<number, number> = { 1: 5, 2: 12 };

function loadJson<T>(key: string, fallback: T): T {
  try {
    const saved = localStorage.getItem(key);
    return saved ? (JSON.parse(saved) as T) : fallback;
  } catch {
    return fallback;
  }
}

const defaultLikes = (id: number) => DEFAULT_LIKES[id] ?? 10 + ((id * 5) % 40);
const defaultShares = (id: number) => DEFAULT_SHARES[id] ?? 3 + (id % 12);

type BiologyDetailProps = {
  autoStart?: boolean;
};

const BiologyDetail: FC<BiologyDetailProps> = ({ autoStart = false }) => {
  const navigate = useNavigate();
  const [isPlaying, setIsPlaying] = useState(autoStart);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [speechBubble, setSpeechBubble] = useState("");
  const [crystals, setCrystals] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [wrongAnswers, setWrongAnswers] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [likes, setLikes] = useState<Record<number, number>>(() =>
    loadJson("forest_likes", DEFAULT_LIKES),
  );
  const [isLiked, setIsLiked] = useState<Record<number, boolean>>(() =>
    loadJson("forest_is_liked", {}),
  );
  const [shares, setShares] = useState<Record<number, number>>(() =>
    loadJson("forest_shares", DEFAULT_SHARES),
  );
  const [comments, setComments] = useState<Record<number, string[]>>(() =>
    loadJson("forest_comments", SEED_COMMENTS),
  );
  const [newComment, setNewComment] = useState("");
  const [showCommentModal, setShowCommentModal] = useState(false);
  const [showShareModal, setShowShareModal] = useState(false);
  const [shareSuccess, setShareSuccess] = useState(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const justStarted = useRef(false);

  const currentLevel =
    biologyJungleLevels[currentIdx] ?? biologyJungleLevels[0];

  const getRank = () => {
    if (crystals >= 40)
      return { name: "🥇 АЛТЫН ЭТАП", color: "text-amber-400" };
    if (crystals >= 20)
      return { name: "🥈 КҮМҮШ ЭТАП", color: "text-slate-300" };
    if (crystals >= 10)
      return { name: "🥉 КОЛО ЭТАП", color: "text-orange-400" };
    return { name: "🌱 ЖӨНӨКӨЙ ДЕҢГЕЭЛ", color: "text-emerald-400" };
  };

  const playSound = (url: string) => {
    try {
      if (audioRef.current) {
        audioRef.current.pause();
      }
      audioRef.current = new Audio(url);
      audioRef.current.volume = 0.5;
      void audioRef.current.play().catch(() => {});
    } catch {
      /* ignore */
    }
  };

  useEffect(() => {
    if (!autoStart) return;
    const firstLevel = biologyJungleLevels[0];
    setSpeechBubble(firstLevel.speech);
    justStarted.current = true;
    if (firstLevel.animalSound) {
      playSound(firstLevel.animalSound);
    }
  }, [autoStart]);

  useEffect(() => {
    if (!isPlaying && !isFinished && !autoStart) {
      navigate("/subjects/biologiya", { replace: true });
    }
  }, [isPlaying, isFinished, autoStart, navigate]);

  useEffect(() => {
    return () => {
      audioRef.current?.pause();
    };
  }, []);

  useEffect(() => {
    localStorage.setItem("forest_likes", JSON.stringify(likes));
  }, [likes]);

  useEffect(() => {
    localStorage.setItem("forest_is_liked", JSON.stringify(isLiked));
  }, [isLiked]);

  useEffect(() => {
    localStorage.setItem("forest_shares", JSON.stringify(shares));
  }, [shares]);

  useEffect(() => {
    localStorage.setItem("forest_comments", JSON.stringify(comments));
  }, [comments]);

  useEffect(() => {
    if (!isPlaying || isFinished) return;

    setSpeechBubble(currentLevel.speech);
    setSelectedOption(null);

    if (justStarted.current) {
      justStarted.current = false;
      return;
    }

    const timer = setTimeout(() => {
      if (currentLevel.animalSound) {
        playSound(currentLevel.animalSound);
      }
    }, 150);

    return () => clearTimeout(timer);
  }, [currentIdx, isPlaying, isFinished]);

  useEffect(() => {
    setShowCommentModal(false);
    setShowShareModal(false);
    setNewComment("");
  }, [currentIdx]);

  const levelId = currentLevel.id;
  const currentLikes = likes[levelId] ?? defaultLikes(levelId);
  const currentShares = shares[levelId] ?? defaultShares(levelId);
  const levelComments = comments[levelId] ?? SEED_COMMENTS[levelId] ?? [];

  const bumpShareCount = () => {
    setShares((prev) => ({
      ...prev,
      [levelId]: (prev[levelId] ?? defaultShares(levelId)) + 1,
    }));
  };

  const showShareToast = () => {
    setShareSuccess(true);
    setTimeout(() => setShareSuccess(false), 3000);
  };

  const handleLike = () => {
    const hasLiked = Boolean(isLiked[levelId]);
    setIsLiked((prev) => ({ ...prev, [levelId]: !hasLiked }));
    setLikes((prev) => ({
      ...prev,
      [levelId]: (prev[levelId] ?? defaultLikes(levelId)) + (hasLiked ? -1 : 1),
    }));
    playSound(SOUND_SUCCESS);
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      bumpShareCount();
      setShowShareModal(false);
      showShareToast();
    } catch {
      alert("Шилтемени көчүрүүгө мүмкүн болгон жок 😢");
    }
  };

  const shareToSocial = (
    platform: "whatsapp" | "telegram" | "facebook" | "twitter",
  ) => {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent(
      `Жандуу токой кино-оюнун ойноп жатам! Келгиле, чогуу ойнойлу: ${window.location.href}`,
    );

    let shareUrl = "";
    switch (platform) {
      case "whatsapp":
        shareUrl = `https://api.whatsapp.com/send?text=${text}`;
        break;
      case "telegram":
        shareUrl = `https://t.me/share/url?url=${url}&text=${text}`;
        break;
      case "facebook":
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
        break;
      case "twitter":
        shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${text}`;
        break;
    }

    window.open(shareUrl, "_blank", "noopener,noreferrer");
    bumpShareCount();
    setShowShareModal(false);
    showShareToast();
  };

  const handleAddComment = (e: FormEvent) => {
    e.preventDefault();
    const text = newComment.trim();
    if (!text) return;
    setComments((prev) => ({
      ...prev,
      [levelId]: [...(prev[levelId] ?? SEED_COMMENTS[levelId] ?? []), text],
    }));
    setNewComment("");
  };

  const handleAnswer = (idx: number) => {
    if (selectedOption !== null) return;
    setSelectedOption(idx);

    if (idx === currentLevel.c) {
      setSpeechBubble(currentLevel.success);
      setCrystals((prev) => prev + 20);
      setCorrectAnswers((prev) => prev + 1);
      playSound(SOUND_SUCCESS);
    } else {
      setSpeechBubble(currentLevel.wrong);
      setWrongAnswers((prev) => prev + 1);
      playSound(SOUND_WRONG);
    }
  };

  const nextLevel = () => {
    if (selectedOption === null) return;
    if (currentIdx < biologyJungleLevels.length - 1) {
      setCurrentIdx((prev) => prev + 1);
    } else {
      setIsFinished(true);
    }
  };

  const restartGame = () => {
    setCurrentIdx(0);
    setSelectedOption(null);
    setCrystals(0);
    setCorrectAnswers(0);
    setWrongAnswers(0);
    setIsFinished(false);
    setIsPlaying(true);
    justStarted.current = true;
    const firstLevel = biologyJungleLevels[0];
    setSpeechBubble(firstLevel.speech);
    if (firstLevel.animalSound) {
      playSound(firstLevel.animalSound);
    }
  };

  const characterLabel = currentLevel.character.includes("АЙТАТ")
    ? currentLevel.character
    : `${currentLevel.character} АЙТАТ:`;

  const rank = getRank();

  return (
    <div className="relative flex min-h-screen flex-col justify-between overflow-hidden bg-[#0d2111] p-4 font-sans text-white">
      <ForestGameStyles />

      {shareSuccess && (
        <div className="fixed left-1/2 top-6 z-50 -translate-x-1/2 animate-bounce rounded-xl border-4 border-black bg-[#a3e635] px-6 py-3 text-xs font-black uppercase tracking-wider text-black shadow-[4px_4px_0px_#000]">
          🚀 Бөлүшүлдү! Ийгилик!
        </div>
      )}

      <div className="relative z-10 mx-auto flex w-full max-w-7xl items-center justify-between rounded-xl border-4 border-black bg-[#071109] p-3.5 shadow-[0_5px_0px_#000]">
        <button
          type="button"
          onClick={() => navigate("/subjects/biologiya")}
          className="rounded-xl border-4 border-black bg-[#e61e4f] px-4 py-2 text-xs font-black text-white shadow-[3px_3px_0px_#000]"
        >
          🟥 Чыгуу
        </button>
        <div className="text-center">
          <h1 className="text-sm font-black uppercase tracking-wider text-green-400 md:text-lg">
            ЖАНДУУ ТОКОЙ КИНО-ОЮНУ 🎬
          </h1>
          <p className="mt-0.5 text-[10px] font-bold uppercase text-slate-400">
            ДЕҢГЭЭЛ:{" "}
            {isPlaying && !isFinished ? currentIdx + 1 : 0} /{" "}
            {biologyJungleLevels.length}
          </p>
        </div>
        <div className="rounded-xl border-4 border-black bg-yellow-400 px-5 py-2 text-xs font-black text-black shadow-[3px_3px_0px_#000]">
          КРИСТАЛЛ: {crystals}
        </div>
      </div>

      {isFinished ? (
        <div className="relative z-10 my-auto flex flex-col items-center justify-center p-4">
          <div className="w-full max-w-md rounded-2xl border-4 border-black bg-[#fffbeb] p-8 text-center text-black shadow-[8px_8px_0px_#000]">
            <span className="mb-2 block text-6xl">🏆</span>
            <h2 className="mb-6 text-xl font-black uppercase">ЖЫЙЫНТЫК</h2>
            <div className="mb-6 rounded-xl border-4 border-black bg-black p-4 text-white">
              <p className={`mb-2 text-sm font-black ${rank.color}`}>
                {rank.name}
              </p>
              <div className="mt-3 grid grid-cols-3 gap-2 text-center text-xs">
                <div>
                  <p className="font-bold text-slate-400">БАЛЛ</p>
                  <p className="text-base font-black text-yellow-400">
                    {crystals}
                  </p>
                </div>
                <div>
                  <p className="font-bold text-slate-400">ТУУРА</p>
                  <p className="text-base font-black text-green-400">
                    {correctAnswers}
                  </p>
                </div>
                <div>
                  <p className="font-bold text-slate-400">КАТА</p>
                  <p className="text-base font-black text-red-400">
                    {wrongAnswers}
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-3">
              <button
                type="button"
                onClick={restartGame}
                className="w-full rounded-xl border-4 border-black bg-green-400 py-3 font-black text-black shadow-[3px_3px_0px_#000]"
              >
                🔄 КАЙРА БАШТОО
              </button>
              <button
                type="button"
                onClick={() => navigate("/subjects/biologiya")}
                className="w-full rounded-xl border-4 border-black bg-slate-200 py-3 font-black text-black shadow-[2px_2px_0px_#000]"
              >
                🚪 ЧЫГУУ
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="z-10 mx-auto my-auto grid w-full max-w-7xl grid-cols-1 items-center gap-8 p-2 md:grid-cols-2">
          <div className="flex flex-col items-center">
            <div className="animate-float-3d relative mb-6 w-full max-w-md rounded-2xl border-4 border-black bg-white p-5 text-black shadow-[6px_6px_0px_#000]">
              <div className="absolute -bottom-4 left-1/2 h-0 w-0 -translate-x-1/2 border-x-[14px] border-t-[14px] border-x-transparent border-t-white" />
              <div className="mb-1 text-[10px] font-black uppercase tracking-wider text-emerald-600">
                {characterLabel}
              </div>
              <p className="text-sm font-bold leading-relaxed text-slate-800">
                &ldquo;{speechBubble}&rdquo;
              </p>
            </div>

            <div
              className={`relative mb-6 flex h-48 w-48 items-center justify-center rounded-full border-8 border-black bg-gradient-to-b ${currentLevel.bgStyle} shadow-[0_15px_35px_rgba(0,0,0,0.6)] backdrop-blur-sm md:h-56 md:w-56`}
            >
              <span className="select-none text-7xl filter drop-shadow-[0_8px_8px_rgba(0,0,0,0.5)]">
                {currentLevel.avatar}
              </span>
            </div>

            <div className="flex w-full max-w-sm justify-center gap-4">
              <button
                type="button"
                onClick={handleLike}
                className={`flex items-center gap-2 rounded-xl border-4 border-black px-5 py-2.5 text-xs font-black uppercase tracking-wider shadow-[3px_3px_0px_#000] transition-all ${
                  isLiked[levelId]
                    ? "bg-[#f43f5e] text-white"
                    : "bg-white text-black"
                }`}
              >
                ❤️ {currentLikes}
              </button>
              <button
                type="button"
                onClick={() => setShowCommentModal(true)}
                className="flex items-center gap-2 rounded-xl border-4 border-black bg-[#38bdf8] px-5 py-2.5 text-xs font-black uppercase tracking-wider text-black shadow-[3px_3px_0px_#000]"
              >
                💬 {levelComments.length}
              </button>
              <button
                type="button"
                onClick={() => setShowShareModal(true)}
                className="flex items-center gap-2 rounded-xl border-4 border-black bg-[#a3e635] px-5 py-2.5 text-xs font-black uppercase tracking-wider text-black shadow-[3px_3px_0px_#000]"
              >
                🔁 {currentShares}
              </button>
            </div>
          </div>

          <div className="flex min-h-[400px] flex-col justify-between rounded-2xl border-4 border-black bg-[#fffbeb] p-6 text-black shadow-[10px_10px_0px_#000] md:p-8">
            <div>
              <span className="rounded-md border-2 border-black bg-emerald-200/80 px-2.5 py-1 text-[9px] font-black uppercase tracking-widest text-emerald-950">
                ТОКОЙ ТАПШЫРМАСЫ 🌲
              </span>
              <h2 className="mb-6 mt-4 text-base font-black leading-snug md:text-lg">
                {currentLevel.q}
              </h2>

              <div className="space-y-3.5">
                {currentLevel.o.map((option, idx) => {
                  const isSelected = selectedOption === idx;
                  const isCorrect = idx === currentLevel.c;

                  let btnStyle =
                    "bg-white text-black border-black hover:bg-[#f3eed5] hover:-translate-y-1 hover:shadow-[6px_6px_0px_#000]";

                  if (selectedOption !== null) {
                    if (isCorrect) {
                      btnStyle =
                        "bg-[#4ade80] text-black border-black shadow-[4px_4px_0px_#000] animate-pop-3d";
                    } else if (isSelected) {
                      btnStyle =
                        "bg-[#f87171] text-black border-black shadow-[4px_4px_0px_#000] animate-shake-3d";
                    } else {
                      btnStyle =
                        "bg-white text-slate-400 border-slate-200 opacity-40 pointer-events-none";
                    }
                  }

                  return (
                    <button
                      key={idx}
                      type="button"
                      disabled={selectedOption !== null}
                      onClick={() => handleAnswer(idx)}
                      className={`flex w-full items-center justify-between rounded-xl border-4 p-4 text-left text-sm font-black shadow-[4px_4px_0px_#000] transition-all duration-150 ${btnStyle}`}
                    >
                      <span>{option}</span>
                      {selectedOption !== null && isCorrect && (
                        <span className="animate-bounce">✅</span>
                      )}
                      {selectedOption !== null && isSelected && !isCorrect && (
                        <span>❌</span>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="mt-6 flex justify-end border-t-4 border-dashed border-slate-950/10 pt-3">
              <button
                type="button"
                onClick={nextLevel}
                disabled={selectedOption === null}
                className={`rounded-xl border-4 border-black px-6 py-3 text-xs font-black transition-all ${
                  selectedOption !== null
                    ? "bg-[#a3e635] text-black shadow-[4px_4px_0px_#000]"
                    : "cursor-not-allowed bg-slate-300 text-slate-500"
                }`}
              >
                {currentIdx === biologyJungleLevels.length - 1
                  ? "ЖЫЙЫНТЫКТЫ КӨРҮҮ 🏆"
                  : "КИЙИНКИ АУЛ ➡️"}
              </button>
            </div>
          </div>
        </div>
      )}

      {showShareModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm">
          <div className="w-full max-w-sm rounded-2xl border-4 border-black bg-[#fffbeb] p-6 text-black shadow-[8px_8px_0px_#000]">
            <div className="mb-4 flex items-center justify-between border-b-4 border-black pb-3">
              <h3 className="text-sm font-black uppercase tracking-wider">
                🔁 Достор менен бөлүшүү
              </h3>
              <button
                type="button"
                onClick={() => setShowShareModal(false)}
                className="flex h-8 w-8 items-center justify-center rounded-lg border-2 border-black bg-[#e61e4f] font-black text-white"
              >
                ✕
              </button>
            </div>

            <p className="mb-4 text-center text-[10px] font-bold uppercase tracking-wider text-slate-600">
              Шилтемени кайда жөнөтөсүз?
            </p>

            <div className="mb-4 grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => shareToSocial("whatsapp")}
                className="flex flex-col items-center justify-center gap-2 rounded-xl border-4 border-black bg-[#25D366] p-3 text-[10px] font-black uppercase text-white shadow-[3px_3px_0px_#000] hover:-translate-y-0.5 active:translate-y-0.5"
              >
                <span className="text-2xl">🟢</span> WhatsApp
              </button>
              <button
                type="button"
                onClick={() => shareToSocial("telegram")}
                className="flex flex-col items-center justify-center gap-2 rounded-xl border-4 border-black bg-[#0088cc] p-3 text-[10px] font-black uppercase text-white shadow-[3px_3px_0px_#000] hover:-translate-y-0.5 active:translate-y-0.5"
              >
                <span className="text-2xl">🔵</span> Telegram
              </button>
              <button
                type="button"
                onClick={() => shareToSocial("facebook")}
                className="flex flex-col items-center justify-center gap-2 rounded-xl border-4 border-black bg-[#4267B2] p-3 text-[10px] font-black uppercase text-white shadow-[3px_3px_0px_#000] hover:-translate-y-0.5 active:translate-y-0.5"
              >
                <span className="text-2xl">📘</span> Facebook
              </button>
              <button
                type="button"
                onClick={() => shareToSocial("twitter")}
                className="flex flex-col items-center justify-center gap-2 rounded-xl border-4 border-black bg-[#1DA1F2] p-3 text-[10px] font-black uppercase text-white shadow-[3px_3px_0px_#000] hover:-translate-y-0.5 active:translate-y-0.5"
              >
                <span className="text-2xl">🐦</span> X (Twitter)
              </button>
            </div>

            <button
              type="button"
              onClick={() => void handleCopyLink()}
              className="flex w-full items-center justify-center gap-2 rounded-xl border-4 border-black bg-slate-200 py-3 text-[10px] font-black uppercase shadow-[3px_3px_0px_#000] transition-all hover:bg-slate-300"
            >
              <span className="text-base">📋</span> Шилтемени көчүрүп алуу
            </button>
          </div>
        </div>
      )}

      {showCommentModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm">
          <div className="w-full max-w-md rounded-2xl border-4 border-black bg-[#fffbeb] p-6 text-black shadow-[8px_8px_0px_#000]">
            <div className="mb-4 flex items-center justify-between border-b-4 border-black pb-3">
              <h3 className="text-sm font-black uppercase tracking-wider">
                💬 Коментарийлер
              </h3>
              <button
                type="button"
                onClick={() => setShowCommentModal(false)}
                className="flex h-8 w-8 items-center justify-center rounded-lg border-2 border-black bg-[#e61e4f] font-black text-white"
              >
                ✕
              </button>
            </div>

            <div className="mb-4 max-h-48 space-y-2 overflow-y-auto p-1">
              {levelComments.length === 0 ? (
                <p className="py-4 text-center text-xs font-bold italic text-slate-500">
                  Азырынча коментарий жок...
                </p>
              ) : (
                levelComments.map((comment, i) => (
                  <div
                    key={i}
                    className="rounded-lg border-2 border-black bg-white p-2.5 text-xs font-bold shadow-[2px_2px_0px_#000]"
                  >
                    {comment}
                  </div>
                ))
              )}
            </div>

            <form onSubmit={handleAddComment} className="flex gap-2">
              <input
                type="text"
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                placeholder="Пикир калтырыңыз..."
                className="flex-1 rounded-xl border-4 border-black bg-white px-3 py-2 text-xs font-bold text-black outline-none"
              />
              <button
                type="submit"
                className="rounded-xl border-4 border-black bg-yellow-400 px-4 py-2 text-xs font-black uppercase shadow-[2px_2px_0px_#000]"
              >
                Жөнөтүү
              </button>
            </form>
          </div>
        </div>
      )}

      <div className="z-10 mx-auto mt-auto flex w-full max-w-7xl flex-wrap items-center justify-between gap-4 rounded-xl border-4 border-black bg-[#071109] p-4 text-xs font-black shadow-[0_5px_0px_#000]">
        <div className="flex items-center gap-6 tracking-wider">
          <span className="text-[#4ade80]">ТУУРА: {correctAnswers}</span>
          <span className="text-[#f87171]">КАТА: {wrongAnswers}</span>
          <span className="text-yellow-400">БАЛЛ: {crystals}</span>
        </div>
        <div className="text-[10px] uppercase tracking-widest text-slate-500">
          FAIRYGAME PLATFORM © 2026 • ЕЛЕНА
        </div>
      </div>
    </div>
  );
};

export default BiologyDetail;
