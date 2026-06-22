import { useState, useEffect, useRef, type FC, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";

const FOLLOW_SPEED = 0.1;
const START_X = 400;
const START_Y = 300;

const SEED_COMMENTS = [
  "Жөргөмүштүн түктүү буттары абдан реалдуу тартылган 🕷️",
  "Биология сабагы үчүн эң сонун симуляция!",
];

function loadJson<T>(key: string, fallback: T): T {
  try {
    const saved = localStorage.getItem(key);
    return saved ? (JSON.parse(saved) as T) : fallback;
  } catch {
    return fallback;
  }
}

const SpiderGame: FC = () => {
  const navigate = useNavigate();

  const [position, setPosition] = useState({ x: START_X, y: START_Y });
  const [angle, setAngle] = useState(0);
  const positionRef = useRef({ x: START_X, y: START_Y });
  const targetRef = useRef({ x: START_X, y: START_Y });

  const [crystals] = useState(0);
  const [likes, setLikes] = useState(() => loadJson("spider_likes", 74));
  const [isLiked, setIsLiked] = useState(() =>
    loadJson("spider_is_liked", false),
  );
  const [shares, setShares] = useState(() => loadJson("spider_shares", 32));
  const [comments, setComments] = useState<string[]>(() =>
    loadJson("spider_comments", SEED_COMMENTS),
  );
  const [newComment, setNewComment] = useState("");
  const [showCommentModal, setShowCommentModal] = useState(false);
  const [showShareModal, setShowShareModal] = useState(false);
  const [shareSuccess, setShareSuccess] = useState(false);

  useEffect(() => {
    localStorage.setItem("spider_likes", JSON.stringify(likes));
  }, [likes]);

  useEffect(() => {
    localStorage.setItem("spider_is_liked", JSON.stringify(isLiked));
  }, [isLiked]);

  useEffect(() => {
    localStorage.setItem("spider_shares", JSON.stringify(shares));
  }, [shares]);

  useEffect(() => {
    localStorage.setItem("spider_comments", JSON.stringify(comments));
  }, [comments]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      targetRef.current = { x: e.clientX, y: e.clientY };
    };

    let rafId = 0;
    const tick = () => {
      const pos = positionRef.current;
      const target = targetRef.current;

      const newX = pos.x + (target.x - pos.x) * FOLLOW_SPEED;
      const newY = pos.y + (target.y - pos.y) * FOLLOW_SPEED;

      const dx = target.x - pos.x;
      const dy = target.y - pos.y;

      if (Math.abs(dx) > 0.5 || Math.abs(dy) > 0.5) {
        const rad = Math.atan2(dy, dx);
        setAngle(rad * (180 / Math.PI) + 90);
      }

      const next = { x: newX, y: newY };
      positionRef.current = next;
      setPosition(next);
      rafId = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", handleMouseMove);
    rafId = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  const showShareToast = () => {
    setShareSuccess(true);
    setTimeout(() => setShareSuccess(false), 3000);
  };

  const handleLike = () => {
    setIsLiked((prev) => !prev);
    setLikes((prev) => (isLiked ? prev - 1 : prev + 1));
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setShares((prev) => prev + 1);
      setShowShareModal(false);
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
      `Жөргөмүш симуляциясын көрүп жатам: ${window.location.href}`,
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
    setShares((prev) => prev + 1);
    setShowShareModal(false);
    showShareToast();
  };

  const handleAddComment = (e: FormEvent) => {
    e.preventDefault();
    const text = newComment.trim();
    if (!text) return;
    setComments((prev) => [...prev, text]);
    setNewComment("");
  };

  return (
    <div className="relative flex min-h-screen select-none flex-col justify-between overflow-hidden bg-[#0d2111] p-4 font-sans text-white">
      {shareSuccess && (
        <div className="fixed left-1/2 top-6 z-50 -translate-x-1/2 animate-bounce rounded-xl border-4 border-black bg-[#a3e635] px-6 py-3 text-xs font-black uppercase tracking-wider text-black shadow-[4px_4px_0px_#000]">
          🚀 Бөлүшүлдү!
        </div>
      )}

      <div
        className="pointer-events-none absolute z-20 flex flex-col items-center justify-center transition-transform duration-75 ease-linear"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: `translate(-50%, -50%) rotate(${angle}deg)`,
        }}
      >
        <div className="relative h-24 w-24">
          <div className="absolute left-1/2 top-1/2 flex h-16 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-[50px] border-2 border-black bg-[#2D2424] shadow-[0_0_15px_rgba(0,0,0,0.8)]">
            <div className="flex h-12 w-8 flex-col justify-around rounded-full border-b border-t border-stone-600">
              <div className="h-1 w-full rounded bg-stone-700/50" />
              <div className="h-1 w-full rounded bg-stone-700/50" />
            </div>
          </div>

          <div className="absolute left-1/2 top-2 h-8 w-8 -translate-x-1/2 rounded-full border border-black bg-[#1E1919] shadow-inner" />

          <div className="absolute -left-12 top-4 h-3 w-16 origin-right rotate-[25deg] rounded-l-full border border-black bg-gradient-to-r from-[#211B1B] to-[#4A3B32]" />
          <div className="absolute -left-14 top-8 h-3 w-20 origin-right rotate-[10deg] rounded-l-full border border-black bg-gradient-to-r from-[#211B1B] to-[#4A3B32]" />
          <div className="absolute -left-14 top-12 h-3 w-20 origin-right -rotate-[10deg] rounded-l-full border border-black bg-gradient-to-r from-[#211B1B] to-[#4A3B32]" />
          <div className="absolute -left-12 top-16 h-3 w-16 origin-right -rotate-[25deg] rounded-l-full border border-black bg-gradient-to-r from-[#211B1B] to-[#4A3B32]" />

          <div className="absolute -right-12 top-4 h-3 w-16 origin-left -rotate-[25deg] rounded-r-full border border-black bg-gradient-to-l from-[#211B1B] to-[#4A3B32]" />
          <div className="absolute -right-14 top-8 h-3 w-20 origin-left -rotate-[10deg] rounded-r-full border border-black bg-gradient-to-l from-[#211B1B] to-[#4A3B32]" />
          <div className="absolute -right-14 top-12 h-3 w-20 origin-left rotate-[10deg] rounded-r-full border border-black bg-gradient-to-l from-[#211B1B] to-[#4A3B32]" />
          <div className="absolute -right-12 top-16 h-3 w-16 origin-left rotate-[25deg] rounded-r-full border border-black bg-gradient-to-l from-[#211B1B] to-[#4A3B32]" />
        </div>

        <span className="mt-3 whitespace-nowrap rounded-lg border border-stone-600 bg-black/90 px-3 py-1.5 text-[10px] font-black tracking-wider text-stone-200 shadow-[2px_2px_0px_#000]">
          🕷️ Жөргөмүш (Тарантул) Симуляциясы
        </span>
      </div>

      <div className="z-30 mx-auto flex w-full max-w-7xl items-center justify-between rounded-xl border-4 border-black bg-[#071109] p-3.5 shadow-[0_5px_0px_#000]">
        <button
          type="button"
          onClick={() => navigate("/subjects/biologiya")}
          className="rounded-xl border-4 border-black bg-[#e61e4f] px-4 py-2 text-xs font-black text-white shadow-[3px_3px_0px_#000]"
        >
          🟥 ЧЫГУУ
        </button>
        <div className="text-center">
          <h1 className="text-sm font-black uppercase tracking-wider text-green-400 md:text-lg">
            ЖӨРГӨМҮШ СИМУЛЯЦИЯСЫ 🕷️
          </h1>
          <p className="mt-0.5 text-[10px] font-bold uppercase text-slate-400">
            ЭКРАН БОЮНЧА ЧЫЧКАНДЫ ЖЫЛЖЫТЫҢЫЗ
          </p>
        </div>
        <div className="rounded-xl border-4 border-black bg-yellow-400 px-5 py-2 text-xs font-black text-black shadow-[3px_3px_0px_#000]">
          КРИСТАЛЛ: {crystals}
        </div>
      </div>

      <div className="z-30 mx-auto my-auto grid w-full max-w-5xl grid-cols-1 items-center gap-8 p-4 md:grid-cols-2">
        <div className="rounded-2xl border-4 border-black bg-[#211E1E] p-6 shadow-[6px_6px_0px_#000]">
          <h2 className="mb-4 text-sm font-black uppercase tracking-wider text-stone-300">
            Жөргөмүштөр жөнүндө:
          </h2>
          <p className="mb-4 text-xs font-medium leading-relaxed text-slate-200">
            Жөргөмүштөр (Araneae) — муунак буттуулар классына кирген жырткыч
            жандыктар. Алар өзгөчө түктүү түзүлүшү жана сегиз буту менен
            айырмаланып, экосистемада маанилүү орунду ээлейт. Бул интерактивдүү
            симуляцияда алардын чычкандын багытын так ээрчүү жөндөмү көрсөтүлгөн.
          </p>

          <div className="mt-6 flex justify-center gap-4">
            <button
              type="button"
              onClick={handleLike}
              className={`flex items-center gap-2 rounded-xl border-4 border-black px-5 py-2.5 text-xs font-black uppercase tracking-wider shadow-[3px_3px_0px_#000] transition-all ${
                isLiked ? "bg-[#f43f5e] text-white" : "bg-white text-black"
              }`}
            >
              ❤️ {likes}
            </button>
            <button
              type="button"
              onClick={() => setShowCommentModal(true)}
              className="flex items-center gap-2 rounded-xl border-4 border-black bg-[#38bdf8] px-5 py-2.5 text-xs font-black uppercase tracking-wider text-black shadow-[3px_3px_0px_#000]"
            >
              💬 {comments.length}
            </button>
            <button
              type="button"
              onClick={() => setShowShareModal(true)}
              className="flex items-center gap-2 rounded-xl border-4 border-black bg-[#a3e635] px-5 py-2.5 text-xs font-black uppercase tracking-wider text-black shadow-[3px_3px_0px_#000]"
            >
              🔁 {shares}
            </button>
          </div>
        </div>

        <div className="rounded-2xl border-4 border-black bg-stone-100 p-6 text-center text-black shadow-[8px_8px_0px_#000]">
          <span className="mb-4 block animate-pulse text-6xl">🕷️</span>
          <h3 className="mb-2 text-base font-black uppercase">
            Интерактивдүү Симуляция
          </h3>
          <p className="mb-6 text-xs font-bold text-slate-700">
            Чычканды экрандын каалаган бурчуна жылдырыңыз, ошондо жөргөмүш
            артыңыздан түз келет.
          </p>
          <div className="rounded-xl border-2 border-black bg-stone-300 px-4 py-3 text-[10px] font-black uppercase tracking-widest text-stone-900">
            СИМУЛЯЦИЯ АКТИВДҮҮ
          </div>
        </div>
      </div>

      {showShareModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm">
          <div className="w-full max-w-sm rounded-2xl border-4 border-black bg-[#fffbeb] p-6 text-black shadow-[8px_8px_0px_#000]">
            <div className="mb-4 flex items-center justify-between border-b-4 border-black pb-3">
              <h3 className="text-sm font-black uppercase tracking-wider">
                🔁 Бөлүшүү
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
                className="flex flex-col items-center justify-center gap-2 rounded-xl border-4 border-black bg-[#25D366] p-3 text-[10px] font-black uppercase text-white shadow-[3px_3px_0px_#000]"
              >
                🟢 WhatsApp
              </button>
              <button
                type="button"
                onClick={() => shareToSocial("telegram")}
                className="flex flex-col items-center justify-center gap-2 rounded-xl border-4 border-black bg-[#0088cc] p-3 text-[10px] font-black uppercase text-white shadow-[3px_3px_0px_#000]"
              >
                🔵 Telegram
              </button>
              <button
                type="button"
                onClick={() => shareToSocial("facebook")}
                className="flex flex-col items-center justify-center gap-2 rounded-xl border-4 border-black bg-[#4267B2] p-3 text-[10px] font-black uppercase text-white shadow-[3px_3px_0px_#000]"
              >
                📘 Facebook
              </button>
              <button
                type="button"
                onClick={() => shareToSocial("twitter")}
                className="flex flex-col items-center justify-center gap-2 rounded-xl border-4 border-black bg-[#1DA1F2] p-3 text-[10px] font-black uppercase text-white shadow-[3px_3px_0px_#000]"
              >
                🐦 X (Twitter)
              </button>
            </div>

            <button
              type="button"
              onClick={() => void handleCopyLink()}
              className="flex w-full items-center justify-center gap-2 rounded-xl border-4 border-black bg-slate-200 py-3 text-[10px] font-black uppercase shadow-[3px_3px_0px_#000]"
            >
              📋 Шилтемени көчүрүп алуу
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
              {comments.map((comment, i) => (
                <div
                  key={i}
                  className="rounded-lg border-2 border-black bg-white p-2.5 text-xs font-bold shadow-[2px_2px_0px_#000]"
                >
                  {comment}
                </div>
              ))}
            </div>

            <form onSubmit={handleAddComment} className="flex gap-2">
              <input
                type="text"
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                placeholder="Пикир калтырыңыз..."
                className="flex-1 rounded-xl border-4 border-black bg-white px-3 py-2 text-xs font-bold outline-none"
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

      <div className="z-30 mx-auto mt-auto flex w-full max-w-7xl flex-wrap items-center justify-between gap-4 rounded-xl border-4 border-black bg-[#071109] p-4 text-xs font-black shadow-[0_5px_0px_#000]">
        <div className="flex items-center gap-6 tracking-wider">
          <span className="text-green-400">БАЛЛ: {crystals}</span>
        </div>
        <div className="text-[10px] uppercase tracking-widest text-slate-500">
          FAIRYGAME PLATFORM © 2026 • БИОЛОГИЯ БӨЛҮМҮ
        </div>
      </div>
    </div>
  );
};

export default SpiderGame;
