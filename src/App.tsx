import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  PieChart, Pie, Cell, ResponsiveContainer, Tooltip, 
  BarChart, Bar, XAxis, YAxis, CartesianGrid,
  LineChart, Line
} from 'recharts';
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
  Moon
} from 'lucide-react';
import { cn } from '@/src/lib/utils';

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

const Table = ({ headers, rows, highlightLast = false }: { headers: string[], rows: (string | number | React.ReactNode)[][], highlightLast?: boolean }) => (
  <div className="overflow-x-auto rounded-xl border-4 border-zinc-950 dark:border-white bg-white dark:bg-zinc-900 shadow-2xl shadow-zinc-200/50 transition-colors">
    <table className="w-full text-left text-sm md:text-base lg:text-lg border-collapse">
      <thead className="bg-zinc-950 dark:bg-white text-white dark:text-zinc-950 uppercase text-[10px] md:text-xs tracking-[0.2em]">
        <tr>
          {headers.map((h, i) => (
            <th key={i} className={cn(
              "px-4 md:px-8 py-4 md:py-6 font-bold border-r border-white/20 dark:border-zinc-950/20 last:border-r-0",
              i === 0 ? "text-left" : "text-right"
            )}>
              {h}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="text-zinc-900 dark:text-zinc-100">
        {rows.map((row, i) => (
          <tr key={i} className={cn(
            "hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors border-b-2 border-zinc-100 dark:border-zinc-800 last:border-b-0", 
            i === rows.length - 1 && highlightLast && "bg-emerald-50 dark:bg-emerald-950/30 text-emerald-900 dark:text-emerald-400 font-black"
          )}>
            {row.map((cell, j) => (
              <td key={j} className={cn(
                "px-4 md:px-8 py-4 md:py-6 font-bold border-r-2 border-zinc-100 dark:border-zinc-800 last:border-r-0",
                j === 0 ? "text-left" : "text-right"
              )}>
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const MetricCard = ({ label, value, subValue, color = "text-zinc-900 dark:text-white" }: { label: string, value: string, subValue?: string, color?: string }) => (
  <div className="flex flex-col p-6 md:p-8 rounded-xl bg-white dark:bg-zinc-900 border-2 border-zinc-50 dark:border-zinc-800 shadow-lg shadow-zinc-200/40 hover:scale-[1.02] transition-all duration-500">
    <span className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-zinc-500 dark:text-zinc-400 font-black mb-2 md:mb-3">{label}</span>
    <span className={cn("text-3xl md:text-4xl lg:text-5xl font-black tracking-tighter", color)}>{value}</span>
    {subValue && <span className="text-[10px] md:text-xs font-bold text-zinc-500 dark:text-zinc-400 mt-1 md:mt-2 uppercase tracking-widest">{subValue}</span>}
  </div>
);

export default function App() {
  const [activeSection, setActiveSection] = useState(0);
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  // --- Static Data ---
  const CAPITAL_DATA = [
    { name: 'Debt Repayment', value: 150000, color: '#ef4444' }, 
    { name: 'Emergency Fund', value: 150000, color: '#f59e0b' },
    { name: 'Business Investment', value: 1200000, color: '#10b981' },
  ];

  const next = useCallback(() => setActiveSection((prev) => (prev + 1) % sections.length), []);
  const prev = useCallback(() => setActiveSection((prev) => (prev - 1 + sections.length) % sections.length), []);

  useEffect(() => {
    setMounted(true);
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') next();
      if (e.key === 'ArrowLeft') prev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [next, prev]);

  const sections: SectionConfig[] = [
    {
      id: 'hero',
      title: 'Strategy Introduction',
      x: 0,
      y: 0,
      scale: 1,
      component: (
        <div className="relative flex flex-col items-center justify-center text-center w-screen h-screen overflow-hidden">
          <div className="absolute inset-0 pointer-events-none perspective-[1500px]">
            <motion.div 
              initial={{ opacity: 0, x: '-60vw', rotateY: 40 }}
              animate={{ opacity: 0.8, x: '-35vw', rotateY: 25 }}
              transition={{ duration: 4 }}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] aspect-square hidden lg:block"
            >
              <img src="/images/bag2.png" alt="" className="w-full h-full object-contain drop-shadow-2xl" />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: '60vw', rotateY: -40 }}
              animate={{ opacity: 0.8, x: '35vw', rotateY: -25 }}
              transition={{ duration: 4, delay: 0.3 }}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] aspect-square hidden lg:block"
            >
              <img src="/images/bag3.png" alt="" className="w-full h-full object-contain drop-shadow-2xl" />
            </motion.div>
          </div>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="relative z-10 px-6 text-center">
            <div className="inline-flex items-center gap-4 px-6 py-2 rounded-full bg-zinc-950 text-white text-[11px] font-black uppercase tracking-[0.4em] mb-12 shadow-xl ring-8 ring-zinc-50 dark:ring-zinc-900 mx-auto">
              <TrendingUp className="w-3.5 h-3.5" />
              <span>Investment Proposal // RCA 2026</span>
            </div>
            <h1 className="text-6xl md:text-8xl lg:text-[140px] font-black text-zinc-950 dark:text-white tracking-[-0.06em] mb-12 leading-[0.8] uppercase mx-auto">
              Financial <br />
              <span className="text-emerald-500 italic">Stability</span> <br />
              <span className="text-zinc-200 dark:text-zinc-800">& Enterprise</span>
            </h1>
            <p className="text-zinc-500 dark:text-zinc-400 text-xl md:text-2xl mb-24 max-w-4xl mx-auto font-medium leading-relaxed uppercase tracking-tighter">
              A 15-Phase granular framework to secure long-term capital <br /> stability through strategic production and debt liquidation.
            </p>
          </motion.div>
        </div>
      )
    },
    {
      id: 'income-audit',
      title: 'Phase 01: Income Audit',
      x: 2500,
      y: 0,
      scale: 1,
      component: (
        <div className="w-full max-w-5xl space-y-12 px-6">
          <div className="space-y-4">
            <h2 className="text-7xl font-black text-zinc-950 dark:text-white tracking-tighter uppercase italic text-center lg:text-left">Current <span className="text-emerald-500">INCOME</span></h2>
            <p className="text-zinc-500 dark:text-zinc-400 text-2xl font-bold text-center lg:text-left">Comprehensive breakdown of all current monthly revenue sources.</p>
          </div>
          <Table 
            headers={['Revenue Source', 'Justification / Frequency', 'Amount (RWF)']}
            rows={[
              ['Parents Allowance', 'Monthly Support', '20,000'],
              ['Weekend Work', 'Casual Labour (4 Weekends)', '25,000'],
              ['Shop Assistant Job', 'Part-time Role', '15,000'],
              [<span className="text-emerald-600 font-black">TOTAL MONTHLY INCOME</span>, '', <span className="text-emerald-600 font-black text-2xl">60,000</span>]
            ]}
            highlightLast
          />
        </div>
      )
    },
    {
      id: 'expense-audit',
      title: 'Phase 02: Expense Audit',
      x: 5000,
      y: 0,
      scale: 1,
      component: (
        <div className="w-full max-w-5xl space-y-12 px-6">
          <div className="space-y-4">
            <h2 className="text-7xl font-black text-zinc-950 dark:text-white tracking-tighter uppercase italic text-center lg:text-left">Current <span className="text-rose-500">SPEND</span></h2>
            <p className="text-zinc-500 dark:text-zinc-400 text-2xl font-bold text-center lg:text-left">Detailed tracking of unavoidable monthly operational costs.</p>
          </div>
          <Table 
            headers={['Expense Category', 'Usage Description', 'Amount (RWF)']}
            rows={[
              ['Transport', 'Daily Commute Costs', '18,000'],
              ['Lunch & Snacks', 'Nutritional Requirements', '25,000'],
              ['Entertainment & Data', 'Connectivity & Research', '30,000'],
              ['Debt Repayment', 'Minimum Installment', '7,000'],
              [<span className="text-rose-600 font-black">TOTAL MONTHLY EXPENSES</span>, '', <span className="text-rose-600 font-black text-2xl">80,000</span>]
            ]}
            highlightLast
          />
        </div>
      )
    },
    {
      id: 'deficit-analysis',
      title: 'Phase 03: Deficit Analysis',
      x: 7500,
      y: 0,
      scale: 1,
      component: (
        <div className="flex flex-col items-center gap-12 text-center px-6">
          <div className="p-12 rounded-3xl bg-rose-500 text-white shadow-3xl max-w-3xl">
             <AlertTriangle size={80} className="mx-auto mb-8" />
             <h2 className="text-6xl font-black mb-4 uppercase text-center">CRITICAL DEFICIT</h2>
             <p className="text-2xl font-bold opacity-90 text-center">60,000 (Income) - 80,000 (Expenses) =</p>
             <div className="text-8xl font-black my-6 text-center">-20,000 RWF</div>
             <p className="text-xl uppercase tracking-widest font-black text-rose-200 text-center">Monthly Capital Leakage</p>
          </div>
          <p className="text-zinc-500 dark:text-zinc-400 text-2xl font-bold max-w-2xl text-center">
            "The current model is mathematically insolvent. Without intervention, total financial collapse is inevitable."
          </p>
        </div>
      )
    },
    {
      id: 'debt-liquidation',
      title: 'Phase 04: Liability Cleanse',
      x: 7500,
      y: 2000,
      scale: 1,
      component: (
        <div className="w-full max-w-5xl space-y-12 px-6">
          <div className="space-y-4">
            <h2 className="text-7xl font-black text-zinc-950 dark:text-white tracking-tighter uppercase italic text-center lg:text-left">Debt <span className="text-rose-500">AUDIT</span></h2>
            <p className="text-zinc-500 dark:text-zinc-400 text-2xl font-bold text-center lg:text-left">Immediate settlement of all existing personal debts to restore financial health.</p>
          </div>
          <Table 
            headers={['Creditor', 'Relationship / Context', 'Amount (RWF)']}
            rows={[
              ['Aline', 'Existing Loan', '60,000'],
              ['Eric', 'Existing Loan', '50,000'],
              ['Patrick', 'Existing Loan', '40,000'],
              [<span className="text-rose-600 font-black">TOTAL DEBT SETTLEMENT</span>, 'SOURCE: SEED FUND', <span className="text-rose-600 font-black text-2xl">150,000</span>]
            ]}
            highlightLast
          />
        </div>
      )
    },
    {
      id: 'seed-allocation',
      title: 'Phase 05: Capital Deployment',
      x: 5000,
      y: 2000,
      scale: 1,
      component: (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full max-w-7xl px-6">
          <div className="space-y-8">
            <h2 className="text-8xl font-black text-zinc-950 dark:text-white tracking-tighter uppercase leading-none">Support <br /><span className="text-emerald-500">SPLIT</span></h2>
            <div className="space-y-4">
              {[
                { name: 'Debt Repayment', val: '150,000' },
                { name: 'Emergency Fund', val: '150,000' },
                { name: 'Business Investment', val: '1,200,000' }
              ].map(item => (
                <div key={item.name} className="p-6 rounded-xl bg-white dark:bg-zinc-900 border-4 border-zinc-950 dark:border-white flex justify-between items-center shadow-xl transition-colors">
                  <span className="text-xl font-black uppercase text-zinc-500">{item.name}</span>
                  <span className="text-3xl font-black text-zinc-950 dark:text-white">{item.val}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="aspect-square bg-zinc-50 dark:bg-zinc-900 rounded-3xl border-8 border-zinc-950 dark:border-white flex items-center justify-center shadow-2xl transition-colors">
             <div className="text-center">
                <p className="text-sm font-black text-zinc-400 uppercase tracking-widest">Total Support</p>
                <p className="text-9xl font-black text-zinc-950 dark:text-white">1.5M</p>
                <p className="text-xl font-bold text-emerald-500">RWF UTILIZED</p>
             </div>
          </div>
        </div>
      )
    },
    {
      id: 'denim-materials',
      title: 'Phase 06: Denim Materials',
      x: 2500,
      y: 2000,
      scale: 1,
      component: (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start w-full max-w-7xl px-6">
          {/* Taller, Dominant Image Anchor with Sleeker Border & Radius */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="lg:col-span-6 relative aspect-[2/3] rounded-3xl overflow-hidden border-4 border-white dark:border-zinc-800 shadow-3xl bg-zinc-50 dark:bg-zinc-900 group order-2 lg:order-1 transition-colors"
          >
            <img src="/images/bags4.png" alt="Raw Materials" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[5s]" />
            <div className="absolute inset-0 bg-gradient-to-t from-indigo-950/90 via-transparent to-transparent flex items-end p-12">
               <div className="space-y-2">
                  <span className="text-[10px] font-black text-indigo-400 uppercase tracking-[0.5em] block">Portfolio 01</span>
                  <p className="text-4xl font-black text-white uppercase italic leading-none">Material <br /> Sourcing</p>
               </div>
            </div>
          </motion.div>

          {/* Justification Ledger */}
          <div className="lg:col-span-6 space-y-12 order-1 lg:order-2">
            <div className="space-y-4 text-center lg:text-left">
              <h2 className="text-7xl font-black text-zinc-950 dark:text-white tracking-tighter uppercase italic leading-none text-center lg:text-left">Denim <br /><span className="text-indigo-600">INPUTS</span></h2>
              <p className="text-zinc-500 dark:text-zinc-400 text-2xl font-bold text-center lg:text-left">Every RWF justified by material necessity.</p>
            </div>
            <Table 
              headers={['Required Material', 'Allocated Budget', 'Purpose']}
              rows={[
                ['Second-hand Jeans', '50,000', 'Fabric Sourcing'],
                ['Zippers & Thread', '20,000', 'Fasteners'],
                ['Inner Lining', '15,000', 'Finishing'],
                ['Handles & Straps', '10,000', 'Hardware'],
                ['Packaging', '30,000', 'Branding'],
                ['Marketing', '40,000', 'Outreach'],
                ['Reserve', '40,000', 'Buffer'],
                [<span className="text-indigo-600 font-black uppercase tracking-widest text-[10px]">TOTAL</span>, '', <span className="text-indigo-600 font-black text-2xl">205,000</span>]
              ]}
              highlightLast
            />
            <div className="p-10 rounded-xl border-4 border-zinc-100 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 shadow-xl italic text-2xl font-bold text-zinc-400 text-center transition-colors">
               "Sourcing high-quality textile waste ensures a premium end-product with minimal material overhead."
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'denim-labour',
      title: 'Phase 07: Denim Labour',
      x: 0,
      y: 2000,
      scale: 1,
      component: (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full max-w-7xl px-6">
          <div className="space-y-8">
            <h2 className="text-7xl font-black text-zinc-950 dark:text-white tracking-tighter uppercase leading-none">Labour <br /><span className="text-indigo-600">LOGIC</span></h2>
            <p className="text-2xl font-bold text-zinc-500 dark:text-zinc-400 max-w-md mx-auto lg:mx-0 text-center lg:text-left">Professional manufacturing at a fixed cost-per-unit.</p>
            <div className="p-8 rounded-xl bg-indigo-600 text-white shadow-2xl relative overflow-hidden group mx-auto lg:mx-0 max-w-md">
               <div className="absolute top-0 right-0 p-8 opacity-20 group-hover:scale-110 transition-transform">
                  <ShoppingBag size={120} />
               </div>
               <span className="text-xs font-black uppercase tracking-[0.3em] opacity-60">Unit Labour Cost</span>
               <p className="text-6xl font-black">3,500 <span className="text-xl font-normal">RWF</span></p>
               <p className="text-sm font-bold mt-2 uppercase tracking-widest text-indigo-200">Fixed Tailor Agreement</p>
            </div>
          </div>
          <div className="space-y-8">
            <Table 
              headers={['Production Parameter', 'Calculation Value']}
              rows={[
                ['Target Batch', '40 Units'],
                ['Labour Rate', '3,500 RWF / Unit'],
                [<span className="text-indigo-600 font-black uppercase text-[10px]">TOTAL COST</span>, <span className="font-black text-2xl">140,000 RWF</span>]
              ]}
              highlightLast
            />
            <div className="aspect-[4/3] rounded-xl overflow-hidden border-4 border-white dark:border-zinc-800 shadow-2xl bg-zinc-50 dark:bg-zinc-900 transition-colors">
               <img src="/images/bag.png" alt="Finished Product" className="w-full h-full object-contain p-8" />
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'bsf-intro',
      title: 'Phase 08: BSF Concept',
      x: -2500,
      y: 2000,
      scale: 1,
      component: (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center w-full max-w-7xl px-6 text-center lg:text-left">
          <div className="lg:col-span-6 space-y-10">
            <div className="space-y-4">
               <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} className="inline-flex gap-4 items-center font-black text-[10px] tracking-[0.4em] text-emerald-500 uppercase">
                  <div className="h-0.5 w-12 bg-emerald-500" />
                  Portfolio 02 Introduction
               </motion.div>
               <h2 className="text-8xl font-black text-zinc-950 dark:text-white tracking-tighter uppercase leading-[0.8] italic">Bio-Tech <br /><span className="text-emerald-500">STARTUP</span></h2>
               <p className="text-3xl font-bold text-zinc-500 dark:text-zinc-400 max-w-xl mx-auto lg:mx-0">Industrial protein conversion using Black Soldier Fly larvae (BSFL).</p>
            </div>
            <div className="space-y-4">
               {["Utilizes 100% Organic Waste", "High-Demand Agricultural Feed", "Zero-Cost Substrate Sourcing"].map((feat) => (
                 <div key={feat} className="flex items-center gap-6 p-6 rounded-xl border-2 border-zinc-100 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50 shadow-lg group hover:border-emerald-500 transition-colors">
                    <CheckCircle2 className="text-emerald-500 shrink-0 group-hover:scale-110 transition-transform" size={40} />
                    <p className="text-xl font-black uppercase tracking-tight text-center lg:text-left">{feat}</p>
                 </div>
               ))}
            </div>
          </div>

          {/* Expanded Cinematic Frame with Sleeker Border, Radius & Shrunk Text */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, x: 50 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            className="lg:col-span-6 relative aspect-[3/4] rounded-3xl overflow-hidden border-4 border-white dark:border-zinc-800 shadow-[0_60px_120px_rgba(0,0,0,0.4)] bg-zinc-950 max-h-[85vh] w-full transition-colors"
          >
             <video src="/images/bsfl-farming.mp4" autoPlay loop muted playsInline className="w-full h-full object-cover filter contrast-125 brightness-75" />
             <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-transparent to-transparent" />
             <div className="absolute bottom-12 left-10 right-10">
                <div className="flex items-center gap-3 mb-3">
                   <div className="w-2 h-2 rounded-full bg-rose-500 animate-pulse shadow-[0_0_10px_rgba(244,63,94,0.6)]" />
                   <span className="text-[8px] font-black text-white/60 uppercase tracking-[0.4em]">Live Production Feed</span>
                </div>
                <h3 className="text-2xl font-black text-white uppercase italic tracking-tighter leading-none mb-1">Biological Conversion</h3>
                <p className="text-emerald-400 text-[10px] font-black uppercase tracking-widest opacity-60">High-Efficiency Protein Hub</p>
             </div>
          </motion.div>
        </div>
      )
    },
    {
      id: 'bsf-setup',
      title: 'Phase 09: BSF Infrastructure',
      x: -5000,
      y: 2000,
      scale: 1,
      component: (
        <div className="w-full max-w-6xl space-y-12 px-6">
          <div className="space-y-4">
            <h2 className="text-7xl font-black text-zinc-950 dark:text-white tracking-tighter uppercase italic text-center lg:text-left">BSF <span className="text-emerald-500">SETUP</span></h2>
            <p className="text-zinc-500 dark:text-zinc-400 text-2xl font-bold text-center lg:text-left">Justification of the 650,000 RWF technology setup cost.</p>
          </div>
          <Table 
            headers={['Asset Class', 'Quantity / Detail', 'Cost (RWF)']}
            rows={[
              ['Farm Shed', 'Core Enclosure', '275,000'],
              ['Larvae Colony', 'Biological Seed', '8,000'],
              ['Rearing Trays', '15 HD Units', '120,000'],
              ['Cage Structure', 'Metallic Frame', '80,000'],
              ['Containers', 'Waste Management', '30,000'],
              ['Drying Racks', 'Processing', '65,000'],
              ['Waste Logistics', 'Collection', '72,000'],
              [<span className="text-emerald-600 font-black uppercase text-[10px]">TOTAL BSF CAPEX</span>, '', <span className="text-emerald-600 font-black text-2xl">650,000</span>]
            ]}
            highlightLast
          />
        </div>
      )
    },
    {
      id: 'bsf-production',
      title: 'Phase 10: BSF Yield',
      x: -7500,
      y: 2000,
      scale: 1,
      component: (
        <div className="relative w-full max-w-7xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-10">
               <div className="space-y-4 text-center lg:text-left">
                  <h2 className="text-8xl font-black text-zinc-950 dark:text-white tracking-tighter uppercase leading-[0.8]">Biological <br /><span className="text-emerald-500 italic">YIELD</span></h2>
                  <p className="text-2xl font-bold text-zinc-500 dark:text-zinc-400">High-Protein output audit based on 70KG monthly target.</p>
               </div>
               
               <div className="flex flex-col sm:flex-row gap-6">
                  <div className="flex-1 p-10 rounded-xl bg-zinc-950 text-white shadow-2xl relative overflow-hidden">
                     <Bug className="absolute -bottom-6 -right-6 w-32 h-32 opacity-10 rotate-12" />
                     <p className="text-[10px] font-black uppercase tracking-[0.4em] text-emerald-500 mb-4 text-center">Output Target</p>
                     <p className="text-7xl font-black text-center">70 <span className="text-xl font-normal opacity-50">KG</span></p>
                  </div>
                  <div className="flex-1 p-10 rounded-xl bg-emerald-500 text-white shadow-2xl">
                     <p className="text-[10px] font-black uppercase tracking-[0.4em] opacity-60 mb-4 text-center">Monthly Revenue</p>
                     <p className="text-5xl font-black text-center">175,000</p>
                     <p className="text-sm font-bold uppercase tracking-widest mt-2 text-center text-emerald-100">RWF Gross Liquid</p>
                  </div>
               </div>
            </div>

            <div className="space-y-6">
               <h3 className="text-xs font-black text-zinc-500 dark:text-zinc-400 uppercase tracking-[0.4em] flex items-center gap-3 justify-center lg:justify-start">
                 <div className="w-2 h-2 rounded-full bg-emerald-500" />
                 Yield Valuation Ledger
               </h3>
               <Table 
                 headers={['Parameter', 'Value Justification']}
                 rows={[
                   ['Target Production', '70 Kilograms / Month'],
                   ['Selling Price', '2,500 RWF / Kilogram'],
                   ['Gross Revenue', '175,000 RWF'],
                   ['Operational Cost', '30,000 RWF'],
                   [<span className="text-emerald-600 font-black uppercase text-[10px]">Net Bio-Profit</span>, <span className="text-emerald-600 font-black text-3xl">145,000 RWF</span>]
                 ]}
                 highlightLast
               />
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'revenue-shift',
      title: 'Phase 11: Target Revenue',
      x: -7500,
      y: 4500,
      scale: 1,
      component: (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full max-w-7xl px-6">
          <div className="space-y-8 text-center lg:text-left">
            <h2 className="text-8xl font-black text-zinc-950 dark:text-white tracking-tighter uppercase leading-none text-center lg:text-left">Income <br /><span className="text-emerald-500">SHIFT</span></h2>
            <div className="p-8 rounded-xl bg-emerald-500 text-white shadow-2xl flex items-center gap-8 justify-center lg:justify-start">
               <div className="w-20 h-20 rounded-xl bg-white/20 flex items-center justify-center shadow-lg">
                  <TrendingUp size={40} strokeWidth={3} />
               </div>
               <div>
                  <p className="text-xs font-black uppercase tracking-widest opacity-60">Revenue Expansion</p>
                  <p className="text-5xl font-black">+333% Growth</p>
               </div>
            </div>
          </div>
          <Table 
            headers={['Revenue Vertical', 'Expected Amount (RWF)']}
            rows={[
              ['Original Stable Income', '60,000'],
              ['Jeans Bag Business (Net)', '55,000'],
              ['BSF Farming (Net)', '145,000'],
              [<span className="text-emerald-600 font-black uppercase text-[10px]">New Total Income</span>, <span className="text-emerald-600 font-black text-3xl">260,000</span>]
            ]}
            highlightLast
          />
        </div>
      )
    },
    {
      id: 'new-budget',
      title: 'Phase 12: Revised Expenditure',
      x: -5000,
      y: 4500,
      scale: 1,
      component: (
        <div className="w-full max-w-5xl space-y-12 px-6">
          <div className="space-y-4">
            <h2 className="text-7xl font-black text-zinc-950 dark:text-white tracking-tighter uppercase italic text-center lg:text-left">Revised <span className="text-emerald-500">BUDGET</span></h2>
            <p className="text-zinc-500 dark:text-zinc-400 text-2xl font-bold text-center lg:text-left">Optimized expenditure to ensure maximum compounding of surplus.</p>
          </div>
          <Table 
            headers={['Budget Category', 'Strategic Allocation', 'Amount (RWF)']}
            rows={[
              ['Transport', 'Essential Logistics', '18,000'],
              ['Lunch & Snacks', 'Daily Sustenance', '25,000'],
              ['Entertainment & Data', 'Connectivity Cap', '10,000'],
              ['Business Reinvestment', 'R&D and Growth', '35,000'],
              ['Emergency Savings', 'Personal Buffer', '10,000'],
              ['Stability Fund', 'Wealth Building', '30,000'],
              ['Personal Buffer', 'Incidentals', '7,000'],
              [<span className="text-emerald-600 font-black uppercase text-[10px]">New Total Expenses</span>, '', <span className="text-emerald-600 font-black text-2xl">135,000</span>]
            ]}
            highlightLast
          />
        </div>
      )
    },
    {
      id: 'wealth-engine',
      title: 'Phase 13: Prosperity Engine',
      x: -2500,
      y: 4500,
      scale: 1,
      component: (
        <div className="flex flex-col items-center gap-12 text-center px-6">
          <div className="p-16 rounded-xl bg-emerald-500 text-white shadow-3xl max-w-4xl relative overflow-hidden">
             <Coins size={120} className="absolute -top-10 -right-10 opacity-20" />
             <h2 className="text-5xl font-black mb-4 uppercase italic text-center">NET MONTHLY SURPLUS</h2>
             <p className="text-2xl font-bold opacity-90 text-center">260,000 (Income) - 135,000 (Expenses) =</p>
             <div className="text-[140px] font-black my-8 leading-none text-center">125,000 RWF</div>
             <p className="text-xl uppercase tracking-[0.5em] font-black text-emerald-100 text-center">Monthly Wealth Creation</p>
          </div>
          <div className="p-8 rounded-xl border-4 border-zinc-100 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-2xl italic text-3xl font-black text-zinc-950 dark:text-white max-w-3xl text-center transition-colors">
             "We have transformed a -20,000 leakage into a +125,000 wealth engine."
          </div>
        </div>
      )
    },
    {
      id: 'savings-path',
      title: 'Phase 14: Accumulation Path',
      x: 0,
      y: 4500,
      scale: 1,
      component: (
        <div className="w-full max-w-5xl space-y-12 px-6">
          <div className="space-y-4">
            <h2 className="text-7xl font-black text-zinc-950 dark:text-white tracking-tighter uppercase italic text-center lg:text-left">Future <span className="text-emerald-500">CORE</span></h2>
            <p className="text-zinc-500 dark:text-zinc-400 text-2xl font-bold text-center lg:text-left">Projected growth of the Stability Fund over a 12-month period.</p>
          </div>
          <Table 
            headers={['Timeline', 'Projected Stability Fund (RWF)', 'Status']}
            rows={[
              ['3 Months', '120,000', 'Target Reached'],
              ['6 Months', '240,000', 'Target Reached'],
              ['9 Months', '360,000', 'Target Reached'],
              [<span className="uppercase font-black tracking-widest text-emerald-600">12 Month Goal</span>, <span className="text-3xl font-black text-emerald-600">480,000</span>, <span className="text-emerald-600 font-black">STRATEGIC SECURITY</span>]
            ]}
            highlightLast
          />
        </div>
      )
    },
    {
      id: 'conclusion',
      title: 'Phase 15: Strategic Resolution',
      x: 2500,
      y: 4500,
      scale: 1,
      component: (
        <div className="max-w-5xl text-center space-y-12 px-6">
          <motion.div initial={{ scale: 0.5 }} whileInView={{ scale: 1 }} className="w-40 h-40 bg-zinc-950 dark:bg-white rounded-xl mx-auto flex items-center justify-center text-white dark:text-zinc-950 shadow-3xl transition-colors">
            <CheckCircle2 size={80} strokeWidth={2.5} />
          </motion.div>
          <h2 className="text-9xl font-black text-zinc-950 dark:text-white tracking-[-0.06em] uppercase italic leading-none text-center">GOAL <br /><span className="text-emerald-500">ACQUIRED</span></h2>
          <p className="text-4xl font-black tracking-tight leading-tight max-w-3xl mx-auto italic text-zinc-900 dark:text-white text-center">
            "This plan transforms financial instability into a <span className="text-emerald-500 underline decoration-emerald-100 dark:decoration-emerald-950/30 decoration-8 underline-offset-8">SUSTAINABLE SYSTEM</span> within 12 months."
          </p>
          <div className="pt-12 border-t-8 border-zinc-950 dark:border-white max-w-md mx-auto text-center transition-colors">
             <p className="text-zinc-500 dark:text-zinc-400 font-black tracking-[0.4em] text-sm uppercase">RWANDA CODING ACADEMY // FY26</p>
          </div>
        </div>
      )
    }
  ];

  const currentSection = sections[activeSection];

  if (!mounted) return null;

  return (
    <div className={cn(
      "relative w-full h-screen overflow-hidden font-sans select-none transition-colors duration-700",
      theme === 'dark' ? "bg-zinc-950 text-zinc-100 dark" : "bg-white text-zinc-900"
    )}>
      
      {/* Background Decor */}
      <div className="absolute inset-0 z-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none overflow-hidden select-none">
          <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundImage: theme === 'dark' ? 'radial-gradient(#fff 2px, transparent 1px)' : 'radial-gradient(#000 2px, transparent 1px)', backgroundSize: '60px 60px' }} />
          <div className="absolute top-[30%] right-[-5%] text-[400px] md:text-[600px] font-black leading-none opacity-5 tracking-tighter uppercase whitespace-nowrap rotate-12">STRATEGY</div>
      </div>

      {/* Discreet Navigation UI */}
      <nav className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-50 flex flex-col items-end gap-3 pointer-events-none">
        <div className="flex items-center gap-2 bg-white/40 dark:bg-zinc-900/40 backdrop-blur-xl border border-white/20 dark:border-zinc-800 p-2 rounded-2xl shadow-2xl pointer-events-auto group">
          <button 
            onClick={prev}
            className="p-3 rounded-xl bg-zinc-950/5 dark:bg-white/5 hover:bg-zinc-950 dark:hover:bg-white text-zinc-500 hover:text-white dark:hover:text-zinc-950 transition-all active:scale-90"
            title="Previous (Left Arrow)"
          >
            <ArrowLeft className="w-5 h-5 md:w-6 md:h-6" strokeWidth={3} />
          </button>
          
          <div className="h-6 w-[1px] bg-zinc-950/10 dark:bg-white/10 mx-1" />

          <button 
            onClick={next}
            className="flex items-center gap-3 font-black text-[10px] md:text-xs uppercase tracking-[0.2em] bg-zinc-950 dark:bg-white text-white dark:text-zinc-950 px-5 md:px-8 py-3 md:py-4 rounded-xl hover:bg-emerald-500 transition-all active:scale-95 shadow-lg shadow-zinc-950/10"
          >
            <span>{activeSection === sections.length - 1 ? 'RESTART' : 'NEXT'}</span>
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
                i === activeSection ? "bg-zinc-950 dark:bg-white w-6" : "bg-zinc-200 dark:bg-zinc-800 w-1.5 hover:bg-zinc-400"
              )}
            />
          ))}
        </div>
      </nav>

      {/* Header UI */}
      <div className="fixed top-8 md:top-12 left-8 md:left-12 z-50 flex flex-col gap-1 md:gap-2 items-start pointer-events-none">
        <div className="flex items-center gap-3 md:gap-4 bg-white/40 dark:bg-zinc-900/40 backdrop-blur-md px-4 py-2 rounded-2xl border border-white/20 dark:border-zinc-800 shadow-sm">
           <span className="text-[10px] md:text-[12px] text-zinc-500 dark:text-zinc-400 font-black uppercase tracking-[0.3em] md:tracking-[0.5em]">PHASE {activeSection + 1 < 10 ? `0${activeSection + 1}` : activeSection + 1}</span>
           <div className="h-[2px] md:h-[3px] w-12 md:w-16 bg-zinc-100 dark:bg-zinc-800 rounded-full overflow-hidden">
              <motion.div 
                className="h-full bg-emerald-500" 
                initial={{ width: 0 }}
                animate={{ width: `${((activeSection + 1) / sections.length) * 100}%` }}
                transition={{ duration: 0.8 }}
              />
           </div>
        </div>
        <AnimatePresence mode="wait">
          <motion.h1 
            key={currentSection.title}
            initial={{ opacity: 0, y: 10, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: -10, filter: 'blur(10px)' }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="text-2xl md:text-4xl lg:text-5xl font-black text-zinc-950 dark:text-white tracking-tighter leading-none mt-1 md:mt-2 uppercase italic drop-shadow-sm bg-white/40 dark:bg-zinc-900/40 backdrop-blur-md px-4 py-2 rounded-2xl border border-white/20 dark:border-zinc-800"
          >
            {currentSection.title}
          </motion.h1>
        </AnimatePresence>
      </div>

      {/* Theme Toggle & Side Info */}
      <div className="fixed top-8 md:top-12 right-8 md:right-12 z-50 flex flex-col items-end gap-4 pointer-events-none">
         <button 
           onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
           className="p-4 rounded-2xl bg-white/40 dark:bg-zinc-900/40 backdrop-blur-md border border-white/20 dark:border-zinc-800 shadow-xl pointer-events-auto hover:scale-110 active:scale-95 transition-all text-zinc-950 dark:text-white"
         >
           {theme === 'light' ? <Moon size={24} /> : <Sun size={24} />}
         </button>
         
         <div className="bg-white/40 dark:bg-zinc-900/40 backdrop-blur-md px-4 py-3 rounded-2xl border border-white/20 dark:border-zinc-800 shadow-sm text-right">
           <span className="block text-[10px] md:text-[12px] text-zinc-500 dark:text-zinc-400 font-black tracking-[0.3em] md:tracking-[0.5em] uppercase">CONFIDENTIAL</span>
           <span className="block text-sm md:text-xl font-black text-zinc-950 dark:text-white uppercase tracking-tighter leading-none italic">INVESTOR // RCA 26</span>
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
          mass: 2
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
              filter: activeSection === index ? 'blur(0px)' : 'blur(80px)',
            }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative">
               <div className="relative z-10 py-20 md:py-40 w-screen md:w-auto md:min-w-[800px] lg:min-w-[1200px] px-6 md:px-0 flex justify-center">
                {section.component}
               </div>
            </div>
          </motion.section>
        ))}
      </motion.main>

      {/* Footnote */}
      <div className="fixed bottom-16 left-16 z-50 hidden lg:flex items-center gap-6 text-[12px] font-black text-zinc-500 dark:text-zinc-400 uppercase tracking-[0.4em] pointer-events-none">
         <div className="flex gap-3">
            <span className="px-4 py-2 bg-white dark:bg-zinc-900 border-2 border-zinc-100 dark:border-zinc-800 text-zinc-400 rounded-2xl shadow-sm">SPACE</span>
            <span className="px-4 py-2 bg-white dark:bg-zinc-900 border-2 border-zinc-100 dark:border-zinc-800 text-zinc-400 rounded-2xl shadow-sm">ARROWS</span>
         </div>
         <span>CONTROLS READY</span>
      </div>

    </div>
  );
}
