import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import confetti from "canvas-confetti";

import baby from "@/assets/baby.jpeg";
import childhood from "@/assets/childhood.jpeg";
import red from "@/assets/red.jpeg";

import garba1 from "@/assets/garba 1.jpeg";
import garba2 from "@/assets/garba 2.jpeg";

import casual from "@/assets/m1.jpeg";
import traditional from "@/assets/m2.jpeg";
import white from "@/assets/m3.jpeg";

import match from "@/assets/match.jpeg";
import m1 from "@/assets/m1.jpeg";
import m6 from "@/assets/m6.jpeg";
import m7 from "@/assets/m7.jpeg";
import m8 from "@/assets/m8.jpeg";
import m9 from "@/assets/m9.jpeg";
import m10 from "@/assets/m10.jpeg";
import m11 from "@/assets/m11.jpeg";
import m12 from "@/assets/m12.jpeg";
import m13 from "@/assets/m13.jpeg";
import m14 from "@/assets/m14.jpeg";
import m15 from "@/assets/m15.jpeg";
import m16 from "@/assets/m16.jpeg";
import m17 from "@/assets/m17.jpeg";
/* ---------------- helpers ---------------- */

function fireConfetti() {
  const end = Date.now() + 2500;
  const colors = ["#ff4f93", "#ffd166", "#ffb3d1", "#fff1f7", "#e9c46a"];
  (function frame() {
    confetti({ particleCount: 6, angle: 60, spread: 70, origin: { x: 0 }, colors });
    confetti({ particleCount: 6, angle: 120, spread: 70, origin: { x: 1 }, colors });
    if (Date.now() < end) requestAnimationFrame(frame);
  })();
}

function fireworks(duration = 4000) {
  const end = Date.now() + duration;
  const colors = ["#ff4f93", "#ffd166", "#ffffff", "#ffb3d1"];
  (function frame() {
    confetti({
      particleCount: 4,
      startVelocity: 30 + Math.random() * 20,
      spread: 360,
      ticks: 60,
      origin: { x: Math.random(), y: Math.random() * 0.5 },
      colors,
      shapes: ["circle", "square"],
      scalar: 1.1,
    });
    if (Date.now() < end) requestAnimationFrame(frame);
  })();
}

/* ---------------- floating hearts ---------------- */

function FloatingHearts({ count = 14 }: { count?: number }) {
  const items = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 6,
        duration: 6 + Math.random() * 6,
        size: 12 + Math.random() * 22,
        opacity: 0.4 + Math.random() * 0.5,
      })),
    [count],
  );
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {items.map((h) => (
        <span
          key={h.id}
          className="absolute text-[oklch(0.6_0.18_0)]"
          style={{
            left: `${h.left}%`,
            bottom: "-40px",
            fontSize: h.size,
            opacity: h.opacity,
            animation: `float-up ${h.duration}s linear ${h.delay}s infinite`,
          }}
        >
          ❤
        </span>
      ))}
    </div>
  );
}

function Sparkles({ count = 30 }: { count?: number }) {
  const items = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        delay: Math.random() * 4,
        size: 2 + Math.random() * 4,
      })),
    [count],
  );
  return (
    <div className="pointer-events-none absolute inset-0">
      {items.map((s) => (
        <span
          key={s.id}
          className="absolute rounded-full bg-[oklch(0.95_0.12_85)]"
          style={{
            left: `${s.x}%`,
            top: `${s.y}%`,
            width: s.size,
            height: s.size,
            boxShadow: "0 0 8px 2px oklch(0.9 0.15 80 / 0.8)",
            animation: `pulse 2.5s ease-in-out ${s.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
}

/* ---------------- gift box svg ---------------- */

function GiftBox({ opened, large = false }: { opened: boolean; large?: boolean }) {
  const size = large ? 220 : 140;
  return (
    <div className="relative" style={{ width: size, height: size }}>
      {/* Lid */}
      <motion.div
        animate={opened ? { y: -140, rotate: -20, opacity: 0 } : { y: [0, -8, 0] }}
        transition={opened ? { duration: 0.8 } : { duration: 2.2, repeat: Infinity }}
        className="absolute left-1/2 top-0 z-20 -translate-x-1/2"
        style={{ width: size * 1.05, height: size * 0.22 }}
      >
        <div
          className="h-full w-full rounded-xl border-2 border-white/40"
          style={{
            background:
              "linear-gradient(135deg, oklch(0.88 0.12 340), oklch(0.95 0.06 340))",
            boxShadow: "0 8px 24px oklch(0.6 0.1 340 / 0.25)",
          }}
        />
        {/* Cute bow on lid */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
          <div
            className="rounded-full border-2 border-white/40"
            style={{
              width: size * 0.18,
              height: size * 0.18,
              background: "linear-gradient(135deg, oklch(0.78 0.16 0), oklch(0.88 0.12 20))",
            }}
          />
          <div
            className="absolute -left-3 top-1/2 -translate-y-1/2 rounded-full border border-white/30"
            style={{
              width: size * 0.14,
              height: size * 0.1,
              background: "linear-gradient(135deg, oklch(0.8 0.15 0), oklch(0.9 0.1 20))",
            }}
          />
          <div
            className="absolute -right-3 top-1/2 -translate-y-1/2 rounded-full border border-white/30"
            style={{
              width: size * 0.14,
              height: size * 0.1,
              background: "linear-gradient(135deg, oklch(0.8 0.15 0), oklch(0.9 0.1 20))",
            }}
          />
        </div>
      </motion.div>

      {/* Box body */}
      <div
        className="absolute bottom-0 left-1/2 z-10 -translate-x-1/2 rounded-2xl border-2 border-white/40"
        style={{
          width: size * 0.9,
          height: size * 0.62,
          background:
            "linear-gradient(135deg, oklch(0.95 0.08 340) 0%, oklch(0.92 0.06 340) 50%, oklch(0.88 0.1 300) 100%)",
          boxShadow: "0 16px 40px oklch(0.6 0.1 340 / 0.2), inset 0 -4px 12px oklch(0.7 0.08 340 / 0.1)",
        }}
      >
        {/* Vertical ribbon */}
        <div
          className="absolute left-1/2 top-0 h-full -translate-x-1/2 rounded-sm"
          style={{
            width: size * 0.1,
            background:
              "linear-gradient(180deg, oklch(0.85 0.14 0), oklch(0.75 0.16 10), oklch(0.85 0.14 0))",
          }}
        />
        {/* Horizontal ribbon */}
        <div
          className="absolute left-0 top-1/2 w-full -translate-y-1/2 rounded-sm"
          style={{
            height: size * 0.1,
            background:
              "linear-gradient(90deg, oklch(0.85 0.14 0), oklch(0.75 0.16 10), oklch(0.85 0.14 0))",
          }}
        />
        {/* Cute heart decorations */}
        <div className="absolute bottom-3 left-3 text-lg opacity-60" style={{ fontSize: size * 0.08 }}>💝</div>
        <div className="absolute bottom-3 right-3 text-lg opacity-60" style={{ fontSize: size * 0.08 }}>✨</div>
      </div>

      {/* Open glow burst */}
      {opened && (
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1.8, opacity: [0, 1, 0] }}
          transition={{ duration: 1.2 }}
          className="absolute inset-0 z-30 rounded-full"
          style={{
            background:
              "radial-gradient(circle, oklch(0.95 0.12 80 / 0.7), transparent 60%)",
          }}
        />
      )}
    </div>
  );
}

/* ---------------- entry page ---------------- */

function EntryPage({ onEnter }: { onEnter: () => void }) {
  const [opening, setOpening] = useState(false);

  const handleClick = () => {
    if (opening) return;
    setOpening(true);
    fireConfetti();
    fireworks(2500);
    setTimeout(onEnter, 1900);
  };

  return (
    <motion.section
      key="entry"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.9 }}
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden px-6"
      style={{
        background:
          "radial-gradient(ellipse at center, oklch(0.97 0.04 340) 0%, oklch(0.94 0.05 330) 40%, oklch(0.88 0.08 300) 100%)",
      }}
    >
      <Sparkles count={50} />
      <FloatingHearts count={20} />

      <div className="relative z-10 mx-auto max-w-2xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="font-script text-2xl text-[oklch(0.55_0.14_0)] md:text-3xl"
        >
          ✨ A Special Surprise Awaits ✨
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.9 }}
          className="font-display mt-4 text-5xl font-semibold md:text-7xl"
        >
          <span className="text-gradient">Happy Birthday Moksha</span>
          <span className="text-[oklch(0.65_0.18_15)]"> ❤️</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="mt-6 space-y-2 text-base text-[oklch(0.45_0.05_340)] md:text-lg"
        >
          <p className="font-script text-xl text-[oklch(0.55_0.12_0)]">Dear Lady Don,</p>
          <p>A beautiful birthday surprise has been created especially for you.</p>
          <p>Click below to begin your magical journey.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2, duration: 0.9, type: "spring" }}
          className="mt-10 flex justify-center"
        >
          <GiftBox opened={opening} large />
        </motion.div>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.7 }}
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.97 }}
          onClick={handleClick}
          className="animate-pulse-glow mt-10 rounded-full px-10 py-5 text-base font-semibold text-white md:text-lg"
          style={{
            background:
              "linear-gradient(135deg, oklch(0.72 0.2 0), oklch(0.82 0.16 80))",
          }}
        >
          🎁 Open Your Birthday Surprise
        </motion.button>
      </div>
    </motion.section>
  );
}

/* ---------------- typewriter ---------------- */

function Typewriter({ text, className }: { text: string; className?: string }) {
  const [shown, setShown] = useState("");
  useEffect(() => {
    let i = 0;
    const id = setInterval(() => {
      i++;
      setShown(text.slice(0, i));
      if (i >= text.length) clearInterval(id);
    }, 70);
    return () => clearInterval(id);
  }, [text]);
  return (
    <span className={className}>
      {shown}
      <span className="inline-block w-[2px] animate-pulse bg-current align-middle" style={{ height: "0.9em" }} />
    </span>
  );
}

/* ---------------- countdown ---------------- */

function useCountdown(target: Date) {
  const [now, setNow] = useState(() => Date.now());
  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);
  const diff = Math.max(0, target.getTime() - now);
  const d = Math.floor(diff / 86400000);
  const h = Math.floor((diff % 86400000) / 3600000);
  const m = Math.floor((diff % 3600000) / 60000);
  const s = Math.floor((diff % 60000) / 1000);
  return { d, h, m, s };
}

function Countdown() {
  const target = useMemo(() => {
    const now = new Date();
    const t = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
    t.setHours(0, 0, 0, 0);
    return t;
  }, []);
  const { d, h, m, s } = useCountdown(target);
  const cells = [
    { label: "Days", value: d },
    { label: "Hours", value: h },
    { label: "Minutes", value: m },
    { label: "Seconds", value: s },
  ];
  return (
    <div className="relative mx-auto grid max-w-3xl grid-cols-2 gap-4 md:grid-cols-4">
      {cells.map((c) => (
        <div key={c.label} className="glass rounded-3xl p-6 text-center">
          <div className="font-display text-5xl font-semibold text-gradient md:text-6xl">
            {String(c.value).padStart(2, "0")}
          </div>
          <div className="mt-2 text-xs uppercase tracking-[0.3em] text-[oklch(0.45_0.06_340)]">
            {c.label}
          </div>
        </div>
      ))}
    </div>
  );
}

/* ---------------- main site ---------------- */

const qualities = [
  { emoji: "❤️", title: "Kind-hearted", text: "Always caring for others before herself." },
  { emoji: "❤️", title: "Lovable", text: "A person everyone enjoys being around." },
  { emoji: "❤️", title: "Happiness Spreader", text: "Her smile can brighten anyone's day." },
  { emoji: "❤️", title: "Emotionally Connected", text: "Forms genuine bonds and deeply values relationships." },
  { emoji: "❤️", title: "Strong Yet Soft", text: "A beautiful combination of strength and kindness." },
  { emoji: "❤️", title: "Truly Special", text: "One of a kind and impossible to forget." },
];

// const galleryImages = [
//   { src: red.url, alt: "Moksha in red", span: "md:row-span-2" },
//   { src: traditional.url, alt: "Lady Don traditional", span: "md:row-span-2" },
//   { src: garba2.url, alt: "Garba Queen", span: "" },
//   { src: white.url, alt: "White dress journey", span: "" },
//   { src: garba1.url, alt: "Garba night", span: "md:row-span-2" },
//   { src: casual.url, alt: "Casual portrait", span: "" },
//   { src: match.url, alt: "Match ready", span: "" },
//   { src: childhood.url, alt: "Little Moksha", span: "" },
//   { src: baby.url, alt: "Baby Moksha", span: "" },
// ];
const galleryImages = [
  { src: red, alt: "Moksha in red", span: "md:row-span-2" },
  { src: traditional, alt: "Traditional look", span: "md:row-span-2" },
  { src: garba2, alt: "Garba Queen", span: "" },
  { src: white, alt: "White dress journey", span: "" },
  { src: garba1, alt: "Garba night", span: "md:row-span-2" },
  { src: casual, alt: "Casual portrait", span: "" },
  { src: match, alt: "Match ready", span: "md:row-span-2" },
  { src: baby, alt: "Baby Moksha", span: "" },

  { src: m6, alt: "Memory 6", span: "md:row-span-2" },
  { src: m7, alt: "Memory 7", span: "md:row-span-2" },
  { src: m8, alt: "Memory 8", span: "md:row-span-2" },
  { src: m9, alt: "Memory 9", span: "" },
  { src: m10, alt: "Memory 10", span: "md:row-span-2" },
  { src: m11, alt: "Memory 11", span: "md:row-span-2" },
  { src: m12, alt: "Memory 12", span: "" },
  { src: m13, alt: "Memory 13", span: "md:row-span-2" },
  { src: m14, alt: "Memory 14", span: "md:row-span-2" },
  { src: m15, alt: "Memory 15", span: "md:row-span-2" },
  { src: m16, alt: "Memory 16", span: "md:row-span-2" },
  { src: m17, alt: "Memory 17", span: "md:row-span-2" },
];
function Section({
  id,
  children,
  className = "",
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={`relative px-6 py-24 md:py-32 ${className}`}
    >
      {children}
    </section>
  );
}

function MainSite() {
  const [lightbox, setLightbox] = useState<string | null>(null);
  const [giftOpened, setGiftOpened] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // try playing soft music; ignore errors (autoplay policies)
    audioRef.current?.play().catch(() => {});
  }, []);

  const celebrate = () => {
    fireworks(5000);
    fireConfetti();
    audioRef.current?.play().catch(() => {});
  };

  return (
    <div className="relative w-full overflow-hidden">
      <audio
        ref={audioRef}
        loop
        src="https://cdn.pixabay.com/download/audio/2022/03/15/audio_d0d3b6e5db.mp3?filename=happy-birthday-to-you-piano-25149.mp3"
      />

      {/* HERO */}
      <Section className="min-h-screen flex items-center">
        <FloatingHearts count={18} />
        <Sparkles count={28} />
        <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-12 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
          >
            <p className="font-script text-2xl text-[oklch(0.55_0.14_55)]">Happy Birthday,</p>
            <h1 className="font-display mt-2 text-5xl font-semibold leading-tight md:text-7xl">
              <span className="text-gradient">Moksha</span>
              <span className="text-[oklch(0.55_0.18_15)]"> ❤️</span>
            </h1>
            <p className="font-display mt-6 text-2xl italic text-[oklch(0.25_0.05_340)] md:text-3xl">
              <Typewriter text="Happy Birthday Garba Queen ❤️" />
            </p>
            <p className="mt-8 max-w-lg text-base text-[oklch(0.35_0.05_340)] md:text-lg">
              To our beautiful <span className="text-gradient font-semibold">Lady Don</span> —
              the girl who spreads happiness wherever she goes.
            </p>
            <p className="mt-4 max-w-lg text-sm text-[oklch(0.45_0.05_340)] md:text-base">
              Moksha, your kindness, love, and beautiful heart make every moment brighter.
              Today is a celebration of the amazing person you are.
            </p>

            {/* Floating cake + balloons */}
            <div className="mt-10 flex items-center gap-4 text-4xl">
              <motion.span animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 2.6 }}>🎂</motion.span>
              <motion.span animate={{ y: [0, -14, 0] }} transition={{ repeat: Infinity, duration: 3, delay: 0.3 }}>🎈</motion.span>
              <motion.span animate={{ y: [0, -8, 0] }} transition={{ repeat: Infinity, duration: 2.2, delay: 0.6 }}>🎈</motion.span>
              <motion.span animate={{ y: [0, -12, 0] }} transition={{ repeat: Infinity, duration: 2.8, delay: 0.9 }}>✨</motion.span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1 }}
            className="relative mx-auto w-full max-w-md"
          >
            <div
              className="absolute -inset-6 rounded-[3rem] opacity-70 blur-2xl"
              style={{ background: "var(--gradient-magic)" }}
            />
            <motion.div
              animate={{ scale: [1, 1.03, 1] }}
              transition={{ duration: 7, repeat: Infinity }}
              className="glass relative overflow-hidden rounded-[2.5rem] p-2 shadow-2xl"
            >
              <img
                src={red}
                alt="Lady Don in red"
                className="aspect-[3/4] w-full rounded-[2rem] object-cover"
              />
            </motion.div>
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 rounded-full px-6 py-2 text-xs font-medium uppercase tracking-[0.3em] glass">
              Garba Queen
            </div>
          </motion.div>
        </div>
      </Section>

      {/* COUNTDOWN */}
      <Section>
        <FloatingHearts count={10} />
        <div className="relative z-10 mx-auto max-w-5xl text-center">
          <h2 className="font-display text-4xl font-semibold md:text-5xl">
            <span className="text-gradient">The Wait For Your Special Day</span>
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-[oklch(0.4_0.05_340)]">
            Every second brings us closer to celebrating you.
          </p>
          <div className="mt-12">
            <Countdown />
          </div>
        </div>
      </Section>

      {/* TIMELINE */}
      <Section>
        <div className="relative z-10 mx-auto max-w-6xl">
          <h2 className="font-display text-center text-4xl font-semibold md:text-5xl">
            <span className="text-gradient">From Little Moksha To The Beautiful Soul You Are Today</span>
          </h2>

          <div className="mt-16 grid gap-10 md:grid-cols-3">
            {[
              {
                emoji: "👶",
                title: "Childhood Memory",
                img: baby,
                text: "Once a little girl with innocent dreams and a beautiful smile, destined to touch countless hearts.",
              },
              {
                emoji: "🌸",
                title: "Growing Years",
                img: childhood,
                text: "Each year a new chapter — discovering passions, building friendships, and blooming into yourself.",
              },
              {
                emoji: "👑",
                title: "Today's Moksha",
                img: traditional,
                text: "A graceful, caring, beautiful Garba Queen who makes everyone feel loved.",
              },
            ].map((c, i) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: i * 0.15, duration: 0.7 }}
                className="glass overflow-hidden rounded-3xl"
              >
                <div className="overflow-hidden">
                  <motion.img
                    src={c.img}
                    alt={c.title}
                    whileHover={{ scale: 1.06 }}
                    transition={{ duration: 0.8 }}
                    className="aspect-[4/5] w-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="text-3xl">{c.emoji}</div>
                  <h3 className="font-display mt-2 text-2xl font-semibold text-[oklch(0.2_0.05_340)]">
                    {c.title}
                  </h3>
                  <p className="mt-3 text-sm text-[oklch(0.4_0.05_340)]">{c.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* WHO IS MOKSHA */}
      <Section>
        <div className="relative z-10 mx-auto max-w-6xl">
          <h2 className="font-display text-center text-4xl font-semibold md:text-5xl">
            <span className="text-gradient">Who Is Moksha?</span>
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-sm text-[oklch(0.4_0.05_340)]">
            A few of the countless reasons we adore Lady Don.
          </p>
          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {qualities.map((q, i) => (
              <motion.div
                key={q.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.6 }}
                whileHover={{ y: -6 }}
                className="glass relative overflow-hidden rounded-2xl p-7"
              >
                <div className="text-3xl">{q.emoji}</div>
                <h3 className="font-display mt-3 text-2xl font-semibold text-[oklch(0.2_0.05_340)]">
                  {q.title}
                </h3>
                <p className="mt-2 text-sm text-[oklch(0.4_0.05_340)]">{q.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* GALLERY */}
      <Section>
        <div className="relative z-10 mx-auto max-w-7xl">
          <h2 className="font-display text-center text-4xl font-semibold md:text-5xl">
            <span className="text-gradient">Beautiful Moments of Lady Don</span>
          </h2>
          <div className="mt-14 grid auto-rows-[180px] grid-cols-2 gap-4 md:grid-cols-4 md:auto-rows-[220px]">
            {galleryImages.map((g, i) => (
              <motion.button
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                onClick={() => setLightbox(g.src)}
                className={`group relative overflow-hidden rounded-2xl glass ${g.span}`}
              >
                <motion.img
                  src={g.src}
                  alt={g.alt}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.7 }}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="absolute bottom-3 left-3 text-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  ❤️
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </Section>

      {/* VIDEO MESSAGE
      <Section>
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <h2 className="font-display text-4xl font-semibold md:text-5xl">
            <span className="text-gradient">A Special Birthday Message</span>
          </h2>
          <div className="glass mt-10 aspect-video w-full overflow-hidden rounded-3xl">
            <div className="flex h-full w-full items-center justify-center text-center">
              <div>
                <div className="text-6xl">🎬</div>
                <p className="font-script mt-4 text-2xl text-[oklch(0.55_0.08_60)]">
                  Your video message will play here soon
                </p>
                <p className="mt-2 text-sm text-[oklch(0.45_0.05_340)]">
                  A heartfelt surprise being prepared just for you, Lady Don.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section> */}

      {/* LETTER */}
      <Section>
        <FloatingHearts count={10} />
        <div className="relative z-10 mx-auto max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass relative rounded-[2.5rem] p-10 md:p-14"
          >
            <h2 className="font-script text-3xl text-[oklch(0.55_0.12_60)]">Dear Lady Don,</h2>
            <div className="font-display mt-6 space-y-5 text-lg leading-relaxed text-[oklch(0.2_0.05_340)] md:text-xl">
              <p>
                You are one of the most beautiful souls anyone could ever meet. Your kindness,
                caring nature, and emotional connection with people make you incredibly special.
              </p>
              <p>
                Thank you for bringing happiness to everyone around you. Thank you for being yourself.
              </p>
              <p>
                May your life always be filled with love, laughter, success, and endless beautiful memories.
              </p>
              <p className="font-script text-2xl text-[oklch(0.55_0.14_15)]">
                Happy Birthday, Lady Don ❤️
              </p>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* CELEBRATE */}
      <Section>
        <div className="relative z-10 mx-auto max-w-3xl text-center">
          <motion.button
            onClick={celebrate}
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.96 }}
            className="animate-pulse-glow rounded-full px-12 py-6 text-lg font-semibold text-white"
            style={{ background: "linear-gradient(135deg, oklch(0.72 0.2 0), oklch(0.82 0.16 80))" }}
          >
            Celebrate Moksha 🎂
          </motion.button>
          <h3 className="font-display mt-10 text-4xl font-semibold md:text-5xl">
            <span className="text-gradient">Happy Birthday Moksha ❤️</span>
          </h3>
          <p className="font-script mt-3 text-2xl text-[oklch(0.55_0.1_60)]">
            You deserve all the happiness in the world.
          </p>
        </div>
      </Section>

      {/* GIFT REVEAL */}
      <Section>
        <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center text-center">
          <h2 className="font-display text-4xl font-semibold md:text-5xl">
            <span className="text-gradient">A Little Gift For You</span>
          </h2>
          <button
            onClick={() => {
              if (giftOpened) return;
              setGiftOpened(true);
              fireConfetti();
            }}
            className="mt-12 cursor-pointer"
            aria-label="Open gift"
          >
            <GiftBox opened={giftOpened} large />
          </button>
          <AnimatePresence>
            {giftOpened && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.9, delay: 0.6 }}
                className="glass mt-10 max-w-2xl rounded-3xl p-8 md:p-10"
              >
                <p className="font-display text-xl leading-relaxed text-[oklch(0.2_0.05_340)] md:text-2xl">
                  For the most kind, lovable, precious, and beautiful Garba Queen —{" "}
                  <span className="text-gradient font-semibold">Lady Don ❤️</span>
                </p>
                <p className="mt-4 text-base text-[oklch(0.4_0.05_340)] md:text-lg">
                  May every dream you wish for come true and every day bring you a new reason to smile.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </Section>

      <footer className="px-6 pb-12 text-center text-xs text-[oklch(0.5_0.05_340)]">
        Crafted with ❤️ for Moksha — Lady Don, our Garba Queen
      </footer>

      {/* LIGHTBOX */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-6 backdrop-blur-md"
          >
            <FloatingHearts count={10} />
            <motion.img
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={lightbox}
              alt="Moksha"
              className="relative max-h-[90vh] max-w-[92vw] rounded-2xl object-contain shadow-2xl"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ---------------- root component ---------------- */

export default function BirthdayExperience() {
  const [entered, setEntered] = useState(false);
  return (
    <main className="relative min-h-screen w-full">
      <AnimatePresence mode="wait">
        {!entered ? (
          <EntryPage key="entry" onEnter={() => setEntered(true)} />
        ) : (
          <motion.div
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
          >
            <MainSite />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}