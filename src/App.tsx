import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  ArrowRight,
  ArrowLeft,
  AlertTriangle,
  CheckCircle2,
  Sun,
  Moon,
  Maximize2,
  X,
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
  <div className="overflow-x-auto rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-xl transition-colors w-full">
    <table className="w-full text-left text-[clamp(0.8rem,1.4vw,1rem)] border-collapse min-w-[320px]">
      <thead className="bg-zinc-50 dark:bg-zinc-800/50 text-zinc-500 dark:text-zinc-400 uppercase text-[clamp(0.55rem,0.9vw,0.72rem)] tracking-[0.15em]">
        <tr>
          {headers.map((h, i) => (
            <th
              key={i}
              className={cn(
                "px-4 py-3 font-black border-r border-zinc-200 dark:border-zinc-700 last:border-r-0 whitespace-nowrap",
                i === 0 ? "text-left" : "text-right",
              )}
            >
              {h}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="text-zinc-800 dark:text-zinc-200">
        {rows.map((row, i) => (
          <tr
            key={i}
            className={cn(
              "hover:bg-zinc-50/80 dark:hover:bg-zinc-800/30 transition-colors border-b border-zinc-100 dark:border-zinc-800 last:border-b-0",
              i === rows.length - 1 &&
                highlightLast &&
                "bg-emerald-50 dark:bg-emerald-900/10 text-emerald-900 dark:text-emerald-400 font-bold",
            )}
          >
            {row.map((cell, j) => (
              <td
                key={j}
                className={cn(
                  "px-4 py-3 font-semibold border-r border-zinc-100 dark:border-zinc-800 last:border-r-0",
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
  <span className="text-[clamp(0.6rem,1.1vw,0.8rem)] font-black uppercase tracking-[0.35em] text-zinc-400 dark:text-zinc-500 mb-2 block transition-colors">
    Phase {num}
  </span>
);

const SupportingText = ({ text }: { text: string }) => (
  <p className="mt-4 text-zinc-500 dark:text-zinc-400 text-[clamp(0.8rem,1.3vw,0.95rem)] font-medium leading-relaxed max-w-xl mx-auto italic">
    {text}
  </p>
);

export default function App() {
  const [activeSection, setActiveSection] = useState(0);
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [windowWidth, setWindowWidth] = useState(typeof window !== "undefined" ? window.innerWidth : 1200);
  const [isVideoExpanded, setIsVideoExpanded] = useState(false);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = windowWidth < 768;

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
      if (e.key === "Escape") setIsVideoExpanded(false);
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
        <div className="relative flex flex-col items-center justify-center text-center w-full max-w-5xl mx-auto px-4 sm:px-6">
          {/* Responsive Bags */}
          <div className="absolute inset-0 pointer-events-none -z-10 flex flex-row sm:block items-end justify-center gap-4 py-8 sm:py-0">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 0.6, y: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="sm:absolute sm:left-[-10%] sm:top-1/2 sm:-translate-y-1/2 w-24 sm:w-32 md:w-48 aspect-square"
            >
              <img src="/images/bag2.png" alt="" className="w-full h-full object-contain" />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 0.6, y: 0 }}
              transition={{ delay: 0.7, duration: 1 }}
              className="sm:absolute sm:right-[-10%] sm:top-1/2 sm:-translate-y-1/2 w-24 sm:w-32 md:w-48 aspect-square"
            >
              <img src="/images/bag3.png" alt="" className="w-full h-full object-contain" />
            </motion.div>
          </div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4 sm:space-y-6"
          >
            <PhaseLabel num="01" />
            <h1 className="text-[clamp(2.5rem,7vw,6rem)] font-black text-zinc-900 dark:text-white tracking-tighter leading-[0.9] uppercase transition-colors">
              Financial <br />
              <span className="text-emerald-500 italic">Aguka</span> <br />
              <span className="text-zinc-500 dark:text-zinc-400">Project</span>
            </h1>
            <p className="text-zinc-600 dark:text-zinc-400 text-[clamp(0.7rem,1.2vw,0.85rem)] max-w-xs mx-auto font-bold uppercase tracking-[0.3em] transition-colors">
              A 19-Phase framework for capital stability.
            </p>
            <SupportingText text="This plan outlines a transition from financial dependency to a self-sustaining ecosystem through strategic investment and operational efficiency." />
            <div className="flex flex-wrap justify-center gap-6 mt-8 opacity-70">
              {["Prince Ntare", "Cynthia Marie", "Gurnaud Ishema"].map((name) => (
                <span
                  key={name}
                  className="text-[10px] font-black uppercase tracking-widest border-t-2 border-zinc-300 dark:border-zinc-800 pt-2 text-zinc-600 dark:text-zinc-400"
                >
                  {name}
                </span>
              ))}
            </div>
          </motion.div>
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
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="w-full max-w-4xl space-y-6 sm:space-y-10 px-4 sm:px-8 flex flex-col items-center mx-auto text-center relative z-10"
        >
          <div>
            <PhaseLabel num="02" />
            <h2 className="text-[clamp(2rem,4.5vw,4rem)] font-black text-zinc-900 dark:text-white uppercase italic leading-none">
              Current <span className="text-emerald-500">INCOME</span>
            </h2>
          </div>
          <Table
            headers={["Source", "Context", "Amount"]}
            rows={[
              ["Parents", "Support", "20,000"],
              ["Weekend", "Work", "25,000"],
              ["Shop Job", "Part-time", "15,000"],
              [
                <span className="text-emerald-600 uppercase text-[11px] font-black">Total</span>,
                "",
                <span className="text-emerald-600 font-black text-xl sm:text-2xl">60,000</span>,
              ],
            ]}
            highlightLast
          />
          <SupportingText text="An analysis of existing cash inflows shows a baseline of 60,000 RWF per month from multiple sources." />
        </motion.div>
      ),
    },
    {
      id: "expense-audit",
      title: "Phase 03: Expense Audit",
      x: 6000,
      y: 0,
      scale: 1,
      component: (
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="w-full max-w-4xl space-y-6 sm:space-y-10 px-4 sm:px-8 flex flex-col items-center mx-auto text-center relative z-10"
        >
          <div>
            <PhaseLabel num="03" />
            <h2 className="text-[clamp(2rem,4.5vw,4rem)] font-black text-zinc-900 dark:text-white uppercase italic leading-none">
              Current <span className="text-rose-500">SPEND</span>
            </h2>
          </div>
          <Table
            headers={["Category", "Usage", "Amount"]}
            rows={[
              ["Transport", "Commute", "18,000"],
              ["Food", "Sustenance", "25,000"],
              ["Data", "Research", "30,000"],
              ["Debt", "Installments", "7,000"],
              [
                <span className="text-rose-600 uppercase text-[11px] font-black">Total</span>,
                "",
                <span className="text-rose-600 font-black text-xl sm:text-2xl">80,000</span>,
              ],
            ]}
            highlightLast
          />
          <SupportingText text="Current monthly expenditures total 80,000 RWF, revealing a significant gap between earning and spending." />
        </motion.div>
      ),
    },
    {
      id: "deficit-analysis",
      title: "Phase 04: Deficit Analysis",
      x: 9000,
      y: 0,
      scale: 1,
      component: (
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="flex flex-col items-center gap-6 sm:gap-10 text-center px-4 sm:px-8 max-w-md mx-auto relative z-10"
        >
          <PhaseLabel num="04" />
          <div className="p-8 sm:p-12 md:p-14 rounded-[40px] bg-rose-500 text-white shadow-2xl w-full border-4 border-rose-400 flex flex-col items-center">
            <AlertTriangle className="mb-4 text-rose-100 w-14 h-14 sm:w-20 sm:h-20" />
            <h2 className="text-[clamp(1.2rem,2.5vw,2rem)] font-black mb-2 uppercase tracking-tighter">
              CRITICAL DEFICIT
            </h2>
            <div className="text-[clamp(3.5rem,8vw,6.5rem)] font-black my-2 tracking-tighter leading-[0.85] tabular-nums">
              -20,000
            </div>
            <div className="text-lg font-black opacity-60 tracking-widest">RWF</div>
          </div>
          <SupportingText text="The 20,000 RWF monthly deficit is the core problem. Without intervention, this leads to increasing debt and financial instability." />
        </motion.div>
      ),
    },
    {
      id: "debt-situation",
      title: "Phase 05: Liability Audit",
      x: 9000,
      y: 3000,
      scale: 1,
      component: (
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="w-full max-w-4xl space-y-6 sm:space-y-10 px-4 sm:px-8 flex flex-col items-center mx-auto text-center relative z-10"
        >
          <div>
            <PhaseLabel num="05" />
            <h2 className="text-[clamp(2rem,4.5vw,4rem)] font-black text-zinc-900 dark:text-white uppercase italic leading-none">
              Debt <span className="text-rose-500">SITUATION</span>
            </h2>
          </div>
          <Table
            headers={["Creditor", "Context", "Debt"]}
            rows={[
              ["Aline", "Loan", "60,000"],
              ["Eric", "Loan", "50,000"],
              ["Patrick", "Loan", "40,000"],
              [
                <span className="text-rose-600 uppercase text-[11px] font-black">Burden</span>,
                "LIQUIDATED",
                <span className="text-rose-600 font-black text-xl sm:text-2xl">150,000</span>,
              ],
            ]}
            highlightLast
          />
          <SupportingText text="Total liabilities of 150,000 RWF must be cleared to reach a neutral financial state before growth can begin." />
        </motion.div>
      ),
    },
    {
      id: "seed-allocation",
      title: "Phase 06: Seed Deployment",
      x: 6000,
      y: 3000,
      scale: 1,
      component: (
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="flex flex-col lg:flex-row gap-8 lg:gap-20 items-center justify-center w-full max-w-6xl px-4 sm:px-8 mx-auto relative z-10"
        >
          <div className="space-y-6 sm:space-y-8 text-center lg:text-left shrink-0 w-full max-w-xl">
            <PhaseLabel num="06" />
            <h2 className="text-[clamp(2.5rem,5.5vw,5rem)] font-black text-zinc-900 dark:text-white tracking-tighter uppercase leading-none">
              Support <span className="text-emerald-500 italic">SPLIT</span>
            </h2>
            <div className="space-y-3 w-full">
              {[
                { n: "Debt", v: "150,000" },
                { n: "Buffer", v: "150,000" },
                { n: "Invest", v: "1,200,000" },
              ].map((i, idx) => (
                <motion.div
                  key={i.n}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="px-5 py-3.5 rounded-xl bg-zinc-50 dark:bg-zinc-800 border-2 border-zinc-200 dark:border-zinc-700 flex justify-between items-center text-[clamp(0.7rem,1.1vw,0.85rem)] font-black uppercase shadow-sm"
                >
                  <span className="text-zinc-400 dark:text-zinc-500">{i.n}</span>
                  <span className="text-zinc-900 dark:text-white text-lg sm:text-xl">{i.v}</span>
                </motion.div>
              ))}
            </div>
            <SupportingText text="A 1,500,000 RWF seed fund is allocated to clear debt, create a buffer, and fuel the main investment engines." />
          </div>
          <motion.div 
            whileHover={{ scale: 1.05, rotate: 0 }}
            className="w-48 sm:w-64 md:w-72 aspect-square bg-emerald-500 dark:bg-emerald-600 text-white rounded-[40px] flex flex-col items-center justify-center shadow-2xl border-4 border-emerald-400 shrink-0 transform md:rotate-3 transition-transform cursor-default"
          >
            <p className="text-[clamp(0.55rem,0.9vw,0.8rem)] font-black uppercase opacity-70 tracking-[0.2em]">
              Total Seed
            </p>
            <p className="text-[clamp(2rem,4vw,4rem)] font-black tracking-tighter">1,500,000</p>
          </motion.div>
        </motion.div>
      ),
    },
    {
      id: "denim-intro",
      title: "Phase 07: Portfolio 01 Intro",
      x: 4500,
      y: 3000,
      scale: 1,
      component: (
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="max-w-4xl text-center space-y-8 px-4 sm:px-8 relative z-10"
        >
          <PhaseLabel num="07" />
          <h2 className="text-[clamp(2.5rem,6vw,5.5rem)] font-black text-zinc-900 dark:text-white tracking-tighter uppercase leading-[0.85]">
            Engine 01 <br />
            <span className="text-indigo-600 italic">DENIM BAGS</span>
          </h2>
          <div className="flex justify-center gap-4">
             <div className="w-16 h-1 bg-indigo-600 rounded-full" />
             <div className="w-4 h-1 bg-zinc-300 dark:bg-zinc-800 rounded-full" />
          </div>
          <p className="text-[clamp(1rem,1.5vw,1.4rem)] font-bold text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            The Denim project leverages upcycling to transform second-hand materials into high-margin lifestyle products.
          </p>
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="inline-block px-8 py-4 bg-indigo-600 text-white rounded-2xl font-black uppercase tracking-widest text-sm shadow-xl"
          >
            Sustainability x Profit
          </motion.div>
        </motion.div>
      ),
    },
    {
      id: "denim-materials",
      title: "Phase 08: Material Inputs",
      x: 3000,
      y: 3000,
      scale: 1,
      component: (
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="w-full h-full flex items-center justify-center"
        >
          <div className="w-full max-w-4xl space-y-6 sm:space-y-10 px-4 sm:px-8 flex flex-col items-center mx-auto text-center relative z-10" >
            <div>
              <PhaseLabel num="08" />
              <h2 className="text-[clamp(1.8rem,3.5vw,3.5rem)] font-black text-zinc-900 dark:text-white uppercase leading-none">
                Material <span className="text-indigo-600">INPUTS</span>
              </h2>
            </div>
            <Table
              headers={["Material", "Cost (RWF)"]}
              rows={[
                ["Second-hand jeans", "50,000"],
                ["Zippers", "15,000"],
                ["Thread", "5,000"],
                ["Inner lining fabric", "15,000"],
                ["Handles/straps", "10,000"],
                ["Labels & decorations", "10,000"],
                ["Labels, Deco & Packaging", "20,000"],
                ["Marketing & Transport", "40,000"],
                ["Extra material reserve", "50,000"],
                [
                  <span className="text-indigo-600 uppercase text-[11px] font-black">Total Materials</span>,
                  <span className="text-indigo-600 font-black text-xl sm:text-2xl">205,000</span>,
                ],
              ]}
              highlightLast
            />
            <SupportingText text="This table details the raw material consumption for a single production cycle of upcycled denim bags." />
          </div>
        </motion.div>
      ),
    },
    {
      id: "denim-labour",
      title: "Phase 09: Labour Logic",
      x: 0,
      y: 3000,
      scale: 1,
      component: (
        <div className="w-full h-full flex items-center justify-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-center w-full max-w-6xl px-4 sm:px-8 mx-auto relative z-10">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="space-y-6 sm:space-y-8 text-center lg:text-left"
            >
              <PhaseLabel num="09" />
              <h2 className="text-[clamp(2rem,4.5vw,4.5rem)] font-black text-zinc-900 dark:text-white tracking-tighter uppercase italic leading-[0.85]">
                Tailor <br />
                <span className="text-indigo-600">LOGIC</span>
              </h2>
              <div className="flex flex-col sm:flex-row lg:flex-col gap-4 sm:gap-6 justify-center lg:justify-start">
                <motion.div 
                  whileHover={{ y: -5 }}
                  className="p-6 sm:p-8 rounded-3xl bg-indigo-600 text-white shadow-xl inline-block transform -rotate-2"
                >
                  <span className="text-[11px] font-black uppercase opacity-60">Unit Rate</span>
                  <p className="text-4xl sm:text-5xl font-black tracking-tighter mt-1">
                    3,500{" "}
                    <span className="text-lg font-normal opacity-50 uppercase">Rwf</span>
                  </p>
                </motion.div>
                <motion.div 
                  whileHover={{ y: -5 }}
                  className="p-5 sm:p-6 rounded-3xl bg-emerald-100 dark:bg-emerald-600 text-emerald-900 dark:text-white shadow-lg inline-block border-2 border-emerald-200 dark:border-transparent transform rotate-1"
                >
                  <span className="text-[11px] font-black uppercase opacity-60 italic">Calculation</span>
                  <p><b>40Bags = 10,000 each = 400,000FRW</b></p>
              
                  <p className="text-xl sm:text-2xl font-black tracking-tighter mt-1 leading-none">
                    400,000 <span className="opacity-40">-</span> 345,000{" "}
                    <span className="opacity-40">=</span> 55,000
                  </p>
                  <span className="text-[11px] font-bold block mt-2 uppercase opacity-60 tracking-widest">
                    Net Profit / Cycle
                  </span>
                </motion.div>
              </div>
              <SupportingText text="Total Production Cost (345,000) vs Revenue (400,000) yields a 55,000 RWF profit per cycle." />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="w-full"
            >
              <Table
                headers={["Item", "Basis", "Value"]}
                rows={[
                  ["Materials", "Fixed", "205,000"],
                  ["Labour", "40 Bags", "140,000"],
                  [
                    <span className="text-indigo-600 uppercase text-[11px] font-black">Total Cost</span>,
                    "",
                    <span className="font-black text-2xl sm:text-3xl text-zinc-900 dark:text-white">345,000</span>,
                  ],
                ]}
                highlightLast
              />
            </motion.div>
          </div>
        </div>
      ),
    },
    {
      id: "bsf-problem",
      title: "Phase 10: BSF Introduction",
      x: -3000,
      y: 3000,
      scale: 1,
      component: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-20 items-center w-full max-w-6xl px-4 sm:px-8 mx-auto relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="space-y-6 sm:space-y-10 text-center md:text-left"
          >
            <PhaseLabel num="10" />
            <h2 className="text-[clamp(2rem,4.5vw,4.5rem)] font-black text-zinc-900 dark:text-white tracking-tighter uppercase italic leading-[0.85]">
              BSF{" "}
              <span className="text-emerald-500">
                PROBLEM & <br /> SOLUTION
              </span>
            </h2>
            <div className="space-y-4 sm:space-y-6">
              <p className="text-[clamp(0.9rem,1.4vw,1.2rem)] font-bold text-zinc-700 dark:text-zinc-300">
                Black Soldier Fly larvae are used as high-protein animal feed for poultry, fish, and pig farmers.
              </p>
              <motion.div 
                whileHover={{ x: 5 }}
                className="p-6 sm:p-8 bg-emerald-50 dark:bg-emerald-900/10 border-l-[6px] border-emerald-500 rounded-r-2xl text-left transition-colors shadow-sm"
              >
                <h4 className="text-[clamp(0.75rem,1.1vw,0.9rem)] font-black uppercase text-emerald-700 dark:text-emerald-500 mb-2 tracking-widest">
                  The Problem
                </h4>
                <p className="text-[clamp(0.85rem,1.2vw,1.05rem)] text-zinc-900 dark:text-zinc-300 font-semibold leading-relaxed">
                  Traditional animal feed is expensive and organic waste management is a growing challenge for local communities.
                </p>
              </motion.div>
              <motion.div 
                whileHover={{ x: 5 }}
                className="p-6 sm:p-8 bg-zinc-50 dark:bg-zinc-800 border-l-[6px] border-zinc-600 rounded-r-2xl text-left transition-colors shadow-sm"
              >
                <h4 className="text-[clamp(0.75rem,1.1vw,0.9rem)] font-black uppercase text-zinc-700 dark:text-zinc-400 mb-2 tracking-widest">
                  The Bio-Tech Solution
                </h4>
                <p className="text-[clamp(0.85rem,1.2vw,1.05rem)] text-zinc-900 dark:text-zinc-300 font-semibold leading-relaxed">
                  The larvae feed on organic waste, turning it into high-value protein, making the production process sustainable and highly profitable.
                </p>
              </motion.div>
            </div>
            <SupportingText text="This biotech engine converts local waste into an essential agricultural resource." />
          </motion.div>
          {/* Video Placeholder for Desktop */}
          <div className="aspect-[4/5] md:aspect-[3/4] rounded-[40px] overflow-hidden hidden md:block" />
        </div>
      ),
    },
    {
      id: "waste-logistics",
      title: "Phase 11: Waste Sourcing",
      x: -6000,
      y: 3000,
      scale: 1,
      component: (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-center w-full max-w-6xl px-4 sm:px-8 mx-auto relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-6 sm:space-y-10 text-center lg:text-left order-2 lg:order-1"
          >
            <PhaseLabel num="11" />
            <h2 className="text-[clamp(2rem,4.5vw,4.5rem)] font-black text-zinc-900 dark:text-white tracking-tighter uppercase leading-none">
              Waste <br />
              <span className="text-emerald-500 italic">SOURCING</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3 sm:gap-4">
              {[
                { l: "Local Markets", d: "Organic waste is mostly freely given." },
                { l: "Schools", d: "Partnering for starch-rich food leftovers." },
                { l: "Restaurants", d: "Consistent high-volume organic supply." },
              ].map((i) => (
                <motion.div
                  key={i.l}
                  whileHover={{ scale: 1.02, x: 5 }}
                  className="p-5 sm:p-6 bg-zinc-50 dark:bg-zinc-900 rounded-2xl border-2 border-zinc-100 dark:border-zinc-800 text-xs font-bold uppercase shadow-lg transition-all"
                >
                  <h4 className="text-zinc-900 dark:text-white text-lg sm:text-xl leading-none mb-2">
                    {i.l}
                  </h4>
                  <p className="text-zinc-500 font-medium normal-case text-sm">{i.d}</p>
                </motion.div>
              ))}
            </div>
            <SupportingText text="Securing free raw material (waste) from institutional partners ensures that the largest operational cost remains zero." />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="aspect-square lg:aspect-[4/5] rounded-[40px] overflow-hidden border-4 border-white dark:border-zinc-800 shadow-2xl bg-zinc-100 relative order-1 lg:order-2 max-h-[30vh] lg:max-h-none"
          >
            <img
              src="/images/black-soldier-containers.png"
              alt=""
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-4 sm:bottom-8 right-4 sm:right-8 px-4 sm:px-6 py-2 sm:py-3 bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-white rounded-xl sm:rounded-2xl text-[11px] font-black uppercase border-2 border-emerald-500 shadow-2xl">
              Zero Cost Input
            </div>
          </motion.div>
        </div>
      ),
    },
    {
      id: "bsf-startup-costs",
      title: "Phase 12: Startup Costs",
      x: -9000,
      y: 3000,
      scale: 1,
      component: (
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="flex flex-col items-center justify-center w-full max-w-4xl px-4 sm:px-8 mx-auto space-y-8 sm:space-y-12 relative z-10"
        >
          <div className="text-center w-full">
            <PhaseLabel num="12" />
            <h2 className="text-[clamp(2rem,4.5vw,4.5rem)] font-black text-zinc-900 dark:text-white tracking-tighter uppercase italic leading-none">
              BSF <span className="text-emerald-500">STARTUP COSTS</span>
            </h2>
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
                [
                  <span className="text-emerald-600 uppercase text-[11px] font-black">Total Setup Cost</span>,
                  <span className="text-emerald-600 font-black text-2xl sm:text-3xl">650,000</span>,
                ],
              ]}
              highlightLast
            />
          </div>
        </motion.div>
      ),
    },
    {
      id: "bsf-production",
      title: "Phase 13: Yield Audit",
      x: -9000,
      y: 6000,
      scale: 1,
      component: (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-center w-full max-w-6xl px-4 sm:px-8 mx-auto relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-6 sm:space-y-10 text-center lg:text-left"
          >
            <PhaseLabel num="13" />
            <h2 className="text-[clamp(2.5rem,5.5vw,5rem)] font-black text-zinc-900 dark:text-white tracking-tighter uppercase italic leading-[0.85]">
              Bio <span className="text-emerald-500 italic">YIELD</span>
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start">
              <motion.div 
                whileHover={{ y: -5 }}
                className="px-6 sm:px-8 py-4 sm:py-5 rounded-3xl bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-white text-center shadow-xl border-2 border-zinc-200 dark:border-transparent transition-colors"
              >
                <p className="text-[11px] uppercase opacity-60 font-black mb-2 tracking-widest">Target</p>
                <p className="text-4xl sm:text-5xl font-black tracking-tighter">70 KG</p>
              </motion.div>
              <motion.div 
                whileHover={{ y: -5 }}
                className="px-6 sm:px-8 py-4 sm:py-5 rounded-3xl bg-emerald-100 dark:bg-emerald-600 text-emerald-900 dark:text-white text-center shadow-xl border-2 border-emerald-200 dark:border-transparent transition-colors"
              >
                <p className="text-[11px] uppercase opacity-60 font-black mb-2 italic tracking-widest">Calculation</p>
                <p className="text-2xl sm:text-3xl font-black tracking-tighter leading-none">
                  175,000 <span className="opacity-40">-</span> 30,000{" "}
                  <span className="opacity-40">=</span> 145,000
                </p>
                <span className="text-[11px] font-bold block mt-3 uppercase opacity-60 tracking-[0.2em]">
                  Monthly Net Profit
                </span>
              </motion.div>
            </div>
            <SupportingText text="A monthly output of 70KG allows for a significant profit margin after minimal logistics costs." />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="w-full"
          >
            <Table
              headers={["Param", "Basis", "Value"]}
              rows={[
                ["Target", "Output", "70 KG"],
                ["Gross", "@ 2,500", "175,000"],
                ["Ops", "Logistics", "30,000"],
                [
                  <span className="text-emerald-600 uppercase text-[11px] font-black">Profit</span>,
                  "",
                  <span className="text-emerald-600 font-black text-2xl sm:text-3xl">145,000</span>,
                ],
              ]}
              highlightLast
            />
          </motion.div>
        </div>
      ),
    },
    {
      id: "revenue-shift",
      title: "Phase 14: Target Revenue",
      x: -6000,
      y: 6000,
      scale: 1,
      component: (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-center w-full max-w-6xl px-4 sm:px-8 mx-auto relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-6 sm:space-y-8 text-center lg:text-left"
          >
            <PhaseLabel num="14" />
            <h2 className="text-[clamp(2rem,4.5vw,5rem)] font-black text-zinc-900 dark:text-white tracking-tighter uppercase italic leading-none">
              Income <br />
              <span className="text-emerald-500">SHIFT</span>
            </h2>
            <SupportingText text="The combination of Denim and BSF projects nearly quadruples the total monthly income from 60,000 to 260,000." />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="w-full"
          >
            <Table
              headers={["Vertical", "Amount (RWF)"]}
              rows={[
                ["Original Support", "60,000"],
                ["Denim Project", "55,000"],
                ["BSF Startup", "145,000"],
                [
                  <span className="text-emerald-600 uppercase text-[11px] font-black tracking-widest">New Total</span>,
                  <span className="text-emerald-600 font-black text-3xl sm:text-4xl tracking-tighter">260,000</span>,
                ],
              ]}
              highlightLast
            />
          </motion.div>
        </div>
      ),
    },
    {
      id: "new-budget",
      title: "Phase 15: Strategic Budget",
      x: -3000,
      y: 6000,
      scale: 1,
      component: (
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="w-full max-w-4xl space-y-6 sm:space-y-10 px-4 sm:px-8 flex flex-col items-center mx-auto text-center relative z-10"
        >
          <div>
            <PhaseLabel num="15" />
            <h2 className="text-[clamp(2rem,4.5vw,4rem)] font-black text-zinc-900 dark:text-white tracking-tighter uppercase italic">
              Revised <span className="text-emerald-500">SPEND</span>
            </h2>
          </div>
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
              [
                <span className="text-emerald-600 uppercase text-[11px] font-black tracking-widest">Total</span>,
                "",
                <span className="text-emerald-600 font-black text-2xl sm:text-3xl tracking-tighter">135,000</span>,
              ],
            ]}
            highlightLast
          />
          <SupportingText text="Spending is now optimized for growth, with dedicated allocations for R&D and wealth stability." />
        </motion.div>
      ),
    },
    {
      id: "wealth-engine",
      title: "Phase 16: Prosperity Engine",
      x: 0,
      y: 6000,
      scale: 1,
      component: (
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="flex flex-col items-center gap-6 sm:gap-10 text-center px-4 sm:px-8 max-w-sm sm:max-w-xl mx-auto relative z-10"
        >
          <PhaseLabel num="16" />
          <div className="p-10 sm:p-16 md:p-20 rounded-[40px] bg-emerald-600 text-white shadow-2xl w-full relative overflow-hidden border-4 border-emerald-400">
            <h2 className="text-[clamp(1rem,1.8vw,1.4rem)] font-black mb-2 uppercase tracking-[0.3em] opacity-80">
              SURPLUS
            </h2>
            <div className="text-[clamp(3.5rem,8vw,6.5rem)] font-black my-3 tracking-tighter leading-none tabular-nums">
              125,000
            </div>
            <p className="text-[clamp(0.65rem,1.1vw,0.82rem)] uppercase tracking-[0.2em] font-black opacity-60">
              RWF / MONTH ACTIVE
            </p>
          </div>
          <SupportingText text="The 125,000 RWF monthly surplus is the engine that will build long-term generational wealth." />
        </motion.div>
      ),
    },
    {
      id: "investments",
      title: "Phase 17: Growth Strategy",
      x: 3000,
      y: 6000,
      scale: 1,
      component: (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-center w-full max-w-6xl px-4 sm:px-8 mx-auto relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-6 sm:space-y-10 text-center lg:text-left"
          >
            <PhaseLabel num="17" />
            <h2 className="text-[clamp(2rem,4.5vw,4rem)] font-black text-zinc-900 dark:text-white tracking-tighter uppercase leading-none">
              Growth <br />
              <span className="text-emerald-500 italic">DIVERSE</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3 sm:gap-4">
              {[
                { n: "Shares", v: "50,000", r: "BK Group" },
                { n: "RNIT", v: "50,000", r: "11.7% Yield" },
                { n: "Savings", v: "55,000", r: "Liquid" },
              ].map((i, idx) => (
                <motion.div
                  key={i.n}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ x: 5 }}
                  className="p-5 sm:p-6 rounded-2xl bg-zinc-50 dark:bg-zinc-900 border-2 border-zinc-100 dark:border-zinc-800 flex justify-between items-center text-xs font-bold uppercase shadow-lg transition-all"
                >
                  <div>
                    <span className="text-zinc-900 dark:text-white block text-lg sm:text-xl mb-1">
                      {i.n}
                    </span>
                    <span className="text-emerald-500 tracking-widest text-[10px] sm:text-[11px] font-black">
                      {i.r}
                    </span>
                  </div>
                  <span className="text-zinc-900 dark:text-white text-xl sm:text-2xl tracking-tighter tabular-nums">
                    {i.v}
                  </span>
                </motion.div>
              ))}
            </div>
            <SupportingText text="Diversifying into high-yield funds (RNIT) and local stocks (BK) provides both security and passive growth." />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, rotate: 0 }}
            whileInView={{ opacity: 1, rotate: 3 }}
            className="p-8 sm:p-12 rounded-[40px] bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 border-b-[12px] border-emerald-500 text-center shadow-2xl border border-zinc-200 dark:border-transparent transition-colors transform"
          >
            <h3 className="text-[11px] font-black uppercase mb-4 opacity-60 tracking-[0.2em]">
              RNIT Cumulative Audit
            </h3>
            <p className="text-[clamp(2rem,3.5vw,4.5rem)] font-black text-emerald-600 dark:text-emerald-500 tracking-tighter leading-none tabular-nums">
              +35,000 Yearly
            </p>
          </motion.div>
        </div>
      ),
    },
    {
      id: "savings-path",
      title: "Phase 18: Accumulation Path",
      x: 6000,
      y: 6000,
      scale: 1,
      component: (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="w-full max-w-4xl space-y-6 sm:space-y-10 px-4 sm:px-8 flex flex-col items-center mx-auto text-center relative z-10"
        >
          <div>
            <PhaseLabel num="18" />
            <h2 className="text-[clamp(2rem,4.5vw,4rem)] font-black text-zinc-900 dark:text-white tracking-tighter uppercase leading-none">
              Wealth <span className="text-emerald-500 italic">ACCUM</span>
            </h2>
          </div>
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
        </motion.div>
      ),
    },
    {
      id: "risk-audit",
      title: "Phase 19: Risk Strategy",
      x: 9000,
      y: 6000,
      scale: 1,
      component: (
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="max-w-6xl w-full px-4 sm:px-8 flex flex-col items-center mx-auto text-center relative z-10"
        >
          <PhaseLabel num="19" />
          <h2 className="text-[clamp(2rem,4.5vw,4rem)] font-black text-zinc-900 dark:text-white tracking-tighter uppercase italic mb-8 sm:mb-10 leading-none">
            Defense <span className="text-rose-500">STRATEGY</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 w-full">
            {[
              { r: "Demand Shift", s: "Iterative Design." },
              { r: "Production Delays", s: "Backup Partners." },
              { r: "Waste Supply", s: "Institutional Contracts." },
              { r: "Competition", s: "Quality Differentiation." },
            ].map((i, idx) => (
              <motion.div
                key={i.r}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="p-6 sm:p-8 rounded-2xl bg-zinc-50 dark:bg-zinc-900 border-2 border-zinc-100 dark:border-zinc-800 text-xs font-bold uppercase shadow-lg text-left transition-all"
              >
                <h3 className="text-zinc-900 dark:text-white text-xl sm:text-2xl mb-2 leading-none tracking-tight">
                  {i.r}
                </h3>
                <p className="text-zinc-500 font-medium normal-case text-sm sm:text-base leading-relaxed">
                  {i.s}
                </p>
              </motion.div>
            ))}
          </div>
          <SupportingText text="Every business has risks. Our strategy focuses on backup partners and institutional contracts to mitigate them." />
        </motion.div>
      ),
    },
    {
      id: "conclusion",
      title: "Phase 20: Strategic Resolution",
      x: 12000,
      y: 6000,
      scale: 1,
      component: (
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="max-w-3xl text-center space-y-8 sm:space-y-12 px-4 sm:px-8 mx-auto relative z-10"
        >
          <PhaseLabel num="20" />
          <motion.div 
            whileHover={{ rotate: 360, scale: 1.1 }}
            transition={{ duration: 1 }}
            className="w-20 sm:w-28 md:w-32 h-20 sm:h-28 md:h-32 bg-zinc-100 dark:bg-zinc-800 rounded-[40px] mx-auto flex items-center justify-center text-emerald-600 dark:text-emerald-500 shadow-2xl border-[6px] border-emerald-500 transition-all cursor-pointer"
          >
            <CheckCircle2 size={56} />
          </motion.div>
          <h2 className="text-[clamp(3rem,7vw,6rem)] font-black text-zinc-900 dark:text-white tracking-tighter uppercase italic leading-none">
            GOAL <span className="text-emerald-500">ACQUIRED</span>
          </h2>
          <p className="text-[clamp(1rem,1.8vw,1.6rem)] font-bold text-zinc-500 dark:text-zinc-400 italic">
            "Stability within 12 months."
          </p>
          <div className="pt-8 sm:pt-10 border-t-2 border-zinc-200 dark:border-zinc-800 max-w-xs mx-auto text-[clamp(0.55rem,0.9vw,0.72rem)] font-black text-zinc-400 uppercase tracking-[0.3em] text-center">
            RCA FY26 / FINAL RELEASE
          </div>
        </motion.div>
      ),
    },
  ];

  const currentSection = sections[activeSection];

  if (!mounted) return null;

  return (
    <div
      className={cn(
        "relative w-full h-screen overflow-hidden font-sans select-none transition-colors duration-700",
        theme === "dark" ? "bg-zinc-900 text-zinc-100 dark" : "bg-zinc-50 text-zinc-900",
      )}
    >
      {/* Progress Header */}
      <div className="fixed top-4 sm:top-8 left-4 sm:left-8 z-50 flex items-center gap-4 sm:gap-6 bg-white/80 dark:bg-zinc-900/60 backdrop-blur-md px-4 sm:px-6 py-2.5 sm:py-3 rounded-full border border-zinc-200 dark:border-zinc-800 shadow-xl pointer-events-none transition-all">
        <div className="h-1.5 w-24 sm:w-32 bg-zinc-100 dark:bg-zinc-800 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]"
            animate={{ width: `${((activeSection + 1) / sections.length) * 100}%` }}
            transition={{ duration: 0.8 }}
          />
        </div>
        <span className="text-[11px] font-black text-zinc-500 dark:text-zinc-400 uppercase tracking-[0.2em]">
          {activeSection + 1} <span className="opacity-30">/</span> {sections.length}
        </span>
      </div>

      {/* Navigation Controls */}
      <nav className="fixed bottom-4 sm:bottom-8 right-4 sm:right-8 z-50 flex flex-col items-end gap-3 sm:gap-4 pointer-events-none">
        <div className="flex items-center gap-2 sm:gap-3 bg-white/95 dark:bg-zinc-900/60 backdrop-blur-2xl border border-zinc-200 dark:border-zinc-800 p-1.5 sm:p-2 rounded-xl sm:rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] pointer-events-auto transition-all">
          <button
            onClick={prev}
            className="p-3 sm:p-4 rounded-xl bg-zinc-100 dark:bg-white/5 hover:bg-zinc-200 dark:hover:bg-white/10 text-zinc-500 active:scale-90 transition-all"
          >
            <ArrowLeft size={18} />
          </button>
          <button
            onClick={next}
            className="flex items-center gap-2 sm:gap-3 font-black text-[11px] uppercase tracking-[0.15em] bg-zinc-900 dark:bg-zinc-800 text-white px-5 sm:px-8 py-3 sm:py-4 rounded-xl hover:bg-emerald-500 dark:hover:bg-emerald-400 active:scale-95 transition-all shadow-lg"
          >
            <span className="hidden xs:inline">
              {activeSection === sections.length - 1 ? "RESET" : "NEXT PHASE"}
            </span>
            <span className="xs:hidden">
              {activeSection === sections.length - 1 ? "↺" : "NEXT"}
            </span>
            <ArrowRight size={16} />
          </button>
        </div>
      </nav>

      {/* Theme Toggle */}
      <div className="fixed top-4 sm:top-8 right-4 sm:right-8 z-50 pointer-events-none">
        <button
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-white/90 dark:bg-zinc-900/60 backdrop-blur-md border border-zinc-200 dark:border-zinc-800 shadow-xl pointer-events-auto hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all text-zinc-500"
        >
          {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
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
            <div className="absolute inset-0 bg-gradient-to-tr from-zinc-50 via-transparent to-transparent dark:from-zinc-900 z-10" />
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
        {activeSection >= 9 && activeSection <= 12 && (
          <motion.div
            layout
            layoutId="bsf-video-container"
            className={cn(
              "fixed z-50 overflow-hidden shadow-2xl transition-all duration-700",
              isVideoExpanded 
                ? "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] max-w-4xl aspect-[4/3] rounded-[40px] pointer-events-auto" 
                : isMobile
                  ? "bottom-12 right-8 w-20 h-16 rounded-2xl pointer-events-auto cursor-pointer group bg-zinc-900 shadow-[0_0_30px_rgba(16,185,129,0.3)] border-2 border-emerald-500/30 hover:border-emerald-500"
                  : activeSection === 9
                    ? "top-1/2 right-[10%] -translate-y-1/2 w-[30vw] aspect-[4/5] rounded-[40px] pointer-events-auto cursor-pointer group"
                    : "bottom-12 left-12 w-48 h-36 rounded-3xl pointer-events-auto cursor-pointer group border-2 border-zinc-200 dark:border-zinc-800 hover:border-emerald-500"
            )}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ 
              opacity: 1, 
              scale: 1,
            }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={() => !isVideoExpanded && setIsVideoExpanded(true)}
          >
            <div className="relative w-full h-full">
              <video
                src="/images/bsfl-farming.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />
              
              {/* Overlay Controls */}
              <div className={cn(
                "absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-2",
                !isVideoExpanded && isMobile && "opacity-100 bg-black/20",
                !isVideoExpanded && !isMobile && "group-hover:bg-black/20"
              )}>
                {!isVideoExpanded && (
                  <div className="flex flex-col items-center">
                    <Maximize2 size={(isMobile || activeSection > 9) ? 12 : 24} className="text-white mb-1" />
                    <span className={cn(
                      "font-black text-white uppercase tracking-tighter text-center leading-none",
                      (isMobile || activeSection > 9) ? "text-[7px]" : "text-[10px]"
                    )}>
                      {(isMobile || activeSection > 9) ? "CONTINUE" : "VIEW FULL"}<br />SCREEN
                    </span>
                  </div>
                )}
              </div>

              {isVideoExpanded && (
                <>
                  <div className="absolute bottom-8 left-1/2 -translate-x-1/2 px-6 py-3 bg-black/40 backdrop-blur-xl border border-white/10 rounded-full whitespace-nowrap">
                    <span className="text-[10px] font-black text-white uppercase tracking-[0.3em]">
                      BSF Production Cycle • LIVE
                    </span>
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsVideoExpanded(false);
                    }}
                    className="absolute top-6 right-6 p-4 bg-black/40 hover:bg-black/60 backdrop-blur-xl rounded-2xl text-white transition-all z-10 border border-white/10"
                  >
                    <X size={24} />
                  </button>
                </>
              )}

              {/* Status Badge when Minimized (Mobile or Small Desktop) */}
              {!isVideoExpanded && (isMobile || activeSection > 9) && (
                <div className="absolute -top-1.5 -right-1.5 w-3 h-3 bg-emerald-500 rounded-full shadow-[0_0_10px_#10b981]" />
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Prezi Stage */}
      <motion.main
        className="absolute inset-0 flex items-center justify-center pointer-events-auto"
        animate={{
          x: -currentSection.x,
          y: -currentSection.y,
          scale: 1 / currentSection.scale,
        }}
        transition={{ type: "spring", stiffness: 50, damping: 30, mass: 1 }}
      >
        {sections.map((section, index) => (
          <motion.section
            key={section.id}
            className="absolute origin-center"
            style={{ x: section.x, y: section.y }}
            animate={{
              opacity: activeSection === index ? 1 : 0.05,
              scale: section.scale,
              filter: activeSection === index ? "blur(0px)" : "blur(15px)",
            }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="w-screen h-screen flex items-center justify-center pb-24 sm:pb-32 pt-16 sm:pt-12 px-4 sm:px-12">
              <div className={cn(
                "w-full h-full flex flex-col items-center justify-center",
                isMobile && activeSection >= 9 && activeSection <= 12 && !isVideoExpanded && "pb-24"
              )}>
                {section.component}
              </div>
            </div>
          </motion.section>
        ))}
      </motion.main>
    </div>
  );
}