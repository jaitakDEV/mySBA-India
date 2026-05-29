import { useState, useEffect, useRef, useCallback } from "react";

const styles = `
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --font-heading: 'Fraunces', Georgia, serif;
    --font-body: 'Plus Jakarta Sans', sans-serif;
    --font-mono: 'IBM Plex Mono', monospace;
    --orange: #ff7a00;
    --orange-light: #ff9a3c;
    --orange-glow: rgba(255,122,0,0.35);
    --orange-soft: rgba(255,122,0,0.08);
    --bg: #f8f2ea;
    --bg2: #fff5eb;
    --bg3: #f7efe5;
    --bg4: #f5d8ba;
    --heading: #1b1b1b;
    --text: #222;
    --text2: #555;
    --text3: #666;
    --glass: rgba(255,255,255,0.72);
    --shadow: 0 8px 40px rgba(0,0,0,0.08);
    --shadow-lg: 0 20px 60px rgba(0,0,0,0.12);
    --radius: 20px;
    --radius-lg: 32px;
  }

  html { scroll-behavior: smooth; }

  body {
    font-family: var(--font-body);
    background: var(--bg);
    color: var(--text);
    overflow-x: hidden;
    cursor: none;
  }

  /* CUSTOM CURSOR */
  #cursor-dot {
    width: 8px; height: 8px;
    background: var(--orange);
    border-radius: 50%;
    position: fixed; top: 0; left: 0;
    pointer-events: none; z-index: 99999;
    transform: translate(-50%,-50%);
    transition: width 0.2s, height 0.2s, background 0.2s;
  }
  #cursor-ring {
    width: 36px; height: 36px;
    border: 1.5px solid rgba(255,122,0,0.5);
    border-radius: 50%;
    position: fixed; top: 0; left: 0;
    pointer-events: none; z-index: 99998;
    transform: translate(-50%,-50%);
    transition: all 0.12s ease;
  }
  body.hovering #cursor-dot { width: 14px; height: 14px; }
  body.hovering #cursor-ring { width: 52px; height: 52px; border-color: var(--orange); }

  /* NOISE TEXTURE */
  .noise-overlay {
    position: fixed; inset: 0;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.03'/%3E%3C/svg%3E");
    pointer-events: none; z-index: 9997; opacity: 0.5;
  }

  /* SCROLLBAR */
  ::-webkit-scrollbar { width: 4px; }
  ::-webkit-scrollbar-track { background: var(--bg); }
  ::-webkit-scrollbar-thumb { background: var(--orange); border-radius: 10px; }

  
  /* HERO */
  .hero {
    min-height: 100vh;
    display: flex; flex-direction: column;
    align-items: center; justify-content: center;
    padding: 100px 5% 80px;
    position: relative; overflow: hidden;
    background: linear-gradient(145deg, var(--bg2) 0%, var(--bg3) 50%, var(--bg4) 100%);
  }
  .hero-bg-orb {
    position: absolute; border-radius: 50%;
    filter: blur(80px); pointer-events: none; animation: orb-float 8s ease-in-out infinite;
  }
  .orb1 {
    width: 600px; height: 600px;
    background: radial-gradient(circle, rgba(255,122,0,0.18) 0%, transparent 70%);
    top: -100px; right: -100px;
    animation-delay: 0s;
  }
  .orb2 {
    width: 400px; height: 400px;
    background: radial-gradient(circle, rgba(255,154,60,0.12) 0%, transparent 70%);
    bottom: -50px; left: -50px;
    animation-delay: -4s;
  }
  .orb3 {
    width: 300px; height: 300px;
    background: radial-gradient(circle, rgba(255,210,120,0.15) 0%, transparent 70%);
    top: 40%; left: 20%;
    animation-delay: -2s;
  }
  @keyframes orb-float {
    0%,100%{ transform: translate(0,0) scale(1); }
    33%{ transform: translate(20px,-20px) scale(1.05); }
    66%{ transform: translate(-15px,15px) scale(0.97); }
  }

  /* PARTICLES */
  .particle {
    position: absolute; border-radius: 50%;
    pointer-events: none;
    animation: particle-drift linear infinite;
  }
  @keyframes particle-drift {
    0%{ transform: translateY(100vh) rotate(0deg); opacity: 0; }
    10%{ opacity: 1; }
    90%{ opacity: 1; }
    100%{ transform: translateY(-100px) rotate(360deg); opacity: 0; }
  }

  .hero-badge {
    display: inline-flex; align-items: center; gap: 8px;
    background: var(--glass); backdrop-filter: blur(16px);
    border: 1px solid rgba(255,122,0,0.2);
    border-radius: 100px; padding: 8px 18px;
    font-size: 0.8rem; font-weight: 500; color: black;
    margin-bottom: 28px;
    animation: fade-up 0.8s ease both;
    font-family: var(--font-mono);
    letter-spacing: 0.05em;
    position: relative; z-index: 2;
  }
  .hero-badge-dot {
    width: 6px; height: 6px; background: var(--orange);
    border-radius: 50%; animation: pulse-dot 1.5s ease infinite;
  }

  .hero-title {
    font-family: var(--font-heading);
    font-size: clamp(2.8rem, 6vw, 5.5rem);
    font-weight: 800; line-height: 1.06;
    color: var(--heading); text-align: center;
    max-width: 900px; position: relative; z-index: 2;
    animation: fade-up 0.8s 0.15s ease both;
    letter-spacing: -0.03em;
  }
  .hero-title .accent {
    color: var(--orange);
    position: relative; display: inline-block;
  }
  
  @keyframes underline-reveal { to { transform: scaleX(1); } }

  .hero-sub {
    font-size: clamp(1rem, 1.8vw, 1.2rem);
    color: var(--text2); text-align: center;
    max-width: 560px; line-height: 1.7;
    margin: 24px 0 40px;
    animation: fade-up 0.8s 0.3s ease both;
    position: relative; z-index: 2;
    font-weight: 400;
  }

  .hero-search-wrap {
    width: 100%; max-width: 720px;
    background: var(--glass);
    backdrop-filter: blur(20px);
    border: 1.5px solid rgba(255,255,255,0.8);
    border-radius: 100px;
    padding: 8px 8px 8px 28px;
    display: flex; align-items: center; gap: 12px;
    box-shadow: var(--shadow), 0 0 0 1px rgba(255,122,0,0.06);
    animation: fade-up 0.8s 0.45s ease both;
    position: relative; z-index: 2;
    transition: box-shadow 0.3s, border-color 0.3s;
  }
  .hero-search-wrap:focus-within {
    border-color: rgba(255,122,0,0.4);
    box-shadow: var(--shadow), 0 0 0 4px rgba(255,122,0,0.08);
  }
  .search-icon { color: var(--orange); font-size: 1.1rem; flex-shrink: 0; }
  .hero-search-wrap input {
    flex: 1; background: none; border: none; outline: none;
    font-family: var(--font-body);
    font-size: 1rem; color: var(--heading);
  }
  .hero-search-wrap input::placeholder { color: #aaa; }
  .search-divider {
    width: 1px; height: 24px; background: rgba(0,0,0,0.1);
    flex-shrink: 0;
  }
  .search-location {
    display: flex; align-items: center; gap: 8px;
    padding: 0 4px;
  }
  .search-location input {
    background: none; border: none; outline: none;
    font-family: var(--font-body);
    font-size: 1rem; color: var(--heading); width: 120px;
  }
  .search-location input::placeholder { color: #aaa; }

  .hero-filters {
    display: flex; flex-wrap: wrap; gap: 10px;
    justify-content: center; margin: 24px 0 0;
    animation: fade-up 0.8s 0.6s ease both;
    position: relative; z-index: 2;
  }
  .filter-chip {
    padding: 8px 18px;
    background: var(--glass);
    border: 1.5px solid rgba(255,255,255,0.7);
    border-radius: 100px;
    font-size: 0.84rem; font-weight: 500;
    color: var(--text2); cursor: none;
    transition: all 0.3s ease;
    backdrop-filter: blur(10px);
  }
  .filter-chip:hover, .filter-chip.active {
    background: var(--orange);
    border-color: var(--orange);
    color: white;
    box-shadow: 0 4px 20px var(--orange-glow);
    transform: translateY(-2px);
  }

  .hero-ctas {
    display: flex; gap: 14px; margin-top: 36px;
    animation: fade-up 0.8s 0.75s ease both;
    position: relative; z-index: 2;
  }
  .btn-hero-primary {
    padding: 16px 36px;
    background: var(--orange);
    color: white; border: none; border-radius: 100px;
    font-family: var(--font-body);
    font-size: 1rem; font-weight: 600; cursor: none;
    position: relative; overflow: hidden;
    transition: all 0.3s ease;
    box-shadow: 0 6px 30px var(--orange-glow);
  }
  .btn-hero-primary:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 40px var(--orange-glow);
  }
  .btn-hero-secondary {
    padding: 16px 36px;
    background: rgba(255,255,255,0.7);
    color: var(--heading);
    border: 1.5px solid rgba(0,0,0,0.1);
    border-radius: 100px;
    font-family: var(--font-body);
    font-size: 1rem; font-weight: 500; cursor: none;
    backdrop-filter: blur(10px);
    transition: all 0.3s ease;
  }
  .btn-hero-secondary:hover {
    background: white;
    border-color: var(--orange);
    color: var(--orange);
    transform: translateY(-3px);
    box-shadow: var(--shadow);
  }

  .trusted-strip {
    margin-top: 64px;
    position: relative; z-index: 2;
    animation: fade-up 0.8s 0.9s ease both;
    text-align: center;
  }
  .trusted-label {
    font-size: 0.78rem; font-weight: 500;
    color: var(--text3); letter-spacing: 0.1em;
    text-transform: uppercase; margin-bottom: 18px;
    font-family: var(--font-mono);
  }
  .trusted-logos {
    display: flex; gap: 32px; align-items: center;
    justify-content: center; flex-wrap: wrap;
  }
  .trusted-logo {
    font-family: var(--font-heading);
    font-weight: 700; font-size: 1rem;
    color: rgba(0,0,0,0.25); letter-spacing: -0.02em;
    transition: color 0.3s, transform 0.3s;
    cursor: none;
  }
  .trusted-logo:hover { color: var(--orange); transform: scale(1.05); }

  /* FLOATING HERO CARDS */
  .floating-cards-wrap {
    position: absolute; inset: 0; pointer-events: none;
    overflow: hidden; z-index: 1;
  }
  .float-card {
    position: absolute;
    background: var(--glass);
    backdrop-filter: blur(16px);
    border: 1px solid rgba(255,255,255,0.8);
    border-radius: 18px;
    padding: 16px 20px;
    box-shadow: var(--shadow);
    animation: card-float 6s ease-in-out infinite;
    pointer-events: none;
    min-width: 160px;
  }
  .float-card-1 { top: 18%; left: 4%; animation-delay: 0s; }
  .float-card-2 { top: 28%; right: 4%; animation-delay: -2s; }
  .float-card-3 { bottom: 28%; left: 5%; animation-delay: -4s; }
  .float-card-4 { bottom: 22%; right: 5%; animation-delay: -1s; }
  @keyframes card-float {
    0%,100%{ transform: translateY(0px) rotate(0deg); }
    50%{ transform: translateY(-14px) rotate(0.5deg); }
  }
  .float-card-title {
    font-size: 0.72rem; color: var(--text3);
    font-family: var(--font-mono);
    margin-bottom: 6px; text-transform: uppercase; letter-spacing: 0.06em;
  }
  .float-card-value {
    font-family: var(--font-heading);
    font-weight: 700; font-size: 1.4rem; color: var(--heading);
  }
  .float-card-sub { font-size: 0.8rem; color: var(--text2); margin-top: 2px; }
  .float-card-orange { color: var(--orange); }

  @keyframes fade-up {
    from { opacity: 0; transform: translateY(30px); }
    to { opacity: 1; transform: translateY(0); }
  }

  /* SECTION COMMONS */
  .section { padding: 100px 5%; }
  .section-alt { background: linear-gradient(170deg, var(--bg2) 0%, var(--bg) 100%); }
  .section-label {
    font-family: var(--font-mono);
    font-size: 0.75rem; font-weight: 500;
    color: var(--orange); letter-spacing: 0.12em;
    text-transform: uppercase; margin-bottom: 12px;
    display: flex; align-items: center; gap: 8px;
  }
  .section-label::before {
    content: ''; width: 20px; height: 1.5px; background: var(--orange);
  }
  .section-title {
    font-family: var(--font-heading);
    font-size: clamp(2rem, 4vw, 3.2rem);
    font-weight: 800; color: var(--heading);
    line-height: 1.12; letter-spacing: -0.025em;
    max-width: 700px;
  }
  .section-title .accent { color: var(--orange); }
  .section-sub {
    font-size: 1.05rem; color: var(--text2);
    line-height: 1.7; max-width: 540px; margin-top: 16px;
  }
  .section-header {
    display: flex; justify-content: space-between;
    align-items: flex-end; margin-bottom: 56px; flex-wrap: wrap; gap: 20px;
  }

  /* JOB CARDS */
  .jobs-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
    gap: 24px;
  }
  .job-card {
    background: var(--glass);
    backdrop-filter: blur(20px);
    border: 1.5px solid rgba(255,255,255,0.8);
    border-radius: var(--radius);
    padding: 28px;
    position: relative; overflow: hidden;
    transition: all 0.4s cubic-bezier(0.23,1,0.32,1);
    cursor: none;
  }
  .job-card::before {
    content: ''; position: absolute; inset: 0;
    background: radial-gradient(circle at var(--mx,50%) var(--my,50%), rgba(255,122,0,0.06) 0%, transparent 60%);
    opacity: 0; transition: opacity 0.4s;
  }
  .job-card:hover {
    transform: translateY(-6px);
    border-color: rgba(255,122,0,0.3);
    box-shadow: 0 20px 60px rgba(255,122,0,0.15), var(--shadow);
  }
  .job-card:hover::before { opacity: 1; }
  .job-card-top {
    display: flex; justify-content: space-between; align-items: flex-start;
    margin-bottom: 16px;
  }
  .company-logo {
    width: 52px; height: 52px; border-radius: 14px;
    display: flex; align-items: center; justify-content: center;
    font-family: var(--font-heading); font-weight: 800; font-size: 1.1rem;
    color: white; flex-shrink: 0;
  }
  .save-btn {
    background: none; border: none; cursor: none;
    color: var(--text3); font-size: 1.1rem;
    padding: 6px; border-radius: 8px;
    transition: all 0.3s;
    display: flex; align-items: center;
  }
  .save-btn:hover, .save-btn.saved {
    color: var(--orange);
    background: var(--orange-soft);
  }
  .job-title {
    font-family: var(--font-heading);
    font-size: 1.15rem; font-weight: 700;
    color: var(--heading); margin-bottom: 6px; line-height: 1.3;
  }
  .company-name { font-size: 0.9rem; color: var(--text2); margin-bottom: 14px; }
  .job-meta {
    display: flex; gap: 14px; flex-wrap: wrap; margin-bottom: 16px;
  }
  .job-meta-item {
    display: flex; align-items: center; gap: 6px;
    font-size: 0.82rem; color: var(--text3);
  }
  .job-tags {
    display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 20px;
  }
  .job-tag {
    padding: 5px 12px; border-radius: 100px;
    font-size: 0.78rem; font-weight: 500;
    background: rgba(255,122,0,0.08); color: var(--orange);
    border: 1px solid rgba(255,122,0,0.15);
  }
  .job-tag.grey {
    background: rgba(0,0,0,0.04); color: var(--text2);
    border-color: rgba(0,0,0,0.08);
  }
  .job-card-footer {
    display: flex; justify-content: space-between; align-items: center;
    padding-top: 18px;
    border-top: 1px solid rgba(0,0,0,0.06);
  }
  .job-salary {
    font-family: var(--font-heading);
    font-weight: 700; font-size: 1.1rem; color: var(--heading);
  }
  .job-salary span { font-size: 0.8rem; font-weight: 400; color: var(--text3); }
  .apply-btn {
    padding: 10px 22px; background: var(--orange);
    color: white; border: none; border-radius: 100px;
    font-family: var(--font-body);
    font-size: 0.85rem; font-weight: 600; cursor: none;
    transition: all 0.3s ease;
    box-shadow: 0 4px 16px var(--orange-glow);
  }
  .apply-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 24px var(--orange-glow);
  }
  .new-badge {
    position: absolute; top: 20px; right: 58px;
    background: #22c55e; color: white;
    font-size: 0.68rem; font-weight: 700;
    padding: 3px 9px; border-radius: 100px;
    letter-spacing: 0.05em; text-transform: uppercase;
    font-family: var(--font-mono);
  }

  /* WHY JOIN */
  .why-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
    gap: 24px; margin-bottom: 72px;
  }
  .why-card {
    background: var(--glass);
    backdrop-filter: blur(20px);
    border: 1.5px solid rgba(255,255,255,0.8);
    border-radius: var(--radius);
    padding: 32px 28px;
    transition: all 0.4s cubic-bezier(0.23,1,0.32,1);
    cursor: none; position: relative; overflow: hidden;
  }
  .why-card::after {
    content: ''; position: absolute;
    bottom: 0; left: 0; right: 0; height: 3px;
    background: linear-gradient(90deg, var(--orange), var(--orange-light));
    transform: scaleX(0); transform-origin: left;
    transition: transform 0.4s ease;
  }
  .why-card:hover {
    transform: translateY(-6px);
    box-shadow: 0 20px 60px rgba(255,122,0,0.1), var(--shadow);
    border-color: rgba(255,122,0,0.2);
  }
  .why-card:hover::after { transform: scaleX(1); }
  .why-icon {
    width: 56px; height: 56px; border-radius: 16px;
    background: linear-gradient(135deg, var(--orange), var(--orange-light));
    display: flex; align-items: center; justify-content: center;
    font-size: 1.6rem; margin-bottom: 20px;
    box-shadow: 0 8px 24px var(--orange-glow);
  }
  .why-title {
    font-family: var(--font-heading);
    font-size: 1.15rem; font-weight: 700; color: var(--heading);
    margin-bottom: 10px;
  }
  .why-desc { font-size: 0.92rem; color: var(--text2); line-height: 1.65; }

  /* STATS */
  .stats-row {
    display: grid; grid-template-columns: repeat(4, 1fr);
    gap: 24px;
  }
  .stat-card {
    background: linear-gradient(135deg, var(--orange) 0%, var(--orange-light) 100%);
    border-radius: var(--radius); padding: 32px 24px;
    color: white; text-align: center;
    position: relative; overflow: hidden;
    box-shadow: 0 12px 40px var(--orange-glow);
  }
  .stat-card::before {
    content: ''; position: absolute; top: -20px; right: -20px;
    width: 100px; height: 100px; border-radius: 50%;
    background: rgba(255,255,255,0.1);
  }
  .stat-number {
    font-family: var(--font-heading);
    font-size: 2.8rem; font-weight: 800;
    line-height: 1; margin-bottom: 8px;
  }
  .stat-label { font-size: 0.9rem; opacity: 0.85; font-weight: 500; }


  /* TIMELINE */
  .timeline {
    position: relative; padding: 20px 0;
  }
  .timeline::before {
    content: ''; position: absolute;
    left: 50%; top: 0; bottom: 0; width: 2px;
    background: linear-gradient(to bottom, transparent, var(--orange), var(--orange), transparent);
    transform: translateX(-50%);
  }
  .timeline-item {
    display: flex; gap: 48px; margin-bottom: 60px;
    align-items: center;
  }
  .timeline-item:nth-child(even) { flex-direction: row-reverse; }
  .timeline-side {
    flex: 1; display: flex;
    justify-content: flex-end;
  }
  .timeline-item:nth-child(even) .timeline-side { justify-content: flex-start; }
  .timeline-card {
    background: var(--glass);
    backdrop-filter: blur(20px);
    border: 1.5px solid rgba(255,255,255,0.8);
    border-radius: var(--radius); padding: 28px 32px;
    max-width: 380px; width: 100%;
    box-shadow: var(--shadow);
    transition: all 0.3s ease;
    cursor: none;
  }
  .timeline-card:hover {
    transform: translateY(-4px);
    border-color: rgba(255,122,0,0.25);
    box-shadow: 0 16px 50px rgba(255,122,0,0.1), var(--shadow);
  }
  .timeline-center {
    flex-shrink: 0; display: flex; flex-direction: column; align-items: center;
    gap: 0;
  }
  .timeline-dot {
    width: 48px; height: 48px; border-radius: 50%;
    background: linear-gradient(135deg, var(--orange), var(--orange-light));
    display: flex; align-items: center; justify-content: center;
    font-family: var(--font-heading); font-weight: 800; font-size: 0.9rem;
    color: white; position: relative; z-index: 2;
    box-shadow: 0 4px 20px var(--orange-glow);
    flex-shrink: 0;
  }
  .timeline-step-title {
    font-family: var(--font-heading);
    font-size: 1.1rem; font-weight: 700; color: var(--heading);
    margin-bottom: 8px;
  }
  .timeline-step-desc { font-size: 0.9rem; color: var(--text2); line-height: 1.6; }
  .timeline-step-num {
    font-family: var(--font-mono);
    font-size: 0.72rem; color: var(--orange);
    letter-spacing: 0.1em; margin-bottom: 10px;
  }

  /* SCROLL REVEAL ANIMATION */

.reveal {
  opacity: 0;
  transform: translateY(60px);
  transition:
    opacity 0.8s ease,
    transform 0.8s cubic-bezier(0.23, 1, 0.32, 1);
  will-change: transform, opacity;
}

.reveal.visible {
  opacity: 1;
  transform: translateY(0);
}

  /* TESTIMONIALS */
  .testimonial-track {
    display: flex; gap: 24px; overflow-x: auto; padding-bottom: 20px;
    scroll-snap-type: x mandatory; scrollbar-width: none;
  }
  .testimonial-track::-webkit-scrollbar { display: none; }
  .testimonial-card {
    background: var(--glass);
    backdrop-filter: blur(20px);
    border: 1.5px solid rgba(255,255,255,0.8);
    border-radius: var(--radius); padding: 32px;
    min-width: 340px; max-width: 340px;
    scroll-snap-align: start;
    box-shadow: var(--shadow);
    transition: all 0.4s;
    cursor: none;
  }
  .testimonial-card:hover {
    transform: translateY(-6px);
    border-color: rgba(255,122,0,0.2);
    box-shadow: 0 20px 60px rgba(255,122,0,0.08), var(--shadow);
  }
  .stars { display: flex; gap: 3px; margin-bottom: 18px; }
  .star { color: var(--orange); font-size: 0.9rem; }
  .testimonial-text {
    font-size: 0.95rem; color: var(--text); line-height: 1.7;
    font-style: italic; margin-bottom: 22px;
  }
  .testimonial-author { display: flex; align-items: center; gap: 12px; }
  .author-avatar {
    width: 44px; height: 44px; border-radius: 50%;
    display: flex; align-items: center; justify-content: center;
    font-family: var(--font-heading); font-weight: 700; color: white; font-size: 1rem;
  }
  .author-name {
    font-family: var(--font-heading); font-weight: 700; font-size: 0.95rem; color: var(--heading);
  }
  .author-role { font-size: 0.8rem; color: var(--text3); }
  .slider-controls {
    display: flex; gap: 12px; justify-content: center; margin-top: 32px;
  }
  .slider-btn {
    width: 44px; height: 44px; border-radius: 50%;
    border: 1.5px solid rgba(0,0,0,0.12);
    background: var(--glass); backdrop-filter: blur(10px);
    display: flex; align-items: center; justify-content: center;
    cursor: none; font-size: 0.9rem; color: var(--heading);
    transition: all 0.3s;
  }
  .slider-btn:hover {
    background: var(--orange); color: white;
    border-color: var(--orange);
    box-shadow: 0 4px 20px var(--orange-glow);
  }

  /* RESUME */
  .resume-zone {
    border: 2px dashed rgba(255,122,0,0.3);
    border-radius: var(--radius-lg);
    padding: 64px 40px;
    text-align: center;
    background: linear-gradient(135deg, rgba(255,122,0,0.03), rgba(255,154,60,0.05));
    transition: all 0.4s;
    cursor: none; position: relative; overflow: hidden;
  }
  .resume-zone.drag-over, .resume-zone:hover {
    border-color: var(--orange);
    background: linear-gradient(135deg, rgba(255,122,0,0.06), rgba(255,154,60,0.08));
    box-shadow: 0 0 0 6px rgba(255,122,0,0.06), inset 0 0 60px rgba(255,122,0,0.04);
  }
 
  .resume-zone:hover .resume-glow-ring { opacity: 0.6; }
  @keyframes spin-ring { to { transform: rotate(360deg); } }
  .resume-icon { font-size: 3.5rem; margin-bottom: 20px; }
  .resume-title {
    font-family: var(--font-heading);
    font-size: 1.5rem; font-weight: 700; color: var(--heading);
    margin-bottom: 10px;
  }
  .resume-sub { font-size: 0.95rem; color: var(--text2); margin-bottom: 28px; line-height: 1.6; }
  .resume-formats {
    display: flex; gap: 8px; justify-content: center;
    flex-wrap: wrap; margin-top: 16px;
  }
  .format-chip {
    padding: 4px 14px; border-radius: 100px;
    background: rgba(255,122,0,0.1); color: var(--orange);
    font-size: 0.78rem; font-weight: 600;
    font-family: var(--font-mono);
    border: 1px solid rgba(255,122,0,0.2);
  }

  /* CATEGORIES */
  .categories-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 20px;
  }
  .cat-card {
    background: var(--glass);
    backdrop-filter: blur(16px);
    border: 1.5px solid rgba(255,255,255,0.8);
    border-radius: var(--radius); padding: 28px 22px;
    text-align: center; cursor: none;
    transition: all 0.4s cubic-bezier(0.23,1,0.32,1);
    position: relative; overflow: hidden;
  }
  .cat-card::before {
    content: ''; position: absolute; inset: 0;
    background: linear-gradient(135deg, rgba(255,122,0,0.08), transparent);
    opacity: 0; transition: opacity 0.3s;
  }
  .cat-card:hover {
    transform: translateY(-8px) scale(1.02);
    border-color: rgba(255,122,0,0.3);
    box-shadow: 0 20px 60px rgba(255,122,0,0.12), var(--shadow);
  }
  .cat-card:hover::before { opacity: 1; }
  .cat-icon { font-size: 2.4rem; margin-bottom: 14px; display: block; }
  .cat-name {
    font-family: var(--font-heading);
    font-size: 1rem; font-weight: 700; color: var(--heading);
    margin-bottom: 6px;
  }
  .cat-count { font-size: 0.82rem; color: var(--text3); }
  .cat-arrow {
    display: inline-block; margin-top: 14px;
    color: var(--orange); font-size: 1.1rem;
    transition: transform 0.3s;
  }
  .cat-card:hover .cat-arrow { transform: translateX(6px); }

  /* FAQ */
  .faq-list { max-width: 760px; margin: 0 auto; }
  .faq-item {
    border-bottom: 1px solid rgba(0,0,0,0.08);
    overflow: hidden;
  }
  .faq-question {
    width: 100%; background: none; border: none;
    padding: 24px 0;
    display: flex; justify-content: space-between; align-items: center;
    cursor: none; text-align: left;
    transition: all 0.3s;
  }
  .faq-q-text {
    font-family: var(--font-heading);
    font-size: 1.05rem; font-weight: 600; color: var(--heading);
    transition: color 0.3s;
  }
  .faq-question:hover .faq-q-text { color: var(--orange); }
  .faq-icon {
    width: 32px; height: 32px; border-radius: 50%;
    border: 1.5px solid rgba(0,0,0,0.1);
    display: flex; align-items: center; justify-content: center;
    color: var(--text2); font-size: 1.1rem;
    transition: all 0.3s; flex-shrink: 0;
  }
  .faq-item.open .faq-icon {
    background: var(--orange); color: white;
    border-color: var(--orange);
    box-shadow: 0 4px 16px var(--orange-glow);
    transform: rotate(45deg);
  }
  .faq-answer {
    max-height: 0; overflow: hidden;
    transition: max-height 0.5s cubic-bezier(0.23,1,0.32,1), padding 0.3s;
    padding: 0 0 0;
  }
  .faq-item.open .faq-answer {
  max-height: 400px;
  padding-top: 12px;
  padding-bottom: 22px;
}
  .faq-answer-text { font-size: 0.95rem; color: var(--text2); line-height: 1.7; }

  /* NEWSLETTER */
  .newsletter-section {
    margin: 0 5% 100px;
    background: linear-gradient(135deg, #ff7a00 0%, #ff9a3c 60%, #ffb347 100%);
    border-radius: var(--radius-lg); padding: 72px 8%;
    position: relative; overflow: hidden;
  }
  .newsletter-section::before {
    content: ''; position: absolute; inset: 0;
    background: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.05'/%3E%3C/svg%3E");
    pointer-events: none;
  }
  .nl-orb1 {
    position: absolute; width: 400px; height: 400px;
    background: rgba(255,255,255,0.08); border-radius: 50%;
    top: -100px; right: -80px; pointer-events: none;
  }
  .nl-orb2 {
    position: absolute; width: 250px; height: 250px;
    background: rgba(255,255,255,0.05); border-radius: 50%;
    bottom: -60px; left: -40px; pointer-events: none;
  }
  .nl-content { position: relative; z-index: 2; }
  .nl-tag {
    font-family: var(--font-mono);
    font-size: 0.75rem; color: rgba(255,255,255,0.75);
    letter-spacing: 0.1em; text-transform: uppercase;
    margin-bottom: 16px;
  }
  .nl-title {
    font-family: var(--font-heading);
    font-size: clamp(1.8rem, 3.5vw, 2.8rem);
    font-weight: 800; color: white; line-height: 1.15;
    margin-bottom: 14px; letter-spacing: -0.025em;
  }
  .nl-sub { color: rgba(255,255,255,0.8); font-size: 1rem; margin-bottom: 32px; }
  .nl-form {
    display: flex; gap: 12px; max-width: 500px; flex-wrap: wrap;
  }
  .nl-input {
    flex: 1; min-width: 200px;
    background: rgba(255,255,255,0.2);
    border: 1.5px solid rgba(255,255,255,0.4);
    border-radius: 100px; padding: 14px 22px;
    font-family: var(--font-body);
    font-size: 0.95rem; color: white; outline: none;
    transition: all 0.3s;
    backdrop-filter: blur(10px);
  }
  .nl-input::placeholder { color: rgba(255,255,255,0.6); }
  .nl-input:focus {
    border-color: rgba(255,255,255,0.8);
    background: rgba(255,255,255,0.25);
  }
  .nl-btn {
    padding: 14px 28px;
    background: white; color: var(--orange);
    border: none; border-radius: 100px;
    font-family: var(--font-body);
    font-size: 0.95rem; font-weight: 700; cursor: none;
    transition: all 0.3s;
    white-space: nowrap;
    box-shadow: 0 4px 20px rgba(0,0,0,0.1);
  }
  .nl-btn:hover { transform: translateY(-2px); box-shadow: 0 8px 30px rgba(0,0,0,0.15); }


  /* SPOTLIGHT */
  .spotlight-card {
    position: relative; overflow: hidden;
  }
  .spotlight-card .spotlight-effect {
    position: absolute; width: 200px; height: 200px; border-radius: 50%;
    background: radial-gradient(circle, rgba(255,122,0,0.12) 0%, transparent 70%);
    pointer-events: none; transform: translate(-50%,-50%);
    transition: opacity 0.3s; opacity: 0;
  }
  .spotlight-card:hover .spotlight-effect { opacity: 1; }

  .btn-primary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 14px 24px;
  border-radius: 14px;
  border: none;
  background: #ff7a00;
  color: #fff;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-primary:hover {
  transform: translateY(-2px);
  background: #e96f00;
}

  /* ============================================
     RESPONSIVE — all breakpoints
     ============================================ */

  /* --- Large desktop: 1280px+ (already designed for this) --- */

  /* --- Laptop / small desktop: 1024px–1279px --- */
  @media (max-width: 1279px) {
    .hero-title { font-size: clamp(2.6rem, 5.5vw, 4.8rem); }
    .jobs-grid { grid-template-columns: repeat(2, 1fr); }
    .footer-grid { grid-template-columns: 1.4fr 1fr 1fr 1fr; gap: 32px; }
  }

  /* --- Tablet landscape / small laptop: up to 1024px --- */
  @media (max-width: 1024px) {
    .timeline::before { display: none; }
    .timeline-item,
    .timeline-item:nth-child(even) { flex-direction: column; gap: 16px; align-items: center; }
    .timeline-side,
    .timeline-item:nth-child(even) .timeline-side { justify-content: center; width: 100%; }
    .timeline-card { max-width: 560px; width: 100%; }
    .stats-row { grid-template-columns: repeat(2, 1fr); }
    .footer-grid { grid-template-columns: 1fr 1fr; gap: 40px; }
    .contact-wrap { grid-template-columns: 1fr; gap: 36px; }
    .culture-grid { grid-template-columns: 1fr 1fr; }
    .culture-card.tall { grid-row: span 1; }
    .culture-bg { min-height: 260px !important; }
    .nl-title { font-size: clamp(1.6rem, 3vw, 2.4rem); }
    .section { padding: 88px 5%; }
    .float-card-1, .float-card-3 { left: 1%; }
    .float-card-2, .float-card-4 { right: 1%; }
  }

  /* --- Tablet portrait / iPad: up to 834px --- */
  @media (max-width: 834px) {
    .nav-links, .nav-actions { display: none; }
    .hamburger { display: flex; }

    .hero { padding: 100px 6% 72px; }
    .hero-title { font-size: clamp(2.2rem, 6vw, 3.4rem); letter-spacing: -0.02em; }
    .hero-sub { font-size: clamp(0.95rem, 2.2vw, 1.1rem); max-width: 100%; }
    .hero-search-wrap {
      flex-wrap: wrap;
      border-radius: 20px;
      padding: 14px 18px;
      gap: 10px;
    }
    .hero-search-wrap input { font-size: 0.95rem; }
    .search-divider { display: none; }
    .search-location { width: 100%; padding: 0; }
    .search-location input { width: 100%; }
    .hero-search-wrap .btn-primary {
      width: 100%;
      text-align: center;
      border-radius: 12px;
      padding: 12px;
    }
    .hero-filters { gap: 8px; }
    .filter-chip { padding: 7px 14px; font-size: 0.8rem; }
    .hero-ctas { flex-direction: column; align-items: center; gap: 12px; }
    .btn-hero-primary, .btn-hero-secondary { width: 100%; max-width: 320px; text-align: center; }
    .float-card { display: none; }
    .trusted-logos { gap: 20px; }
    .trusted-logo { font-size: 0.9rem; }

    .section { padding: 72px 5%; }
    .section-header { flex-direction: column; align-items: flex-start; margin-bottom: 40px; }
    .section-title { font-size: clamp(1.8rem, 5vw, 2.6rem); }

    .jobs-grid { grid-template-columns: 1fr; max-width: 560px; margin: 0 auto; }
    .why-grid { grid-template-columns: repeat(2, 1fr); }
    .stats-row { grid-template-columns: repeat(2, 1fr); }
    .stat-number { font-size: 2.2rem; }

    .culture-grid { grid-template-columns: 1fr; }
    .culture-card.tall { grid-row: span 1; }
    .culture-bg { min-height: 280px !important; }

    .timeline-card { max-width: 100%; padding: 22px 24px; }

    .testimonial-card { min-width: 300px; max-width: 300px; }

    .resume-zone { padding: 48px 28px; }

    .categories-grid { grid-template-columns: repeat(3, 1fr); }

    .newsletter-section { margin: 0 4% 80px; padding: 56px 7%; border-radius: 24px; }
    .nl-form { flex-direction: column; }
    .nl-input, .nl-btn { width: 100%; min-width: unset; }

    .contact-wrap { grid-template-columns: 1fr; }
    .contact-form { padding: 32px 28px; }

    .footer-grid { grid-template-columns: 1fr 1fr; gap: 32px; }
    .footer-bottom { flex-direction: column; text-align: center; gap: 12px; }
    .footer-legal { flex-wrap: wrap; justify-content: center; gap: 16px; }
  }

  /* --- Large phone / phablet: up to 640px --- */
  @media (max-width: 640px) {
    :root { --radius: 16px; --radius-lg: 24px; }

    .navbar { padding: 0 5%; height: 64px; }
    .nav-logo { font-size: 1.3rem; }

    .hero { padding: 88px 5% 60px; }
    .hero-title { font-size: clamp(1.9rem, 8vw, 2.8rem); }
    .hero-badge { font-size: 0.72rem; padding: 7px 14px; }
    .hero-sub { margin: 18px 0 32px; font-size: 0.95rem; }
    .trusted-strip { margin-top: 48px; }
    .trusted-logos { gap: 14px; flex-wrap: wrap; justify-content: center; }
    .trusted-logo { font-size: 0.82rem; }

    .section { padding: 60px 5%; }
    .section-title { font-size: clamp(1.6rem, 7vw, 2.2rem); }
    .section-sub { font-size: 0.95rem; }
    .section-header { margin-bottom: 32px; }

    .jobs-grid { grid-template-columns: 1fr; max-width: 100%; }
    .job-card { padding: 22px 20px; }
    .job-salary { font-size: 1rem; }

    .why-grid { grid-template-columns: 1fr; }
    .why-card { padding: 24px 22px; }
    .why-icon { width: 48px; height: 48px; font-size: 1.4rem; }

    .stats-row { grid-template-columns: repeat(2, 1fr); gap: 14px; }
    .stat-card { padding: 24px 16px; }
    .stat-number { font-size: 2rem; }
    .stat-label { font-size: 0.8rem; }

    .culture-grid { grid-template-columns: 1fr; }
    .culture-bg { min-height: 240px !important; }

    .timeline-item { gap: 12px; }
    .timeline-card { padding: 20px; }
    .timeline-dot { width: 40px; height: 40px; font-size: 0.8rem; }

    .testimonial-card { min-width: 280px; max-width: 280px; padding: 24px; }
    .slider-controls { margin-top: 20px; }

    .resume-zone { padding: 40px 20px; }
    .resume-icon { font-size: 2.8rem; }
    .resume-title { font-size: 1.2rem; }

    .categories-grid { grid-template-columns: repeat(2, 1fr); gap: 14px; }
    .cat-card { padding: 22px 16px; }
    .cat-icon { font-size: 2rem; }

    .faq-question { padding: 18px 0; }
    .faq-q-text { font-size: 0.95rem; }

    .newsletter-section { margin: 0 0 64px; border-radius: 0; padding: 52px 6%; }

    .contact-form { padding: 24px 20px; }
    .contact-info-item { padding: 16px; gap: 14px; }

    .footer { padding: 60px 5% 32px; }
    .footer-grid { grid-template-columns: 1fr; gap: 28px; }
    .footer-brand-title { font-size: 1.4rem; }
    .footer-bottom { flex-direction: column; text-align: center; }
    .footer-legal { flex-direction: column; gap: 10px; align-items: center; }

  
  }

  /* --- Standard mobile: up to 480px --- */
  @media (max-width: 480px) {
    .hero { padding: 80px 4% 52px; }
    .hero-title { font-size: clamp(1.75rem, 9vw, 2.4rem); line-height: 1.1; }
    .hero-badge { font-size: 0.68rem; }
    .hero-search-wrap { padding: 12px 16px; border-radius: 16px; }
    .btn-hero-primary, .btn-hero-secondary { padding: 14px 28px; font-size: 0.95rem; }

    .section { padding: 52px 4%; }
    .section-title { font-size: clamp(1.5rem, 8vw, 2rem); }

    .stats-row { grid-template-columns: 1fr 1fr; gap: 12px; }
    .stat-card { padding: 20px 12px; }
    .stat-number { font-size: 1.75rem; }

    .categories-grid { grid-template-columns: repeat(2, 1fr); gap: 12px; }
    .cat-card { padding: 18px 12px; }

    .testimonial-card { min-width: 260px; max-width: 260px; padding: 20px; }
    .testimonial-text { font-size: 0.88rem; }

    .resume-zone { padding: 32px 16px; }
    .resume-formats { gap: 6px; }
    .format-chip { font-size: 0.72rem; padding: 3px 10px; }

    .nl-title { font-size: clamp(1.4rem, 6vw, 2rem); }
    .nl-sub { font-size: 0.9rem; }
    .nl-input, .nl-btn { padding: 12px 18px; font-size: 0.9rem; }

    .contact-form { padding: 20px 16px; }
    .form-input, .form-textarea { padding: 14px 16px; font-size: 0.9rem; }

    .footer-grid { gap: 24px; }
    .footer-legal { gap: 8px; }
  }

  /* --- Small mobile: up to 375px --- */
  @media (max-width: 375px) {
    .hero-title { font-size: 1.65rem; }
    .hero-sub { font-size: 0.9rem; }
    .btn-hero-primary, .btn-hero-secondary { padding: 13px 20px; font-size: 0.9rem; max-width: 100%; }

    .section { padding: 44px 4%; }
    .section-title { font-size: 1.45rem; }

    .job-card { padding: 18px 16px; }
    .job-title { font-size: 1rem; }

    .stat-number { font-size: 1.6rem; }

    .categories-grid { grid-template-columns: 1fr 1fr; gap: 10px; }

    .why-card { padding: 20px 16px; }

    .testimonial-card { min-width: 240px; max-width: 240px; }

    .resume-zone { padding: 28px 14px; }

    .footer-grid { grid-template-columns: 1fr; }

  }

  /* --- Foldable / tiny screens: up to 320px --- */
  @media (max-width: 320px) {
    .hero-title { font-size: 1.5rem; }
    .hero-badge { font-size: 0.62rem; padding: 6px 10px; }
    .section-title { font-size: 1.3rem; }
    .stats-row { grid-template-columns: 1fr; }
    .categories-grid { grid-template-columns: 1fr; }
    .navbar { padding: 0 4%; }
  }

  /* --- Disable custom cursor on touch devices --- */
  @media (hover: none) and (pointer: coarse) {
    body { cursor: auto; }
    #cursor-dot, #cursor-ring { display: none; }
    .btn-primary, .btn-ghost, .btn-hero-primary, .btn-hero-secondary,
    .filter-chip, .apply-btn, .save-btn, .slider-btn, .nl-btn,
    .faq-question, .hamburger { cursor: pointer; }
    .job-card, .why-card, .cat-card, .testimonial-card,
    .timeline-card, .contact-info-item, .social-link,
    .trusted-logo, .nav-links a { cursor: pointer; }
  }

  /* --- Landscape phone (short + wide) --- */
  @media (max-height: 500px) and (orientation: landscape) {
    .hero { min-height: unset; padding: 80px 5% 52px; }

  }

  /* --- High DPI / retina --- */
  @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
    .noise-overlay { opacity: 0.35; }
  }

  /* --- Reduce motion for accessibility --- */
  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.15s !important;
    }
    .reveal { opacity: 1; transform: none; }
  }
`;

const jobsData = [
  {
    id: 1,
    title: "Senior Product Designer",
    company: "Luminary AI",
    logo: "LA",
    color: "#7c3aed",
    salary: "120–160k",
    location: "Remote",
    type: "Full-time",
    tags: ["Figma", "Design Systems", "Research"],
    isNew: true,
    isSaved: false,
  },
  {
    id: 2,
    title: "Frontend Engineer (React)",
    company: "Orion Labs",
    logo: "OL",
    color: "#0ea5e9",
    salary: "500k–800k",
    location: "Ajmer",
    type: "Hybrid",
    tags: ["React", "TypeScript", "GraphQL"],
    isNew: false,
    isSaved: false,
  },
  {
    id: 3,
    title: "Growth Marketing Lead",
    company: "Vesper Inc.",
    logo: "VI",
    color: "#10b981",
    salary: "195k–330k",
    location: "Jaipur",
    type: "Full-time",
    tags: ["SEO", "Analytics", "CRO"],
    isNew: true,
    isSaved: false,
  },
  {
    id: 4,
    title: "AI/ML Research Scientist",
    company: "Nexus Systems",
    logo: "NS",
    color: "#f59e0b",
    salary: "560k–820k",
    location: "Jaipur",
    type: "Full-time",
    tags: ["Python", "PyTorch", "LLMs"],
    isNew: false,
    isSaved: false,
  },
  {
    id: 5,
    title: "Head of Engineering",
    company: "Stratos Cloud",
    logo: "SC",
    color: "#ef4444",
    salary: "490l–540k",
    location: "Ajmer",
    type: "On-site",
    tags: ["Leadership", "Infra", "Scale"],
    isNew: false,
    isSaved: false,
  },
  {
    id: 6,
    title: "Product Manager, Platform",
    company: "55 Tech",
    logo: "55",
    color: "#8b5cf6",
    salary: "315k–455k",
    location: "Noida",
    type: "Full-time",
    tags: ["Roadmap", "B2B", "APIs"],
    isNew: true,
    isSaved: false,
  },
];

const testimonials = [
  {
    text: "Landing my dream job at a top startup was a dream. The AI-matched recommendations saved me weeks — I had interviews lined up within 3 days of joining.",
    name: "Priya Sharma",
    role: "UX Lead @Nuvolo",
    color: "#7c3aed",
    initials: "PS",
    stars: 5,
  },
  {
    text: "The platform's company insights helped me ask the right questions during interviews. I negotiated a 22% salary bump because I knew exactly what I was worth.",
    name: "Yash",
    role: "IT Engineer @ MavianIT",
    color: "#0ea5e9",
    initials: "Y",
    stars: 5,
  },
  {
    text: "As a career switcher, I was nervous. The resume builder and career coach feature gave me the confidence to apply way above where I thought I could land.",
    name: "Jai Tak",
    role: "SDE-2 @ MavianIT",
    color: "#10b981",
    initials: "JT",
    stars: 5,
  },
  {
    text: "Three weeks. That's all it took from profile creation to signing my offer letter. The quality of the matches was genuinely impressive — no noise, all signal.",
    name: "Vivek",
    role: "Head of Design @ Choyal Group",
    color: "#f59e0b",
    initials: "v",
    stars: 5,
  },
];

const categories = [
  { icon: "💻", name: "Engineering", count: "200+ jobs" },
  { icon: "🎨", name: "Design", count: "50+ jobs" },
  { icon: "📊", name: "Product", count: "20+ jobs" },
  { icon: "🤖", name: "AI & ML", count: "80+ jobs" },
  { icon: "📈", name: "Marketing", count: "90+ jobs" },
  { icon: "💼", name: "Operations", count: "250+ jobs" },
  { icon: "🔒", name: "Security", count: "110+ jobs" },
  { icon: "☁️", name: "DevOps", count: "80+ jobs" },
];

const faqs = [
  {
    q: "How does the AI job matching work?",
    a: "Our proprietary matching engine analyzes your skills, experience, career goals, and even communication style to surface roles that genuinely fit — not just keyword matches. It learns and improves with every interaction you have on the platform.",
  },
  {
    q: "Is it free to create a profile and apply?",
    a: "Yes, completely free for job seekers. You can build your profile, get matched, apply to unlimited jobs, and access basic career tools at no cost. We offer a premium tier for advanced analytics and priority visibility.",
  },
  {
    q: "How do I know a company listing is legitimate?",
    a: "Every company on our platform goes through a manual verification process. We check business registration, review their online presence, and require a business email domain. Verified companies show a blue checkmark on their profile.",
  },
  {
    q: "Can employers search for me directly?",
    a: "Yes — with your permission. When you set your profile to 'Open to Opportunities', verified employers can find and reach out to you directly. You control exactly what information is visible and to whom.",
  },
  {
    q: "What makes this different from other job boards?",
    a: "We're not a job board — we're a career operating system. Beyond listings, we offer AI resume optimization, salary benchmarking, interview prep, career trajectory planning, and a community of peers at your level.",
  },
];

export default function CareerLanding() {
  const [scrolled, setScrolled] = useState(false);
  const [activeFilter, setActiveFilter] = useState("All");
  const [savedJobs, setSavedJobs] = useState(new Set());
  const [openFaq, setOpenFaq] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [counters, setCounters] = useState({
    jobs: 0,
    companies: 0,
    hired: 0,
    satisfaction: 0,
  });
  const [nlEmail, setNlEmail] = useState("");
  const [statsVisible, setStatsVisible] = useState(false);
  const statsRef = useRef(null);
  const testimonialRef = useRef(null);
  const cursorDotRef = useRef(null);
  const cursorRingRef = useRef(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const ringPos = useRef({ x: 0, y: 0 });
  const rafRef = useRef(null);

  // Cursor
  useEffect(() => {
    const moveCursor = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      if (cursorDotRef.current) {
        cursorDotRef.current.style.left = e.clientX + "px";
        cursorDotRef.current.style.top = e.clientY + "px";
      }
    };
    const animateRing = () => {
      ringPos.current.x += (mousePos.current.x - ringPos.current.x) * 0.12;
      ringPos.current.y += (mousePos.current.y - ringPos.current.y) * 0.12;
      if (cursorRingRef.current) {
        cursorRingRef.current.style.left = ringPos.current.x + "px";
        cursorRingRef.current.style.top = ringPos.current.y + "px";
      }
      rafRef.current = requestAnimationFrame(animateRing);
    };
    const addHover = () => document.body.classList.add("hovering");
    const removeHover = () => document.body.classList.remove("hovering");
    document.addEventListener("mousemove", moveCursor);
    document.querySelectorAll("button,a,[data-hover]").forEach((el) => {
      el.addEventListener("mouseenter", addHover);
      el.addEventListener("mouseleave", removeHover);
    });
    rafRef.current = requestAnimationFrame(animateRing);
    return () => {
      document.removeEventListener("mousemove", moveCursor);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  // Scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Reveal on scroll
  useEffect(() => {
    const revealEls = document.querySelectorAll(".reveal");
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        });
      },
      { threshold: 0.12 },
    );
    revealEls.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  // Stats counter
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !statsVisible) {
          setStatsVisible(true);
          const targets = {
            jobs: 1500,
            companies: 1000,
            hired: 400,
            satisfaction: 119,
          };
          const duration = 2000;
          const startTime = performance.now();
          const animate = (now) => {
            const progress = Math.min((now - startTime) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCounters({
              jobs: Math.round(targets.jobs * eased),
              companies: Math.round(targets.companies * eased),
              hired: Math.round(targets.hired * eased),
              satisfaction: Math.round(targets.satisfaction * eased),
            });
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 },
    );
    if (statsRef.current) obs.observe(statsRef.current);
    return () => obs.disconnect();
  }, [statsVisible]);

  // Job card spotlight
  const handleJobCardMouseMove = useCallback((e, cardEl) => {
    const rect = cardEl.getBoundingClientRect();
    const mx = ((e.clientX - rect.left) / rect.width) * 100;
    const my = ((e.clientY - rect.top) / rect.height) * 100;
    cardEl.style.setProperty("--mx", mx + "%");
    cardEl.style.setProperty("--my", my + "%");
  }, []);

  const toggleSave = (id) => {
    setSavedJobs((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  const scrollTestimonials = (dir) => {
    if (testimonialRef.current) {
      testimonialRef.current.scrollBy({ left: dir * 370, behavior: "smooth" });
    }
  };

  const filters = [
    "All",
    "Remote",
    "Full-time",
    "Design",
    "Engineering",
    "AI/ML",
  ];

  return (
    <>
      <style>{styles}</style>
      <div id="cursor-dot" ref={cursorDotRef} />
      <div id="cursor-ring" ref={cursorRingRef} />
      <div className="noise-overlay" />

      {/* HERO */}
      <section className="hero" id="home">
        <div className="hero-bg-orb orb1" />
        <div className="hero-bg-orb orb2" />
        <div className="hero-bg-orb orb3" />
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: Math.random() * 100 + "%",
              width: 3 + Math.random() * 5 + "px",
              height: 3 + Math.random() * 5 + "px",
              background: `rgba(255,122,0,${0.1 + Math.random() * 0.25})`,
              animationDuration: 8 + Math.random() * 12 + "s",
              animationDelay: Math.random() * -20 + "s",
            }}
          />
        ))}

        <div className="floating-cards-wrap">
          <div className="float-card float-card-4">
            <div className="float-card-title">Hired Last Month</div>
            <div className="float-card-value">100+</div>
            <div className="float-card-sub">professionals placed</div>
          </div>
        </div>

        <div className="hero-badge">
          <span className="hero-badge-dot" />
          MYSBA AATMANIRBHAR
        </div>

        <h1 className="hero-title">
          Find Work That
          <br />
          <span className="accent">Truly Fits</span> You
        </h1>

        <p className="hero-sub">
          Start Your Aatmanirbhar Journey with MySBA Portal Now!
        </p>

        <div className="hero-search-wrap">
          <span className="search-icon">🔍</span>
          <input type="text" placeholder="Job title, company, or keyword..." />
          <div className="search-divider" />
          <div className="search-location">
            <span style={{ color: "var(--orange)" }}>📍</span>
            <input type="text" placeholder="City or Remote" />
          </div>
          <button
            className="btn-primary"
            style={{ whiteSpace: "nowrap", flexShrink: 0 }}
          >
            Search Jobs
          </button>
        </div>

        <div className="hero-filters">
          {filters.map((f) => (
            <button
              key={f}
              className={`filter-chip ${activeFilter === f ? "active" : ""}`}
              onClick={() => setActiveFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="hero-ctas">
          <button className="btn-hero-primary">Explore Opportunities →</button>
          <button className="btn-hero-secondary">For Employers ↗</button>
        </div>

        <div className="trusted-strip">
          <div className="trusted-label">Trusted by teams at</div>
          <div className="trusted-logos">
            {[
              "Mahindra",
              "MavianIT",
              "Choyal Grinding Solutions",
              "Axis Bank",
              "OVS Learnings",
              "ALDS",
            ].map((c) => (
              <span key={c} className="trusted-logo">
                {c}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED JOBS */}
      <section className="section" id="jobs">
        <div className="section-header reveal">
          <div>
            <div className="section-label">Featured Roles</div>
            <h2 className="section-title">
              Jobs <span className="accent">Worth</span> Your Time
            </h2>
            <p className="section-sub">
              Curated from 1000+ verified companies.
            </p>
          </div>
          <button className="btn-primary">View All 28k Jobs →</button>
        </div>

        <div className="jobs-grid">
          {jobsData.map((job, i) => (
            <div
              key={job.id}
              className={`job-card reveal reveal-delay-${(i % 4) + 1}`}
              onMouseMove={(e) => handleJobCardMouseMove(e, e.currentTarget)}
            >
              {job.isNew && <span className="new-badge">New</span>}
              <div className="job-card-top">
                <div
                  className="company-logo"
                  style={{
                    background: `linear-gradient(135deg,${job.color},${job.color}cc)`,
                  }}
                >
                  {job.logo}
                </div>
                <button
                  className={`save-btn ${savedJobs.has(job.id) ? "saved" : ""}`}
                  onClick={() => toggleSave(job.id)}
                ></button>
              </div>
              <div className="job-title">{job.title}</div>
              <div className="company-name">{job.company}</div>
              <div className="job-meta">
                <span className="job-meta-item">📍 {job.location}</span>
                <span className="job-meta-item">⏱ {job.type}</span>
              </div>
              <div className="job-tags">
                {job.tags.map((t) => (
                  <span key={t} className="job-tag">
                    {t}
                  </span>
                ))}
              </div>
              <div className="job-card-footer">
                <div className="job-salary">
                  {job.salary} <span>/ year</span>
                </div>
                <button className="apply-btn">Apply Now</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WHY JOIN */}
      <section className="section section-alt" id="why">
        <div className="section-header reveal">
          <div>
            <div className="section-label">Why MySBA</div>
            <h2 className="section-title">
              Built for <span className="accent">Ambitious</span> Careers
            </h2>
            <p className="section-sub">
              We don't just post jobs. We architect career paths for the
              builders of tomorrow.
            </p>
          </div>
        </div>

        <div className="why-grid">
          {[
            {
              icon: "🚀",
              title: "Fast-Track Apply",
              desc: "One-click applications to thousands of companies. Your profile does the heavy lifting, you just show up.",
            },
            {
              icon: "🌍",
              title: "Remote-First",
              desc: "60% of our listings are fully remote or async-first. Work from wherever your best thinking happens.",
            },
            {
              icon: "📚",
              title: "Career Coaching",
              desc: "Access to certified career coaches, resume reviewers, and interview prep specialists — all on-platform.",
            },
            {
              icon: "⚡",
              title: "Instant Alerts",
              desc: "Get notified the moment a role that matches your profile goes live. Beat the competition by hours, not days.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className={`why-card reveal reveal-delay-${(i % 3) + 1}`}
            >
              <div className="why-icon">{item.icon}</div>
              <div className="why-title">{item.title}</div>
              <p className="why-desc">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="stats-row reveal" ref={statsRef}>
          <div className="stat-card">
            <div className="stat-number">{counters.jobs.toLocaleString()}+</div>
            <div className="stat-label">Active Job Listings</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">
              {counters.companies.toLocaleString()}+
            </div>
            <div className="stat-label">Verified Companies</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">
              {counters.hired.toLocaleString()}+
            </div>
            <div className="stat-label">Professionals Hired</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">{counters.satisfaction}%</div>
            <div className="stat-label">Satisfaction Rate</div>
          </div>
        </div>
      </section>

      {/* HIRING PROCESS */}
      <section className="section section-alt" id="process">
        <div
          style={{ textAlign: "center", marginBottom: 72 }}
          className="reveal"
        >
          <div className="section-label" style={{ justifyContent: "center" }}>
            The Process
          </div>
          <h2
            className="section-title"
            style={{ maxWidth: "100%", textAlign: "center" }}
          >
            From <span className="accent">Apply</span> to Offer
          </h2>
          <p
            className="section-sub"
            style={{ margin: "16px auto 0", textAlign: "center" }}
          >
            We've streamlined hiring to be faster, fairer, and less painful for
            everyone.
          </p>
        </div>
        <div className="timeline">
          {[
            {
              step: "01",
              title: "Build Your Profile",
              desc: "Create a rich, AI-enhanced profile that goes beyond a resume. Showcase your projects, values, and goals.",
            },
            {
              step: "02",
              title: "Get Matched",
              desc: "Surfaces roles aligned to your skills and ambitions. No sifting through irrelevant listings.",
            },
            {
              step: "03",
              title: "Smart Apply",
              desc: "Apply with one click. Your profile is auto-tailored for each company.",
            },
            {
              step: "04",
              title: "Interview Prep",
              desc: "Get company-specific prep guides, common questions, and compensation benchmarks before each call.",
            },
            {
              step: "05",
              title: "Offer & Negotiate",
              desc: "Receive transparent compensation data to negotiate confidently. We'll help you maximize your offer.",
            },
          ].map((item, i) => (
            <div key={i} className={`timeline-item reveal`}>
              <div className="timeline-side">
                <div className="timeline-card">
                  <div className="timeline-step-num">STEP {item.step}</div>
                  <div className="timeline-step-title">{item.title}</div>
                  <p className="timeline-step-desc">{item.desc}</p>
                </div>
              </div>
              <div className="timeline-center">
                <div className="timeline-dot">{item.step}</div>
              </div>
              <div style={{ flex: 1 }} />
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section" id="testimonials">
        <div className="section-header reveal">
          <div>
            <div className="section-label">Stories</div>
            <h2 className="section-title">
              Hired. <span className="accent">Thriving.</span> Grateful.
            </h2>
            <p className="section-sub">
              Real stories from real people who found their next chapter on
              MySBA
            </p>
          </div>
          <div className="slider-controls">
            <button
              className="slider-btn"
              onClick={() => scrollTestimonials(-1)}
            >
              ←
            </button>
            <button
              className="slider-btn"
              onClick={() => scrollTestimonials(1)}
            >
              →
            </button>
          </div>
        </div>
        <div className="testimonial-track reveal" ref={testimonialRef}>
          {testimonials.map((t, i) => (
            <div key={i} className="testimonial-card">
              <div className="stars">
                {[...Array(t.stars)].map((_, j) => (
                  <span key={j} className="star">
                    ★
                  </span>
                ))}
              </div>
              <p className="testimonial-text">"{t.text}"</p>
              <div className="testimonial-author">
                <div
                  className="author-avatar"
                  style={{
                    background: `linear-gradient(135deg,${t.color},${t.color}aa)`,
                  }}
                >
                  {t.initials}
                </div>
                <div>
                  <div className="author-name">{t.name}</div>
                  <div className="author-role">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* RESUME UPLOAD */}
      <section className="section section-alt" id="resume">
        <div
          className="section-header reveal"
          style={{
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <div className="section-label" style={{ justifyContent: "center" }}>
            Resume Builder
          </div>
          <h2
            className="section-title"
            style={{ maxWidth: "100%", textAlign: "center" }}
          >
            Drop Your Resume. <span className="accent">Watch the Magic.</span>
          </h2>
          <p
            className="section-sub"
            style={{ textAlign: "center", margin: "16px auto 0" }}
          >
            Our AI parses your resume, fills your profile, and identifies skill
            gaps — in under 30 seconds.
          </p>
        </div>
        <div
          className="resume-zone reveal"
          style={{ maxWidth: 680, margin: "0 auto" }}
        >
          <div className="resume-glow-ring" />
          <div className="resume-icon">📄</div>
          <div className="resume-title">Drag & Drop Your Resume</div>
          <p className="resume-sub">
            Upload your resume and let AI do the rest. We'll extract your
            skills, experience, and highlights — then show you exactly where you
            fit in the market.
          </p>
          <button
            className="btn-primary"
            style={{ padding: "14px 36px", fontSize: "1rem" }}
          >
            Choose File ↑
          </button>
          <div className="resume-formats">
            {["PDF", "DOCX", "TXT", "LinkedIn Import"].map((f) => (
              <span key={f} className="format-chip">
                {f}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="section" id="categories">
        <div className="section-header reveal">
          <div>
            <div className="section-label">Browse by Field</div>
            <h2 className="section-title">
              Every <span className="accent">Career Path</span> Covered
            </h2>
          </div>
          <button className="btn-ghost">All Categories →</button>
        </div>
        <div className="categories-grid">
          {categories.map((cat, i) => (
            <div
              key={i}
              className={`cat-card reveal reveal-delay-${(i % 4) + 1}`}
            >
              <span className="cat-icon">{cat.icon}</span>
              <div className="cat-name">{cat.name}</div>
              <div className="cat-count">{cat.count}</div>
              <span className="cat-arrow">→</span>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="section section-alt" id="faq">
        <div
          style={{ textAlign: "center", marginBottom: 64 }}
          className="reveal"
        >
          <div className="section-label" style={{ justifyContent: "center" }}>
            FAQs
          </div>
          <h2
            className="section-title"
            style={{ textAlign: "center", maxWidth: "100%" }}
          >
            Questions? <span className="accent">Answered.</span>
          </h2>
        </div>
        <div className="faq-list">
          {faqs.map((faq, i) => (
            <div key={i} className={`faq-item ${openFaq === i ? "open" : ""}`}>
              <button
                className="faq-question"
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
              >
                <span className="faq-q-text">{faq.q}</span>
                <span className="faq-icon">+</span>
              </button>
              <div className="faq-answer">
                <p className="faq-answer-text">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* NEWSLETTER */}
      <div className="newsletter-section">
        <div className="nl-orb1" />
        <div className="nl-orb2" />
        <div className="nl-content">
          <div className="nl-tag">✦ Weekly Dispatch</div>
          <h2 className="nl-title">
            The Careers Intelligence
            <br />
            Brief. Every Tuesday.
          </h2>
          <p className="nl-sub">
            Salary trends, hiring reports, remote opportunities, and career
            moves from 500+ professionals.
          </p>
          <div className="nl-form">
            <input
              type="email"
              className="nl-input"
              placeholder="your@email.com"
              value={nlEmail}
              onChange={(e) => setNlEmail(e.target.value)}
            />
            <button className="nl-btn">Subscribe Free →</button>
          </div>
        </div>
      </div>
    </>
  );
}
