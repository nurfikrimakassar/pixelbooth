"use client";

import { useEffect, useState } from "react";
import { FP } from "@/lib/theme";

type Phase = "counting" | "snap";
const SEQ: { count: number | string; phase: Phase }[] = [
  { count: 3, phase: "counting" },
  { count: 2, phase: "counting" },
  { count: 1, phase: "counting" },
  { count: "●", phase: "snap" },
];

function useCountdown() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % SEQ.length), 900);
    return () => clearInterval(t);
  }, []);
  const { count, phase } = SEQ[i];
  const isSnap = phase === "snap";
  const isOne = count === 1;
  return {
    countLabel: String(count),
    countColor: isSnap ? "#ffffff" : isOne ? "#ff5588" : "#FFE040",
    countGlow: isSnap
      ? "0 0 20px #fff, 0 0 50px rgba(255,255,255,0.5)"
      : isOne
      ? "0 0 16px #ff5588, 0 0 40px rgba(255,60,120,0.4), 3px 3px 0 #7A1840"
      : "0 0 16px #FFE040, 0 0 40px rgba(255,200,0,0.4), 3px 3px 0 #8850AA",
  };
}

const cornerBase: React.CSSProperties = {
  position: "absolute",
  width: 30,
  height: 30,
  zIndex: 4,
};

export default function ArcadeCabinet() {
  const { countLabel, countColor, countGlow } = useCountdown();

  return (
    <div style={{ position: "relative", width: "100%", marginTop: 28 }}>
      {/* PLAYER badge */}
      <div
        style={{
          position: "absolute",
          top: -22,
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 8,
          fontFamily: FP,
          fontSize: 9,
          color: "#3A2A70",
          letterSpacing: 3,
          background: "#FFE040",
          padding: "11px 24px",
          boxShadow: "5px 5px 0 #8850AA",
          whiteSpace: "nowrap",
        }}
      >
        PLAYER 1 — READY!
      </div>

      {/* cabinet body */}
      <div
        className="cabinet-body"
        style={{
          position: "relative",
          background: "#241E52",
          border: "6px solid #FFE040",
          boxShadow:
            "0 0 0 4px #8850AA,14px 14px 0 rgba(30,20,70,0.55),0 0 60px rgba(160,140,255,0.25),inset 0 0 50px rgba(60,40,140,0.3)",
          padding: "40px 32px 30px",
          animation: "float 5s ease-in-out infinite,crt 9s infinite",
        }}
      >
        {/* marquee */}
        <div
          style={{
            fontFamily: FP,
            fontSize: 12,
            textAlign: "center",
            color: "#FFE040",
            letterSpacing: 4,
            marginBottom: 24,
            textShadow: "3px 3px 0 #8850AA",
          }}
        >
          ★ PIXELBOOTH v2 ★
        </div>

        {/* SCREEN ROW */}
        <div
          className="screen-row"
          style={{
            display: "flex",
            gap: 26,
            alignItems: "stretch",
            marginBottom: 26,
          }}
        >
          {/* LEFT: LIVE PREVIEW */}
          <div style={{ flex: 1.15, display: "flex", flexDirection: "column", gap: 12 }}>
            <div
              style={{
                fontFamily: FP,
                fontSize: 8,
                color: "rgba(180,160,255,0.8)",
                letterSpacing: 2,
                textAlign: "left",
              }}
            >
              ◆ LIVE PREVIEW
            </div>
            <div
              className="preview-box"
              style={{
                position: "relative",
                flex: 1,
                minHeight: 460,
                background: "#0A0820",
                border: "5px solid rgba(180,160,255,0.5)",
                overflow: "hidden",
                boxShadow: "inset 0 0 30px rgba(60,40,150,0.5)",
              }}
            >
              {/* scan line */}
              <div
                style={{
                  position: "absolute",
                  left: 0,
                  right: 0,
                  height: 4,
                  background: "rgba(180,160,255,0.18)",
                  animation: "scan 2s linear infinite",
                  zIndex: 3,
                }}
              />
              {/* inner grid */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  zIndex: 1,
                  backgroundImage:
                    "linear-gradient(rgba(160,140,255,0.08) 1px,transparent 1px),linear-gradient(90deg,rgba(160,140,255,0.08) 1px,transparent 1px)",
                  backgroundSize: "30px 30px",
                }}
              />
              {/* frame corners */}
              <div style={{ ...cornerBase, top: 12, left: 12, borderTop: "5px solid #FFE040", borderLeft: "5px solid #FFE040" }} />
              <div style={{ ...cornerBase, top: 12, right: 12, borderTop: "5px solid #FFE040", borderRight: "5px solid #FFE040" }} />
              <div style={{ ...cornerBase, bottom: 12, left: 12, borderBottom: "5px solid #FFE040", borderLeft: "5px solid #FFE040" }} />
              <div style={{ ...cornerBase, bottom: 12, right: 12, borderBottom: "5px solid #FFE040", borderRight: "5px solid #FFE040" }} />
              {/* silhouette */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  zIndex: 2,
                }}
              >
                <div
                  style={{
                    width: 74,
                    height: 74,
                    borderRadius: "50%",
                    background: "linear-gradient(135deg,#2A2060,#3E2E88)",
                    border: "3px solid rgba(150,120,240,0.35)",
                    marginBottom: -2,
                  }}
                />
                <div
                  style={{
                    width: 128,
                    height: 96,
                    borderRadius: "60px 60px 0 0",
                    background: "linear-gradient(180deg,#2A2060,#150E36)",
                    border: "3px solid rgba(150,120,240,0.3)",
                    borderBottom: "none",
                  }}
                />
              </div>
              {/* countdown */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  zIndex: 5,
                }}
              >
                <div
                  style={{
                    fontFamily: FP,
                    fontSize: 104,
                    color: countColor,
                    textShadow: countGlow,
                    transition: "color 0.2s",
                  }}
                >
                  {countLabel}
                </div>
              </div>
              {/* flash */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "#fff",
                  animation: "flash 3s ease-in-out infinite",
                  zIndex: 6,
                  pointerEvents: "none",
                }}
              />
              {/* REC + AF */}
              <div
                style={{
                  position: "absolute",
                  top: 16,
                  left: "50%",
                  transform: "translateX(-50%)",
                  fontFamily: FP,
                  fontSize: 8,
                  color: "rgba(255,80,80,0.95)",
                  zIndex: 7,
                  animation: "blink 1s step-end infinite",
                }}
              >
                ● REC
              </div>
              <div
                style={{
                  position: "absolute",
                  bottom: 16,
                  right: 16,
                  fontFamily: FP,
                  fontSize: 7,
                  color: "rgba(180,160,255,0.7)",
                  zIndex: 7,
                }}
              >
                AF ◉
              </div>
            </div>
          </div>

          {/* RIGHT: PHOTO STRIP */}
          <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 12 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ fontFamily: FP, fontSize: 8, color: "rgba(180,160,255,0.8)", letterSpacing: 2 }}>
                ◆ YOUR STRIP
              </span>
              <span style={{ fontFamily: FP, fontSize: 7, color: "#FFE040" }}>3/4</span>
            </div>
            <div
              className="strip-grid"
              style={{
                flex: 1,
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gridTemplateRows: "1fr 1fr",
                gap: 12,
              }}
            >
              <PhotoPinkAlien />
              <PhotoBlueRobot />
              <PhotoGreenBlob />
              <PhotoAdd />
            </div>
          </div>
        </div>

        {/* CONTROL PANEL */}
        <ControlPanel />
      </div>
    </div>
  );
}

/* ---------- Photo scenes ---------- */

function PhotoPinkAlien() {
  return (
    <div
      style={{
        background: "linear-gradient(160deg,#4A2E9A,#6A44C8 60%,#8A5AD8)",
        border: "4px solid #FFE040",
        boxShadow: "4px 4px 0 rgba(30,20,70,0.5)",
        position: "relative",
        overflow: "hidden",
        animation: "photo-appear 3s ease-in-out infinite",
      }}
    >
      <div style={{ position: "absolute", top: "14%", left: "16%", width: 4, height: 4, background: "#fff" }} />
      <div style={{ position: "absolute", top: "24%", right: "20%", width: 3, height: 3, background: "#FFE040" }} />
      <div style={{ position: "absolute", top: "12%", right: "34%", width: 3, height: 3, background: "#fff" }} />
      <div style={{ position: "absolute", top: "16%", right: "12%", width: 20, height: 20, borderRadius: "50%", background: "#FFB8D4", boxShadow: "inset -5px -3px 0 rgba(0,0,0,0.15)" }} />
      {/* ground */}
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "18%", background: "#7A4AB8" }} />
      <div style={{ position: "absolute", bottom: "14%", left: 0, right: 0, height: 4, background: "#A06AD8" }} />
      <div style={{ position: "absolute", left: "50%", bottom: "16%", transform: "translateX(-50%)", width: "52%" }}>
        {/* antennae */}
        <div style={{ display: "flex", justifyContent: "center", gap: "30%" }}>
          <div style={{ width: 7, height: 7, background: "#FFE040", borderRadius: "50%", boxShadow: "0 0 5px #FFE040" }} />
          <div style={{ width: 7, height: 7, background: "#FFE040", borderRadius: "50%", boxShadow: "0 0 5px #FFE040" }} />
        </div>
        <div style={{ display: "flex", justifyContent: "center", gap: "40%", marginTop: -1 }}>
          <div style={{ width: 4, height: 12, background: "#FF9FC0" }} />
          <div style={{ width: 4, height: 12, background: "#FF9FC0" }} />
        </div>
        {/* head */}
        <div style={{ position: "relative", width: "100%", paddingBottom: "76%", background: "#FF7FB0", border: "4px solid #E0507F", borderRadius: 16, marginTop: -1, boxShadow: "inset -6px -6px 0 rgba(0,0,0,0.12)" }}>
          <div style={{ position: "absolute", top: "28%", left: "18%", width: "22%", height: "26%", background: "#fff", borderRadius: "50%" }} />
          <div style={{ position: "absolute", top: "28%", right: "18%", width: "22%", height: "26%", background: "#fff", borderRadius: "50%" }} />
          <div style={{ position: "absolute", top: "36%", left: "24%", width: "9%", height: "12%", background: "#201030", borderRadius: "50%" }} />
          <div style={{ position: "absolute", top: "36%", right: "24%", width: "9%", height: "12%", background: "#201030", borderRadius: "50%" }} />
          <div style={{ position: "absolute", top: "60%", left: "16%", width: "14%", height: "9%", background: "#FF4A7F", opacity: 0.7, borderRadius: "50%" }} />
          <div style={{ position: "absolute", top: "60%", right: "16%", width: "14%", height: "9%", background: "#FF4A7F", opacity: 0.7, borderRadius: "50%" }} />
          <div style={{ position: "absolute", top: "62%", left: "40%", width: "20%", height: "10%", background: "#201030", borderRadius: "0 0 8px 8px" }} />
        </div>
        {/* body + waving arm */}
        <div style={{ position: "relative", width: "66%", height: 16, margin: "-2px auto 0", background: "#E85A9A", border: "3px solid #C0405F", borderRadius: "8px 8px 4px 4px" }}>
          <div style={{ position: "absolute", top: -8, right: -9, width: 12, height: 8, background: "#FF7FB0", border: "3px solid #E0507F", borderRadius: 6, transform: "rotate(-32deg)" }} />
        </div>
      </div>
      <div style={{ position: "absolute", top: "44%", left: "12%", fontFamily: FP, fontSize: 8, color: "#FFE040" }}>✦</div>
      <div style={{ position: "absolute", bottom: 5, left: 6, fontFamily: FP, fontSize: 6, color: "#FFE040", textShadow: "1px 1px 0 #000" }}>01</div>
    </div>
  );
}

function PhotoBlueRobot() {
  return (
    <div
      style={{
        background: "linear-gradient(160deg,#231A5E,#3A2C94 60%,#4636B0)",
        border: "4px solid #FFE040",
        boxShadow: "4px 4px 0 rgba(30,20,70,0.5)",
        position: "relative",
        overflow: "hidden",
        animation: "photo-appear 3s ease-in-out 1s infinite",
      }}
    >
      <div style={{ position: "absolute", top: "14%", left: "20%", width: 3, height: 3, background: "#fff" }} />
      <div style={{ position: "absolute", top: "22%", left: "12%", width: 4, height: 4, background: "#7CE0FF" }} />
      <div style={{ position: "absolute", top: "12%", right: "18%", width: 3, height: 3, background: "#fff" }} />
      {/* ringed planet */}
      <div style={{ position: "absolute", top: "15%", left: "14%", width: 18, height: 18, borderRadius: "50%", background: "#5AC0FF", boxShadow: "inset -4px -3px 0 rgba(0,0,0,0.2)" }} />
      <div style={{ position: "absolute", top: "20%", left: "9%", width: 28, height: 7, border: "2px solid rgba(160,220,255,0.7)", borderRadius: "50%", transform: "rotate(-18deg)" }} />
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "16%", background: "#2E2278" }} />
      <div style={{ position: "absolute", bottom: "12%", left: 0, right: 0, height: 4, background: "#4636B0" }} />
      <div style={{ position: "absolute", left: "50%", bottom: "14%", transform: "translateX(-50%)", width: "52%" }}>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div style={{ width: 7, height: 7, background: "#FF6688", borderRadius: "50%", boxShadow: "0 0 6px #FF6688" }} />
        </div>
        <div style={{ display: "flex", justifyContent: "center", marginTop: -1 }}>
          <div style={{ width: 4, height: 10, background: "#9AB0D0" }} />
        </div>
        {/* head */}
        <div style={{ position: "relative", width: "100%", paddingBottom: "68%", background: "#5AC0FF", border: "4px solid #2A80C0", borderRadius: 8, marginTop: -1, boxShadow: "inset -6px -6px 0 rgba(0,0,0,0.12)" }}>
          <div style={{ position: "absolute", top: "24%", left: "16%", width: "26%", height: "22%", background: "#fff", border: "2px solid #103050", borderRadius: 3 }} />
          <div style={{ position: "absolute", top: "24%", right: "16%", width: "26%", height: "22%", background: "#fff", border: "2px solid #103050", borderRadius: 3 }} />
          <div style={{ position: "absolute", top: "29%", left: "24%", width: "9%", height: "10%", background: "#103050" }} />
          <div style={{ position: "absolute", top: "29%", right: "24%", width: "9%", height: "10%", background: "#103050" }} />
          <div style={{ position: "absolute", bottom: "16%", left: "26%", right: "26%", height: "14%", background: "#103050", display: "flex", gap: 2, padding: 2 }}>
            <div style={{ flex: 1, background: "#7CFFB0" }} />
            <div style={{ flex: 1, background: "#FFE040" }} />
            <div style={{ flex: 1, background: "#7CFFB0" }} />
          </div>
        </div>
        {/* body */}
        <div style={{ position: "relative", width: "70%", height: 16, margin: "-1px auto 0", background: "#3E9AD8", border: "3px solid #2A80C0", borderRadius: 5, display: "flex", alignItems: "center", justifyContent: "center", gap: 3 }}>
          <div style={{ width: 4, height: 4, background: "#FF6688", borderRadius: "50%" }} />
          <div style={{ width: 4, height: 4, background: "#FFE040", borderRadius: "50%" }} />
        </div>
      </div>
      <div style={{ position: "absolute", top: "40%", right: "10%", fontFamily: FP, fontSize: 7, color: "#7CE0FF" }}>⚡</div>
      <div style={{ position: "absolute", bottom: 5, left: 6, fontFamily: FP, fontSize: 6, color: "#FFE040", textShadow: "1px 1px 0 #000" }}>02</div>
    </div>
  );
}

function PhotoGreenBlob() {
  return (
    <div
      style={{
        background: "linear-gradient(160deg,#1C1450,#2A2072 60%,#382A90)",
        border: "4px solid #FFE040",
        boxShadow: "4px 4px 0 rgba(30,20,70,0.5)",
        position: "relative",
        overflow: "hidden",
        animation: "photo-appear 3s ease-in-out 2s infinite",
      }}
    >
      <div style={{ position: "absolute", top: "16%", left: "22%", width: 3, height: 3, background: "#fff" }} />
      <div style={{ position: "absolute", top: "12%", right: "24%", width: 4, height: 4, background: "#7CFFB0" }} />
      <div style={{ position: "absolute", top: "26%", right: "14%", width: 3, height: 3, background: "#fff" }} />
      {/* crescent moon */}
      <div style={{ position: "absolute", top: "14%", right: "16%", width: 20, height: 20, borderRadius: "50%", background: "#EDE8FF", boxShadow: "6px 3px 0 -2px #2A2072 inset" }} />
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "16%", background: "#241A66", borderTop: "4px solid #3A2C94" }} />
      <div style={{ position: "absolute", left: "50%", bottom: "15%", transform: "translateX(-50%)", width: "56%" }}>
        <div style={{ position: "relative", width: "100%", paddingBottom: "80%", background: "#7CFFB0", border: "4px solid #2AA868", borderRadius: "46% 46% 38% 38%", boxShadow: "inset -6px -8px 0 rgba(0,0,0,0.12)" }}>
          <div style={{ position: "absolute", top: "24%", left: "20%", width: "20%", height: "28%", background: "#fff", borderRadius: "50%" }} />
          <div style={{ position: "absolute", top: "24%", right: "20%", width: "20%", height: "28%", background: "#fff", borderRadius: "50%" }} />
          <div style={{ position: "absolute", top: "33%", left: "25%", width: "10%", height: "14%", background: "#0A3020", borderRadius: "50%" }} />
          <div style={{ position: "absolute", top: "33%", right: "25%", width: "10%", height: "14%", background: "#0A3020", borderRadius: "50%" }} />
          <div style={{ position: "absolute", top: "62%", left: "36%", width: "28%", height: "14%", background: "#FF6688", borderRadius: "0 0 10px 10px" }} />
          <div style={{ position: "absolute", top: "56%", left: "12%", width: "12%", height: "8%", background: "#4AE890", opacity: 0.6, borderRadius: "50%" }} />
          <div style={{ position: "absolute", top: "56%", right: "12%", width: "12%", height: "8%", background: "#4AE890", opacity: 0.6, borderRadius: "50%" }} />
          {/* feet */}
          <div style={{ position: "absolute", bottom: -8, left: "24%", width: "16%", height: 10, background: "#2AA868", borderRadius: "0 0 6px 6px" }} />
          <div style={{ position: "absolute", bottom: -8, right: "24%", width: "16%", height: 10, background: "#2AA868", borderRadius: "0 0 6px 6px" }} />
        </div>
      </div>
      <div style={{ position: "absolute", top: "46%", left: "12%", width: 6, height: 6, borderRadius: "50%", background: "rgba(124,255,176,0.5)" }} />
      <div style={{ position: "absolute", top: "56%", left: "18%", width: 4, height: 4, borderRadius: "50%", background: "rgba(124,255,176,0.4)" }} />
      <div style={{ position: "absolute", bottom: 5, left: 6, fontFamily: FP, fontSize: 6, color: "#FFE040", textShadow: "1px 1px 0 #000" }}>03</div>
    </div>
  );
}

function PhotoAdd() {
  return (
    <div
      style={{
        background: "rgba(10,8,32,0.6)",
        border: "4px dashed rgba(160,140,255,0.4)",
        display: "flex",
        flexDirection: "column",
        gap: 6,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <span style={{ fontFamily: FP, fontSize: 22, color: "rgba(160,140,255,0.5)" }}>+</span>
      <span style={{ fontFamily: FP, fontSize: 6, color: "rgba(160,140,255,0.5)", letterSpacing: 1 }}>ADD</span>
    </div>
  );
}

/* ---------- Control panel ---------- */

function ControlPanel() {
  return (
    <div
      className="ctrl-panel"
      style={{
        background: "#1A1542",
        border: "4px solid rgba(200,190,255,0.35)",
        padding: "18px 20px",
        boxShadow: "inset 0 0 20px rgba(0,0,0,0.3)",
        display: "flex",
        alignItems: "center",
        gap: 22,
      }}
    >
      {/* joystick */}
      <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", alignItems: "center", gap: 0 }}>
        <div style={{ width: 22, height: 22, borderRadius: "50%", background: "radial-gradient(circle at 35% 30%,#FF6688,#C02050)", border: "3px solid #fff", boxShadow: "0 0 10px rgba(255,80,120,0.5)" }} />
        <div style={{ width: 8, height: 20, background: "linear-gradient(180deg,#8850AA,#5A2E7A)" }} />
        <div style={{ width: 34, height: 12, borderRadius: "50%", background: "#0A0820", border: "2px solid rgba(200,190,255,0.3)", marginTop: -2 }} />
      </div>
      {/* frame selector */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 8 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{ fontFamily: FP, fontSize: 7, color: "rgba(180,160,255,0.75)", letterSpacing: 2 }}>FRAME</span>
          <span style={{ fontFamily: FP, fontSize: 6, color: "#FFE040" }}>01/50</span>
        </div>
        <div style={{ display: "flex", gap: 7 }}>
          <div style={{ flex: 1, height: 26, background: "#FFE040", border: "2px solid #fff", boxShadow: "0 0 10px rgba(255,220,64,0.45)" }} />
          <div style={{ flex: 1, height: 26, background: "#E85A9A", border: "2px solid rgba(255,150,190,0.5)", opacity: 0.6 }} />
          <div style={{ flex: 1, height: 26, background: "#5AC0FF", border: "2px solid rgba(150,220,255,0.5)", opacity: 0.6 }} />
          <div style={{ flex: 1, height: 26, background: "#7CFFB0", border: "2px solid rgba(160,255,200,0.5)", opacity: 0.6 }} />
          <div style={{ flex: 1, height: 26, background: "#B088FF", border: "2px solid rgba(200,170,255,0.5)", opacity: 0.6 }} />
        </div>
      </div>
      {/* SNAP button */}
      <button
        className="btn-snap"
        style={{
          flexShrink: 0,
          fontFamily: FP,
          fontSize: 10,
          background: "#FFE040",
          color: "#3A2A70",
          padding: "18px 26px",
          border: "none",
          cursor: "pointer",
          boxShadow: "5px 5px 0 #8850AA",
          letterSpacing: 2,
        }}
      >
        ● SNAP
      </button>
    </div>
  );
}
