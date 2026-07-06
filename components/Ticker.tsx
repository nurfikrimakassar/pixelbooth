import { FP } from "@/lib/theme";

const TEXT =
  "★ NEW: 12 SPACE FRAMES ADDED ★ 100% FREE — NO SIGN UP ★ EXPORT UP TO 4K ★ NEW: 12 SPACE FRAMES ADDED ★ 100% FREE — NO SIGN UP ★ EXPORT UP TO 4K ★ NEW: 12 SPACE FRAMES ADDED ★ 100% FREE — NO SIGN UP ★ EXPORT UP TO 4K ★\u00A0";

const span: React.CSSProperties = {
  fontFamily: FP,
  fontSize: 14,
  color: "#5A2E7A",
  letterSpacing: 2,
};

export default function Ticker() {
  return (
    <div
      style={{
        position: "relative",
        zIndex: 60,
        background: "#FFE040",
        overflow: "hidden",
        padding: "22px 0",
        borderTop: "6px solid #8850AA",
        boxShadow: "0 -4px 0 rgba(30,20,70,0.3)",
      }}
    >
      <div style={{ display: "flex", whiteSpace: "nowrap", animation: "ticker 17s linear infinite" }}>
        <span style={span}>{TEXT}</span>
        <span style={span}>{TEXT}</span>
      </div>
    </div>
  );
}
