export default function Celestial() {
  return (
    <>
      {/* ===== PIXEL PLANET (top-right) ===== */}
      <div
        style={{
          position: "fixed",
          top: 70,
          right: 80,
          zIndex: 3,
          animation: "float 8s ease-in-out infinite",
        }}
      >
        <div
          style={{
            position: "relative",
            width: 88,
            height: 88,
            borderRadius: "50%",
            background: "linear-gradient(135deg,#FF9FC0,#E85A9A)",
            border: "4px solid #FFB8D4",
            boxShadow:
              "inset -22px -14px 0 rgba(0,0,0,0.22),0 0 26px rgba(255,120,180,0.4)",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 22,
              left: 24,
              width: 12,
              height: 12,
              borderRadius: "50%",
              background: "rgba(0,0,0,0.18)",
            }}
          />
          <div
            style={{
              position: "absolute",
              top: 44,
              left: 48,
              width: 8,
              height: 8,
              borderRadius: "50%",
              background: "rgba(0,0,0,0.14)",
            }}
          />
        </div>
        {/* ring */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            width: 138,
            height: 28,
            marginLeft: -69,
            marginTop: -14,
            borderRadius: "50%",
            border: "6px solid rgba(255,220,120,0.6)",
            transform: "rotateX(68deg)",
            boxShadow: "0 0 14px rgba(255,220,120,0.25)",
          }}
        />
        {/* orbiting moon */}
        <div style={{ position: "absolute", top: "50%", left: "50%" }}>
          <div
            style={{
              width: 12,
              height: 12,
              borderRadius: "50%",
              background: "#E8DCFF",
              border: "2px solid #fff",
              animation: "planet-orbit 5s linear infinite",
              boxShadow: "0 0 6px rgba(230,220,255,0.6)",
            }}
          />
        </div>
      </div>

      {/* ===== PIXEL SPACESHIP (left mid) ===== */}
      <div
        style={{
          position: "fixed",
          top: "44%",
          left: 70,
          zIndex: 3,
          animation: "drift 7s ease-in-out infinite",
        }}
      >
        <div
          style={{
            position: "relative",
            width: 0,
            height: 0,
            borderLeft: "16px solid transparent",
            borderRight: "16px solid transparent",
            borderBottom: "12px solid #B0A0FF",
          }}
        />
        <div
          style={{
            width: 32,
            height: 16,
            background: "#8E7CE8",
            border: "2px solid #C0B0FF",
            marginTop: -1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 0 12px rgba(160,140,255,0.5)",
          }}
        >
          <div
            style={{
              width: 9,
              height: 9,
              borderRadius: "50%",
              background: "#FFE040",
              border: "1px solid #fff",
              boxShadow: "0 0 6px #FFE040",
            }}
          />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: -1,
          }}
        >
          <div
            style={{
              width: 9,
              height: 7,
              background: "#6E5CC8",
              clipPath: "polygon(0 0,100% 0,50% 100%)",
            }}
          />
          <div
            style={{
              width: 9,
              height: 7,
              background: "#6E5CC8",
              clipPath: "polygon(0 0,100% 0,50% 100%)",
            }}
          />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 3,
            marginTop: 1,
          }}
        >
          <div
            style={{
              width: 4,
              height: 9,
              background: "linear-gradient(180deg,#FF8800,transparent)",
              animation: "blink 0.3s step-end infinite",
            }}
          />
          <div
            style={{
              width: 5,
              height: 12,
              background: "linear-gradient(180deg,#FFAA00,transparent)",
              animation: "blink 0.4s step-end 0.1s infinite",
            }}
          />
          <div
            style={{
              width: 4,
              height: 9,
              background: "linear-gradient(180deg,#FF8800,transparent)",
              animation: "blink 0.35s step-end 0.05s infinite",
            }}
          />
        </div>
      </div>

      {/* ===== PIXEL MOON (bottom-left) ===== */}
      <div
        style={{
          position: "fixed",
          bottom: 90,
          left: 60,
          zIndex: 3,
          animation: "float 10s ease-in-out 2s infinite",
        }}
      >
        <div
          style={{
            position: "relative",
            width: 54,
            height: 54,
            borderRadius: "50%",
            background: "linear-gradient(135deg,#EDE6FF,#C5B8E8)",
            border: "3px solid #F0EAFF",
            boxShadow:
              "inset -12px -8px 0 rgba(0,0,0,0.1),0 0 16px rgba(220,210,255,0.4)",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 14,
              left: 12,
              width: 9,
              height: 9,
              borderRadius: "50%",
              background: "rgba(0,0,0,0.1)",
            }}
          />
          <div
            style={{
              position: "absolute",
              top: 30,
              left: 28,
              width: 6,
              height: 6,
              borderRadius: "50%",
              background: "rgba(0,0,0,0.08)",
            }}
          />
        </div>
      </div>

      {/* ===== PIXEL ASTEROIDS ===== */}
      <div
        style={{
          position: "fixed",
          bottom: 130,
          right: 120,
          zIndex: 3,
          animation: "float2 6s ease-in-out infinite",
        }}
      >
        <div
          style={{
            width: 20,
            height: 15,
            background: "#A89CD0",
            border: "2px solid #C8BCE8",
            clipPath: "polygon(20% 0%,80% 0%,100% 40%,90% 100%,10% 100%,0% 60%)",
            boxShadow: "inset -4px -3px 0 rgba(0,0,0,0.18)",
          }}
        />
      </div>
      <div
        style={{
          position: "fixed",
          top: "34%",
          right: 200,
          zIndex: 3,
          animation: "float2 8s ease-in-out 1s infinite",
        }}
      >
        <div
          style={{
            width: 14,
            height: 11,
            background: "#9488C4",
            border: "2px solid #BAAEE0",
            clipPath: "polygon(15% 0%,85% 5%,100% 50%,85% 95%,15% 100%,0% 55%)",
            boxShadow: "inset -3px -2px 0 rgba(0,0,0,0.18)",
          }}
        />
      </div>
    </>
  );
}
