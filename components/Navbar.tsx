"use client";

import { useState } from "react";
import { FP } from "@/lib/theme";

const menuItem: React.CSSProperties = {
  cursor: "pointer",
  fontFamily: FP,
  fontSize: 9,
  color: "rgba(230,225,255,0.9)",
  letterSpacing: 1,
  padding: "16px 18px",
};

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav
      className="navbar"
      style={{
        position: "relative",
        zIndex: 50,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "22px 0",
        background: "rgba(40,35,95,0.55)",
        borderBottom: "5px solid #FFE040",
        backdropFilter: "blur(6px)",
        boxShadow: "0 5px 0 rgba(30,25,75,0.4)",
      }}
    >
      <div
        className="nav-inner"
        style={{
          position: "relative",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 56px",
        }}
      >
        {/* logo */}
        <div
          className="nav-side"
          style={{ width: 260, display: "flex", justifyContent: "flex-start" }}
        >
          <div
            className="nav-logo"
            style={{
              fontFamily: FP,
              fontSize: 15,
              color: "#FFE040",
              textShadow: "3px 3px 0 #8850AA",
              letterSpacing: 2,
            }}
          >
            PIXELBOOTH
          </div>
        </div>

        {/* centered tabs */}
        <div
          className="nav-tabs"
          style={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            gap: 40,
            fontFamily: FP,
            fontSize: 9,
            color: "rgba(230,225,255,0.85)",
            letterSpacing: 1,
          }}
        >
          <span className="nav-tab">FRAMES</span>
          <span className="nav-tab">GALLERY</span>
          <span className="nav-tab">ABOUT</span>
        </div>

        {/* mobile dropdown */}
        <div
          id="nav-menu"
          style={{
            display: open ? "flex" : "none",
            position: "absolute",
            top: "100%",
            right: 14,
            marginTop: 10,
            flexDirection: "column",
            gap: 2,
            background: "rgba(20,15,60,0.97)",
            border: "4px solid #FFE040",
            boxShadow: "5px 5px 0 rgba(20,15,60,0.5)",
            zIndex: 200,
            minWidth: 160,
          }}
        >
          <span
            style={{ ...menuItem, borderBottom: "2px solid rgba(255,224,64,0.2)" }}
          >
            FRAMES
          </span>
          <span
            style={{ ...menuItem, borderBottom: "2px solid rgba(255,224,64,0.2)" }}
          >
            GALLERY
          </span>
          <span style={menuItem}>ABOUT</span>
        </div>

        {/* button + burger (same width as logo on desktop) */}
        <div
          className="nav-side"
          style={{
            width: 260,
            display: "flex",
            alignItems: "center",
            gap: 12,
            justifyContent: "flex-end",
          }}
        >
          <a
            href="#"
            className="btn-open"
            style={{
              textDecoration: "none",
              display: "inline-block",
              fontFamily: FP,
              fontSize: 9,
              background: "#FFE040",
              color: "#3A2A70",
              padding: "14px 22px",
              border: "none",
              cursor: "pointer",
              boxShadow: "5px 5px 0 #8850AA",
              letterSpacing: 1,
            }}
          >
            OPEN BOOTH
          </a>
          <button
            className="nav-burger"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
            style={{
              display: "none",
              background: "#FFE040",
              border: "none",
              width: 44,
              height: 44,
              cursor: "pointer",
              boxShadow: "3px 3px 0 #8850AA",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: 4,
            }}
          >
            <span style={{ width: 20, height: 3, background: "#3A2A70", display: "block" }} />
            <span style={{ width: 20, height: 3, background: "#3A2A70", display: "block" }} />
            <span style={{ width: 20, height: 3, background: "#3A2A70", display: "block" }} />
          </button>
        </div>
      </div>
    </nav>
  );
}
