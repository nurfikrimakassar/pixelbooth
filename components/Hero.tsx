import { FP } from "@/lib/theme";
import ArcadeCabinet from "./ArcadeCabinet";

export default function Hero() {
  return (
    <main
      className="hero"
      style={{
        position: "relative",
        zIndex: 10,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "64px 56px",
        margin: "0 auto",
        width: "100%",
        animation: "slide-up 0.7s ease both",
      }}
    >
      <div
        className="hero-col"
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          gap: 28,
        }}
      >
        {/* badge */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 10,
            background: "rgba(30,25,80,0.5)",
            border: "3px solid #FFE040",
            padding: "11px 18px",
            boxShadow: "4px 4px 0 #8850AA",
          }}
        >
          <div
            style={{
              width: 8,
              height: 8,
              background: "#FFE040",
              animation: "blink 0.9s step-end infinite",
              boxShadow: "0 0 8px #FFE040",
            }}
          />
          <span
            className="badge-text"
            style={{ fontFamily: FP, fontSize: 8, color: "#FFE040", letterSpacing: 3 }}
          >
            ARCADE PHOTOBOOTH
            <span className="est-tag"> · EST.2026</span>
          </span>
        </div>

        {/* headline */}
        <h1 className="headline" style={{ fontFamily: FP, lineHeight: 1.35, margin: 0 }}>
          <span
            style={{
              display: "block",
              fontSize: "clamp(30px,4.4vw,58px)",
              color: "#FFE040",
              textShadow:
                "5px 5px 0 #8850AA,9px 9px 0 #5A2E7A,12px 12px 0 rgba(30,20,70,0.4)",
            }}
          >
            STRIKE A POSE,
          </span>
          <span
            style={{
              display: "block",
              fontSize: "clamp(30px,4.4vw,58px)",
              color: "#fff",
              textShadow:
                "5px 5px 0 #5A4EBE,9px 9px 0 #362A8A,12px 12px 0 rgba(30,20,70,0.4)",
            }}
          >
            GET FRAMED ★
          </span>
        </h1>

        <div
          className="subhead"
          style={{
            fontFamily: FP,
            fontSize: "clamp(11px,1.4vw,16px)",
            color: "rgba(210,225,255,0.95)",
            letterSpacing: 3,
            textShadow: "3px 3px 0 #5A4EBE",
          }}
        >
          A RETRO PHOTOBOOTH FROM OUTER SPACE
        </div>

        {/* desc */}
        <p
          className="desc"
          style={{
            fontSize: 15,
            lineHeight: 2,
            color: "rgba(235,232,255,0.92)",
            maxWidth: 1020,
            textShadow: "1px 1px 0 rgba(30,20,70,0.5)",
            margin: 0,
          }}
        >
          Upload fotomu, pilih frame pixel favorit, lalu download hasilnya dalam
          hitungan detik — gratis, tanpa antre, tanpa akun. Abadikan momen serumu
          dengan sentuhan retro luar angkasa.
        </p>

        {/* arcade cabinet */}
        <ArcadeCabinet />

        {/* CTA */}
        <div
          className="cta-row"
          style={{
            display: "flex",
            gap: 16,
            justifyContent: "center",
            marginTop: 8,
            width: "100%",
            maxWidth: 640,
          }}
        >
          <a
            href="#"
            className="btn-enter"
            style={{
              textDecoration: "none",
              textAlign: "center",
              fontFamily: FP,
              fontSize: 11,
              background: "#FFE040",
              color: "#3A2A70",
              padding: "22px 12px",
              border: "none",
              cursor: "pointer",
              flex: 1,
              boxShadow: "6px 6px 0 #8850AA,0 0 30px rgba(255,220,64,0.3)",
              letterSpacing: 2,
            }}
          >
            ▶ ENTER BOOTH
          </a>
          <a
            href="#"
            className="btn-browse"
            style={{
              textDecoration: "none",
              textAlign: "center",
              fontFamily: FP,
              fontSize: 9,
              background: "rgba(30,25,80,0.5)",
              color: "rgba(230,225,255,0.85)",
              padding: "22px 12px",
              border: "3px solid rgba(200,190,255,0.5)",
              cursor: "pointer",
              flex: 1,
              boxShadow: "6px 6px 0 rgba(30,20,70,0.5)",
              letterSpacing: 1,
            }}
          >
            BROWSE FRAMES
          </a>
        </div>

        {/* stats */}
        <div
          className="stats"
          style={{
            display: "flex",
            gap: 0,
            background: "rgba(30,25,80,0.5)",
            border: "5px solid rgba(200,190,255,0.4)",
            boxShadow: "8px 8px 0 rgba(30,20,70,0.5)",
            maxWidth: 760,
            width: "100%",
          }}
        >
          <div style={{ flex: 1, textAlign: "center", padding: "30px 12px", borderRight: "5px solid rgba(200,190,255,0.25)" }}>
            <div style={{ fontFamily: FP, fontSize: 34, color: "#FFE040", textShadow: "4px 4px 0 #8850AA", marginBottom: 12 }}>50+</div>
            <div style={{ fontFamily: FP, fontSize: 9, color: "rgba(200,210,255,0.65)", letterSpacing: 2 }}>FRAMES</div>
          </div>
          <div style={{ flex: 1, textAlign: "center", padding: "30px 12px", borderRight: "5px solid rgba(200,190,255,0.25)" }}>
            <div style={{ fontFamily: FP, fontSize: 34, color: "#FFE040", textShadow: "4px 4px 0 #8850AA", marginBottom: 12 }}>4K</div>
            <div style={{ fontFamily: FP, fontSize: 9, color: "rgba(200,210,255,0.65)", letterSpacing: 2 }}>EXPORT</div>
          </div>
          <div style={{ flex: 1, textAlign: "center", padding: "30px 12px" }}>
            <div style={{ fontFamily: FP, fontSize: 26, color: "#7CFFB0", textShadow: "4px 4px 0 #2A8858", marginBottom: 12, marginTop: 4 }}>FREE</div>
            <div style={{ fontFamily: FP, fontSize: 9, color: "rgba(200,210,255,0.65)", letterSpacing: 2 }}>FOREVER</div>
          </div>
        </div>
      </div>
    </main>
  );
}
