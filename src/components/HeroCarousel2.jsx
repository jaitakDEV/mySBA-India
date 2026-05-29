import { useState, useEffect, useRef, useCallback } from "react";

import slide1 from "../assets/slide1.webp";
import slide2 from "../assets/slide2.webp";
import slide3 from "../assets/slide3.webp";
import slide4 from "../assets/slide4.webp";
import slide5 from "../assets/slide5.webp";

const SLIDES = [
  {
    id: 1,
    title: "Yuva Udhmita Yatra",
    subtitle: "",
    description: "",
    src: slide1,
    accent: "#6EE7B7",
  },
  {
    id: 2,
    title: "MySBA",
    subtitle: "",
    description: "भारत के लिए एक संदेश",
    src: slide2,
    accent: "#FCD34D",
  },
  {
    id: 3,
    title: "Swadeshi Mela",
    subtitle: "",
    description: "गर्व से कहो - मेरा भारत, मेरा उत्पद",
    src: slide3,
    accent: "#F9A8D4",
  },
  {
    id: 4,
    title: "Yuva Udhmita Yatra - Jaipur",
    subtitle: "",
    description: "",
    src: slide4,
    accent: "#F9A8D4",
  },
  {
    id: 5,
    title: "MySBA News",
    subtitle: "",
    description: "सवालंबी भरत की आवाज",
    src: slide5,
    accent: "#F9A8D4",
  },
];

const AUTOPLAY_DELAY = 5000;

function useImageAspect(src) {
  const [aspect, setAspect] = useState(null); // width / height ratio

  useEffect(() => {
    if (!src) return;
    const img = new Image();
    img.onload = () => {
      if (img.naturalHeight > 0) {
        setAspect(img.naturalWidth / img.naturalHeight);
      }
    };
    img.src = src;
  }, [src]);

  return aspect;
}

/* ─────────────────────────────────────────────
   PROGRESS BAR
───────────────────────────────────────────── */
function ProgressBar({ active, paused, duration, accent }) {
  return (
    <div
      style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        width: "100%",
        height: "3px",
        background: "rgba(255,255,255,0.15)",
        zIndex: 20,
        overflow: "hidden",
      }}
    >
      <div
        key={active + "-" + paused}
        style={{
          height: "100%",
          background: accent,
          animation: paused
            ? "none"
            : `progressFill ${duration}ms linear forwards`,
          width: paused ? "0%" : undefined,
        }}
      />
    </div>
  );
}

/* ─────────────────────────────────────────────
   ARROW
───────────────────────────────────────────── */
function Arrow({ direction, onClick }) {
  return (
    <button
      onClick={onClick}
      aria-label={direction === "prev" ? "Previous slide" : "Next slide"}
      style={{
        position: "absolute",
        top: "50%",
        [direction === "prev" ? "left" : "right"]: "clamp(10px, 2.5vw, 24px)",
        transform: "translateY(-50%)",
        zIndex: 30,
        width: "clamp(38px, 5vw, 50px)",
        height: "clamp(38px, 5vw, 50px)",
        borderRadius: "50%",
        border: "1.5px solid rgba(255,255,255,0.3)",
        background: "rgba(0,0,0,0.35)",
        backdropFilter: "blur(8px)",
        color: "#fff",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transition: "background 0.2s, border-color 0.2s",
        padding: 0,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = "rgba(0,0,0,0.65)";
        e.currentTarget.style.borderColor = "rgba(255,255,255,0.6)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = "rgba(0,0,0,0.35)";
        e.currentTarget.style.borderColor = "rgba(255,255,255,0.3)";
      }}
    >
      <svg
        width="17"
        height="17"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {direction === "prev" ? (
          <polyline points="15 18 9 12 15 6" />
        ) : (
          <polyline points="9 18 15 12 9 6" />
        )}
      </svg>
    </button>
  );
}

/* ─────────────────────────────────────────────
   DOTS
───────────────────────────────────────────── */
function Dots({ total, active, onSelect, accent }) {
  return (
    <div
      role="tablist"
      aria-label="Slide navigation"
      style={{
        position: "absolute",
        bottom: "clamp(14px, 3vw, 24px)",
        left: "50%",
        transform: "translateX(-50%)",
        display: "flex",
        gap: "7px",
        zIndex: 30,
        padding: "5px 11px",
        borderRadius: "999px",
        background: "rgba(0,0,0,0.3)",
        backdropFilter: "blur(6px)",
      }}
    >
      {Array.from({ length: total }).map((_, i) => (
        <button
          key={i}
          role="tab"
          aria-selected={i === active}
          aria-label={`Slide ${i + 1}`}
          onClick={() => onSelect(i)}
          style={{
            padding: 0,
            border: "none",
            cursor: "pointer",
            background: i === active ? accent : "rgba(255,255,255,0.4)",
            width: i === active ? "24px" : "8px",
            height: "8px",
            borderRadius: "999px",
            transition: "all 0.28s cubic-bezier(0.4,0,0.2,1)",
          }}
        />
      ))}
    </div>
  );
}

/* ─────────────────────────────────────────────
   SLIDE BADGE
───────────────────────────────────────────── */
function SlideBadge({ current, total }) {
  return (
    <div
      aria-live="polite"
      style={{
        position: "absolute",
        top: "clamp(12px, 2vw, 18px)",
        right: "clamp(12px, 2vw, 18px)",
        zIndex: 30,
        fontSize: "11px",
        fontWeight: 500,
        letterSpacing: "0.12em",
        color: "rgba(255,255,255,0.75)",
        background: "rgba(0,0,0,0.35)",
        backdropFilter: "blur(6px)",
        padding: "4px 10px",
        borderRadius: "999px",
        fontFamily: "'DM Mono', monospace",
      }}
    >
      {String(current + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
    </div>
  );
}

function SlideImage({ slide, animClass, globalMode }) {
  const mode = slide.imageMode || globalMode || "contain";
  const aspect = useImageAspect(slide.src);

  const paddingTop = aspect ? `${(1 / aspect) * 100}%` : "56.25%";

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        paddingTop,
        overflow: "hidden",
      }}
    >
      {/* Blurred background — fills letterbox zones for contain mode */}
      {mode === "contain" && (
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `url(${slide.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "blur(24px) brightness(0.45)",
            transform: "scale(1.08)", // hide blur edges
            zIndex: 0,
          }}
        />
      )}

      {/* Actual image */}
      <img
        src={slide.src}
        alt={slide.title}
        className={`carousel-slide-img carousel-slide-img--${mode} ${animClass}`}
        loading="eager"
        decoding="async"
        style={{ zIndex: 1 }}
      />

      {/* Dark gradient for text readability */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to top, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.18) 55%, transparent 100%)",
          zIndex: 2,
          pointerEvents: "none",
        }}
      />
    </div>
  );
}

/* ─────────────────────────────────────────────
   MAIN CAROUSEL
───────────────────────────────────────────── */
export default function HeroCarousel2({
  slides = SLIDES,
  autoplayDelay = AUTOPLAY_DELAY,
  showArrows = true,
  showDots = true,
  showBadge = true,

  imageMode = "contain",
}) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [direction, setDirection] = useState("next");
  const [animating, setAnimating] = useState(false);
  const touchStartX = useRef(null);
  const touchStartY = useRef(null);
  const touchEndX = useRef(null);
  const total = slides.length;

  const goTo = useCallback(
    (index, dir = "next") => {
      if (animating) return;
      setDirection(dir);
      setAnimating(true);
      setActive(index);
      setTimeout(() => setAnimating(false), 600);
    },
    [animating],
  );

  const prev = useCallback(
    () => goTo((active - 1 + total) % total, "prev"),
    [active, total, goTo],
  );
  const next = useCallback(
    () => goTo((active + 1) % total, "next"),
    [active, total, goTo],
  );

  useEffect(() => {
    if (paused) return;
    const t = setTimeout(next, autoplayDelay);
    return () => clearTimeout(t);
  }, [active, paused, next, autoplayDelay]);

  useEffect(() => {
    const handle = (e) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handle);
    return () => window.removeEventListener("keydown", handle);
  }, [prev, next]);

  const onTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
    touchStartY.current = e.targetTouches[0].clientY;
    touchEndX.current = null;
  };
  const onTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
    // Only block horizontal scroll if clearly swiping sideways
    const dx = Math.abs(e.targetTouches[0].clientX - touchStartX.current);
    const dy = Math.abs(e.targetTouches[0].clientY - touchStartY.current);
    if (dx > dy && dx > 8) e.preventDefault();
  };
  const onTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const delta = touchStartX.current - touchEndX.current;
    if (Math.abs(delta) > 50) delta > 0 ? next() : prev();
    touchStartX.current = null;
    touchEndX.current = null;
  };

  const slide = slides[active];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@400;500;600&family=DM+Mono:wght@400;500&display=swap');

        @keyframes progressFill { from{width:0%} to{width:100%} }
        @keyframes slideInFromRight { from{transform:translateX(5%);opacity:0} to{transform:translateX(0);opacity:1} }
        @keyframes slideInFromLeft  { from{transform:translateX(-5%);opacity:0} to{transform:translateX(0);opacity:1} }
        @keyframes fadeUp { from{transform:translateY(14px);opacity:0} to{transform:translateY(0);opacity:1} }
        @keyframes scaleIn { from{transform:scale(1.03)} to{transform:scale(1)} }

        /* ── Outer wrapper: NEVER overflow ── */
      .carousel-wrapper {
  width: 100%;
  max-width: 100%;
  overflow: hidden;
  box-sizing: border-box;

   padding: clamp(45px, 5vw, 70px) clamp(10px, 2.5vw, 28px)
           clamp(10px, 2.5vw, 28px);
}

        /* ── Stage: no fixed height — height comes from image aspect ── */
        .carousel-root {
          position: relative;
          width: 100%;
          max-width: 100%;
          overflow: hidden;
          border-radius: 14px;
          user-select: none;
          -webkit-user-select: none;
          touch-action: pan-y;
          box-sizing: border-box;
          contain: layout paint;
          background: #0a0a0a;
        }

        /* ── Image: contain = full image always visible ── */
        .carousel-slide-img {
          position: absolute;
          top: 0; left: 0;
          width: 100%;
          height: 100%;
          will-change: transform, opacity;
          display: block;
        }

        /* contain mode: full image, no crop, centered */
        .carousel-slide-img--contain {
          object-fit: contain;
          object-position: center center;
        }

        /* cover mode: fills container (may crop) */
        .carousel-slide-img--cover {
          object-fit: cover;
          object-position: center center;
        }

        .slide-enter-next {
          animation: slideInFromRight 0.52s cubic-bezier(0.22,1,0.36,1) both,
                     scaleIn         0.52s cubic-bezier(0.22,1,0.36,1) both;
        }
        .slide-enter-prev {
          animation: slideInFromLeft 0.52s cubic-bezier(0.22,1,0.36,1) both,
                     scaleIn        0.52s cubic-bezier(0.22,1,0.36,1) both;
        }

        /* ── Slide text content ── */
        .carousel-content {
          position: absolute;
          bottom: clamp(40px, 7vw, 72px);
          left:   clamp(16px, 4vw, 52px);
          right:  clamp(16px, 4vw, 52px);
          z-index: 20;
          pointer-events: none;
        }
        .carousel-eyebrow {
          font-family: 'DM Mono', monospace;
          font-size: clamp(9px, 1.3vw, 12px);
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.6);
          margin: 0 0 5px;
          animation: fadeUp 0.44s 0.12s both;
        }
        .carousel-title {
          font-family: 'DM Serif Display', serif;
          font-size: clamp(20px, 4.5vw, 56px);
          line-height: 1.06;
          color: #fff;
          margin: 0 0 8px;
          text-shadow: 0 2px 20px rgba(0,0,0,0.5);
          animation: fadeUp 0.44s 0.17s both;
        }
        .carousel-desc {
          font-family: 'DM Sans', sans-serif;
          font-size: clamp(12px, 1.6vw, 15px);
          line-height: 1.6;
          color: rgba(255,255,255,0.72);
          margin: 0;
          max-width: min(460px, 78%);
          animation: fadeUp 0.44s 0.22s both;
        }

        /* ── Thumbnails ── */
        .thumbnail-strip {
          display: flex;
          gap: 8px;
          margin-top: 10px;
          overflow: hidden;
          width: 100%;
        }
        .thumbnail-btn {
          flex: 1 1 0;
          min-width: 0;
          padding: 0;
          border-radius: 7px;
          overflow: hidden;
          cursor: pointer;
          background: #111;
          /* 
            Thumbnails use contain too so admin 
            sees a preview of the full image 
          */
          aspect-ratio: 16 / 9;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: opacity 0.22s, border-color 0.22s;
          position: relative;
        }
        .thumbnail-btn img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          display: block;
        }

        @media (max-width: 767px) {
          .carousel-root { border-radius: 10px; }
          .hide-mobile { display: none !important; }
        }
        @media (min-width: 768px) and (max-width: 1024px) {
          .carousel-root { border-radius: 12px; }
        }
      `}</style>

      <div className="carousel-wrapper bg-[#f8f2ea]">
        <div
          className="carousel-root"
          role="region"
          aria-label="Image carousel"
          aria-roledescription="carousel"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          {/* Slide image — aspect ratio auto-adjusts */}
          <SlideImage
            key={active}
            slide={slide}
            animClass={
              direction === "next" ? "slide-enter-next" : "slide-enter-prev"
            }
            globalMode={imageMode}
          />

          {/* Text overlay */}
          <div className="carousel-content" key={"text-" + active}>
            <p className="carousel-eyebrow">{slide.subtitle}</p>
            <h2 className="carousel-title">{slide.title}</h2>
            <p className="carousel-desc hide-mobile">{slide.description}</p>
          </div>

          {/* Chrome */}
          {showBadge && <SlideBadge current={active} total={total} />}
          {showArrows && (
            <>
              <Arrow direction="prev" onClick={prev} />
              <Arrow direction="next" onClick={next} />
            </>
          )}
          {showDots && (
            <Dots
              total={total}
              active={active}
              onSelect={(i) => goTo(i, i > active ? "next" : "prev")}
              accent={slide.accent}
            />
          )}
          <ProgressBar
            active={active}
            paused={paused}
            duration={autoplayDelay}
            accent={slide.accent}
          />
        </div>

        {/* Thumbnail strip — desktop/tablet only */}
        <div className="thumbnail-strip hide-mobile" aria-hidden="true">
          {slides.map((s, i) => (
            <button
              key={s.id}
              className="thumbnail-btn"
              onClick={() => goTo(i, i > active ? "next" : "prev")}
              aria-label={`Jump to: ${s.title}`}
              style={{
                border:
                  i === active
                    ? `2px solid ${s.accent}`
                    : "2px solid transparent",
                opacity: i === active ? 1 : 0.52,
              }}
            >
              <img src={s.src} alt="" loading="lazy" />
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
