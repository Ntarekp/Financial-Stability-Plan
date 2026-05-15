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
      <thead className="bg-zinc-100 dark:bg-zinc-800/50 text-zinc-600 dark:text-zinc-400 uppercase text-[10px] tracking-[0.2em]">
        <tr>
          {headers.map((h, i) => (
            <th
              key={i}
              className={cn(
                "px-4 py-3 font-bold border-r border-zinc-200 dark:border-zinc-700 last:border-r-0",
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
  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500 dark:text-zinc-400 mb-2 block transition-colors">Phase {num}</span>
);

const SupportingText = ({ text }: { text: string }) => (
  <p className="mt-4 text-zinc-500 dark:text-zinc-400 text-sm font-medium leading-relaxed max-w-lg mx-auto italic">
    {text}
  </p>
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
            <div className="absolute left-[-5%] top-1/2 -translate-y-1/2 w-48 aspect-square opacity-80">
              <img src="/images/bag2.png" alt="" className="w-full h-full object-contain" />
            </div>
            <div className="absolute right-[-5%] top-1/2 -translate-y-1/2 w-48 aspect-square opacity-80">
              <img src="/images/bag3.png" alt="" className="w-full h-full object-contain" />
            </div>
          </div>
          <div className="space-y-6">
            <PhaseLabel num="01" />
            <h1 className="text-[clamp(2.5rem,6vw,5rem)] font-black text-black dark:text-white tracking-tight leading-none uppercase transition-colors">
              Financial <br />
              <span className="text-emerald-500 italic">Sustainability</span> <br />
              <span className="text-zinc-600 dark:text-zinc-400">Strategy</span>
            </h1>
            <p className="text-zinc-600 dark:text-zinc-400 text-sm max-w-sm mx-auto font-bold uppercase tracking-widest transition-colors">
              A 19-Phase framework for capital stability.
            </p>
            <SupportingText text="This plan outlines a transition from financial dependency to a self-sustaining ecosystem through strategic investment and operational efficiency." />
            <div className="flex flex-wrap justify-center gap-8 mt-10 opacity-70">
              {["Prince Ntare", "Cynthia Marie", "Gurnaud Ishema"].map((name) => (
                <span key={name} className="text-[11px] font-black uppercase tracking-widest border-t-2 border-zinc-300 dark:border-zinc-800 pt-3 text-zinc-600 dark:text-zinc-400">
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
        <div className="w-full max-w-2xl space-y-6 px-6 flex flex-col items-center mx-auto text-center">
          <div><PhaseLabel num="02" /><h2 className="text-3xl font-black text-black dark:text-white uppercase italic leading-none">Current <span className="text-emerald-500">INCOME</span></h2></div>
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
          <SupportingText text="An analysis of existing cash inflows shows a baseline of 60,000 RWF per month from multiple sources." />
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
        <div className="w-full max-w-2xl space-y-6 px-6 flex flex-col items-center mx-auto text-center">
          <div><PhaseLabel num="03" /><h2 className="text-3xl font-black text-black dark:text-white uppercase italic leading-none">Current <span className="text-rose-500">SPEND</span></h2></div>
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
          <SupportingText text="Current monthly expenditures total 80,000 RWF, revealing a significant gap between earning and spending." />
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
          <SupportingText text="The 20,000 RWF monthly deficit is the core problem. Without intervention, this leads to increasing debt and financial instability." />
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
        <div className="w-full max-w-2xl space-y-6 px-6 flex flex-col items-center mx-auto text-center">
          <div><PhaseLabel num="05" /><h2 className="text-3xl font-black text-black dark:text-white uppercase italic leading-none">Debt <span className="text-rose-500">SITUATION</span></h2></div>
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
          <SupportingText text="Total liabilities of 150,000 RWF must be cleared to reach a neutral financial state before growth can begin." />
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
            <h2 className="text-5xl font-black text-black dark:text-white tracking-tighter uppercase leading-none">Support <span className="text-emerald-500">SPLIT</span></h2>
            <div className="space-y-2 w-72 mx-auto md:mx-0">
              {[ { n: "Debt", v: "150,000" }, { n: "Buffer", v: "150,000" }, { n: "Invest", v: "1,200,000" } ].map((i) => (
                <div key={i.n} className="px-4 py-2 rounded-lg bg-zinc-50 dark:bg-zinc-800 border-2 border-zinc-200 dark:border-zinc-700 flex justify-between items-center text-xs font-bold uppercase">
                  <span className="text-zinc-500 dark:text-zinc-400">{i.n}</span>
                  <span className="text-black dark:text-white">{i.v}</span>
                </div>
              ))}
            </div>
            <SupportingText text="A 1,500,000 RWF seed fund is allocated to clear debt, create a buffer, and fuel the main investment engines." />
          </div>
          <div className="w-64 aspect-square bg-emerald-500 dark:bg-emerald-600 text-white rounded-3xl flex flex-col items-center justify-center shadow-2xl border-4 border-emerald-400 shrink-0">
              <p className="text-[10px] font-black uppercase opacity-60">Total Seed</p>
              <p className="text-5xl font-black tracking-tighter">1,500,000</p>
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
        <div className="w-full h-full flex items-center justify-center">
          <div className="w-full max-w-2xl space-y-6 px-6 flex flex-col items-center mx-auto text-center relative z-10">
            <div><PhaseLabel num="07" /><h2 className="text-3xl font-black text-black dark:text-white uppercase leading-none">Material <span className="text-indigo-600">INPUTS</span></h2></div>
            <Table
              headers={["Material", "Cost (RWF)"]}
              rows={[
                ["Second-hand jeans", "50,000"],
                ["Zippers", "15,000"],
                ["Thread", "5,000"],
                ["Inner lining fabric", "15,000"],
                ["Handles/straps", "10,000"],
                ["Labels & decorations", "10,000"],
                ["Labels, Decorations & Packaging", "20,000"],
                ["Marketing and Transport", "40,000"],
                ["Extra material reserver", "50,000"],
                [<span className="text-indigo-600 uppercase text-[10px]">Total Materials</span>, <span className="text-indigo-600 font-black">205,000</span>],
              ]}
              highlightLast
            />
            <SupportingText text="The Denim Bags project collects second-hand jeans and transforms them into reusable bags. This table details the raw material consumption for a production cycle." />
          </div>
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
        <div className="w-full h-full flex items-center justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center w-full max-w-4xl px-6 mx-auto relative z-10">
            <div className="space-y-6 text-center md:text-left">
              <PhaseLabel num="08" />
              <h2 className="text-4xl font-black text-black dark:text-white tracking-tighter uppercase italic leading-[0.85]">Tailor <br /><span className="text-indigo-600">LOGIC</span></h2>
              <div className="flex flex-col gap-4">
                <div className="p-6 rounded-2xl bg-indigo-600 text-white shadow-xl inline-block">
                  <span className="text-[10px] font-black uppercase opacity-60">Unit Rate</span>
                  <p className="text-4xl font-black tracking-tighter mt-1">3,500 <span className="text-sm font-normal opacity-50">RWF</span></p>
                </div>
                <div className="p-4 rounded-xl bg-emerald-100 dark:bg-emerald-600 text-emerald-900 dark:text-white shadow-lg inline-block border border-emerald-200 dark:border-transparent">
                  <span className="text-[10px] font-black uppercase opacity-60 italic">Calculation</span>
                  <p className="text-xl font-black tracking-tighter mt-1">400,000 <span className="opacity-50">-</span> 345,000 <span className="opacity-50">=</span> 55,000</p>
                  <span className="text-[10px] font-bold block mt-1 uppercase opacity-60 tracking-widest text-emerald-700 dark:text-emerald-200">Net Profit / Cycle</span>
                </div>
              </div>
              <SupportingText text="Total Production Cost (345,000) vs Revenue (400,000) yields a 55,000 RWF profit per cycle. This is the first engine of our sustainability plan." />
            </div>
            <Table
              headers={["Item", "Basis", "Value"]}
              rows={[
                ["Materials", "Fixed", "205,000"],
                ["Labour", "40 Bags", "140,000"],
                [<span className="text-indigo-600 uppercase text-[10px]">Total Cost</span>, "", <span className="font-black text-2xl">345,000</span>],
              ]}
              highlightLast
            />
          </div>
        </div>
      ),
    },
    {
      id: "bsf-problem",
      title: "Phase 09: BSF Introduction",
      x: -3000,
      y: 3000,
      scale: 1,
      component: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full max-w-6xl px-6 mx-auto relative z-10">
          <div className="space-y-8 text-center md:text-left">
            <PhaseLabel num="09" />
            <h2 className="text-5xl font-black text-black dark:text-white tracking-tighter uppercase italic leading-[0.85]">BSF <span className="text-emerald-500">PROBLEM & <br /> SOLUTION</span></h2>
            <div className="space-y-4">
               <p className="text-lg font-bold text-zinc-700 dark:text-zinc-300">
                 Black Soldier Fly larvae are used as high-protein animal feed for poultry, fish, and pig farmers.
               </p>
               <div className="p-6 bg-emerald-50 dark:bg-emerald-900/10 border-l-4 border-emerald-500 rounded-r-xl text-left transition-colors">
                  <h4 className="text-sm font-black uppercase text-emerald-700 dark:text-emerald-500 mb-2">The Problem</h4>
                  <p className="text-sm text-black dark:text-zinc-300 font-medium">
                    Traditional animal feed is expensive and organic waste management is a growing challenge for local communities.
                  </p>
               </div>
               <div className="p-6 bg-zinc-50 dark:bg-zinc-800 border-l-4 border-zinc-600 rounded-r-xl text-left transition-colors">
                  <h4 className="text-sm font-black uppercase text-zinc-700 dark:text-zinc-400 mb-2">The Bio-Tech Solution</h4>
                  <p className="text-sm text-black dark:text-zinc-300 font-medium">
                    The larvae feed on organic waste, turning it into high-value protein, making the production process environmentally sustainable and highly profitable.
                  </p>
               </div>
            </div>
            <SupportingText text="This biotech engine converts local waste into an essential agricultural resource." />
          </div>
          
          <div className="aspect-[4/5] md:aspect-square rounded-3xl overflow-hidden hidden md:block">
            {/* The actual parallax video moves into this right-side anchor point */}
          </div>
        </div>
      ),
    },
    {
      id: "waste-logistics",
      title: "Phase 10: Waste Sourcing",
      x: -6000,
      y: 3000,
      scale: 1,
      component: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center w-full max-w-4xl px-6 mx-auto">
          <div className="space-y-6 text-center md:text-left">
            <PhaseLabel num="10" />
            <h2 className="text-4xl font-black text-black dark:text-white tracking-tighter uppercase leading-none">Waste <br /><span className="text-emerald-500">SOURCING</span></h2>
            <div className="space-y-3">
              {[ 
                { l: "Local Markets", d: "Organic waste is mostly freely given." }, 
                { l: "Schools", d: "Partnering for starch-rich food leftovers." },
                { l: "Restaurants", d: "Consistent high-volume organic supply." }
              ].map((i) => (
                <div key={i.l} className="p-4 bg-white dark:bg-zinc-900 rounded-xl border-2 border-zinc-100 dark:border-zinc-800 text-xs font-bold uppercase shadow-sm">
                  <h4 className="text-black dark:text-white text-lg leading-none mb-1">{i.l}</h4>
                  <p className="text-zinc-500">{i.d}</p>
                </div>
              ))}
            </div>
            <SupportingText text="Securing free raw material (waste) from institutional partners ensures that the largest operational cost remains zero." />
          </div>
          <div className="aspect-square rounded-3xl overflow-hidden border-4 border-white dark:border-zinc-800 shadow-2xl bg-zinc-100 relative">
            <img src="/images/black-soldier-containers.png" alt="" className="w-full h-full object-cover" />
            <div className="absolute bottom-4 right-4 px-3 py-1 bg-zinc-100 dark:bg-white text-black dark:text-black border-2 border-zinc-200 dark:border-transparent">Zero Cost Input</div>
          </div>
        </div>
      ),
    },
    {
      id: "bsf-startup-costs",
      title: "Phase 11: Startup Costs",
      x: -9000,
      y: 3000,
      scale: 1,
      component: (
        <div className="flex flex-col items-center justify-center w-full max-w-3xl px-6 mx-auto space-y-10">
          <div className="text-center w-full">
            <PhaseLabel num="11" />
            <h2 className="text-4xl font-black text-black dark:text-white tracking-tighter uppercase italic">BSF <span className="text-emerald-500">STARTUP COSTS</span></h2>
          </div>
          
          <div className="w-full">
            <Table
              headers={["Item", "Cost (RWF)"]}
              rows={[
                ["Farm shed Construction", "275,000"],
                ["Starter larvae colony", "8,000"],
                ["Rearing trays (15)", "120,000"],
                ["Buckets and containers", "30,000"],
                ["Breeding cage structure", "80,000"],
                ["Waste collection transport", "72,000"],
                ["Drying Racks", "50,000"],
                ["Protective netting", "15,000"],
                [<span className="text-emerald-600 uppercase text-[10px]">Total Setup Cost</span>, <span className="text-emerald-600 font-black text-xl">650,000</span>],
              ]}
              highlightLast
            />
          </div>
        </div>
      ),
    },
    {
      id: "bsf-production",
      title: "Phase 12: Yield Audit",
      x: -9000,
      y: 6000,
      scale: 1,
      component: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center w-full max-w-4xl px-6 mx-auto">
          <div className="space-y-6 text-center md:text-left">
            <PhaseLabel num="12" />
            <h2 className="text-5xl font-black text-black dark:text-white tracking-tighter uppercase italic leading-[0.85]">Bio <span className="text-emerald-500">YIELD</span></h2>
            <div className="flex gap-4 justify-center md:justify-start">
              <div className="px-5 py-3 rounded-2xl bg-zinc-100 dark:bg-white text-black text-center shadow-lg border border-zinc-200 dark:border-transparent transition-colors"><p className="text-[10px] uppercase opacity-60 font-black mb-1">Target</p><p className="text-3xl font-black">70 KG</p></div>
              <div className="px-5 py-3 rounded-2xl bg-emerald-100 dark:bg-emerald-600 text-emerald-900 dark:text-white text-center shadow-lg border border-emerald-200 dark:border-transparent transition-colors">
                <p className="text-[10px] uppercase opacity-60 font-black mb-1 italic">Calculation</p>
                <p className="text-xl font-black tracking-tighter">175,000 <span className="opacity-40">-</span> 30,000 <span className="opacity-40">=</span> 145,000</p>
                <span className="text-[10px] font-bold block mt-1 uppercase opacity-60 tracking-widest">Net Profit</span>
              </div>
            </div>
            <SupportingText text="A monthly output of 70KG allows for a significant profit margin after minimal logistics costs." />
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
      title: "Phase 13: Target Revenue",
      x: -6000,
      y: 6000,
      scale: 1,
      component: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center w-full max-w-4xl px-6 mx-auto">
          <div className="space-y-4 text-center md:text-left">
            <PhaseLabel num="13" />
            <h2 className="text-5xl font-black text-black dark:text-white tracking-tighter uppercase italic">Income <br /><span className="text-emerald-500">SHIFT</span></h2>
            <SupportingText text="The combination of Denim and BSF projects nearly quadruples the total monthly income from 60,000 to 260,000." />
          </div>
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
      title: "Phase 14: Strategic Budget",
      x: -3000,
      y: 6000,
      scale: 1,
      component: (
        <div className="w-full max-w-3xl space-y-6 px-6 flex flex-col items-center mx-auto text-center">
          <div><PhaseLabel num="14" /><h2 className="text-3xl font-black text-black dark:text-white tracking-tighter uppercase italic">Revised <span className="text-emerald-500">SPEND</span></h2></div>
          <Table
            headers={["Category", "Basis", "Amount"]}
            rows={[
              ["Transport", "Commute", "18,000"],
              ["Food", "Nutrition", "25,000"],
              ["Data", "Research", "10,000"],
              ["Growth", "R&D", "35,000"],
              ["Stability", "Wealth", "30,000"],
              ["Emergency", "Savings", "10,000"],
              ["Buffer", "Misc", "7,000"],
              [<span className="text-emerald-600 uppercase text-[10px]">Total</span>, "", <span className="text-emerald-600 font-black">135,000</span>],
            ]}
            highlightLast
          />
          <SupportingText text="Spending is now optimized for growth, with dedicated allocations for R&D and wealth stability." />
        </div>
      ),
    },
    {
      id: "wealth-engine",
      title: "Phase 15: Prosperity Engine",
      x: 0,
      y: 6000,
      scale: 1,
      component: (
        <div className="flex flex-col items-center gap-6 text-center px-6 max-w-lg mx-auto">
          <PhaseLabel num="15" />
          <div className="p-10 rounded-3xl bg-emerald-600 text-white shadow-2xl w-full relative overflow-hidden border-4 border-emerald-400">
            <h2 className="text-xl font-black mb-1 uppercase tracking-widest">SURPLUS</h2>
            <div className="text-6xl font-black my-2 tracking-tighter">125,000 RWF</div>
            <p className="text-[12px] uppercase tracking-[0.2em] font-black opacity-80">Monthly Wealth Generation active.</p>
          </div>
          <SupportingText text="The 125,000 RWF monthly surplus is the engine that will build long-term generational wealth." />
        </div>
      ),
    },
    {
      id: "investments",
      title: "Phase 16: Growth Strategy",
      x: 3000,
      y: 6000,
      scale: 1,
      component: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center w-full max-w-4xl px-6 mx-auto">
          <div className="space-y-6 text-center md:text-left">
            <PhaseLabel num="16" />
            <h2 className="text-4xl font-black text-black dark:text-white tracking-tighter uppercase leading-none">Growth <span className="text-emerald-500">DIVERSE</span></h2>
            <div className="space-y-2">
              {[ { n: "RNIT", v: "25,000", r: "11.7% Yield" }, { n: "Shares", v: "15,000", r: "BK Group" }, { n: "Savings", v: "85,000", r: "Liquid" } ].map((i) => (
                <div key={i.n} className="p-4 rounded-xl bg-white dark:bg-zinc-900 border-2 border-zinc-100 dark:border-zinc-800 flex justify-between items-center text-xs font-bold uppercase shadow-sm">
                  <div><span className="text-black dark:text-white block text-lg">{i.n}</span><span className="text-emerald-500 tracking-widest text-[10px]">{i.r}</span></div>
                  <span className="text-black dark:text-white text-xl">{i.v}</span>
                </div>
              ))}
            </div>
            <SupportingText text="Diversifying into high-yield funds (RNIT) and local stocks (BK) provides both security and passive growth." />
          </div>
          <div className="p-8 rounded-3xl bg-zinc-100 dark:bg-white text-black border-b-8 border-emerald-500 text-center shadow-2xl border border-zinc-200 dark:border-transparent transition-colors">
            <h3 className="text-xs font-black uppercase mb-2 opacity-60">RNIT Cumulative Audit</h3>
            <p className="text-4xl font-black text-emerald-600 dark:text-emerald-500">+35,000 Yearly</p>
          </div>
        </div>
      ),
    },
    {
      id: "savings-path",
      title: "Phase 17: Accumulation Path",
      x: 6000,
      y: 6000,
      scale: 1,
      component: (
        <div className="w-full max-w-xl space-y-6 px-6 flex flex-col items-center mx-auto text-center">
          <div><PhaseLabel num="17" /><h2 className="text-3xl font-black text-black dark:text-white tracking-tighter uppercase leading-none">Wealth <span className="text-emerald-500">ACCUM</span></h2></div>
          <Table
            headers={["Milestone", "Fund", "Status"]}
            rows={[
              ["3 Month Buffer", "120,000", "PROJECTED"],
              ["6 Month Buffer", "240,000", "PROJECTED"],
              ["12 Month Safety", "480,000", "TARGET"],
            ]}
            highlightLast
          />
          <SupportingText text="By consistently saving, we reach a 'safety zone' of 480,000 RWF within a year, providing total financial peace of mind." />
        </div>
      ),
    },
    {
      id: "risk-audit",
      title: "Phase 18: Risk Strategy",
      x: 9000,
      y: 6000,
      scale: 1,
      component: (
        <div className="max-w-4xl w-full px-6 flex flex-col items-center mx-auto text-center">
          <PhaseLabel num="18" />
          <h2 className="text-4xl font-black text-black dark:text-white tracking-tighter uppercase italic mb-6">Defense <span className="text-rose-500">STRATEGY</span></h2>
          <div className="grid grid-cols-2 gap-4 w-full">
            {[ { r: "Demand Shift", s: "Iterative Design." }, { r: "Production Delays", s: "Backup Partners." }, { r: "Waste Supply", s: "Institutional Contracts." }, { r: "Competition", s: "Quality Differentiation." } ].map((i) => (
              <div key={i.r} className="p-4 rounded-xl bg-white dark:bg-zinc-900 border-2 border-zinc-100 dark:border-zinc-800 text-xs font-bold uppercase shadow-sm text-left">
                <h3 className="text-black dark:text-white text-lg mb-1">{i.r}</h3>
                <p className="text-zinc-500">{i.s}</p>
              </div>
            ))}
          </div>
          <SupportingText text="Every business has risks. Our strategy focuses on backup partners and institutional contracts to mitigate them." />
        </div>
      ),
    },
    {
      id: "conclusion",
      title: "Phase 19: Strategic Resolution",
      x: 12000,
      y: 6000,
      scale: 1,
      component: (
        <div className="max-w-xl text-center space-y-8 px-6 mx-auto">
          <PhaseLabel num="19" />
          <div className="w-20 h-20 bg-zinc-100 dark:bg-white rounded-3xl mx-auto flex items-center justify-center text-emerald-600 dark:text-emerald-500 shadow-2xl border-4 border-emerald-500 transition-colors">
            <CheckCircle2 size={48} />
          </div>
          <h2 className="text-6xl font-black text-black dark:text-white tracking-tighter uppercase italic leading-none">GOAL <span className="text-emerald-500">ACQUIRED</span></h2>
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
          : "bg-white text-black",
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
          <button onClick={next} className="flex items-center gap-2 font-black text-[10px] uppercase tracking-widest bg-zinc-900 dark:bg-white text-white dark:text-black px-5 py-3 rounded-lg hover:bg-emerald-500 active:scale-95 transition-all">
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

      {/* Sticky Background Image for Denim Project (Phases 07 & 08) */}
      <AnimatePresence>
        {(activeSection === 6 || activeSection === 7) && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: -20 }}
            animate={{ opacity: 1, scale: 0.85, x: 0 }}
            exit={{ opacity: 0, scale: 0.8, x: -20 }}
            className="fixed bottom-[-5%] left-[-5%] z-0 w-[30vw] aspect-square pointer-events-none transition-all duration-700"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-white via-transparent to-transparent dark:from-zinc-900 z-10" />
            <img 
              src="/images/collected-jeans-pile.png" 
              alt="" 
              className="w-full h-full object-contain grayscale opacity-25 dark:opacity-40 mix-blend-multiply dark:mix-blend-overlay" 
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Parallax BSF Video */}
      <AnimatePresence>
        {activeSection >= 8 && activeSection <= 11 && (
          <motion.div
            layoutId="bsf-video-container"
            className="fixed z-40 overflow-hidden shadow-2xl pointer-events-none"
            initial={{ 
              top: "50%", 
              right: "5%", 
              width: "35vw", 
              height: "60vh", 
              y: "-50%",
              borderRadius: "32px",
              opacity: 0
            }}
            animate={{ 
              top: activeSection === 8 ? "50%" : "85%",
              right: activeSection === 8 ? "10%" : "5%",
              left: "auto",
              width: activeSection === 8 ? "35vw" : "250px",
              height: activeSection === 8 ? "60vh" : "150px",
              x: 0,
              y: "-50%",
              borderRadius: "32px",
              opacity: 1
            }}
            exit={{ opacity: 0 }}
            transition={{ type: "spring", stiffness: 40, damping: 20 }}
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
        )}
      </AnimatePresence>

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
