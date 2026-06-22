import { useState, useEffect, useRef, type FC, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { kyrgyzLanguageGameLevels } from "../data/kyrgyzLanguageGameLevels";

interface LanguageComment {
  id: number;
  user: string;
  text: string;
}

const SEED_COMMENTS: Record<number, LanguageComment[]> = {
  1: [
    { id: 1, user: "Элдияр", text: "Эне тилибизди мындай форматта үйрөнүү абдан сонун экен! 🇰🇬" },
    { id: 2, user: "Айбийке", text: "Созулма үндүү туура табылды! ✨" },
  ],
  2: [
    { id: 1, user: "Элдияр", text: "Эне тилибизди мындай форматта үйрөнүү абдан сонун экен! 🇰🇬" },
    { id: 2, user: "Айбийке", text: "Суроолору абдан так жана түшүнүктүү жазылыптыр ✨" },
  ],
};

const DEFAULT_LIKES: Record<number, number> = { 1: 156, 2: 132 };
const DEFAULT_SHARES: Record<number, number> = { 1: 24, 2: 19 };

function loadJson<T>(key: string, fallback: T): T {
  try {
    const saved = localStorage.getItem(key);
    return saved ? (JSON.parse(saved) as T) : fallback;
  } catch {
    return fallback;
  }
}

const defaultLikes = (id: number) => DEFAULT_LIKES[id] ?? 32 + ((id * 3) % 50);
const defaultShares = (id: number) => DEFAULT_SHARES[id] ?? 7 + (id % 15);

const KyrgyzLanguageGame: FC = () => {
  const navigate = useNavigate();
  const [currentStage, setCurrentStage] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isFinished, setIsFinished] = useState(false);
  const [score, setScore] = useState({
    correct: 0,
    wrong: 0,
    points: 0,
    crystals: 0,
  });
  const [likes, setLikes] = useState<Record<number, number>>(() =>
    loadJson("kyrgyz_lang_likes", DEFAULT_LIKES),
  );
  const [isLiked, setIsLiked] = useState<Record<number, boolean>>(() =>
    loadJson("kyrgyz_lang_is_liked", {}),
  );
  const [shares, setShares] = useState<Record<number, number>>(() =>
    loadJson("kyrgyz_lang_shares", DEFAULT_SHARES),
  );
  const [comments, setComments] = useState<Record<number, LanguageComment[]>>(() =>
    loadJson("kyrgyz_lang_comments", SEED_COMMENTS),
  );
  const [newComment, setNewComment] = useState("");
  const [isCommentOpen, setIsCommentOpen] = useState(false);
  const [isShareOpen, setIsShareOpen] = useState(false);
  const [shareSuccess, setShareSuccess] = useState(false);

  const mousePos = useRef({ x: 0, y: 0 });
  const trailPos = useRef({ x: 100, y: 100 });
  const trailRef = useRef<HTMLDivElement>(null);

  const currentQ = kyrgyzLanguageGameLevels[currentStage] ?? kyrgyzLanguageGameLevels[0];
  const levelId = currentQ.id;
  const currentLikes = likes[levelId] ?? defaultLikes(levelId);
  const currentShares = shares[levelId] ?? defaultShares(levelId);
  const levelComments = comments[levelId] ?? SEED_COMMENTS[levelId] ?? [];

  useEffect(() => {
    const startX = window.innerWidth / 2;
    const startY = window.innerHeight / 2;
    mousePos.current = { x: startX, y: startY };
    trailPos.current = { x: startX, y: startY };

    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener("mousemove", handleMouseMove);

    let animationFrameId = 0;
    const updateTrail = () => {
      trailPos.current.x += (mousePos.current.x - trailPos.current.x) * 0.1;
      trailPos.current.y += (mousePos.current.y - trailPos.current.y) * 0.1;
      if (trailRef.current) {
        trailRef.current.style.transform = `translate3d(${trailPos.current.x - 12}px, ${trailPos.current.y - 12}px, 0)`;
      }
      animationFrameId = requestAnimationFrame(updateTrail);
    };
    animationFrameId = requestAnimationFrame(updateTrail);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  useEffect(() => {
    localStorage.setItem("kyrgyz_lang_likes", JSON.stringify(likes));
  }, [likes]);

  useEffect(() => {
    localStorage.setItem("kyrgyz_lang_is_liked", JSON.stringify(isLiked));
  }, [isLiked]);

  useEffect(() => {
    localStorage.setItem("kyrgyz_lang_shares", JSON.stringify(shares));
  }, [shares]);

  useEffect(() => {
    localStorage.setItem("kyrgyz_lang_comments", JSON.stringify(comments));
  }, [comments]);

  useEffect(() => {
    setIsCommentOpen(false);
    setIsShareOpen(false);
    setNewComment("");
  }, [currentStage]);

  const showShareToast = () => {
    setShareSuccess(true);
    setTimeout(() => setShareSuccess(false), 3000);
  };

  const bumpShareCount = () => {
    setShares((prev) => ({
      ...prev,
      [levelId]: (prev[levelId] ?? defaultShares(levelId)) + 1,
    }));
  };

  const getRank = () => {
    if (score.points >= 600) return "👑 ТИЛ МУГАЛИМИ";
    if (score.points >= 300) return "✍️ ТИЛЧИ";
    if (score.points >= 100) return "📖 СӨЗ БИЛГИЧ";
    return "🅰️ ЖАҢЫ БАШТАГЫЧ";
  };

  const handleAnswerClick = (optionId: number, isCorrect: boolean) => {
    if (selectedOption !== null) return;
    setSelectedOption(optionId);

    if (isCorrect) {
      setScore((prev) => ({
        ...prev,
        correct: prev.correct + 1,
        points: prev.points + 10,
        crystals: prev.crystals + 1,
      }));
    } else {
      setScore((prev) => ({ ...prev, wrong: prev.wrong + 1 }));
    }
  };

  const handleNext = () => {
    if (selectedOption === null) return;
    if (currentStage < kyrgyzLanguageGameLevels.length - 1) {
      setCurrentStage((prev) => prev + 1);
      setSelectedOption(null);
    } else {
      setIsFinished(true);
    }
  };

  const restartGame = () => {
    setCurrentStage(0);
    setSelectedOption(null);
    setIsFinished(false);
    setScore({ correct: 0, wrong: 0, points: 0, crystals: 0 });
  };

  const handleLike = () => {
    const hasLiked = Boolean(isLiked[levelId]);
    setIsLiked((prev) => ({ ...prev, [levelId]: !hasLiked }));
    setLikes((prev) => ({
      ...prev,
      [levelId]: (prev[levelId] ?? defaultLikes(levelId)) + (hasLiked ? -1 : 1),
    }));
  };

  const handleAddComment = (e: FormEvent) => {
    e.preventDefault();
    const text = newComment.trim();
    if (!text) return;
    setComments((prev) => ({
      ...prev,
      [levelId]: [
        ...(prev[levelId] ?? SEED_COMMENTS[levelId] ?? []),
        { id: Date.now(), user: "Сиз", text },
      ],
    }));
    setNewComment("");
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      bumpShareCount();
      setIsShareOpen(false);
      showShareToast();
    } catch {
      alert("Шилтемени көчүрүүгө мүмкүн болгон жок");
    }
  };

  const shareToSocial = (
    platform: "whatsapp" | "telegram" | "facebook" | "twitter",
  ) => {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent(
      `Кыргыз тили оюнун ойноп жатам! ✍️ ${window.location.href}`,
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
    setIsShareOpen(false);
    showShareToast();
  };

  if (isFinished) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-[#041e17] p-4 font-sans text-white">
        <div className="w-full max-w-md rounded-2xl border-4 border-black bg-[#fffbeb] p-8 text-center text-black shadow-[8px_8px_0px_#000]">
          <span className="mb-2 block text-6xl">🏆</span>
          <h2 className="mb-6 text-xl font-black uppercase">ЖЫЙЫНТЫК</h2>
          <div className="mb-6 rounded-xl border-4 border-black bg-black p-4 text-white">
            <p className="mb-2 text-sm font-black text-[#34d399]">{getRank()}</p>
            <div className="mt-3 grid grid-cols-2 gap-3 text-center text-xs">
              <div>
                <p className="font-bold text-slate-400">БАЛЛ</p>
                <p className="text-base font-black text-yellow-400">{score.points}</p>
              </div>
              <div>
                <p className="font-bold text-slate-400">КРИСТАЛЛ</p>
                <p className="text-base font-black text-emerald-400">{score.crystals}</p>
              </div>
              <div>
                <p className="font-bold text-slate-400">ТУУРА</p>
                <p className="text-base font-black text-green-400">{score.correct}</p>
              </div>
              <div>
                <p className="font-bold text-slate-400">КАТА</p>
                <p className="text-base font-black text-red-400">{score.wrong}</p>
              </div>
            </div>
          </div>
          <div className="space-y-3">
            <button
              type="button"
              onClick={restartGame}
              className="w-full rounded-xl border-4 border-black bg-[#10b981] py-3 font-black text-black shadow-[3px_3px_0px_#000]"
            >
              🔄 КАЙРА БАШТОО
            </button>
            <button
              type="button"
              onClick={() => navigate("/subjects/kyrgyz-tili")}
              className="w-full rounded-xl border-4 border-black bg-slate-200 py-3 font-black text-black shadow-[2px_2px_0px_#000]"
            >
              🚪 ЧЫГУУ
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative flex min-h-screen flex-col justify-between overflow-hidden bg-[#041e17] p-4 font-sans text-white">
      <div
        ref={trailRef}
        className="pointer-events-none fixed left-0 top-0 z-40 flex h-6 w-6 items-center justify-center text-sm"
      >
        ✍️
      </div>

      {shareSuccess && (
        <div className="fixed left-1/2 top-6 z-50 -translate-x-1/2 animate-bounce rounded-xl border-4 border-black bg-[#34d399] px-6 py-3 text-xs font-black uppercase tracking-wider text-black shadow-[4px_4px_0px_#000]">
          🚀 Шилтеме көчүрүлдү! Досторуңузга жөнөтүңүз!
        </div>
      )}

      <div className="z-10 mx-auto mt-2 flex w-full max-w-7xl items-center justify-between">
        <button
          type="button"
          onClick={() => navigate("/subjects/kyrgyz-tili")}
          className="rounded-xl border-2 border-black bg-[#e11d48] px-6 py-2 font-bold text-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-y-0.5"
        >
          🟥 ЧЫГУУ
        </button>
        <div className="text-center">
          <h1 className="text-xl font-black tracking-wider text-[#34d399] md:text-2xl">
            КЫРГЫЗ ТИЛИ САЯКАТЫ ✍️
          </h1>
          <p className="mt-1 text-xs font-bold uppercase tracking-widest text-emerald-300">
            Деңгээл: {currentStage + 1} / {kyrgyzLanguageGameLevels.length}
          </p>
        </div>
        <div className="rounded-xl border-2 border-black bg-[#10b981] px-4 py-2 font-black text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          КРИСТАЛЛ: {score.crystals}
        </div>
      </div>

      <div className="z-10 mx-auto my-auto flex w-full max-w-7xl flex-col items-center justify-center gap-8 px-4 lg:flex-row">
        <div className="flex w-full max-w-lg flex-col items-center lg:w-1/2">
          <div className="relative mb-8 w-full rounded-2xl border-4 border-black bg-white p-6 text-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
            <span className="mb-2 block text-xs font-black tracking-wider text-emerald-800">
              {currentQ.character}
            </span>
            <p className="text-sm font-bold leading-relaxed md:text-base">
              &ldquo;{currentQ.speech}&rdquo;
            </p>
            <div className="absolute -bottom-4 left-1/2 h-0 w-0 -translate-x-1/2 border-x-[16px] border-t-[16px] border-x-transparent border-t-black" />
            <div className="absolute -bottom-3 left-1/2 h-0 w-0 -translate-x-1/2 border-x-[14px] border-t-[14px] border-x-transparent border-t-white" />
          </div>

          <div className="flex h-56 w-56 animate-pulse items-center justify-center rounded-full border-4 border-black bg-[#072e24] text-7xl shadow-[0px_0px_40px_rgba(16,185,129,0.35)]">
            {currentQ.icon}
          </div>

          <div className="mt-6 flex justify-center gap-3">
            <button
              type="button"
              onClick={handleLike}
              className={`flex items-center gap-1 rounded-xl border-2 border-black px-4 py-1.5 text-sm font-bold shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all active:translate-y-0.5 ${
                isLiked[levelId]
                  ? "bg-[#ef4444] text-white"
                  : "bg-white text-black hover:bg-gray-100"
              }`}
            >
              ❤️ {currentLikes}
            </button>
            <button
              type="button"
              onClick={() => setIsCommentOpen(true)}
              className="flex items-center gap-1 rounded-xl border-2 border-black bg-[#38bdf8] px-4 py-1.5 text-sm font-bold text-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all hover:bg-[#0ea5e9] active:translate-y-0.5"
            >
              💬 {levelComments.length}
            </button>
            <button
              type="button"
              onClick={() => setIsShareOpen(true)}
              className="flex items-center gap-1 rounded-xl border-2 border-black bg-[#f59e0b] px-4 py-1.5 text-sm font-bold text-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all hover:bg-[#d97706] active:translate-y-0.5"
            >
              🔄 Репост {currentShares > 0 ? `(${currentShares})` : ""}
            </button>
          </div>
        </div>

        <div className="flex min-h-[450px] w-full max-w-xl flex-col justify-between rounded-2xl border-4 border-black bg-[#fffbeb] p-6 text-black shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] lg:w-1/2">
          <div>
            <div className="mb-4 inline-block rounded-md border-2 border-black bg-emerald-200 px-3 py-1 text-xs font-black uppercase tracking-wider text-emerald-900">
              {currentQ.tag}
            </div>
            <h2 className="mb-6 text-xl font-black leading-tight md:text-2xl">
              {currentQ.question}
            </h2>

            <div className="space-y-3">
              {currentQ.options.map((opt) => {
                const isSelected = selectedOption === opt.id;
                let btnStyle = "bg-white hover:bg-gray-50 border-black";

                if (selectedOption !== null) {
                  if (opt.isCorrect) {
                    btnStyle = "bg-[#10b981] text-white border-black shadow-none";
                  } else if (isSelected && !opt.isCorrect) {
                    btnStyle = "bg-[#ef4444] text-white border-black shadow-none";
                  }
                }

                return (
                  <button
                    key={opt.id}
                    type="button"
                    disabled={selectedOption !== null}
                    onClick={() => handleAnswerClick(opt.id, opt.isCorrect)}
                    className={`w-full rounded-xl border-2 p-4 text-left text-sm font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all active:translate-y-0.5 md:text-base ${btnStyle}`}
                  >
                    {opt.text}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="mt-6 flex justify-end border-t-2 border-dashed border-gray-300 pt-4">
            <button
              type="button"
              onClick={handleNext}
              disabled={selectedOption === null}
              className={`flex items-center gap-2 rounded-xl border-2 border-black px-6 py-3 font-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all ${
                selectedOption !== null
                  ? "bg-[#10b981] text-black hover:translate-y-0.5"
                  : "cursor-not-allowed bg-gray-300 text-gray-500 shadow-none"
              }`}
            >
              {currentStage === kyrgyzLanguageGameLevels.length - 1
                ? "ЖЫЙЫНТЫКТЫ КӨРҮҮ 🏆"
                : "КИЙИНКИ СУРОО ➡️"}
            </button>
          </div>
        </div>
      </div>

      {isCommentOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm">
          <div className="w-full max-w-md rounded-2xl border-4 border-black bg-[#fffbeb] p-6 text-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <div className="mb-4 flex items-center justify-between border-b-2 border-black pb-2">
              <h3 className="text-lg font-black text-emerald-800">💬 КОММЕНТАРИЙЛЕР</h3>
              <button
                type="button"
                onClick={() => setIsCommentOpen(false)}
                className="font-black text-red-500"
              >
                ❌
              </button>
            </div>
            <div className="mb-4 max-h-48 space-y-2 overflow-y-auto">
              {levelComments.map((c) => (
                <div
                  key={c.id}
                  className="rounded-xl border-2 border-black bg-white p-2.5 text-sm"
                >
                  <span className="block font-bold text-emerald-800">{c.user}:</span>
                  <p className="font-medium text-gray-700">{c.text}</p>
                </div>
              ))}
            </div>
            <form onSubmit={handleAddComment} className="flex gap-2">
              <input
                type="text"
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                placeholder="Кыргыз тили боюнча пикир..."
                className="w-full rounded-xl border-2 border-black p-2 text-sm"
              />
              <button
                type="submit"
                className="rounded-xl border-2 border-black bg-[#10b981] px-4 text-xs font-black text-black"
              >
                ЖӨНӨТҮҮ
              </button>
            </form>
          </div>
        </div>
      )}

      {isShareOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm">
          <div className="w-full max-w-sm rounded-2xl border-4 border-black bg-[#fffbeb] p-6 text-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <div className="mb-4 flex items-center justify-between border-b-2 border-black pb-2">
              <h3 className="text-lg font-black text-emerald-800">🔁 БӨЛҮШҮҮ</h3>
              <button
                type="button"
                onClick={() => setIsShareOpen(false)}
                className="font-black text-red-500"
              >
                ❌
              </button>
            </div>
            <div className="mb-4 grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => shareToSocial("whatsapp")}
                className="rounded-xl border-2 border-black bg-[#25D366] p-3 text-xs font-black uppercase text-white shadow-[3px_3px_0px_#000]"
              >
                WhatsApp
              </button>
              <button
                type="button"
                onClick={() => shareToSocial("telegram")}
                className="rounded-xl border-2 border-black bg-[#0088cc] p-3 text-xs font-black uppercase text-white shadow-[3px_3px_0px_#000]"
              >
                Telegram
              </button>
              <button
                type="button"
                onClick={() => shareToSocial("facebook")}
                className="rounded-xl border-2 border-black bg-[#4267B2] p-3 text-xs font-black uppercase text-white shadow-[3px_3px_0px_#000]"
              >
                Facebook
              </button>
              <button
                type="button"
                onClick={() => shareToSocial("twitter")}
                className="rounded-xl border-2 border-black bg-[#1DA1F2] p-3 text-xs font-black uppercase text-white shadow-[3px_3px_0px_#000]"
              >
                X (Twitter)
              </button>
            </div>
            <button
              type="button"
              onClick={() => void copyToClipboard()}
              className="w-full rounded-xl border-2 border-black bg-slate-200 py-3 text-xs font-black uppercase shadow-[3px_3px_0px_#000]"
            >
              📋 Шилтемени көчүрүү
            </button>
          </div>
        </div>
      )}

      <div className="z-10 mx-auto mt-4 flex w-full max-w-7xl flex-col items-center justify-between gap-2 rounded-xl border-t-4 border-black bg-[#072e24] p-4 sm:flex-row">
        <div className="flex gap-6 text-xs font-black tracking-wider">
          <span className="text-[#10b981]">ТУУРА: {score.correct}</span>
          <span className="text-[#ef4444]">КАТА: {score.wrong}</span>
          <span className="text-[#34d399]">БАЛЛ: {score.points}</span>
        </div>
        <div className="text-xs font-black uppercase tracking-widest text-emerald-300">
          ТИЛ ДЕҢГЭЭЛИ: {getRank()}
        </div>
        <div className="text-[10px] font-bold tracking-widest text-emerald-800">
          FAIRYGAME PLATFORM © 2026 • ЕЛЕНА
        </div>
      </div>
    </div>
  );
};

export default KyrgyzLanguageGame;
