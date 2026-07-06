export default function Background() {
  return (
    <>
      {/* bright blue-lilac space */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 0,
          background: [
            "radial-gradient(ellipse 60% 50% at 78% 12%, rgba(255,150,220,0.35) 0%, transparent 60%)",
            "radial-gradient(ellipse 70% 60% at 15% 85%, rgba(120,200,255,0.32) 0%, transparent 60%)",
            "radial-gradient(ellipse 50% 40% at 50% 40%, rgba(180,140,255,0.28) 0%, transparent 65%)",
            "linear-gradient(200deg,#8E84D8 0%,#7A72C8 30%,#645FB4 60%,#524EA0 85%,#453F90 100%)",
          ].join(","),
        }}
      />

      {/* nebula glow blobs */}
      <div
        style={{
          position: "fixed",
          top: "-8%",
          left: "-6%",
          width: 520,
          height: 520,
          borderRadius: "50%",
          zIndex: 1,
          pointerEvents: "none",
          background:
            "radial-gradient(circle,rgba(200,150,255,0.35) 0%,transparent 65%)",
        }}
      />
      <div
        style={{
          position: "fixed",
          bottom: "-12%",
          right: "-8%",
          width: 560,
          height: 560,
          borderRadius: "50%",
          zIndex: 1,
          pointerEvents: "none",
          background:
            "radial-gradient(circle,rgba(120,200,255,0.3) 0%,transparent 65%)",
        }}
      />
      <div
        style={{
          position: "fixed",
          top: "40%",
          left: "44%",
          width: 380,
          height: 380,
          borderRadius: "50%",
          zIndex: 1,
          pointerEvents: "none",
          background:
            "radial-gradient(circle,rgba(255,180,240,0.15) 0%,transparent 70%)",
        }}
      />

      {/* pixel grid */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 1,
          pointerEvents: "none",
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.04) 1px,transparent 1px)",
          backgroundSize: "34px 34px",
        }}
      />

      {/* scanlines */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 201,
          pointerEvents: "none",
          background:
            "repeating-linear-gradient(0deg,transparent,transparent 3px,rgba(0,0,0,0.045) 3px,rgba(0,0,0,0.045) 4px)",
        }}
      />
    </>
  );
}
