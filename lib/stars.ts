export type Star = {
  top: string;
  left?: string;
  right?: string;
  size: number; // px
  color: string;
  dur: number; // seconds
  delay: number; // seconds
};

// Positions carried over 1:1 from the original design (main field + denser extra field).
export const STARS: Star[] = [
  // main field
  { top: "8%", left: "7%", size: 4, color: "#fff", dur: 2.2, delay: 0 },
  { top: "14%", left: "20%", size: 3, color: "#E8DCFF", dur: 3.1, delay: 0.5 },
  { top: "22%", left: "12%", size: 2, color: "#fff", dur: 1.8, delay: 1 },
  { top: "6%", left: "34%", size: 3, color: "#FFF0C0", dur: 2.6, delay: 0.3 },
  { top: "30%", left: "5%", size: 4, color: "#fff", dur: 2.0, delay: 0.8 },
  { top: "18%", left: "46%", size: 2, color: "#E8DCFF", dur: 3.4, delay: 1.2 },
  { top: "60%", left: "8%", size: 3, color: "#fff", dur: 2.3, delay: 0.6 },
  { top: "72%", left: "16%", size: 2, color: "#fff", dur: 2.8, delay: 1.8 },
  { top: "82%", left: "6%", size: 3, color: "#FFF0C0", dur: 1.9, delay: 0.9 },
  { top: "10%", right: "8%", size: 4, color: "#fff", dur: 2.5, delay: 0.4 },
  { top: "24%", right: "16%", size: 3, color: "#E8DCFF", dur: 3.0, delay: 1.1 },
  { top: "38%", right: "6%", size: 2, color: "#fff", dur: 2.1, delay: 1.5 },
  { top: "64%", right: "12%", size: 3, color: "#fff", dur: 2.7, delay: 0.7 },
  { top: "78%", right: "18%", size: 2, color: "#FFF0C0", dur: 1.7, delay: 1.3 },
  { top: "88%", right: "9%", size: 4, color: "#fff", dur: 2.4, delay: 0.2 },
  // denser extra field
  { top: "3%", left: "14%", size: 2, color: "#fff", dur: 2.4, delay: 0.2 },
  { top: "5%", left: "27%", size: 3, color: "#E8DCFF", dur: 3.2, delay: 0.9 },
  { top: "9%", left: "41%", size: 2, color: "#fff", dur: 1.9, delay: 1.4 },
  { top: "2%", left: "60%", size: 2, color: "#FFF0C0", dur: 2.7, delay: 0.5 },
  { top: "13%", left: "8%", size: 3, color: "#fff", dur: 2.1, delay: 1.1 },
  { top: "17%", left: "38%", size: 2, color: "#fff", dur: 3.0, delay: 0.3 },
  { top: "21%", left: "55%", size: 2, color: "#E8DCFF", dur: 2.5, delay: 1.7 },
  { top: "27%", left: "30%", size: 3, color: "#fff", dur: 2.2, delay: 0.7 },
  { top: "33%", left: "48%", size: 2, color: "#FFF0C0", dur: 1.8, delay: 1.3 },
  { top: "36%", left: "22%", size: 2, color: "#fff", dur: 2.9, delay: 0.4 },
  { top: "42%", left: "14%", size: 3, color: "#E8DCFF", dur: 2.3, delay: 1.9 },
  { top: "48%", left: "38%", size: 2, color: "#fff", dur: 2.6, delay: 0.6 },
  { top: "52%", left: "4%", size: 2, color: "#fff", dur: 3.3, delay: 1.0 },
  { top: "56%", left: "24%", size: 3, color: "#FFF0C0", dur: 2.0, delay: 1.5 },
  { top: "66%", left: "12%", size: 2, color: "#fff", dur: 2.8, delay: 0.8 },
  { top: "76%", left: "22%", size: 2, color: "#E8DCFF", dur: 2.4, delay: 1.6 },
  { top: "5%", right: "14%", size: 2, color: "#fff", dur: 2.5, delay: 0.5 },
  { top: "8%", right: "28%", size: 3, color: "#FFF0C0", dur: 3.1, delay: 1.2 },
  { top: "18%", right: "36%", size: 2, color: "#fff", dur: 1.9, delay: 0.9 },
  { top: "28%", right: "22%", size: 2, color: "#E8DCFF", dur: 2.7, delay: 1.4 },
  { top: "34%", right: "32%", size: 3, color: "#fff", dur: 2.2, delay: 0.3 },
  { top: "44%", right: "10%", size: 2, color: "#fff", dur: 2.9, delay: 1.7 },
  { top: "52%", right: "26%", size: 2, color: "#FFF0C0", dur: 2.4, delay: 0.6 },
  { top: "60%", right: "36%", size: 3, color: "#fff", dur: 2.1, delay: 1.1 },
  { top: "68%", right: "14%", size: 2, color: "#E8DCFF", dur: 3.0, delay: 0.8 },
  { top: "74%", right: "28%", size: 2, color: "#fff", dur: 2.6, delay: 1.5 },
  { top: "84%", right: "22%", size: 3, color: "#FFF0C0", dur: 2.3, delay: 0.4 },
  { top: "80%", left: "34%", size: 2, color: "#fff", dur: 2.8, delay: 1.3 },
  { top: "88%", left: "48%", size: 2, color: "#E8DCFF", dur: 2.0, delay: 0.7 },
];
