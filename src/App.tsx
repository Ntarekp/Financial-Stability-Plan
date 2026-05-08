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
  <div className="overflow-x-auto rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-md transition-colors w-full">
    <table className="w-full text-left text-[clamp(0.8rem,1.2vw,1rem)] border-collapse">
      <thead className="bg-zinc-50 dark:bg-zinc-800/50 text-zinc-500 dark:text-zinc-400 uppercase text-[10px] tracking-[0.2em]">
        <tr>
          {headers.map((h, i) => (
            <th
              key={i}
              className={cn(
                "px-4 py-3 font-bold border-r border-zinc-200/50 dark:border-zinc-700/50 last:border-r-0",
                i === 0 ? "text-left" : "text-right",
              )}
            >
              {h}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="text-zinc-700 dark:text-zinc-200">
        {rows.map((row, i) => (
          <tr
            key={i}
            className={cn(
              "hover:bg-zinc-50 dark:hover:bg-zinc-800/30 transition-colors border-b border-zinc-100 dark:border-zinc-800 last:border-b-0",
              i === rows.length - 1 &&
                highlightLast &&
                "bg-emerald-50 dark:bg-emerald-900/10 text-emerald-800 dark:text-emerald-400 font-bold",
            )}
          >
            {row.map((cell, j) => (
              <td
                key={j}
                className={cn(
                  "px-4 py-2.5 font-semibold border-r border-zinc-100 dark:border-zinc-800 last:border-r-0",
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

const PhaseLabel = ({ num }: { num: string }) => (
  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400 dark:text-zinc-600 mb-2 block">Phase {num}</span>
);

export default function App() {
  const [activeSection, setActiveSection] = useState(0);
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");

  // --- Navigation Logic ---
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
      title: "Phase 01: Introduction",
      x: 0,
      y: 0,
      scale: 1,
      component: (
        <div className="relative flex flex-col items-center justify-center text-center w-full max-w-5xl mx-auto px-6">
          <div className="absolute inset-0 pointer-events-none -z-10">
            <div className="absolute left-[-5%] top-1/2 -translate-y-1/2 w-48 aspect-square opacity-20">
              <img src="/images/bag2.png" alt="" className="w-full h-full object-contain" />
            </div>
            <div className="absolute right-[-5%] top-1/2 -translate-y-1/2 w-48 aspect-square opacity-20">
              <img src="/images/bag3.png" alt="" className="w-full h-full object-contain" />
            </div>
          </div>
          <div className="space-y-6">
            <PhaseLabel num="01" />
            <h1 className="text-[clamp(2.5rem,6vw,5rem)] font-black text-zinc-900 dark:text-white tracking-tight leading-none uppercase transition-colors">
              Financial <br />
              <span className="text-emerald-500 italic">Sustainability</span> <br />
              <span className="text-zinc-600 dark:text-zinc-400">Strategy</span>
            </h1>
            <p className="text-zinc-500 dark:text-zinc-400 text-sm max-w-sm mx-auto font-bold uppercase tracking-widest transition-colors">
              A 20-Phase framework for capital stability.
            </p>
            <div className="flex flex-wrap justify-center gap-8 mt-10 opacity-50">
              {["Prince Ntare", "Cynthia Marie", "Gurnaud Ishema"].map((name) => (
                <span key={name} className="text-[11px] font-black uppercase tracking-widest border-t-2 border-zinc-200 dark:border-zinc-800 pt-3">
                  {name}
                </span>
              ))}
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "income-audit",
      title: "Phase 02: Income Audit",
      x: 3000,
      y: 0,
      scale: 1,
      component: (
        <div className="w-full max-w-2xl space-y-6 px-6 flex flex-col items-center mx-auto">
          <div className="text-center"><PhaseLabel num="02" /><h2 className="text-3xl font-black text-zinc-900 dark:text-white uppercase italic leading-none">Current <span className="text-emerald-500">INCOME</span></h2></div>
          <Table
            headers={["Source", "Context", "Amount"]}
            rows={[
              ["Parents", "Support", "20,000"],
              ["Weekend", "Work", "25,000"],
              ["Shop Job", "Part-time", "15,000"],
              [<span className="text-emerald-600 uppercase text-[10px]">Total</span>, "", <span className="text-emerald-600 font-black">60,000</span>],
            ]}
            highlightLast
          />
        </div>
      ),
    },
    {
      id: "expense-audit",
      title: "Phase 03: Expense Audit",
      x: 6000,
      y: 0,
      scale: 1,
      component: (
        <div className="w-full max-w-2xl space-y-6 px-6 flex flex-col items-center mx-auto">
          <div className="text-center"><PhaseLabel num="03" /><h2 className="text-3xl font-black text-zinc-900 dark:text-white uppercase italic leading-none">Current <span className="text-rose-500">SPEND</span></h2></div>
          <Table
            headers={["Category", "Usage", "Amount"]}
            rows={[
              ["Transport", "Commute", "18,000"],
              ["Food", "Sustenance", "25,000"],
              ["Data", "Research", "30,000"],
              ["Debt", "Installments", "7,000"],
              [<span className="text-rose-600 uppercase text-[10px]">Total</span>, "", <span className="text-rose-600 font-black">80,000</span>],
            ]}
            highlightLast
          />
        </div>
      ),
    },
    {
      id: "deficit-analysis",
      title: "Phase 04: Deficit Analysis",
      x: 9000,
      y: 0,
      scale: 1,
      component: (
        <div className="flex flex-col items-center gap-6 text-center px-6 max-w-md mx-auto">
          <PhaseLabel num="04" />
          <div className="p-8 rounded-3xl bg-rose-500 text-white shadow-2xl w-full border-4 border-rose-400">
            <AlertTriangle className="mx-auto mb-4 text-rose-100 w-16 h-16" />
            <h2 className="text-2xl font-black mb-1 uppercase tracking-tighter">CRITICAL DEFICIT</h2>
            <div className="text-6xl font-black my-2 tracking-tighter">-20,000 RWF</div>
          </div>
          <p className="text-zinc-500 dark:text-zinc-400 text-sm font-bold italic">Status quo is unsustainable.</p>
        </div>
      ),
    },
    {
      id: "debt-situation",
      title: "Phase 05: Liability Audit",
      x: 9000,
      y: 3000,
      scale: 1,
      component: (
        <div className="w-full max-w-2xl space-y-6 px-6 flex flex-col items-center mx-auto">
          <div className="text-center"><PhaseLabel num="05" /><h2 className="text-3xl font-black text-zinc-900 dark:text-white uppercase italic leading-none">Debt <span className="text-rose-500">SITUATION</span></h2></div>
          <Table
            headers={["Creditor", "Context", "Debt"]}
            rows={[
              ["Aline", "Loan", "60,000"],
              ["Eric", "Loan", "50,000"],
              ["Patrick", "Loan", "40,000"],
              [<span className="text-rose-600 uppercase text-[10px]">Burden</span>, "LIQUIDATED", <span className="text-rose-600 font-black">150,000</span>],
            ]}
            highlightLast
          />
        </div>
      ),
    },
    {
      id: "seed-allocation",
      title: "Phase 06: Seed Deployment",
      x: 6000,
      y: 3000,
      scale: 1,
      component: (
        <div className="flex flex-col md:flex-row gap-10 items-center justify-center w-full max-w-4xl px-6 mx-auto">
          <div className="space-y-6 text-center md:text-left shrink-0">
            <PhaseLabel num="06" />
            <h2 className="text-5xl font-black text-zinc-900 dark:text-white tracking-tighter uppercase leading-none">Support <span className="text-emerald-500">SPLIT</span></h2>
            <div className="space-y-2 w-72 mx-auto md:mx-0">
              {[ { n: "Debt", v: "150k" }, { n: "Buffer", v: "150k" }, { n: "Invest", v: "1.2M" } ].map((i) => (
                <div key={i.n} className="px-4 py-2 rounded-lg bg-zinc-50 dark:bg-zinc-800 border-2 border-zinc-200 dark:border-zinc-700 flex justify-between items-center text-xs font-bold uppercase">
                  <span className="text-zinc-500 dark:text-zinc-400">{i.n}</span>
                  <span className="text-zinc-900 dark:text-white">{i.v}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="w-64 aspect-square bg-emerald-500 text-white rounded-3xl flex flex-col items-center justify-center shadow-2xl border-4 border-emerald-400 shrink-0">
              <p className="text-[10px] font-black uppercase opacity-60">Total Seed</p>
              <p className="text-6xl font-black tracking-tighter">1.5M</p>
          </div>
        </div>
      ),
    },
    {
      id: "denim-materials",
      title: "Phase 07: Portfolio 01 Materials",
      x: 3000,
      y: 3000,
      scale: 1,
      component: (
        <div className="w-full max-w-2xl space-y-6 px-6 flex flex-col items-center mx-auto">
          <div className="text-center"><PhaseLabel num="07" /><h2 className="text-3xl font-black text-zinc-900 dark:text-white uppercase leading-none">Material <span className="text-indigo-600">INPUTS</span></h2></div>
          <Table
            headers={["Material", "Budget (RWF)"]}
            rows={[
              ["Jeans", "50,000"],
              ["Thread/Zips", "20,000"],
              ["Inner Lining", "15,000"],
              ["Hardware", "10,000"],
              ["Packaging", "30,000"],
              ["Marketing", "40,000"],
              ["Buffer", "40,000"],
              [<span className="text-indigo-600 uppercase text-[10px]">Total</span>, <span className="text-indigo-600 font-black">205,000</span>],
            ]}
            highlightLast
          />
        </div>
      ),
    },
    {
      id: "denim-labour",
      title: "Phase 08: Labour Logic",
      x: 0,
      y: 3000,
      scale: 1,
      component: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center w-full max-w-4xl px-6 mx-auto">
          <div className="space-y-6 text-center md:text-left">
            <PhaseLabel num="08" />
            <h2 className="text-4xl font-black text-zinc-900 dark:text-white tracking-tighter uppercase italic leading-[0.85]">Tailor <br /><span className="text-indigo-600">LOGIC</span></h2>
            <div className="p-6 rounded-2xl bg-indigo-600 text-white shadow-xl inline-block">
              <span className="text-[10px] font-black uppercase opacity-60">Unit Rate</span>
              <p className="text-4xl font-black tracking-tighter mt-1">3,500 <span className="text-sm font-normal opacity-50">RWF</span></p>
            </div>
          </div>
          <Table
            headers={["Production", "Rate", "Subtotal"]}
            rows={[
              ["Target", "40 Bags", "Fixed"],
              ["Labour", "3,500", "Unit"],
              [<span className="text-indigo-600 uppercase text-[10px]">Basis</span>, "", <span className="font-black text-2xl">140,000</span>],
            ]}
            highlightLast
          />
        </div>
      ),
    },
    {
      id: "bsf-video",
      title: "Phase 09: BSF Process",
      x: -3000,
      y: 3000,
      scale: 1,
      component: (
        <div className="flex flex-col items-center justify-center w-full max-w-5xl px-6 mx-auto space-y-8">
          <PhaseLabel num="09" />
          <div className="w-full aspect-video rounded-3xl overflow-hidden shadow-2xl border-4 border-emerald-500/20 bg-black">
            <video
              src="/images/bsfl-farming.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
          </div>
          <p className="text-xl font-black text-emerald-500 uppercase tracking-widest italic">Black Soldier Fly Farming Lifecycle</p>
        </div>
      ),
    },
    {
      id: "bsf-intro",
      title: "Phase 10: Bio-Tech Startup",
      x: -6000,
      y: 3000,
      scale: 1,
      component: (
        <div className="flex flex-col items-center text-center w-full max-w-2xl px-6 mx-auto space-y-6">
          <PhaseLabel num="10" />
          <h2 className="text-5xl font-black text-zinc-900 dark:text-white tracking-tighter uppercase italic leading-[0.85]">BSF <br /><span className="text-emerald-500">STARTUP</span></h2>
          <p className="text-lg font-bold text-zinc-500 dark:text-zinc-400">Industrial protein conversion.</p>
          <div className="grid grid-cols-2 gap-4 w-full">
            {[ "Waste Sourcing", "Agri-Feed", "Zero-Cost", "Sustainable" ].map((f) => (
              <div key={f} className="flex items-center gap-3 p-4 rounded-xl border-2 border-zinc-100 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-xs font-black uppercase text-zinc-600 dark:text-zinc-300 shadow-sm">
                <CheckCircle2 className="text-emerald-500 w-5 h-5 shrink-0" /> {f}
              </div>
            ))}
          </div>
        </div>
      ),
    },
    {
      id: "bsf-setup",
      title: "Phase 11: BSF Startup Costs",
      x: -9000,
      y: 3000,
      scale: 1,
      component: (
        <div className="w-full max-w-2xl space-y-6 px-6 flex flex-col items-center mx-auto">
          <div className="text-center"><PhaseLabel num="11" /><h2 className="text-3xl font-black text-zinc-900 dark:text-white tracking-tighter uppercase italic">Startup <span className="text-emerald-500">COSTS</span></h2></div>
          <Table
            headers={["Asset", "Spec", "Cost"]}
            rows={[
              ["Farm Shed", "Enclosure", "275k"],
              ["Larvae", "Seed", "8k"],
              ["Trays", "15 Units", "120k"],
              ["Cage", "Metallic", "80k"],
              ["Logistics", "Transport", "72k"],
              ["Drying", "Processing", "50k"],
              ["Misc", "Netting", "45k"],
              [<span className="text-emerald-600 uppercase text-[10px]">Total</span>, "", <span className="text-emerald-600 font-black">650,000</span>],
            ]}
            highlightLast
          />
        </div>
      ),
    },
    {
      id: "waste-logistics",
      title: "Phase 12: Waste Logistics",
      x: -12000,
      y: 3000,
      scale: 1,
      component: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center w-full max-w-4xl px-6 mx-auto">
          <div className="space-y-6">
            <PhaseLabel num="12" />
            <h2 className="text-4xl font-black text-zinc-900 dark:text-white tracking-tighter uppercase leading-none">Waste <br /><span className="text-emerald-500">SOURCING</span></h2>
            <div className="space-y-3">
              {[ { l: "Market", d: "Organic waste streams." }, { l: "Schools", d: "Consistent starch sources." } ].map((i) => (
                <div key={i.l} className="p-4 bg-white dark:bg-zinc-900 rounded-xl border-2 border-zinc-100 dark:border-zinc-800 text-xs font-bold uppercase shadow-sm">
                  <h4 className="text-zinc-900 dark:text-white text-lg leading-none mb-1">{i.l}</h4>
                  <p className="text-zinc-500">{i.d}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="aspect-square rounded-3xl overflow-hidden border-4 border-white dark:border-zinc-800 shadow-2xl bg-zinc-100 relative">
            <img src="/images/black-soldier-containers.png" alt="" className="w-full h-full object-cover" />
            <div className="absolute bottom-4 right-4 px-3 py-1 bg-zinc-900 text-white rounded-lg text-[10px] font-black uppercase border-2 border-emerald-500">Zero Cost Input</div>
          </div>
        </div>
      ),
    },
    {
      id: "bsf-production",
      title: "Phase 13: Yield Audit",
      x: -12000,
      y: 6000,
      scale: 1,
      component: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center w-full max-w-4xl px-6 mx-auto">
          <div className="space-y-6">
            <PhaseLabel num="13" />
            <h2 className="text-5xl font-black text-zinc-900 dark:text-white tracking-tighter uppercase italic leading-[0.85]">Bio <span className="text-emerald-500">YIELD</span></h2>
            <div className="flex gap-4">
              <div className="px-5 py-3 rounded-2xl bg-zinc-900 text-white text-center shadow-lg"><p className="text-[10px] uppercase opacity-60 font-black mb-1">Target</p><p className="text-3xl font-black">70KG</p></div>
              <div className="px-5 py-3 rounded-2xl bg-emerald-500 text-white text-center shadow-lg"><p className="text-[10px] uppercase opacity-60 font-black mb-1">Rev</p><p className="text-3xl font-black">175k</p></div>
            </div>
          </div>
          <Table
            headers={["Param", "Basis", "Value"]}
            rows={[
              ["Target", "Output", "70 KG"],
              ["Gross", "@ 2,500", "175,000"],
              ["Ops", "Logistics", "30,000"],
              [<span className="text-emerald-600 uppercase text-[10px]">Profit</span>, "", <span className="text-emerald-600 font-black text-2xl">145,000</span>],
            ]}
            highlightLast
          />
        </div>
      ),
    },
    {
      id: "revenue-shift",
      title: "Phase 14: Target Revenue",
      x: -9000,
      y: 6000,
      scale: 1,
      component: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center w-full max-w-4xl px-6 mx-auto">
          <div className="space-y-4"><PhaseLabel num="14" /><h2 className="text-5xl font-black text-zinc-900 dark:text-white tracking-tighter uppercase italic">Income <br /><span className="text-emerald-500">SHIFT</span></h2></div>
          <Table
            headers={["Vertical", "Amount (RWF)"]}
            rows={[
              ["Original Support", "60,000"],
              ["Denim Project", "55,000"],
              ["BSF Startup", "145,000"],
              [<span className="text-emerald-600 uppercase text-[10px]">New Total</span>, <span className="text-emerald-600 font-black text-3xl">260,000</span>],
            ]}
            highlightLast
          />
        </div>
      ),
    },
    {
      id: "new-budget",
      title: "Phase 15: Strategic Budget",
      x: -6000,
      y: 6000,
      scale: 1,
      component: (
        <div className="w-full max-w-3xl space-y-6 px-6 flex flex-col items-center mx-auto">
          <div className="text-center"><PhaseLabel num="15" /><h2 className="text-3xl font-black text-zinc-900 dark:text-white tracking-tighter uppercase italic">Revised <span className="text-emerald-500">SPEND</span></h2></div>
          <Table
            headers={["Category", "Basis", "Amount"]}
            rows={[
              ["Transport", "Commute", "18k"],
              ["Food", "Nutrition", "25k"],
              ["Data", "Research", "10k"],
              ["Growth", "R&D", "35k"],
              ["Stability", "Wealth", "30k"],
              ["Emergency", "Savings", "10k"],
              ["Buffer", "Misc", "7k"],
              [<span className="text-emerald-600 uppercase text-[10px]">Total</span>, "", <span className="text-emerald-600 font-black">135k</span>],
            ]}
            highlightLast
          />
        </div>
      ),
    },
    {
      id: "wealth-engine",
      title: "Phase 16: Prosperity Engine",
      x: -3000,
      y: 6000,
      scale: 1,
      component: (
        <div className="flex flex-col items-center gap-6 text-center px-6 max-w-lg mx-auto">
          <PhaseLabel num="16" />
          <div className="p-10 rounded-3xl bg-emerald-600 text-white shadow-2xl w-full relative overflow-hidden border-4 border-emerald-400">
            <h2 className="text-xl font-black mb-1 uppercase tracking-widest">SURPLUS</h2>
            <div className="text-6xl font-black my-2 tracking-tighter">125,000 RWF</div>
            <p className="text-[12px] uppercase tracking-[0.2em] font-black opacity-80">Monthly Wealth Generation active.</p>
          </div>
          <p className="text-zinc-500 dark:text-zinc-400 text-sm font-bold italic">Capital formation active.</p>
        </div>
      ),
    },
    {
      id: "investments",
      title: "Phase 17: Growth Strategy",
      x: 0,
      y: 6000,
      scale: 1,
      component: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center w-full max-w-4xl px-6 mx-auto">
          <div className="space-y-6">
            <PhaseLabel num="17" />
            <h2 className="text-4xl font-black text-zinc-900 dark:text-white tracking-tighter uppercase leading-none">Growth <span className="text-emerald-500">DIVERSE</span></h2>
            <div className="space-y-2">
              {[ { n: "RNIT", v: "25k", r: "11.7% Yield" }, { n: "Shares", v: "15k", r: "BK Group" }, { n: "Savings", v: "85k", r: "Liquid" } ].map((i) => (
                <div key={i.n} className="p-4 rounded-xl bg-white dark:bg-zinc-900 border-2 border-zinc-100 dark:border-zinc-800 flex justify-between items-center text-xs font-bold uppercase shadow-sm">
                  <div><span className="text-zinc-900 dark:text-white block text-lg">{i.n}</span><span className="text-emerald-500 tracking-widest text-[10px]">{i.r}</span></div>
                  <span className="text-zinc-900 dark:text-white text-xl">{i.v}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="p-8 rounded-3xl bg-zinc-900 text-white border-b-8 border-emerald-500 text-center shadow-2xl">
            <h3 className="text-xs font-black uppercase mb-2 opacity-60">RNIT Cumulative Audit</h3>
            <p className="text-4xl font-black text-emerald-400">+35,000 Yearly</p>
          </div>
        </div>
      ),
    },
    {
      id: "savings-path",
      title: "Phase 18: Accumulation Path",
      x: 3000,
      y: 6000,
      scale: 1,
      component: (
        <div className="w-full max-w-xl space-y-6 px-6 flex flex-col items-center mx-auto">
          <div className="text-center"><PhaseLabel num="18" /><h2 className="text-3xl font-black text-zinc-900 dark:text-white tracking-tighter uppercase leading-none">Wealth <span className="text-emerald-500">ACCUM</span></h2></div>
          <Table
            headers={["Milestone", "Fund", "Status"]}
            rows={[
              ["3 Month Buffer", "120k", "PROJECTED"],
              ["6 Month Buffer", "240k", "PROJECTED"],
              ["12 Month Safety", "480k", "TARGET"],
            ]}
            highlightLast
          />
        </div>
      ),
    },
    {
      id: "risk-audit",
      title: "Phase 19: Risk Strategy",
      x: 6000,
      y: 6000,
      scale: 1,
      component: (
        <div className="max-w-4xl w-full px-6 flex flex-col items-center mx-auto">
          <PhaseLabel num="19" />
          <h2 className="text-4xl font-black text-zinc-900 dark:text-white tracking-tighter uppercase italic mb-6">Defense <span className="text-rose-500">STRATEGY</span></h2>
          <div className="grid grid-cols-2 gap-4 w-full">
            {[ { r: "Demand Shift", s: "Iterative Design." }, { r: "Production Delays", s: "Backup Partners." }, { r: "Waste Supply", s: "Institutional Contracts." }, { r: "Competition", s: "Quality Differentiation." } ].map((i) => (
              <div key={i.r} className="p-4 rounded-xl bg-white dark:bg-zinc-900 border-2 border-zinc-100 dark:border-zinc-800 text-xs font-bold uppercase shadow-sm">
                <h3 className="text-zinc-900 dark:text-white text-lg mb-1">{i.r}</h3>
                <p className="text-zinc-500">{i.s}</p>
              </div>
            ))}
          </div>
        </div>
      ),
    },
    {
      id: "conclusion",
      title: "Phase 20: Strategic Resolution",
      x: 9000,
      y: 7000,
      scale: 1,
      component: (
        <div className="max-w-xl text-center space-y-8 px-6 mx-auto">
          <PhaseLabel num="20" />
          <div className="w-20 h-20 bg-zinc-900 dark:bg-white rounded-3xl mx-auto flex items-center justify-center text-white dark:text-zinc-900 shadow-2xl border-4 border-emerald-500">
            <CheckCircle2 size={48} />
          </div>
          <h2 className="text-6xl font-black text-zinc-900 dark:text-white tracking-tighter uppercase italic leading-none">GOAL <span className="text-emerald-500">ACQUIRED</span></h2>
          <p className="text-xl font-bold text-zinc-500 italic">"Stability within 12 months."</p>
          <div className="pt-6 border-t-2 border-zinc-200 dark:border-zinc-800 max-w-[150px] mx-auto text-[10px] font-black text-zinc-400 uppercase tracking-widest text-center">RCA FY26 / FINAL RELEASE</div>
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
          ? "bg-zinc-900 text-zinc-100 dark"
          : "bg-white text-zinc-900",
      )}
    >
      {/* Progressive Progress Header */}
      <div className="fixed top-6 left-6 z-50 flex items-center gap-4 bg-white/70 dark:bg-zinc-900/40 backdrop-blur-md px-4 py-2 rounded-full border border-zinc-200 dark:border-zinc-800 shadow-lg pointer-events-none transition-all">
        <div className="h-1 w-24 bg-zinc-100 dark:bg-zinc-800 rounded-full overflow-hidden">
          <motion.div className="h-full bg-emerald-500" animate={{ width: `${((activeSection + 1) / sections.length) * 100}%` }} transition={{ duration: 0.8 }} />
        </div>
        <span className="text-[10px] font-black text-zinc-400 dark:text-zinc-500 uppercase tracking-widest">{activeSection + 1} / {sections.length}</span>
      </div>

      {/* Navigation Controls */}
      <nav className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 pointer-events-none">
        <div className="flex items-center gap-2 bg-white/90 dark:bg-zinc-900/40 backdrop-blur-xl border border-zinc-200 dark:border-zinc-800 p-1.5 rounded-xl shadow-2xl pointer-events-auto transition-all">
          <button onClick={prev} className="p-3 rounded-lg bg-zinc-100 dark:bg-white/5 hover:bg-zinc-200 dark:hover:bg-white/10 text-zinc-400 active:scale-90 transition-all"><ArrowLeft size={16} /></button>
          <button onClick={next} className="flex items-center gap-2 font-black text-[10px] uppercase tracking-widest bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 px-5 py-3 rounded-lg hover:bg-emerald-500 active:scale-95 transition-all">
            <span>{activeSection === sections.length - 1 ? "RESET" : "NEXT PHASE"}</span>
            <ArrowRight size={14} />
          </button>
        </div>
      </nav>

      {/* Theme Toggle */}
      <div className="fixed top-6 right-6 z-50 pointer-events-none">
        <button onClick={() => setTheme(theme === "light" ? "dark" : "light")} className="p-3 rounded-xl bg-white/80 dark:bg-zinc-900/40 backdrop-blur-md border border-zinc-200 dark:border-zinc-800 shadow-lg pointer-events-auto hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all text-zinc-400">
          {theme === "light" ? <Moon size={16} /> : <Sun size={16} />}
        </button>
      </div>

      {/* Prezi Stage */}
      <motion.main
        className="absolute inset-0 flex items-center justify-center pointer-events-auto"
        animate={{ x: -currentSection.x, y: -currentSection.y, scale: 1 / currentSection.scale }}
        transition={{ type: "spring", stiffness: 50, damping: 30, mass: 1 }}
      >
        {sections.map((section, index) => (
          <motion.section
            key={section.id}
            className="absolute origin-center"
            style={{ x: section.x, y: section.y }}
            animate={{ opacity: activeSection === index ? 1 : 0.05, scale: section.scale, filter: activeSection === index ? "blur(0px)" : "blur(15px)" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="w-screen h-screen flex items-center justify-center pb-32 pt-12 px-12">
              {section.component}
            </div>
          </motion.section>
        ))}
      </motion.main>
    </div>
  );
}
