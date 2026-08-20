import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
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
import { Download, FileDown, FileText, Globe2, Newspaper, Package, Percent, Sprout, TrendingUp, Users } from 'lucide-react';
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

const farmerNetworkRows = [
  {
    region: 'Ashanti',
    societies: 373,
    male: 4843,
    female: 2317,
    total: 7160,
    mappedFarms: 10133,
    mappedSizeHa: 12082.51,
  },
  {
    region: 'Brong-Ahafo',
    societies: 134,
    male: 1877,
    female: 868,
    total: 2745,
    mappedFarms: 3444,
    mappedSizeHa: 5158.12,
  },
  {
    region: 'Central',
    societies: 241,
    male: 4602,
    female: 2480,
    total: 7082,
    mappedFarms: 11303,
    mappedSizeHa: 9662.61,
  },
  {
    region: 'Eastern',
    societies: 371,
    male: 6580,
    female: 2955,
    total: 9535,
    mappedFarms: 14687,
    mappedSizeHa: 13510.55,
  },
  {
    region: 'Western',
    societies: 115,
    male: 2089,
    female: 782,
    total: 2871,
    mappedFarms: 4310,
    mappedSizeHa: 5315.35,
  },
];

const farmerNetworkTotals = {
  societies: 1234,
  male: 19991,
  female: 9402,
  total: 29393,
  mappedFarms: 43877,
  mappedSizeHa: 45729.15,
};

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

function ProducerPriceTooltip({
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
      <p className="font-mono text-cocoa-800">{formatUsdMt(v)} / 64kg bag</p>
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
  const { globalCocoaUsdPerMt, ghanaProductionMt, adikanfoAnnualPurchasesMt, exportVolumeMt, priceChangePct, trendUp } = marketKpis;
  const changeLabel = `${trendUp ? '+' : ''}${priceChangePct}% vs prior month`;

  return (
    <div className="bg-gradient-to-b from-cream to-cream-dark">
      <section className="relative border-b border-cocoa-200/60 text-cream overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="/resources.jpg"
            alt="Resources"
            className="w-full h-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(to right, rgba(45,33,28,0.82), rgba(45,33,28,0.35) 45%, transparent 65%),linear-gradient(to left, rgba(45,33,28,0.82), rgba(45,33,28,0) 50%)',
              backdropFilter: 'blur(1px)',
            }}
          />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <p className="mb-3 inline-flex rounded-full border border-brand/40 bg-brand-muted px-3 py-1 text-sm text-white">
              Intelligence desk
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-white mb-4 tracking-tight">
              Resources
            </h1>
            <p className="text-lg text-cream/85 leading-relaxed">
            Get simple updates on cocoa prices, news from Ghana, and the big stories affecting our industry.
            </p>
          </motion.div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            <MetricCard
              icon={Globe2}
              label="Farm gate price"
              value={formatUsdMt(globalCocoaUsdPerMt)}
              sub="Per bag of 64kg"
            />
            <MetricCard
              icon={Sprout}
              label="Ghana production"
              value={`${formatMt(ghanaProductionMt)} MT`}
              sub="National crop estimate"
            />
            {/* <MetricCard
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
            /> */}
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
                <h2 className="text-xl md:text-2xl font-medium text-cocoa-900">Producer price trend</h2>
                <p className="mt-1 text-sm text-cocoa-600">Last twelve months — GH₵ per 64kg bag</p>
              </div>
            </div>
            <div
              className="h-[280px] w-full sm:h-[320px]"
              role="img"
              aria-label="Line chart of Ghana cocoa producer price for the 2025/2026 crop year"
            >
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={monthlyCocoaPrices} margin={{ top: 8, right: 12, left: 4, bottom: 8 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgb(196 181 168 / 0.5)" />
                  <XAxis dataKey="shortLabel" tick={{ fill: '#5c4a3f', fontSize: 12 }} axisLine={false} tickLine={false} />
                  <YAxis
                    width={86}
                    tick={{ fill: '#5c4a3f', fontSize: 11 }}
                    axisLine={false}
                    tickLine={false}
                    tickFormatter={(v) => formatUsdMt(Number(v))}
                    domain={[2400, 3200]}
                  />
                  <Tooltip content={<ProducerPriceTooltip />} />
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
            <div className="mb-6 flex items-start justify-between gap-4">
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-cocoa-100 text-brand">
                  <Users className="h-5 w-5" aria-hidden />
                </div>
                <div>
                  <h2 className="text-xl md:text-2xl font-medium text-cocoa-900">
                    Farmer network snapshot
                  </h2>
                  <p className="mt-1 text-sm text-cocoa-600">
                    Statistics by region, societies, farmer counts, mapped farms & mapped hectares
                  </p>
                </div>
              </div>

              <div className="hidden sm:flex flex-wrap justify-end gap-2">
                <div className="rounded-xl border border-cocoa-200/80 bg-cream px-3 py-2">
                  <p className="text-[11px] font-medium uppercase tracking-wide text-cocoa-600">Total farmers</p>
                  <p className="text-sm font-semibold tabular-nums text-cocoa-900">{formatMt(farmerNetworkTotals.total)}</p>
                </div>
                <div className="rounded-xl border border-cocoa-200/80 bg-cream px-3 py-2">
                  <p className="text-[11px] font-medium uppercase tracking-wide text-cocoa-600">Mapped farms</p>
                  <p className="text-sm font-semibold tabular-nums text-cocoa-900">
                    {formatMt(farmerNetworkTotals.mappedFarms)}
                  </p>
                </div>
              </div>
            </div>

            <div className="-mx-2 overflow-x-auto px-2">
              <div className="min-w-[860px]">
                <div className="overflow-hidden rounded-2xl border border-cocoa-200/80">
                  <table className="w-full border-collapse text-left text-sm">
                    <thead className="bg-cream">
                      <tr className="text-xs font-semibold uppercase tracking-wide text-cocoa-700">
                        <th scope="col" className="px-4 py-3">Region</th>
                        <th scope="col" className="px-4 py-3 text-right">Societies</th>
                        <th scope="col" className="px-4 py-3 text-right">Male</th>
                        <th scope="col" className="px-4 py-3 text-right">Female</th>
                        <th scope="col" className="px-4 py-3 text-right">Total</th>
                        <th scope="col" className="px-4 py-3 text-right">Mapped farms</th>
                        <th scope="col" className="px-4 py-3 text-right">Mapped size (Ha)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-cocoa-200/80 bg-white">
                      {farmerNetworkRows.map((row) => (
                        <tr key={row.region} className="hover:bg-cocoa-50/60">
                          <td className="px-4 py-3 font-medium text-cocoa-900">{row.region}</td>
                          <td className="px-4 py-3 text-right tabular-nums text-cocoa-800">{formatMt(row.societies)}</td>
                          <td className="px-4 py-3 text-right tabular-nums text-cocoa-800">{formatMt(row.male)}</td>
                          <td className="px-4 py-3 text-right tabular-nums text-cocoa-800">{formatMt(row.female)}</td>
                          <td className="px-4 py-3 text-right tabular-nums font-medium text-cocoa-900">{formatMt(row.total)}</td>
                          <td className="px-4 py-3 text-right tabular-nums text-cocoa-800">{formatMt(row.mappedFarms)}</td>
                          <td className="px-4 py-3 text-right tabular-nums text-cocoa-800">
                            {row.mappedSizeHa.toLocaleString('en-US', {
                              minimumFractionDigits: 2,
                              maximumFractionDigits: 2,
                            })}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                    <tfoot className="bg-cream">
                      <tr className="text-sm">
                        <th scope="row" className="px-4 py-3 font-semibold text-cocoa-900">Total</th>
                        <td className="px-4 py-3 text-right tabular-nums font-semibold text-cocoa-900">
                          {formatMt(farmerNetworkTotals.societies)}
                        </td>
                        <td className="px-4 py-3 text-right tabular-nums font-semibold text-cocoa-900">
                          {formatMt(farmerNetworkTotals.male)}
                        </td>
                        <td className="px-4 py-3 text-right tabular-nums font-semibold text-cocoa-900">
                          {formatMt(farmerNetworkTotals.female)}
                        </td>
                        <td className="px-4 py-3 text-right tabular-nums font-semibold text-cocoa-900">
                          {formatMt(farmerNetworkTotals.total)}
                        </td>
                        <td className="px-4 py-3 text-right tabular-nums font-semibold text-cocoa-900">
                          {formatMt(farmerNetworkTotals.mappedFarms)}
                        </td>
                        <td className="px-4 py-3 text-right tabular-nums font-semibold text-cocoa-900">
                          {farmerNetworkTotals.mappedSizeHa.toLocaleString('en-US', {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2,
                          })}
                        </td>
                      </tr>
                    </tfoot>
                  </table>
                </div>
              </div>
            </div>

            <div className="mt-4 flex flex-wrap items-center justify-between gap-3 text-xs text-cocoa-600">
              {/* <p>Demo dataset for design preview.</p> */}
              <p className="tabular-nums">Last updated: Apr 2026</p>
            </div>
          </motion.div>

          {/* <motion.div
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
          </motion.div>*/}
        </div>
      </section> 

      {/* Downloads Section */}
      <section className="border-t border-cocoa-200/80 bg-cream">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <motion.div
            className="mb-10 flex items-start gap-3"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-brand to-brand-deep text-white shadow-card">
              <FileDown className="h-5 w-5" aria-hidden />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-medium text-cocoa-900">Our Policies</h2>
              <p className="mt-1 max-w-2xl text-cocoa-600">Download our policy documents.</p>
            </div>
          </motion.div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { title: 'Adikanfo Policy on Child Labour', desc: 'Our policy document for the period.', file: '/downloads/adikanfo-policy-document-jan-apr-2025.pdf' },
              { title: 'Annual Sustainability Report 2024', desc: 'Comprehensive ESG and sustainability performance.', file: '/downloads/sustainability-report-2024.pdf' },
              { title: 'Farmer Training Handbook', desc: 'Best practices for cocoa cultivation and post-harvest.', file: '/downloads/farmer-handbook.pdf' },
              { title: 'Quality Standards Guide', desc: 'Grading criteria and quality assurance protocols.', file: '/downloads/quality-standards.pdf' },
            ].map((doc, index) => (
              <motion.div
                key={index}
                className="group rounded-2xl border border-cocoa-200 bg-card p-6 shadow-card transition-all duration-300 hover:shadow-card-hover hover:border-brand/30"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cocoa-100 text-brand mb-4 group-hover:bg-brand group-hover:text-white transition-colors duration-300">
                  <FileText className="h-6 w-6" aria-hidden />
                </div>
                <h3 className="text-lg font-medium text-cocoa-900 mb-2">{doc.title}</h3>
                <p className="text-sm text-cocoa-600 mb-5 leading-relaxed">{doc.desc}</p>
                <a
                  href={doc.file}
                  download
                  className="inline-flex items-center gap-2 text-sm font-medium text-brand hover:text-brand-deep transition-colors duration-200"
                >
                  <Download className="h-4 w-4" aria-hidden />
                  Download
                </a>
              </motion.div>
            ))}
          </div>
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
