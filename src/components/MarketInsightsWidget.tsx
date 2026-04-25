import { useId } from 'react';
import { Link } from 'react-router';
import { motion } from 'motion/react';
import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  YAxis,
} from 'recharts';
import { ArrowDownRight, ArrowRight, ArrowUpRight, LineChart } from 'lucide-react';
import { formatMt, formatUsdMt, marketKpis, monthlyCocoaPrices } from '../data/marketInsightsData';

const sparkData = monthlyCocoaPrices.map((p) => ({ label: p.shortLabel, price: p.price }));

export function MarketInsightsWidget() {
  const sparkFillId = useId().replace(/:/g, '');
  const { globalCocoaUsdPerMt, ghanaProductionMt, exportVolumeMt, priceChangePct, trendUp } = marketKpis;
  const TrendIcon = trendUp ? ArrowUpRight : ArrowDownRight;

  return (
    <motion.div
      className="w-full pointer-events-auto"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4 }}
      style={{ transition: 'box-shadow 0.35s ease' }}
    >
      <div className="rounded-2xl border border-white/25 bg-cream/12 backdrop-blur-md shadow-[0_20px_50px_-12px_rgba(45,33,28,0.35)] ring-1 ring-white/10 overflow-hidden transition-shadow duration-300 hover:shadow-[0_28px_60px_-12px_rgba(45,33,28,0.45)] motion-reduce:transition-none">
        <div className="p-5 sm:p-6">
          <div className="flex items-start justify-between gap-3 mb-4">
            <div className="flex items-center gap-2 text-white/90">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand/90 text-white shadow-md">
                <LineChart className="h-4 w-4" aria-hidden />
              </span>
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-white/70">Market snapshot</p>
                <p className="text-sm font-medium text-white">Global cocoa (ICE nearby)</p>
              </div>
            </div>
            <span
              className={`inline-flex items-center gap-0.5 rounded-full px-2.5 py-1 text-xs font-medium tabular-nums ${
                trendUp ? 'bg-emerald-500/20 text-emerald-100' : 'bg-rose-500/20 text-rose-100'
              }`}
            >
              <TrendIcon className="h-3.5 w-3.5 shrink-0" aria-hidden />
              {trendUp ? '+' : ''}
              {priceChangePct}%
            </span>
          </div>

          <div className="flex flex-wrap items-end justify-between gap-4 mb-1">
            <div>
              <p className="text-3xl sm:text-4xl font-medium tabular-nums text-white tracking-tight">
                {formatUsdMt(globalCocoaUsdPerMt)}
              </p>
              <p className="text-sm text-white/65 mt-1">per metric tonne · illustrative</p>
            </div>
            <div className="h-14 w-[140px] sm:w-[160px] shrink-0 -mr-1">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={sparkData} margin={{ top: 2, right: 2, left: 0, bottom: 0 }}>
                  <defs>
                    <linearGradient id={sparkFillId} x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#5da8c6" stopOpacity={0.45} />
                      <stop offset="100%" stopColor="#5da8c6" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <YAxis hide domain={['dataMin - 80', 'dataMax + 80']} />
                  <Tooltip
                    cursor={{ stroke: 'rgba(255,255,255,0.25)', strokeWidth: 1 }}
                    content={({ active, payload }) =>
                      active && payload?.[0] ? (
                        <div className="rounded-md border border-cocoa-200 bg-card px-2 py-1 text-xs shadow-lg">
                          <span className="text-cocoa-600">{payload[0].payload.label}</span>
                          <span className="ml-2 font-mono font-medium text-cocoa-900">
                            {formatUsdMt(Number(payload[0].value))}
                          </span>
                        </div>
                      ) : null
                    }
                  />
                  <Area
                    type="monotone"
                    dataKey="price"
                    stroke="#7ec4de"
                    strokeWidth={2}
                    fill={`url(#${sparkFillId})`}
                    isAnimationActive={false}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          <dl className="mt-5 grid grid-cols-2 gap-3 text-sm border-t border-white/15 pt-4">
            <div className="rounded-lg bg-white/8 px-3 py-2.5">
              <dt className="text-white/60 text-xs">Ghana production</dt>
              <dd className="font-medium tabular-nums text-white">{formatMt(ghanaProductionMt)} MT</dd>
            </div>
            <div className="rounded-lg bg-white/8 px-3 py-2.5">
              <dt className="text-white/60 text-xs">Export volume</dt>
              <dd className="font-medium tabular-nums text-white">{formatMt(exportVolumeMt)} MT</dd>
            </div>
          </dl>

          <Link
            to="/market-insights"
            className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-brand to-brand-deep px-4 py-3 text-sm font-medium text-white shadow-lg transition-transform duration-200 hover:from-brand-hover hover:to-brand-deep focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white motion-reduce:transform-none"
          >
            View full market insights
            <ArrowRight className="h-4 w-4 shrink-0" aria-hidden />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
