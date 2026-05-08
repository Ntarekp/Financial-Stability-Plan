import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  LineChart,
  Line,
} from "recharts";
import {
  ArrowRight,
  ArrowLeft,
  TrendingUp,
  AlertTriangle,
  Coins,
  ShoppingBag,
  Bug,
  CheckCircle2,
  Package,
  Layers,
  ShieldCheck,
  Maximize2,
  Sun,
  Moon,
  BarChart3,
  Globe2,
} from "lucide-react";
import { cn } from "@/src/lib/utils";

// --- Types ---
interface SectionConfig {
  id: string;
  title: string;
  x: number;
  y: number;
  scale: number;
  component: React.ReactNode;
}

// --- Sub-components ---

const Table = ({
  headers,
  rows,
  highlightLast = false,
}: {
  headers: string[];
  rows: (string | number | React.ReactNode)[][];
  highlightLast?: boolean;
}) => (
  <div className="overflow-x-auto rounded-xl border-4 border-zinc-950 dark:border-white bg-white dark:bg-zinc-900 shadow-2xl shadow-zinc-200/50 transition-colors">
    <table className="w-full text-left text-sm md:text-base lg:text-lg border-collapse">
      <thead className="bg-zinc-950 dark:bg-white text-white dark:text-zinc-950 uppercase text-[10px] md:text-xs tracking-[0.2em]">
        <tr>
          {headers.map((h, i) => (
            <th
              key={i}
              className={cn(
                "px-4 md:px-8 py-4 md:py-6 font-bold border-r border-white/20 dark:border-zinc-950/20 last:border-r-0",
                i === 0 ? "text-left" : "text-right",
              )}
            >
              {h}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="text-zinc-900 dark:text-zinc-100">
        {rows.map((row, i) => (
          <tr
            key={i}
            className={cn(
              "hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors border-b-2 border-zinc-100 dark:border-zinc-800 last:border-b-0",
              i === rows.length - 1 &&
                highlightLast &&
                "bg-emerald-50 dark:bg-emerald-950/30 text-emerald-900 dark:text-emerald-400 font-black",
            )}
          >
            {row.map((cell, j) => (
              <td
                key={j}
                className={cn(
                  "px-4 md:px-8 py-4 md:py-6 font-bold border-r-2 border-zinc-100 dark:border-zinc-800 last:border-r-0",
                  j === 0 ? "text-left" : "text-right",
                )}
              >
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const MetricCard = ({
  label,
  value,
  subValue,
  color = "text-zinc-900 dark:text-white",
}: {
  label: string;
  value: string;
  subValue?: string;
  color?: string;
}) => (
  <div className="flex flex-col p-6 md:p-8 rounded-xl bg-white dark:bg-zinc-900 border-2 border-zinc-50 dark:border-zinc-800 shadow-lg shadow-zinc-200/40 hover:scale-[1.02] transition-all duration-500">
    <span className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-zinc-500 dark:text-zinc-400 font-black mb-2 md:mb-3 text-center">
      {label}
    </span>
    <span
      className={cn(
        "text-3xl md:text-4xl lg:text-5xl font-black tracking-tighter text-center",
        color,
      )}
    >
      {value}
    </span>
    {subValue && (
      <span className="text-[10px] md:text-xs font-bold text-zinc-500 dark:text-zinc-400 mt-1 md:mt-2 uppercase tracking-widest text-center">
        {subValue}
      </span>
    )}
  </div>
);

export default function App() {
  const [activeSection, setActiveSection] = useState(0);
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");

  // --- Static Data ---
  const next = useCallback(
    () => setActiveSection((prev) => (prev + 1) % sections.length),
    [],
  );
  const prev = useCallback(
    () =>
      setActiveSection(
        (prev) => (prev - 1 + sections.length) % sections.length,
      ),
    [],
  );

  useEffect(() => {
    setMounted(true);
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [next, prev]);

  const sections: SectionConfig[] = [
    {
      id: "hero",
      title: "Strategy Introduction",
      x: 0,
      y: 0,
      scale: 1,
      component: (
        <div className="relative flex flex-col items-center justify-center text-center w-screen h-screen overflow-hidden">
          <div className="absolute inset-0 pointer-events-none perspective-[1500px]">
            <motion.div
              initial={{ opacity: 0, x: "-60vw", rotateY: 40 }}
              animate={{ opacity: 0.8, x: "-35vw", rotateY: 25 }}
              transition={{ duration: 4 }}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] aspect-square hidden lg:block"
            >
              <img
                src="/images/bag2.png"
                alt=""
                className="w-full h-full object-contain drop-shadow-2xl"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: "60vw", rotateY: -40 }}
              animate={{ opacity: 0.8, x: "35vw", rotateY: -25 }}
              transition={{ duration: 4, delay: 0.3 }}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] aspect-square hidden lg:block"
            >
              <img
                src="/images/bag3.png"
                alt=""
                className="w-full h-full object-contain drop-shadow-2xl"
              />
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative z-10 px-6 text-center"
          >
            <h1 className="text-6xl md:text-7xl lg:text-8xl xl:text-[110px] 2xl:text-[140px] font-black text-zinc-950 dark:text-white tracking-[-0.06em] mb-12 leading-[0.8] uppercase mx-auto transition-colors text-center">
              Financial <br />
              <span className="text-emerald-500 italic">Stability</span> <br />
              <span className="text-zinc-200 dark:text-zinc-800">
                & Enterprise
              </span>
            </h1>
            <p className="text-zinc-500 dark:text-zinc-400 text-xl md:text-2xl mb-24 max-w-4xl mx-auto font-medium leading-relaxed uppercase tracking-tighter transition-colors text-center">
              A 17-Phase exhaustive framework to secure long-term capital <br />{" "}
              stability through strategic production and debt liquidation.
            </p>
          </motion.div>
        </div>
      ),
    },
    {
      id: "income-audit",
      title: "Phase 01: Income Audit",
      x: 2500,
      y: 0,
      scale: 1,
      component: (
        <div className="w-full max-w-5xl space-y-12 px-6 flex flex-col items-center">
          <div className="space-y-4">
            <h2 className="text-7xl font-black text-zinc-950 dark:text-white tracking-tighter uppercase italic text-center">
              Current <span className="text-emerald-500">INCOME</span>
            </h2>
            <p className="text-zinc-500 dark:text-zinc-400 text-2xl font-bold text-center">
              Comprehensive breakdown of all monthly revenue sources.
            </p>
          </div>
          <Table
            headers={[
              "Revenue Source",
              "Justification / Frequency",
              "Amount (RWF)",
            ]}
            rows={[
              ["Parents Allowance", "Monthly Regular Support", "20,000"],
              ["Weekend Work", "Casual Labour (4 Weekends)", "25,000"],
              ["Shop Assistant Job", "Part-time Shift Role", "15,000"],
              [
                <span className="text-emerald-600 font-black uppercase text-[10px]">
                  Total Current Income
                </span>,
                "",
                <span className="text-emerald-600 font-black text-2xl">
                  60,000
                </span>,
              ],
            ]}
            highlightLast
          />
        </div>
      ),
    },
    {
      id: "expense-audit",
      title: "Phase 02: Expense Audit",
      x: 5000,
      y: 0,
      scale: 1,
      component: (
        <div className="w-full max-w-5xl space-y-12 px-6 flex flex-col items-center">
          <div className="space-y-4 text-center">
            <h2 className="text-7xl font-black text-zinc-950 dark:text-white tracking-tighter uppercase italic text-center">
              Current <span className="text-rose-500">SPEND</span>
            </h2>
            <p className="text-zinc-500 dark:text-zinc-400 text-2xl font-bold text-center">
              Detailed tracking of current monthly operational costs.
            </p>
          </div>
          <Table
            headers={["Expense Category", "Usage Description", "Amount (RWF)"]}
            rows={[
              ["Transport", "Daily Commute Requirements", "18,000"],
              ["Lunch & Snacks", "Daily Nutritional Standard", "25,000"],
              ["Entertainment & Data", "Connectivity & Research", "30,000"],
              ["Debt Repayment", "Minimum Installment Allocation", "7,000"],
              [
                <span className="text-rose-600 font-black uppercase text-[10px]">
                  Total Monthly Expenses
                </span>,
                "",
                <span className="text-rose-600 font-black text-2xl">
                  80,000
                </span>,
              ],
            ]}
            highlightLast
          />
        </div>
      ),
    },
    {
      id: "deficit-analysis",
      title: "Phase 03: Deficit Analysis",
      x: 7500,
      y: 0,
      scale: 1,
      component: (
        <div className="flex flex-col items-center gap-12 text-center px-6">
          <div className="p-12 rounded-3xl bg-rose-500 text-white shadow-3xl max-w-3xl border-4 border-rose-400">
            <AlertTriangle size={80} className="mx-auto mb-8 text-rose-200" />
            <h2 className="text-6xl font-black mb-4 uppercase text-center">
              CRITICAL DEFICIT
            </h2>
            <p className="text-2xl font-bold opacity-90 text-center uppercase tracking-tighter">
              60,000 (Income) - 80,000 (Expenses) =
            </p>
            <div className="text-8xl font-black my-6 text-center tracking-tighter">
              -20,000 RWF
            </div>
            <p className="text-xl uppercase tracking-widest font-black text-rose-200 text-center">
              Monthly Capital Leakage
            </p>
          </div>
          <p className="text-zinc-500 dark:text-zinc-400 text-2xl font-bold max-w-2xl text-center">
            "The status quo is mathematically unsustainable. Total financial
            collapse is inevitable without intervention."
          </p>
        </div>
      ),
    },
    {
      id: "debt-situation",
      title: "Phase 04: Liability Audit",
      x: 7500,
      y: 2000,
      scale: 1,
      component: (
        <div className="w-full max-w-5xl space-y-12 px-6 flex flex-col items-center">
          <div className="space-y-4">
            <h2 className="text-7xl font-black text-zinc-950 dark:text-white tracking-tighter uppercase italic text-center">
              Debt <span className="text-rose-500">SITUATION</span>
            </h2>
            <p className="text-zinc-500 dark:text-zinc-400 text-2xl font-bold text-center">
              Audit of existing personal liabilities scheduled for liquidation.
            </p>
          </div>
          <Table
            headers={[
              "Creditor Person",
              "Relationship / Context",
              "Debt (RWF)",
            ]}
            rows={[
              ["Aline", "Existing Private Loan", "60,000"],
              ["Eric", "Existing Private Loan", "50,000"],
              ["Patrick", "Existing Private Loan", "40,000"],
              [
                <span className="text-rose-600 font-black uppercase text-[10px]">
                  Total Burden
                </span>,
                "TO BE ELIMINATED",
                <span className="text-rose-600 font-black text-2xl">
                  150,000
                </span>,
              ],
            ]}
            highlightLast
          />
        </div>
      ),
    },
    {
      id: "seed-allocation",
      title: "Phase 05: Seed Deployment",
      x: 5000,
      y: 2000,
      scale: 1,
      component: (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full max-w-7xl px-6">
          <div className="space-y-8 text-center lg:text-left flex flex-col items-center lg:items-start">
            <h2 className="text-8xl font-black text-zinc-950 dark:text-white tracking-tighter uppercase leading-none">
              Support <br />
              <span className="text-emerald-500">SPLIT</span>
            </h2>
            <div className="space-y-4 max-w-md w-full">
              {[
                {
                  name: "Debt Repayment",
                  val: "150,000",
                  reason: "Pay debts immediately",
                },
                {
                  name: "Emergency Fund",
                  val: "150,000",
                  reason: "Protection buffer",
                },
                {
                  name: "Business Investment",
                  val: "1,200,000",
                  reason: "Revenue Engines",
                },
              ].map((item) => (
                <div
                  key={item.name}
                  className="p-6 rounded-xl bg-white dark:bg-zinc-900 border-4 border-zinc-950 dark:border-white flex justify-between items-center shadow-xl transition-colors group"
                >
                  <div className="text-left">
                    <span className="text-xl font-black uppercase text-zinc-950 dark:text-white block group-hover:text-emerald-500 transition-colors">
                      {item.name}
                    </span>
                    <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">
                      {item.reason}
                    </span>
                  </div>
                  <span className="text-3xl font-black text-zinc-950 dark:text-white">
                    {item.val}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="aspect-square bg-zinc-50 dark:bg-zinc-900 rounded-3xl border-8 border-zinc-950 dark:border-white flex items-center justify-center shadow-2xl transition-colors">
            <div className="text-center">
              <p className="text-sm font-black text-zinc-400 uppercase tracking-widest">
                Total Seed Fund
              </p>
              <p className="text-9xl font-black text-zinc-950 dark:text-white tracking-tighter">
                1.5M
              </p>
              <p className="text-xl font-bold text-emerald-500 uppercase tracking-widest">
                Full Utilization
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "denim-materials",
      title: "Phase 06: Portfolio 01 Materials",
      x: 2500,
      y: 2000,
      scale: 1,
      component: (
        <div className="relative w-full max-w-7xl px-6 lg:px-8 flex flex-col items-center min-h-[80vh] lg:min-h-[85vh] justify-center">
          {/* Decoupled Background Layer - Truly unrelated to foreground flow */}
          <div className="absolute inset-0 pointer-events-none -z-20 overflow-visible select-none">
            <motion.div
              initial={{ opacity: 0, x: 200, y: 150, rotate: -5 }}
              whileInView={{ opacity: 0.7, x: -200, y: 100, rotate: -12 }}
              transition={{ duration: 6, ease: "easeOut" }}
              className="absolute left-[-25%] bottom-0 w-[700px] h-[700px]"
            >
              <img
                src="/images/collected-jeans-pile.png"
                alt=""
                className="w-full h-full object-contain"
              />
            </motion.div>
          </div>
          <div className="w-full relative z-10 flex flex-col items-center gap-10">
            <div className="space-y-3 text-center">
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-zinc-950 dark:text-white tracking-tighter uppercase italic leading-none">
                Material{" "}
                <span className="text-indigo-600 underline decoration-zinc-950/10 dark:decoration-white/10 decoration-4 underline-offset-4">
                  INPUTS
                </span>
              </h2>
              <p className="text-zinc-600 dark:text-zinc-400 text-lg lg:text-xl font-bold uppercase tracking-tight">
                Granular material cost justification for Portfolio 01.
              </p>
            </div>

            <div className="w-full max-w-4xl flex flex-col items-center gap-12">
              <div className="w-full flex justify-center">
                <div className="bg-white dark:bg-zinc-900 rounded-2xl shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] dark:shadow-none border-2 border-zinc-950 dark:border-zinc-700 overflow-hidden transition-all hover:scale-[1.01] scale-90 md:scale-95 lg:scale-100 origin-center">
                  <Table
                    headers={["Required Material", "Budget (RWF)"]}
                    rows={[
                      ["Second-hand Jeans", "50,000"],
                      ["Zippers & Thread", "20,000"],
                      ["Inner Lining Fabric", "15,000"],
                      ["Handles & Straps", "10,000"],
                      ["Labels & Branding", "10,000"],
                      ["Packaging", "20,000"],
                      ["Marketing & Transport", "40,000"],
                      ["Reserve Buffer", "40,000"],
                      [
                        <span className="text-indigo-600 dark:text-indigo-400 font-black uppercase text-[10px]">
                          Total CAPEX
                        </span>,
                        <span className="text-indigo-600 dark:text-indigo-400 font-black text-2xl">
                          205,000
                        </span>,
                      ],
                    ]}
                    highlightLast
                  />
                </div>
              </div>

              <div className="max-w-4xl w-full">
                <div className="p-4 lg:p-6 space-y-4 transition-colors text-center">
                  <div className="w-16 h-1.5 bg-indigo-600 rounded-full mx-auto" />
                  <p className="text-2xl lg:text-4xl font-black text-zinc-950 dark:text-white uppercase tracking-tighter leading-tight italic">
                    "Waste transformation into functional assets."
                  </p>
                  <p className="text-zinc-700 dark:text-zinc-300 text-sm lg:text-lg font-bold uppercase tracking-widest leading-relaxed max-w-2xl mx-auto">
                    Every material is sourced locally, emphasizing durability
                    and aesthetic consistency across the first production cycle.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "denim-labour",
      title: "Phase 07: Labour Logic",
      x: 0,
      y: 2000,
      scale: 1,
      component: (
        <div className="relative w-full max-w-7xl px-6 lg:px-12 flex flex-col items-center min-h-[80vh] lg:min-h-[85vh] justify-center">
          {/* Background Parallax Image - Better Contained */}
          <div className="absolute inset-0 pointer-events-none -z-10 overflow-visible">
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -10, x: 100 }}
              whileInView={{
                opacity: 0.5,
                scale: 1.3,
                rotate: 5,
                x: 350,
                y: 150,
              }}
              transition={{ duration: 6, ease: "easeOut" }}
              className="absolute right-[-15%] bottom-[-10%] w-[900px] h-[900px]"
            >
              <img
                src="/images/bag.png"
                alt=""
                className="w-full h-full object-contain drop-shadow-2xl"
              />
            </motion.div>
          </div>

          <div className="w-full max-w-6xl relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="space-y-10 flex flex-col items-center lg:items-start text-center lg:text-left">
              <div className="space-y-4">
                <h2 className="text-8xl lg:text-9xl font-black text-zinc-950 dark:text-white tracking-tighter uppercase leading-[0.8] italic">
                  Tailor <br />
                  <span className="text-indigo-600">LOGIC</span>
                </h2>
                <p className="text-2xl lg:text-3xl font-bold text-zinc-500 dark:text-zinc-400 max-w-md mx-auto lg:mx-0 uppercase tracking-tight">
                  Strategic manufacturing partnership.
                </p>
              </div>

              <div className="w-full max-w-md">
                <div className="p-10 lg:p-12 rounded-3xl bg-indigo-600 text-white shadow-[0_40px_80px_-20px_rgba(79,70,229,0.5)] relative overflow-hidden group mb-8 transition-transform hover:scale-[1.02]">
                  <div className="absolute top-0 right-0 p-10 opacity-20 group-hover:scale-110 transition-transform">
                    <ShoppingBag size={140} />
                  </div>
                  <span className="text-xs font-black uppercase tracking-[0.4em] opacity-60">
                    Unit Production Rate
                  </span>
                  <p className="text-7xl lg:text-8xl font-black tracking-tighter my-4">
                    3,500{" "}
                    <span className="text-2xl font-normal opacity-50">RWF</span>
                  </p>
                  <div className="h-2 w-24 bg-white/30 rounded-full" />
                </div>
              </div>
            </div>

            <div className="space-y-10 lg:space-y-12">
              <Table
                headers={["Production Component", "Rate / Target", "Subtotal"]}
                rows={[
                  ["Production Target", "40 Bags", "Monthly"],
                  ["Labour per Unit", "3,500 RWF", "Fixed"],
                  [
                    <span className="text-indigo-600 font-black uppercase text-[10px]">
                      Labour Basis
                    </span>,
                    "",
                    <span className="font-black text-4xl lg:text-5xl">
                      140,000
                    </span>,
                  ],
                ]}
                highlightLast
              />
              <div className="p-8 lg:p-10 rounded-3xl border-4 border-zinc-950 dark:border-white shadow-2xl transition-colors bg-white/80 dark:bg-zinc-900/80 backdrop-blur-2xl">
                <p className="text-xs font-black text-zinc-400 uppercase tracking-widest text-center">
                  Quality Assurance
                </p>
                <p className="text-3xl lg:text-4xl font-black text-zinc-950 dark:text-white uppercase tracking-tighter text-center italic">
                  "100% Export Grade Standards"
                </p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "bsf-intro",
      title: "Phase 08: Bio-Tech Startup",
      x: -2500,
      y: 2000,
      scale: 1,
      component: (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center w-full max-w-7xl px-6 text-center lg:text-left mx-auto">
          <div className="lg:col-span-6 space-y-10 flex flex-col items-center lg:items-start">
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="inline-flex gap-4 items-center font-black text-[10px] tracking-[0.4em] text-emerald-500 uppercase"
              >
                <div className="h-0.5 w-12 bg-emerald-500" />
                Portfolio 02 Introduction
              </motion.div>
              <h2 className="text-8xl font-black text-zinc-950 dark:text-white tracking-tighter uppercase leading-[0.8] italic text-center lg:text-left">
                BSF <br />
                <span className="text-emerald-500">STARTUP</span>
              </h2>
              <p className="text-3xl font-bold text-zinc-500 dark:text-zinc-400 max-w-xl mx-auto lg:mx-0 text-center lg:text-left">
                Industrial protein conversion using Black Soldier Fly larvae
                (BSFL).
              </p>
            </div>
            <div className="space-y-4 w-full max-w-md">
              {[
                "Utilizes 100% Organic Waste",
                "High-Demand Agricultural Feed",
                "Zero-Cost Substrate Sourcing",
              ].map((feat) => (
                <div
                  key={feat}
                  className="flex items-center gap-6 p-6 rounded-xl border-2 border-zinc-100 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50 shadow-lg group hover:border-emerald-500 transition-colors"
                >
                  <CheckCircle2
                    className="text-emerald-500 shrink-0 group-hover:scale-110 transition-transform"
                    size={40}
                  />
                  <p className="text-xl font-black uppercase tracking-tight text-center lg:text-left">
                    {feat}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <motion.div
            layoutId="bsf-video"
            className="lg:col-span-6 relative aspect-[3/4] rounded-3xl overflow-hidden border-4 border-white dark:border-zinc-800 shadow-[0_60px_120px_rgba(0,0,0,0.4)] bg-zinc-950 max-h-[75vh] w-full transition-colors"
          >
            <video
              src="/images/bsfl-farming.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover filter contrast-125 brightness-75"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-transparent to-transparent" />
            <div className="absolute bottom-12 left-10 right-10 text-center lg:text-left">
              <div className="flex items-center gap-3 mb-3 justify-center lg:justify-start">
                <div className="w-2 h-2 rounded-full bg-rose-500 animate-pulse shadow-[0_0_10px_rgba(244,63,94,0.6)]" />
                <span className="text-[8px] font-black text-white/60 uppercase tracking-[0.4em]">
                  Live Production Feed
                </span>
              </div>
              <h3 className="text-2xl font-black text-white uppercase italic tracking-tighter leading-none mb-1 text-center lg:text-left">
                Biological Conversion
              </h3>
              <p className="text-emerald-400 text-[10px] font-black uppercase tracking-widest opacity-60 text-shadow-sm text-center lg:text-left">
                High-Efficiency Protein Hub
              </p>
            </div>
          </motion.div>
        </div>
      ),
    },
    {
      id: "bsf-setup",
      title: "Phase 09: BSF Startup Costs",
      x: -5000,
      y: 2000,
      scale: 1,
      component: (
        <div className="relative w-full max-w-6xl space-y-12 px-6 flex flex-col items-center justify-center">
          <div className="space-y-4 text-center">
            <h2 className="text-7xl font-black text-zinc-950 dark:text-white tracking-tighter uppercase italic leading-none text-center">
              Startup{" "}
              <span className="text-emerald-500 underline decoration-zinc-100 dark:decoration-zinc-800 decoration-8 underline-offset-8">
                COSTS
              </span>
            </h2>
            <p className="text-zinc-500 dark:text-zinc-400 text-2xl font-bold text-center">
              Detailed audit of the 650,000 RWF infrastructure setup cost.
            </p>
          </div>
          <Table
            headers={[
              "Infrastructure Asset",
              "Technical Detail / Spec",
              "Cost (RWF)",
            ]}
            rows={[
              ["Farm Shed Construction", "Core Enclosure & Shelter", "275,000"],
              ["Starter Larvae Colony", "Biological Startup Seed", "8,000"],
              [
                "Rearing Trays (15)",
                "High-Density Production Units",
                "120,000",
              ],
              ["Buckets & Containers", "Waste Management Units", "30,000"],
              [
                "Breeding Cage Structure",
                "Metallic Biological Frame",
                "80,000",
              ],
              ["Waste Logistics Setup", "Collection & Transport", "72,000"],
              ["Drying Racks", "Processing Base", "50,000"],
              ["Protective Netting", "Setup Protection", "15,000"],
              [
                <span className="text-emerald-600 font-black uppercase text-[10px]">
                  Total Setup CAPEX
                </span>,
                "",
                <span className="text-emerald-600 font-black text-2xl text-center">
                  650,000
                </span>,
              ],
            ]}
            highlightLast
          />

          {/* Surgical 'Needle Hole' Persisting Video - Positioned Safely Bottom Right */}
          <motion.div
            layoutId="bsf-video"
            className="absolute bottom-4 right-4 w-32 md:w-56 aspect-video rounded-xl overflow-hidden border-4 border-white dark:border-zinc-800 shadow-2xl z-20 hidden lg:block grayscale hover:grayscale-0 transition-all duration-700 pointer-events-auto"
          >
            <video
              src="/images/bsfl-farming.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      ),
    },
    {
      id: "bsf-production",
      title: "Phase 10: Yield Audit",
      x: -7500,
      y: 2000,
      scale: 1,
      component: (
        <div className="relative w-full max-w-7xl px-6 flex flex-col items-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
            <div className="space-y-10 text-center lg:text-left flex flex-col items-center lg:items-start">
              <div className="space-y-4 text-center lg:text-left">
                <h2 className="text-8xl font-black text-zinc-950 dark:text-white tracking-tighter uppercase leading-[0.8] text-center lg:text-left italic transition-colors">
                  Biological <br />
                  <span className="text-emerald-500">YIELD</span>
                </h2>
                <p className="text-2xl font-bold text-zinc-500 dark:text-zinc-400 text-center lg:text-left">
                  Monthly high-protein production valuation.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-6 w-full max-w-md lg:max-w-none mx-auto lg:mx-0">
                <div className="flex-1 p-10 rounded-xl bg-zinc-950 text-white shadow-2xl relative overflow-hidden transition-colors text-center">
                  <Bug className="absolute -bottom-6 -right-6 w-32 h-32 opacity-10 rotate-12" />
                  <p className="text-[10px] font-black uppercase tracking-[0.4em] text-emerald-500 mb-4 text-center">
                    Monthly Target
                  </p>
                  <p className="text-7xl font-black text-center tracking-tighter">
                    70{" "}
                    <span className="text-xl font-normal opacity-50">KG</span>
                  </p>
                </div>
                <div className="flex-1 p-10 rounded-xl bg-emerald-500 text-white shadow-2xl transition-colors text-center border-b-8 border-emerald-600">
                  <p className="text-[10px] font-black uppercase tracking-[0.4em] opacity-60 mb-4 text-center">
                    Gross Revenue
                  </p>
                  <p className="text-5xl font-black text-center tracking-tighter">
                    140,000
                  </p>
                  <p className="text-sm font-bold uppercase tracking-widest mt-2 text-center text-emerald-100">
                    70KG @ 2,000 RWF
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6 w-full">
              <h3 className="text-xs font-black text-zinc-500 dark:text-zinc-400 uppercase tracking-[0.4em] flex items-center gap-3 justify-center lg:justify-start">
                <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
                Net Bio-Profit Audit
              </h3>
              <Table
                headers={["Parameter", "Calculation Basis", "Value"]}
                rows={[
                  ["Target Production", "High-Protein Output", "70 KG"],
                  ["Gross Revenue", "70 KG * 2,000 RWF", "140,000"],
                  ["Operating Costs", "Logistics & Collection", "30,000"],
                  [
                    <span className="text-emerald-600 font-black uppercase text-[10px]">
                      Net Bio-Profit
                    </span>,
                    "Revenue - Costs",
                    <span className="text-emerald-600 font-black text-3xl transition-colors text-center">
                      110,000
                    </span>,
                  ],
                ]}
                highlightLast
              />
            </div>
          </div>

          {/* Surgical 'Needle Hole' Persisting Video - Positioned Safely Bottom Left with larger size */}
          <motion.div
            layoutId="bsf-video"
            className="absolute bottom-0 left-[-5%] w-48 md:w-80 aspect-video rounded-2xl overflow-hidden border-4 border-white dark:border-zinc-800 shadow-3xl z-20 hidden lg:block transition-all duration-700 pointer-events-auto"
          >
            <video
              src="/images/bsfl-farming.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-emerald-500/10 mix-blend-overlay" />
          </motion.div>
        </div>
      ),
    },
    {
      id: "revenue-shift",
      title: "Phase 11: Target Revenue",
      x: -7500,
      y: 4500,
      scale: 1,
      component: (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full max-w-7xl px-6 text-center lg:text-left mx-auto">
          <div className="space-y-8 flex flex-col items-center lg:items-start text-center lg:text-left">
            <h2 className="text-8xl font-black text-zinc-950 dark:text-white tracking-tighter uppercase leading-none italic transition-colors">
              Income <br />
              <span className="text-emerald-500">SHIFT</span>
            </h2>
            <div className="p-8 rounded-xl bg-emerald-500 text-white shadow-2xl flex items-center gap-8 justify-center lg:justify-start transition-all hover:scale-105 group mx-auto lg:mx-0">
              <div className="w-20 h-20 rounded-xl bg-white/20 flex items-center justify-center shadow-lg">
                <TrendingUp size={40} strokeWidth={3} />
              </div>
              <div className="text-left">
                <p className="text-xs font-black uppercase tracking-widest opacity-60">
                  Strategic Growth
                </p>
                <p className="text-5xl font-black tracking-tighter">
                  +275% Expansion
                </p>
              </div>
            </div>
          </div>
          <Table
            headers={["Monthly Revenue Vertical", "Expected Amount (RWF)"]}
            rows={[
              ["Original Static Income", "60,000"],
              ["Jeans Bag Business (Portfolio 01)", "55,000"],
              ["BSF Farming Business (Portfolio 02)", "110,000"],
              [
                <span className="text-emerald-600 font-black uppercase text-[10px]">
                  New Monthly Total
                </span>,
                <span className="text-emerald-600 font-black text-3xl text-center">
                  225,000
                </span>,
              ],
            ]}
            highlightLast
          />
        </div>
      ),
    },
    {
      id: "new-budget",
      title: "Phase 12: Strategic Budget",
      x: -5000,
      y: 4500,
      scale: 1,
      component: (
        <div className="w-full max-w-5xl space-y-12 px-6 flex flex-col items-center justify-center">
          <div className="space-y-4">
            <h2 className="text-7xl font-black text-zinc-950 dark:text-white tracking-tighter uppercase italic text-center transition-colors">
              Revised{" "}
              <span className="text-emerald-500 underline decoration-zinc-100 dark:decoration-zinc-800 decoration-8 underline-offset-8">
                EXPENDITURE
              </span>
            </h2>
            <p className="text-zinc-500 dark:text-zinc-400 text-2xl font-bold text-center transition-colors">
              Optimized expenditure to ensure maximum surplus compounding.
            </p>
          </div>
          <Table
            headers={[
              "Budget Category",
              "Strategic Justification",
              "Amount (RWF)",
            ]}
            rows={[
              ["Transport", "Commute Requirements", "18,000"],
              ["Food / Sustenance", "Nutritional Standard", "25,000"],
              ["Entertainment", "Connectivity Threshold", "10,000"],
              ["Business Reinvestment", "R&D Growth Allocation", "35,000"],
              ["Emergency Savings", "Commitment Basis", "10,000"],
              ["Future Stability Fund", "Wealth Building Basis", "30,000"],
              ["Personal Buffer", "Incidentals Reserve", "7,000"],
              [
                <span className="text-emerald-600 font-black uppercase text-[10px]">
                  Total New Expenses
                </span>,
                "",
                <span className="text-emerald-600 font-black text-2xl text-center">
                  135,000
                </span>,
              ],
            ]}
            highlightLast
          />
        </div>
      ),
    },
    {
      id: "wealth-engine",
      title: "Phase 13: Prosperity Engine",
      x: -2500,
      y: 4500,
      scale: 1,
      component: (
        <div className="flex flex-col items-center gap-12 text-center px-6 mx-auto">
          <div className="p-16 rounded-xl bg-emerald-500 text-white shadow-3xl max-w-4xl relative overflow-hidden group transition-colors mx-auto w-full">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -top-10 -right-10 opacity-20"
            >
              <Coins size={120} />
            </motion.div>
            <h2 className="text-5xl font-black mb-4 uppercase italic text-center text-shadow-lg leading-none">
              NET MONTHLY SURPLUS
            </h2>
            <p className="text-2xl font-bold opacity-90 text-center tracking-tighter uppercase">
              Total Income (225,000) - Expenses (135,000) =
            </p>
            <div className="text-[140px] font-black my-8 leading-none text-center tracking-tighter transition-colors">
              90,000 RWF
            </div>
            <p className="text-xl uppercase tracking-[0.5em] font-black text-emerald-100 text-center">
              Disposable Prosperity Capital
            </p>
          </div>
          <div className="p-12 rounded-xl border-4 border-zinc-100 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-2xl italic text-3xl font-black text-zinc-950 dark:text-white max-w-3xl text-center transition-colors">
            "Successful transformation of a -20,000 leakage into a +90,000
            wealth creation system."
          </div>
        </div>
      ),
    },
    {
      id: "investments",
      title: "Phase 14: Growth Strategy",
      x: 0,
      y: 4500,
      scale: 1,
      component: (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full max-w-7xl px-6 text-center lg:text-left mx-auto">
          <div className="space-y-8 flex flex-col items-center lg:items-start text-center lg:text-left">
            <h2 className="text-7xl font-black text-zinc-950 dark:text-white tracking-tighter uppercase italic leading-none text-center lg:text-left">
              Growth <br />
              <span className="text-emerald-500">DIVERSIFICATION</span>
            </h2>
            <div className="space-y-4 w-full max-w-md mx-auto lg:mx-0">
              {[
                {
                  name: "RNIT Fund",
                  val: "15,000",
                  rate: "~11.78% ROI",
                  icon: <Globe2 />,
                },
                {
                  name: "Shares (BK Group)",
                  val: "10,000",
                  rate: "Dividends & Growth",
                  icon: <BarChart3 />,
                },
                {
                  name: "Additional Savings",
                  val: "65,000",
                  rate: "High Liquidity",
                  icon: <ShieldCheck />,
                },
              ].map((item) => (
                <div
                  key={item.name}
                  className="p-8 rounded-xl bg-white dark:bg-zinc-900 border-4 border-zinc-50 dark:border-zinc-800 flex justify-between items-center shadow-xl group transition-all hover:border-emerald-500"
                >
                  <div className="flex items-center gap-6">
                    <div className="text-emerald-500 group-hover:scale-110 transition-transform">
                      {React.cloneElement(item.icon as React.ReactElement, {
                        size: 32,
                      })}
                    </div>
                    <div className="text-left">
                      <span className="text-xl font-black uppercase text-zinc-950 dark:text-white block group-hover:text-emerald-500 transition-colors">
                        {item.name}
                      </span>
                      <span className="text-[10px] font-bold text-emerald-500 uppercase tracking-widest text-left">
                        {item.rate}
                      </span>
                    </div>
                  </div>
                  <span className="text-3xl font-black text-zinc-950 dark:text-white">
                    {item.val}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-8 w-full">
            <div className="p-10 rounded-xl bg-zinc-950 text-white shadow-3xl border-b-8 border-emerald-500 transition-colors text-center w-full">
              <h3 className="text-3xl font-black uppercase italic mb-6">
                RNIT Asset Audit
              </h3>
              <div className="space-y-4 text-zinc-400 font-bold">
                <p className="flex justify-between">
                  <span>Annual Investment</span>{" "}
                  <span className="text-white">180,000 RWF</span>
                </p>
                <p className="flex justify-between">
                  <span>Target Yield</span>{" "}
                  <span className="text-white">~11.78%</span>
                </p>
                <p className="flex justify-between font-black text-emerald-400">
                  <span>Est. Yearly Profit</span> <span>+21,000 RWF</span>
                </p>
              </div>
            </div>
            <div className="p-8 rounded-xl border-4 border-dashed border-zinc-200 dark:border-zinc-800 italic text-xl font-bold text-zinc-400 text-center transition-colors">
              "Sustainable investing based strictly on real profits ensures
              long-term wealth without artificial creation."
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "savings-path",
      title: "Phase 15: Accumulation Path",
      x: 2500,
      y: 4500,
      scale: 1,
      component: (
        <div className="w-full max-w-5xl space-y-12 px-6 flex flex-col items-center text-center">
          <div className="space-y-4 text-center">
            <h2 className="text-7xl font-black text-zinc-950 dark:text-white tracking-tighter uppercase italic text-center transition-colors">
              Wealth <span className="text-emerald-500">ACCUMULATION</span>
            </h2>
            <p className="text-zinc-500 dark:text-zinc-400 text-2xl font-bold text-center transition-colors">
              Projected growth of the committed **40,000 RWF Monthly Fund**.
            </p>
          </div>
          <Table
            headers={[
              "Timeline Milestone",
              "Committed Fund (RWF)",
              "Strategic Status",
            ]}
            rows={[
              ["3 Months Accumulation", "120,000", "Target Achieved"],
              ["6 Months Accumulation", "240,000", "Target Achieved"],
              ["9 Months Accumulation", "360,000", "Target Achieved"],
              [
                <span className="uppercase font-black tracking-widest text-emerald-600 transition-colors">
                  12 Month Goal
                </span>,
                <span className="text-4xl font-black text-emerald-600 transition-colors">
                  480,000
                </span>,
                <span className="text-emerald-600 font-black transition-colors text-center">
                  STRATEGIC SECURITY
                </span>,
              ],
            ]}
            highlightLast
          />
          <div className="p-6 rounded-xl bg-zinc-50 dark:bg-zinc-900 border-2 border-dashed border-zinc-200 dark:border-zinc-800 text-center transition-colors w-full max-w-md">
            <p className="text-zinc-400 font-bold uppercase tracking-widest text-sm">
              Potential Yearly Accumulation (Total Surplus): **1.5M RWF**
            </p>
          </div>
        </div>
      ),
    },
    {
      id: "risk-audit",
      title: "Phase 16: Risk Strategy",
      x: 5000,
      y: 4500,
      scale: 1,
      component: (
        <div className="max-w-6xl w-full px-6 flex flex-col items-center">
          <div className="space-y-6 mb-12 text-center">
            <h2 className="text-8xl font-black text-zinc-950 dark:text-white tracking-tighter leading-none italic uppercase transition-colors text-center">
              Defense{" "}
              <span className="text-rose-500 italic block transition-colors text-center">
                STRATEGY
              </span>
            </h2>
            <p className="text-zinc-500 dark:text-zinc-400 text-2xl font-bold tracking-tight uppercase max-w-2xl mx-auto transition-colors text-center">
              Proactive responses to market disruption.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
            {[
              {
                risk: "Low demand",
                icon: <Package />,
                solution: "Improve design & RCA marketing pivots.",
              },
              {
                risk: "Tailor delays",
                icon: <Maximize2 />,
                solution: "Maintenance of multiple partner tailors.",
              },
              {
                risk: "Waste shortage",
                icon: <Bug />,
                solution: "Partner with schools and restaurants.",
              },
              {
                risk: "Competition",
                icon: <Layers />,
                solution: "Superior quality & competitive pricing.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="group p-10 rounded-xl bg-white dark:bg-zinc-900 border-4 border-zinc-100 dark:border-zinc-800 hover:border-zinc-950 dark:hover:border-white transition-all duration-700 shadow-2xl text-center"
              >
                <div className="flex items-start justify-between mb-8">
                  <div className="w-16 h-16 rounded-2xl bg-zinc-950 dark:bg-white text-white dark:text-zinc-950 flex items-center justify-center shadow-2xl transition-colors mx-auto lg:mx-0">
                    {React.cloneElement(item.icon as React.ReactElement, {
                      size: 32,
                    })}
                  </div>
                  <div className="px-3 py-1 bg-rose-50 dark:bg-rose-950/30 text-rose-600 dark:text-rose-400 font-black uppercase text-[10px] tracking-widest rounded-full border border-rose-100 dark:border-rose-900 transition-colors">
                    Audit Clear
                  </div>
                </div>
                <h3 className="text-4xl font-black text-zinc-950 dark:text-white tracking-tighter mb-4 uppercase transition-colors text-center lg:text-left">
                  {item.risk}
                </h3>
                <p className="text-zinc-500 dark:text-zinc-400 text-xl font-bold leading-tight transition-colors text-center lg:text-left">
                  {item.solution}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      ),
    },
    {
      id: "conclusion",
      title: "Phase 17: Strategic Resolution",
      x: 7500,
      y: 4500,
      scale: 1,
      component: (
        <div className="max-w-5xl text-center space-y-12 px-6 mx-auto">
          <motion.div
            initial={{ scale: 0.5 }}
            whileInView={{ scale: 1 }}
            className="w-40 h-40 bg-zinc-950 dark:bg-white rounded-xl mx-auto flex items-center justify-center text-white dark:text-zinc-950 shadow-3xl transition-colors"
          >
            <CheckCircle2 size={80} strokeWidth={2.5} />
          </motion.div>
          <h2 className="text-9xl font-black text-zinc-950 dark:text-white tracking-[-0.06em] uppercase italic leading-none text-center transition-colors">
            GOAL <br />
            <span className="text-emerald-500">ACQUIRED</span>
          </h2>
          <p className="text-4xl font-black tracking-tight leading-tight max-w-3xl mx-auto italic text-zinc-900 dark:text-white text-center transition-colors">
            "This plan transforms financial instability into a{" "}
            <span className="text-emerald-500 underline decoration-emerald-100 dark:decoration-emerald-950/30 decoration-8 underline-offset-8 transition-colors">
              SUSTAINABLE SYSTEM
            </span>{" "}
            within 12 months."
          </p>
          <div className="pt-12 border-t-8 border-zinc-950 dark:border-white max-w-md mx-auto text-center transition-colors">
            <p className="text-zinc-500 dark:text-zinc-400 font-black tracking-[0.4em] text-sm uppercase transition-colors">
              RWANDA CODING ACADEMY // FY26
            </p>
          </div>
        </div>
      ),
    },
  ];

  const currentSection = sections[activeSection];

  if (!mounted) return null;

  return (
    <div
      className={cn(
        "relative w-full h-screen overflow-hidden font-sans select-none transition-colors duration-700",
        theme === "dark"
          ? "bg-zinc-950 text-zinc-100 dark"
          : "bg-white text-zinc-900",
      )}
    >
      {/* Background Decor */}
      <div className="absolute inset-0 z-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none overflow-hidden select-none transition-colors">
        <div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            backgroundImage:
              theme === "dark"
                ? "radial-gradient(#fff 2px, transparent 1px)"
                : "radial-gradient(#000 2px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="absolute top-[30%] right-[-5%] text-[400px] md:text-[600px] font-black leading-none opacity-5 tracking-tighter uppercase whitespace-nowrap rotate-12 transition-colors">
          STRATEGY
        </div>
      </div>

      {/* Discreet Navigation UI */}
      <nav className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-50 flex flex-col items-end gap-3 pointer-events-none">
        <div className="flex items-center gap-2 bg-white/40 dark:bg-zinc-900/40 backdrop-blur-xl border border-white/20 dark:border-zinc-800 p-2 rounded-2xl shadow-2xl pointer-events-auto group transition-colors">
          <button
            onClick={prev}
            className="p-3 rounded-xl bg-zinc-950/5 dark:bg-white/5 hover:bg-zinc-950 dark:hover:bg-white text-zinc-500 hover:text-white dark:hover:text-zinc-950 transition-all active:scale-90"
            title="Previous (Left Arrow)"
          >
            <ArrowLeft className="w-5 h-5 md:w-6 md:h-6" strokeWidth={3} />
          </button>

          <div className="h-6 w-[1px] bg-zinc-950/10 dark:bg-white/10 mx-1 transition-colors" />

          <button
            onClick={next}
            className="flex items-center gap-3 font-black text-[10px] md:text-xs uppercase tracking-[0.2em] bg-zinc-950 dark:bg-white text-white dark:text-zinc-950 px-5 md:px-8 py-3 md:py-4 rounded-xl hover:bg-emerald-500 transition-all active:scale-95 shadow-lg shadow-zinc-950/10"
          >
            <span>
              {activeSection === sections.length - 1 ? "RESTART" : "NEXT"}
            </span>
            <ArrowRight className="w-4 h-4 md:w-5 md:h-5" strokeWidth={3} />
          </button>
        </div>

        {/* Minimal Progress Indicator */}
        <div className="flex items-center gap-2 px-3">
          {sections.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveSection(i)}
              className={cn(
                "h-1.5 rounded-full transition-all duration-500 pointer-events-auto",
                i === activeSection
                  ? "bg-zinc-950 dark:bg-white w-6"
                  : "bg-zinc-200 dark:bg-zinc-800 w-1.5 hover:bg-zinc-400",
              )}
            />
          ))}
        </div>
      </nav>

      {/* Header UI */}
      <div className="fixed top-6 md:top-12 left-6 md:left-12 z-50 flex flex-col gap-1 md:gap-2 items-start pointer-events-none max-w-[60vw]">
        <div className="flex items-center gap-3 md:gap-4 bg-white/40 dark:bg-zinc-900/40 backdrop-blur-md px-4 py-2 rounded-2xl border border-white/20 dark:border-zinc-800 shadow-sm transition-colors shrink-0">
          <span className="text-[10px] md:text-[12px] text-zinc-500 dark:text-zinc-400 font-black uppercase tracking-[0.3em] md:tracking-[0.5em] transition-colors">
            PHASE{" "}
            {activeSection + 1 < 10
              ? `0${activeSection + 1}`
              : activeSection + 1}
          </span>
          <div className="h-[2px] md:h-[3px] w-12 md:w-16 bg-zinc-100 dark:bg-zinc-800 rounded-full overflow-hidden transition-colors">
            <motion.div
              className="h-full bg-emerald-500"
              initial={{ width: 0 }}
              animate={{
                width: `${((activeSection + 1) / sections.length) * 100}%`,
              }}
              transition={{ duration: 0.8 }}
            />
          </div>
        </div>
        <AnimatePresence mode="wait">
          <motion.h1
            key={currentSection.title}
            initial={{ opacity: 0, y: 10, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -10, filter: "blur(10px)" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="text-base md:text-xl lg:text-2xl font-black text-zinc-950 dark:text-white tracking-tighter leading-tight mt-1 md:mt-2 uppercase italic drop-shadow-sm bg-white/40 dark:bg-zinc-900/40 backdrop-blur-md px-4 py-2 rounded-2xl border border-white/20 dark:border-zinc-800 transition-colors max-w-full break-words"
          >
            {currentSection.title}
          </motion.h1>
        </AnimatePresence>
      </div>

      {/* Theme Toggle & Side Info */}
      <div className="fixed top-6 md:top-12 right-6 md:right-12 z-50 flex flex-col items-end gap-4 pointer-events-none max-w-[30vw]">
        <button
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          className="p-4 rounded-2xl bg-white/40 dark:bg-zinc-900/40 backdrop-blur-md border border-white/20 dark:border-zinc-800 shadow-xl pointer-events-auto hover:scale-110 active:scale-95 transition-all text-zinc-950 dark:text-white"
        >
          {theme === "light" ? <Moon size={24} /> : <Sun size={24} />}
        </button>

        <div className="bg-white/40 dark:bg-zinc-900/40 backdrop-blur-md px-4 py-3 rounded-2xl border border-white/20 dark:border-zinc-800 shadow-sm text-right transition-colors overflow-hidden">
          <span className="block text-[10px] md:text-[12px] text-zinc-500 dark:text-zinc-400 font-black tracking-[0.3em] md:tracking-[0.5em] uppercase transition-colors">
            CONFIDENTIAL
          </span>
          <span className="block text-xs md:text-lg font-black text-zinc-950 dark:text-white uppercase tracking-tighter leading-none italic transition-colors truncate">
            INVESTOR // RCA 26
          </span>
        </div>
      </div>

      {/* Prezi Stage */}
      <motion.main
        className="absolute inset-0 flex items-center justify-center pointer-events-auto"
        initial={false}
        animate={{
          x: -currentSection.x,
          y: -currentSection.y,
          scale: 1 / currentSection.scale,
        }}
        transition={{
          type: "spring",
          stiffness: 50,
          damping: 25,
          mass: 2,
        }}
      >
        {sections.map((section, index) => (
          <motion.section
            key={section.id}
            id={section.id}
            className="absolute origin-center"
            style={{
              x: section.x,
              y: section.y,
            }}
            initial={false}
            animate={{
              opacity: activeSection === index ? 1 : 0.03,
              scale: section.scale,
              filter: activeSection === index ? "blur(0px)" : "blur(80px)",
            }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative">
              <div
                className="relative z-10 py-16 xl:py-40 w-screen md:w-auto 
  md:min-w-[700px] lg:min-w-[900px] xl:min-w-[1100px] px-6 md:px-0 flex justify-center"
              >
                {section.component}
              </div>
            </div>
          </motion.section>
        ))}
      </motion.main>

      {/* Footnote */}
      <div className="fixed bottom-16 left-16 z-50 hidden lg:flex items-center gap-6 text-[12px] font-black text-zinc-500 dark:text-zinc-400 uppercase tracking-[0.4em] pointer-events-none transition-colors">
        <div className="flex gap-3">
          <span className="px-4 py-2 bg-white dark:bg-zinc-900 border-2 border-zinc-100 dark:border-zinc-800 text-zinc-400 rounded-2xl shadow-sm transition-colors">
            SPACE
          </span>
          <span className="px-4 py-2 bg-white dark:bg-zinc-900 border-2 border-zinc-100 dark:border-zinc-800 text-zinc-400 rounded-2xl shadow-sm transition-colors">
            ARROWS
          </span>
        </div>
        <span className="transition-colors">CONTROLS READY</span>
      </div>
    </div>
  );
}
