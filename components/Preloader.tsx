"use client";

import { useEffect, useRef, useState } from "react";
import { FP, FM } from "@/lib/theme";

export default function Preloader() {
  const [progress, setProgress] = useState(0);
  const [leaving, setLeaving] = useState(false);
  const [gone, setGone] = useState(false);
  const doneRef = useRef(false);

  useEffect(() => {
    // fake progress up to 92%
    const iv = setInterval(() => {
      setProgress((p) => Math.min(92, p + Math.random() * 13));
    }, 140);

    const finish = () => {
      if (doneRef.current) return;
      doneRef.current = true;
      clearInterval(iv);
      setProgress(100);
      // brief hold, then fade out, then unmount
      setTimeout(() => {
        setLeaving(true);
        setTimeout(() => setGone(true), 560);
      }, 260);
    };

    // wait for load + fonts, min ~600ms since first paint
    let fired = false;
    const go = () => {
      if (fired) return;
      fired = true;
      const d = performance?.now ? performance.now() : 0;
      const wait = Math.max(600 - d, 0);
      setTimeout(finish, wait);
    };

    const onReady = () => {
      if (document.fonts && document.fonts.ready) {
        document.fonts.ready.then(go);
      } else {
        go();
      }
    };

    if (document.readyState === "complete") onReady();
    else window.addEventListener("load", onReady);

    const hardCap = setTimeout(finish, 5000); // hard cap

    return () => {
      clearInterval(iv);
      clearTimeout(hardCap);
      window.removeEventListener("load", onReady);
    };
  }, []);

  if (gone) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 26,
        background:
          "radial-gradient(ellipse 70% 60% at 50% 30%, #2E2568 0%, #1A1440 70%, #120E30 100%)",
        animation: leaving ? "pl-out .5s ease forwards" : undefined,
      }}
    >
      {/* grid */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.04) 1px,transparent 1px)",
          backgroundSize: "34px 34px",
        }}
      />
      {/* scanlines */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          background:
            "repeating-linear-gradient(0deg,transparent,transparent 3px,rgba(0,0,0,0.08) 3px,rgba(0,0,0,0.08) 4px)",
        }}
      />
      {/* wordmark */}
      <div style={{ position: "relative", textAlign: "center" }}>
        <div
          style={{
            fontFamily: FP,
            fontSize: "clamp(22px,4vw,40px)",
            color: "#FFE040",
            textShadow: "4px 4px 0 #8850AA,7px 7px 0 #3A2A70",
            letterSpacing: 3,
            lineHeight: 1.4,
          }}
        >
          PIXELBOOTH
        </div>
        <div
          style={{
            fontFamily: FP,
            fontSize: 9,
            color: "#B9A8FF",
            letterSpacing: 3,
            marginTop: 16,
          }}
        >
          A RETRO PHOTOBOOTH
        </div>
      </div>
      {/* progress bar */}
      <div style={{ position: "relative", width: "min(340px,72vw)" }}>
        <div
          style={{
            fontFamily: FP,
            fontSize: 8,
            color: "#FFE040",
            letterSpacing: 2,
            marginBottom: 10,
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <span>LOADING</span>
          <span style={{ animation: "pl-blink .8s step-end infinite" }}>...</span>
        </div>
        <div
          style={{
            width: "100%",
            height: 22,
            background: "#0F0A2E",
            border: "4px solid #FFE040",
            boxShadow: "4px 4px 0 rgba(0,0,0,0.4)",
            padding: 3,
          }}
        >
          <div
            style={{
              width: `${progress}%`,
              height: "100%",
              background:
                "repeating-linear-gradient(90deg,#FFE040 0,#FFE040 8px,#FFC020 8px,#FFC020 16px)",
              transition: "width .2s ease",
            }}
          />
        </div>
        <div
          style={{
            fontFamily: FM,
            fontSize: 11,
            color: "rgba(185,168,255,0.75)",
            letterSpacing: 1,
            marginTop: 12,
            textAlign: "center",
          }}
        >
          INSERT COIN TO CONTINUE
        </div>
      </div>
    </div>
  );
}
