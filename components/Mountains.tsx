export default function Mountains() {
  return (
    <div
      className="mtns"
      style={{
        position: "fixed",
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 2,
        height: 300,
        pointerEvents: "none",
      }}
    >
      {/* far range */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: "-4%",
          width: "44%",
          height: 210,
          background: "#B6A6E8",
          clipPath:
            "polygon(0 100%,0 55%,18% 20%,32% 46%,50% 8%,68% 42%,84% 22%,100% 52%,100% 100%)",
          opacity: 0.55,
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: 0,
          right: "-4%",
          width: "46%",
          height: 230,
          background: "#B6A6E8",
          clipPath:
            "polygon(0 100%,0 50%,16% 24%,34% 48%,52% 14%,70% 44%,88% 18%,100% 48%,100% 100%)",
          opacity: 0.55,
        }}
      />
      {/* mid range */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: "-6%",
          width: "52%",
          height: 180,
          background: "#9E8CD8",
          clipPath:
            "polygon(0 100%,0 60%,22% 22%,40% 54%,60% 16%,80% 50%,100% 30%,100% 100%)",
          opacity: 0.75,
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: 0,
          right: "-6%",
          width: "54%",
          height: 170,
          background: "#9E8CD8",
          clipPath:
            "polygon(0 100%,0 42%,20% 18%,42% 52%,62% 20%,82% 48%,100% 60%,100% 100%)",
          opacity: 0.75,
        }}
      />
      {/* front peaks with snow caps */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: "6%",
          width: "30%",
          height: 150,
          background: "#8677CC",
          clipPath: "polygon(0 100%,50% 8%,100% 100%)",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: 150,
          left: "16.5%",
          width: "9%",
          height: 34,
          background: "#EDE8FF",
          clipPath: "polygon(0 100%,50% 0,100% 100%,72% 62%,50% 88%,28% 60%)",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: 0,
          right: "8%",
          width: "34%",
          height: 170,
          background: "#8677CC",
          clipPath: "polygon(0 100%,50% 4%,100% 100%)",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: 170,
          right: "20%",
          width: "10%",
          height: 38,
          background: "#EDE8FF",
          clipPath: "polygon(0 100%,50% 0,100% 100%,72% 60%,50% 86%,28% 62%)",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: "38%",
          width: "26%",
          height: 128,
          background: "#7A6BC0",
          clipPath: "polygon(0 100%,50% 12%,100% 100%)",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: 128,
          left: "47.5%",
          width: "7%",
          height: 26,
          background: "#EDE8FF",
          clipPath: "polygon(0 100%,50% 0,100% 100%,72% 64%,50% 88%,28% 62%)",
        }}
      />
      {/* ground haze */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: 44,
          background: "linear-gradient(180deg,transparent,rgba(150,130,220,0.5))",
        }}
      />
    </div>
  );
}
