import { motion } from 'motion/react';
import {
  Bar,
  BarChart,
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { Globe2, Newspaper, Package, Percent, Sprout, TrendingUp } from 'lucide-react';
import { Link } from 'react-router';
import { Button } from './ui/button';
import {
  formatMt,
  formatUsdMt,
  industryNews,
  marketKpis,
  monthlyCocoaPrices,
  topRegionProduction,
} from '../data/marketInsightsData';

const cardMotion = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.45 },
} as const;

function MetricCard({
  icon: Icon,
  label,
  value,
  sub,
}: {
  icon: typeof Globe2;
  label: string;
  value: string;
  sub?: string;
}) {
  return (
    <motion.div
      className="rounded-2xl border border-cocoa-200/80 bg-card p-6 shadow-card"
      {...cardMotion}
    >
      <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-brand to-brand-deep text-white shadow-card">
        <Icon className="h-5 w-5" aria-hidden />
      </div>
      <p className="text-sm text-cocoa-600 mb-1">{label}</p>
      <p className="text-2xl md:text-3xl font-medium tabular-nums text-cocoa-900 tracking-tight">{value}</p>
      {sub ? <p className="mt-2 text-xs text-cocoa-600">{sub}</p> : null}
    </motion.div>
  );
}

function PriceTooltip({
  active,
  payload,
}: {
  active?: boolean;
  payload?: Array<{ value?: number; payload?: { month?: string } }>;
}) {
  if (!active || !payload?.length) return null;
  const v = payload[0]?.value;
  const m = payload[0]?.payload?.month;
  if (v == null) return null;
  return (
    <div className="rounded-lg border border-cocoa-200 bg-card px-3 py-2 text-xs shadow-xl">
      <p className="font-medium text-cocoa-900">{m}</p>
      <p className="font-mono text-cocoa-800">{formatUsdMt(v)} / MT</p>
    </div>
  );
}

function RegionTooltip({
  active,
  payload,
}: {
  active?: boolean;
  payload?: Array<{ value?: number; payload?: { region?: string } }>;
}) {
  if (!active || !payload?.length) return null;
  const v = payload[0]?.value;
  const r = payload[0]?.payload?.region;
  if (v == null) return null;
  return (
    <div className="rounded-lg border border-cocoa-200 bg-card px-3 py-2 text-xs shadow-xl">
      <p className="font-medium text-cocoa-900">{r}</p>
      <p className="text-cocoa-700">{formatMt(v)} MT</p>
    </div>
  );
}

export function MarketInsights() {
  const { globalCocoaUsdPerMt, ghanaProductionMt, exportVolumeMt, priceChangePct, trendUp } = marketKpis;
  const changeLabel = `${trendUp ? '+' : ''}${priceChangePct}% vs prior month`;

  return (
    <div className="bg-gradient-to-b from-cream to-cream-dark">
      <section className="border-b border-cocoa-200/60 bg-gradient-to-br from-cocoa-900 via-cocoa-900 to-cocoa-950 text-cream">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <p className="mb-3 inline-flex rounded-full border border-brand/40 bg-brand-muted px-3 py-1 text-sm text-brand">
              Intelligence desk
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-white mb-4 tracking-tight">
              Market insights
            </h1>
            <p className="text-lg text-cream/85 leading-relaxed">
            Get simple updates on cocoa prices, news from Ghana, and the big stories affecting our industry.
            </p>
          </motion.div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            <MetricCard
              icon={Globe2}
              label="Global cocoa price"
              value={formatUsdMt(globalCocoaUsdPerMt)}
              sub="Benchmark nearby, USD per metric tonne"
            />
            <MetricCard
              icon={Sprout}
              label="Ghana production"
              value={`${formatMt(ghanaProductionMt)} MT`}
              sub="National crop estimate (demo)"
            />
            <MetricCard
              icon={Package}
              label="Export volume"
              value={`${formatMt(exportVolumeMt)} MT`}
              sub="Shipments & forward commitments (demo)"
            />
            <MetricCard
              icon={Percent}
              label="Price change"
              value={`${trendUp ? '+' : ''}${priceChangePct}%`}
              sub={changeLabel}
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
          <motion.div
            className="rounded-2xl border border-cocoa-200 bg-card p-6 sm:p-8 shadow-card"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-6 flex items-start gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-cocoa-100 text-brand">
                <TrendingUp className="h-5 w-5" aria-hidden />
              </div>
              <div>
                <h2 className="text-xl md:text-2xl font-medium text-cocoa-900">Global cocoa price trend</h2>
                <p className="mt-1 text-sm text-cocoa-600">Last twelve months — sample path between $2,400 and $3,200 / MT</p>
              </div>
            </div>
            <div
              className="h-[280px] w-full sm:h-[320px]"
              role="img"
              aria-label="Line chart of sample global cocoa prices over the last twelve months"
            >
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={monthlyCocoaPrices} margin={{ top: 8, right: 12, left: 4, bottom: 8 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgb(196 181 168 / 0.5)" />
                  <XAxis dataKey="shortLabel" tick={{ fill: '#5c4a3f', fontSize: 12 }} axisLine={false} tickLine={false} />
                  <YAxis
                    width={56}
                    tick={{ fill: '#5c4a3f', fontSize: 11 }}
                    axisLine={false}
                    tickLine={false}
                    tickFormatter={(v) => `$${(v / 1000).toFixed(1)}k`}
                    domain={['dataMin - 120', 'dataMax + 120']}
                  />
                  <Tooltip content={<PriceTooltip />} />
                  <Line
                    type="monotone"
                    dataKey="price"
                    stroke="#5da8c6"
                    strokeWidth={2.5}
                    dot={{ fill: '#3d86a3', stroke: '#faf7f2', strokeWidth: 2, r: 4 }}
                    activeDot={{ r: 6 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          <motion.div
            className="rounded-2xl border border-cocoa-200 bg-card p-6 sm:p-8 shadow-card"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.08 }}
          >
            <div className="mb-6 flex items-start gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-cocoa-100 text-brand">
                <Sprout className="h-5 w-5" aria-hidden />
              </div>
              <div>
                <h2 className="text-xl md:text-2xl font-medium text-cocoa-900">Top regions by volume</h2>
                <p className="mt-1 text-sm text-cocoa-600">Five leading producing areas — demo production (MT)</p>
              </div>
            </div>
            <div
              className="h-[280px] w-full sm:h-[320px]"
              role="img"
              aria-label="Bar chart of sample cocoa production volumes for five Ghana regions"
            >
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={topRegionProduction}
                  layout="vertical"
                  margin={{ top: 8, right: 16, left: 8, bottom: 8 }}
                >
                  <CartesianGrid strokeDasharray="3 3" horizontal stroke="rgb(196 181 168 / 0.45)" />
                  <XAxis type="number" tick={{ fill: '#5c4a3f', fontSize: 11 }} axisLine={false} tickLine={false} tickFormatter={(v) => formatMt(v)} />
                  <YAxis
                    type="category"
                    dataKey="region"
                    width={108}
                    tick={{ fill: '#4a3a31', fontSize: 12 }}
                    axisLine={false}
                    tickLine={false}
                  />
                  <Tooltip content={<RegionTooltip />} cursor={{ fill: 'rgb(93 168 198 / 0.08)' }} />
                  <Bar dataKey="volumeMt" fill="#3d86a3" radius={[0, 6, 6, 0]} maxBarSize={28} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="border-t border-cocoa-200/80 bg-cream pb-20">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <motion.div
            className="mb-10 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-start gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-brand to-brand-deep text-white shadow-card">
                <Newspaper className="h-5 w-5" aria-hidden />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-medium text-cocoa-900">Industry pulse</h2>
                <p className="mt-1 max-w-2xl text-cocoa-600">Short news bites straight from farmers' forums accross the world.</p>
              </div>
            </div>
            <Link to="/contact" className="shrink-0">
              <Button variant="outline" className="border-brand text-brand hover:bg-brand-muted">
                Talk to our desk
              </Button>
            </Link>
          </motion.div>

          <ul className="space-y-5">
            {industryNews.map((item, index) => (
              <motion.li
                key={item.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                className="rounded-2xl border border-cocoa-200 bg-card p-6 sm:p-7 shadow-card transition-shadow duration-300 hover:shadow-card-hover"
              >
                <time
                  dateTime={item.date}
                  className="text-xs font-medium uppercase tracking-wide text-brand"
                >
                  {new Date(item.date + 'T12:00:00').toLocaleDateString('en-GB', {
                    day: 'numeric',
                    month: 'short',
                    year: 'numeric',
                  })}
                </time>
                <h3 className="mt-2 text-lg md:text-xl font-medium text-cocoa-900">{item.title}</h3>
                <p className="mt-3 text-cocoa-700 leading-relaxed max-w-4xl">{item.description}</p>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
