# PixelBooth — Next.js

Landing page PixelBooth (retro-pixel photobooth) hasil slice dari mockup HTML ke Next.js App Router + TypeScript. Static marketing page — tanpa logic photobooth/upload.

## Menjalankan

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # produksi
npm start
```

Font (`Press Start 2P`, `Space Mono`) diambil lewat `next/font/google` saat build,
jadi butuh koneksi internet ketika `npm run build` / `npm run dev` pertama kali.

## Struktur

```
app/
  layout.tsx        # wiring next/font + metadata
  page.tsx          # menyusun semua section
  globals.css       # reset, @keyframes, media query responsif, hover (pengganti style-hover)
components/
  Preloader.tsx     # (client) fake progress + fonts.ready + window.load, hard-cap 5s
  Background.tsx     # gradient luar angkasa, nebula, grid, scanlines
  Stars.tsx          # field bintang + shooting star (data di lib/stars.ts)
  Celestial.tsx      # planet bercincin, pesawat, bulan, asteroid
  Mountains.tsx      # deretan gunung pixel lilac
  Navbar.tsx         # (client) toggle menu mobile
  Hero.tsx           # badge, headline, CTA, stats
  ArcadeCabinet.tsx  # (client) countdown 3-2-1-snap, live preview, strip foto, control panel
  Ticker.tsx         # marquee bawah
lib/
  theme.ts           # token font & palette
  stars.ts           # data posisi bintang
```

## Catatan konversi dari mockup

- Template binding `{{ countLabel/countColor/countGlow }}` → React state di `ArcadeCabinet` (interval 900ms).
- Atribut `style-hover` (khas design-canvas) → class `:hover` di `globals.css` (`.nav-tab`, `.btn-open`, `.btn-enter`, `.btn-browse`, `.btn-snap`).
- Script preloader & `window.pbMenu` → `useEffect`/`useState`.
- Media query responsif dipertahankan 1:1 dan meng-override inline style via `!important`, jadi perilaku mobile (hamburger, mountain scaleX, stats stacking) sama persis.
- Semua inline style dikonversi ke object camelCase agar valid di React.
- Link `OPEN BOOTH` / `ENTER BOOTH` / `BROWSE FRAMES` diarahkan ke `#` (halaman berikutnya belum di-slice).