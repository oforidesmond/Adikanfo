/**
 * Deterministic demo data for Market Insights (seeded PRNG — stable across reloads).
 */

const SEED = 0xad1daf0; // mnemonic seed; must be valid hex

function mulberry32(seed: number) {
  return function next() {
    let t = (seed += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/** Seeded stream for predictable multi-series generation. */
function createRng(seed: number) {
  return mulberry32(seed);
}

const priceRng = createRng(SEED);
const regionRng = createRng(SEED + 1);

export type MonthlyPrice = { month: string; shortLabel: string; price: number };

/** Last 12 months ending April 2026 (site reference date). */
const MONTH_LABELS: { full: string; short: string }[] = [
  { full: 'May 2025', short: 'May' },
  { full: 'Jun 2025', short: 'Jun' },
  { full: 'Jul 2025', short: 'Jul' },
  { full: 'Aug 2025', short: 'Aug' },
  { full: 'Sep 2025', short: 'Sep' },
  { full: 'Oct 2025', short: 'Oct' },
  { full: 'Nov 2025', short: 'Nov' },
  { full: 'Dec 2025', short: 'Dec' },
  { full: 'Jan 2026', short: 'Jan' },
  { full: 'Feb 2026', short: 'Feb' },
  { full: 'Mar 2026', short: 'Mar' },
  { full: 'Apr 2026', short: 'Apr' },
];

function buildMonthlyPrices(): MonthlyPrice[] {
  const min = 2400;
  const max = 3200;
  let v = 2750 + (priceRng() - 0.5) * 280;
  return MONTH_LABELS.map(({ full, short }) => {
    v += (priceRng() - 0.5) * 220;
    v = Math.min(max, Math.max(min, v));
    return { month: full, shortLabel: short, price: Math.round(v) };
  });
}

export const monthlyCocoaPrices = buildMonthlyPrices();

export type RegionProduction = { region: string; volumeMt: number };

const REGION_BASE: { region: string; base: number }[] = [
  { region: 'Western', base: 312_000 },
  { region: 'Ashanti', base: 148_000 },
  { region: 'Eastern', base: 122_000 },
  { region: 'Central', base: 96_000 },
  { region: 'Bono & Ahafo', base: 84_000 },
];

export const topRegionProduction: RegionProduction[] = REGION_BASE.map(({ region, base }) => {
  const jitter = 0.92 + regionRng() * 0.16;
  return { region, volumeMt: Math.round(base * jitter / 1000) * 1000 };
}).sort((a, b) => b.volumeMt - a.volumeMt);

const lastPrice = monthlyCocoaPrices[monthlyCocoaPrices.length - 1]!.price;
const prevPrice = monthlyCocoaPrices[monthlyCocoaPrices.length - 2]!.price;
const priceChangePct = ((lastPrice - prevPrice) / prevPrice) * 100;

const productionRng = createRng(SEED + 2);
export const ghanaProductionMt = Math.round((682_000 + productionRng() * 24_000) / 1000) * 1000;
export const exportVolumeMt = Math.round((ghanaProductionMt * (0.78 + productionRng() * 0.06)) / 1000) * 1000;

export const marketKpis = {
  globalCocoaUsdPerMt: lastPrice,
  ghanaProductionMt,
  exportVolumeMt,
  priceChangePct: Math.round(priceChangePct * 10) / 10,
  trendUp: lastPrice >= prevPrice,
};

export type IndustryNewsItem = {
  id: string;
  title: string;
  date: string;
  description: string;
};

export const industryNews: IndustryNewsItem[] = [
  {
    id: '1',
    title: 'Harmattan winds ease across southern cocoa belt',
    date: '2026-04-22',
    description:
      'Meteorologists report a milder finish to the dry season, supporting pod development in Western and Central corridors. Farmers’ groups expect steady mid-crop flow if showers hold through May.',
  },
  {
    id: '2',
    title: 'Analysts trim Q3 grind outlook on inventory rebuild',
    date: '2026-04-18',
    description:
      'A consensus note from European processors suggests grind growth may slow to low single digits as North American stocks normalise, keeping origin differentials in focus for Ghana exporters.',
  },
  {
    id: '3',
    title: 'ECOWAS talks advance on regional traceability standards',
    date: '2026-04-11',
    description:
      'Draft language on interoperable farm-gate data is moving toward adoption, which could simplify documentation for cross-border cooperatives and licensed buyers within the next two seasons.',
  },
  {
    id: '4',
    title: 'Forward curves hint at firmer Q4 differentials',
    date: '2026-04-04',
    description:
      'Paper markets priced a modest premium for Q4 liftings as confectionery demand signals stabilise; trade houses note balanced farmer selling in Ghana’s main pools so far this quarter.',
  },
];

export function formatUsdMt(n: number) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(n);
}

export function formatMt(n: number) {
  return new Intl.NumberFormat('en-US', { maximumFractionDigits: 0 }).format(n);
}
