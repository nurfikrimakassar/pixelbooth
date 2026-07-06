import { STARS } from "@/lib/stars";

export default function Stars() {
  return (
    <>
      {STARS.map((s, i) => (
        <div
          key={i}
          style={{
            position: "fixed",
            top: s.top,
            left: s.left,
            right: s.right,
            width: s.size,
            height: s.size,
            background: s.color,
            zIndex: 2,
            animation: `twinkle ${s.dur}s ease-in-out ${s.delay}s infinite`,
          }}
        />
      ))}

      {/* shooting stars */}
      <div
        style={{
          position: "fixed",
          top: "16%",
          right: "24%",
          height: 3,
          background: "linear-gradient(90deg,transparent,#fff)",
          zIndex: 2,
          animation: "shoot 7s ease-in 2s infinite",
        }}
      />
      <div
        style={{
          position: "fixed",
          top: "52%",
          left: "60%",
          height: 2,
          background: "linear-gradient(90deg,transparent,#fff)",
          zIndex: 2,
          animation: "shoot 9s ease-in 5s infinite",
        }}
      />
    </>
  );
}
