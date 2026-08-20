import { ImageWithFallback } from './figma/ImageWithFallback';
import {
  Binoculars,
  Handshake,
  HeartHandshake,
  Leaf,
  Network,
  Shield,
  Sprout,
  TreeDeciduous,
  Users,
} from 'lucide-react';
import { motion } from 'motion/react';

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
};

const farmerPillarLabels = ['i', 'ii', 'iii', 'iv', 'v'] as const;

const farmerPillars = [
  {
    title: 'Income diversification',
    description:
      'Supporting households to build multiple income streams reduces vulnerability to crop and price shocks and strengthens year-round stability.',
  },
  {
    title: 'Productivity enhancement',
    description:
      'Good agricultural practices, input access, and technical advice help farmers raise yields sustainably without compromising land health.',
  },
  {
    title: 'Human rights due diligence (HRDD)',
    description:
      'Structured assessments and corrective action ensure risks are identified early and addressed in line with international expectations.',
  },
  {
    title: 'Market access',
    description:
      'Reliable purchasing, transparent pricing, and respectful engagement give farmers confidence that quality cocoa will find a dependable route to market.',
  },
  {
    title: 'Certifications',
    description:
      'Alignment with recognised certification and verification schemes signals credibility to partners and reinforces continuous improvement on the ground.',
  },
];

const numberedSections: {
  n: number;
  title: string;
  body: string;
  image: string;
  imageAlt: string;
  icon: typeof Shield;
}[] = [
  {
    n: 1,
    title: 'Supply chain security',
    body:
      'We treat security of supply as a shared responsibility: strong farmer relationships, disciplined logistics, and rigorous handling from farm gate to delivery. That stability protects quality, timelines, and the trust our partners place in every bag we move.',
    image: '/supply-security1.jpg',
    imageAlt: 'Cocoa supply chain and logistics',
    icon: Shield,
  },
  {
    n: 2,
    title: 'Supply chain resilience & regulatory intelligence',
    body:
      'Markets and regulations evolve quickly. We invest in understanding policy direction, COCOBOD requirements, and buyer expectations so our operations can adapt without compromising compliance or farmer fairness.',
    image: '/supply-security2.jpg',
    imageAlt: 'Compliance and audit documentation',
    icon: Binoculars,
  },
  {
    n: 3,
    title: 'Traceability and transparency',
    body:
      'Traceable sourcing is the foundation of credible sustainability claims. Our systems connect purchases to registered farmers and communities, enabling transparency for regulators, partners, and civil society.',
    image: '/traceability/trace1.JPG',
    imageAlt: 'Traceability in the field',
    icon: Network,
  },
  {
    n: 5,
    title: 'Human rights protection',
    body:
      'Respect for human dignity is non-negotiable. Our programmes and governance embed robust prevention, monitoring, and remediation mechanisms to proactively identify, manage, and address human rights risks.',
    image: '/protection/STEP2686.JPG',
    imageAlt: 'Field protection and safeguarding',
    icon: HeartHandshake,
  },
  {
    n: 6,
    title: 'Agroforestry',
    body:
      'Healthy cocoa landscapes depend on trees, soil, and biodiversity. We promote agroforestry principles that support shade, carbon benefits, and long-term productivity for farmers and the environment.',
    image: '/agroforestry.JPG',
    imageAlt: 'Cocoa agroforestry and shade trees',
    icon: TreeDeciduous,
  },
  {
    n: 7,
    title: 'Community engagement',
    body:
      'Lasting impact is built with communities, not for them. Training, dialogue, and locally relevant initiatives help align our work with the priorities of the people who grow and steward Ghana’s cocoa.',
    image: '/com-engage.jpg',
    imageAlt: 'Community training and engagement',
    icon: Users,
  },
];

function SectionImage({
  src,
  alt,
  className,
  imgClassName,
}: {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
}) {
  return (
    <motion.div
      className={`relative overflow-hidden rounded-2xl shadow-2xl ring-1 ring-cocoa-200/60 ${className ?? ''}`}
      whileHover={{ scale: 1.01 }}
      transition={{ duration: 0.35 }}
    >
      <ImageWithFallback
        src={src}
        alt={alt}
        className={`w-full object-cover ${imgClassName ?? 'h-[min(28rem,70vw)] md:h-[26rem]'}`}
      />
    </motion.div>
  );
}

export function Sustainability() {
  return (
    <div>
      {/* Hero */}
      <section className="relative flex h-[500px] items-center justify-center overflow-hidden">
        <motion.div className="absolute inset-0 z-0" initial={{ scale: 1.15 }} animate={{ scale: 1 }} transition={{ duration: 1.4 }}>
          <ImageWithFallback
            src="/sustain-hero.jpg"
            alt="Sustainable cocoa landscape"
            className="h-[40rem] w-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(to right, rgba(45,33,28,0.88), rgba(45,33,28,0.4) 48%, transparent 68%), linear-gradient(to top, rgba(45,33,28,0.55), transparent 40%)',
              backdropFilter: 'blur(1px)',
            }}
          />
        </motion.div>

        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center text-white">
          <motion.div {...fadeUp} transition={{ duration: 0.65 }}>
            <motion.div
              className="mb-4 inline-block rounded-full border border-brand/40 bg-brand-muted/90 px-6 py-2 backdrop-blur-sm"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.45, delay: 0.15 }}
            >
              <span className="text-cream/90">ESG & impact</span>
            </motion.div>
          </motion.div>
          <motion.h1 className="mb-6 text-5xl md:text-6xl" {...fadeUp} transition={{ duration: 0.7, delay: 0.08 }}>
            Sustainability
          </motion.h1>
          <motion.p className="text-xl text-cream/90 md:text-2xl" {...fadeUp} transition={{ duration: 0.7, delay: 0.16 }}>
            Responsible sourcing, resilient communities, and a cocoa industry we can be proud to lead.
          </motion.p>
        </div>
      </section>

      {/* Lead description */}
      <section className="bg-cream py-20 md:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div
            className="rounded-3xl border border-cocoa-200/80 bg-card p-8 md:p-12 shadow-card"
            {...fadeUp}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-cocoa-900/5 px-4 py-2 text-sm font-medium text-brand">
              <Leaf className="size-4" aria-hidden />
              Our commitment
            </div>
            <p className="text-lg leading-relaxed text-cocoa-800 md:text-xl">
              We recognize that a sustainable cocoa sector depends on protecting the environment, upholding human rights, promoting responsible business practices, and building resilient farming communities. By operating sustainably, we foster pride and accountability among our workforce, safeguard the wellbeing of our farming communities, strengthen our ability to attract credible partners and investors, and build a resilient enterprise capable of leading the cocoa industry for decades to come.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Numbered sections 1–3 */}
      {numberedSections
        .filter((s) => s.n <= 3)
        .map((section, index) => {
          const Icon = section.icon;
          const imageRight = index % 2 === 0;
          return (
            <section
              key={section.n}
              className={`py-20 md:py-24 ${index % 2 === 0 ? 'bg-gradient-to-b from-cream-dark to-cream' : 'bg-cream'}`}
            >
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className={`grid items-center gap-12 md:grid-cols-2 md:gap-16 ${imageRight ? '' : 'md:[&>*:first-child]:order-2'}`}>
                  <motion.div {...fadeUp} transition={{ duration: 0.65 }}>
                    <div className="mb-4 flex items-center gap-3">
                      <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-brand to-brand-deep text-sm font-semibold text-white shadow-card">
                        {section.n}
                      </span>
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cocoa-900/5">
                        <Icon className="size-5 text-brand" aria-hidden />
                      </div>
                    </div>
                    <h2 className="mb-5 text-3xl text-cocoa-900 md:text-4xl">{section.title}</h2>
                    <p className="text-lg leading-relaxed text-cocoa-700">{section.body}</p>
                  </motion.div>
                  <motion.div {...fadeUp} transition={{ duration: 0.65, delay: 0.08 }}>
                    <SectionImage src={section.image} alt={section.imageAlt} />
                  </motion.div>
                </div>
              </div>
            </section>
          );
        })}

      {/* Section 4 — Farmer viability + pillars */}
      <section className="bg-gradient-to-b from-cream to-cream-dark py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 md:grid-cols-2 md:gap-16">
            <motion.div {...fadeUp} transition={{ duration: 0.65 }}>
              <div className="mb-4 flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-brand to-brand-deep text-sm font-semibold text-white shadow-card">
                  4
                </span>
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cocoa-900/5">
                  <Sprout className="size-5 text-brand" aria-hidden />
                </div>
              </div>
              <h2 className="mb-5 text-3xl text-cocoa-900 md:text-4xl">Farmer viability</h2>
              <p className="mb-8 text-lg leading-relaxed text-cocoa-700">
                This approach also strengthens our efforts to mitigate social risks, including child labour, and promotes sustainable rural
                livelihoods through:
              </p>
              <div className="grid gap-3 sm:grid-cols-2">
                <SectionImage
                  src="/farmers/PHOTO-2026-04-27-07-53-07.jpg"
                  alt="Farmers in the network"
                  className="sm:col-span-2"
                  imgClassName="h-52 w-full"
                />
                <SectionImage src="/farmer-viable.jpg" alt="Farmer support programme" imgClassName="h-48 w-full" />
                <SectionImage src="/traceability/trace3.JPG" alt="Field traceability" imgClassName="h-48 w-full" />
              </div>
            </motion.div>
            <motion.div className="space-y-4" {...fadeUp} transition={{ duration: 0.65, delay: 0.1 }}>
              {farmerPillars.map((pillar, i) => (
                <motion.div
                  key={pillar.title}
                  className="rounded-2xl border border-cocoa-200/90 bg-card p-6 shadow-card transition-shadow hover:shadow-card-hover"
                  initial={{ opacity: 0, x: 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.06 }}
                >
                  <div className="mb-2 flex items-baseline gap-2">
                    <span className="text-sm font-semibold tabular-nums tracking-wide text-brand">{farmerPillarLabels[i]}.</span>
                    <h3 className="text-lg font-semibold text-cocoa-900">{pillar.title}</h3>
                  </div>
                  <p className="text-sm leading-relaxed text-cocoa-700 md:text-base">{pillar.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sections 5–7 */}
      {numberedSections
        .filter((s) => s.n >= 5)
        .map((section, index) => {
          const Icon = section.icon;
          const imageRight = index % 2 === 1;
          return (
            <section key={section.n} className={`py-20 md:py-24 ${index % 2 === 0 ? 'bg-cream' : 'bg-gradient-to-b from-cream-dark to-cream'}`}>
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className={`grid items-center gap-12 md:grid-cols-2 md:gap-16 ${imageRight ? '' : 'md:[&>*:first-child]:order-2'}`}>
                  <motion.div {...fadeUp} transition={{ duration: 0.65 }}>
                    <div className="mb-4 flex items-center gap-3">
                      <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-brand to-brand-deep text-sm font-semibold text-white shadow-card">
                        {section.n}
                      </span>
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cocoa-900/5">
                        <Icon className="size-5 text-brand" aria-hidden />
                      </div>
                    </div>
                    <h2 className="mb-5 text-3xl text-cocoa-900 md:text-4xl">{section.title}</h2>
                    <p className="text-lg leading-relaxed text-cocoa-700">{section.body}</p>
                  </motion.div>
                  <motion.div {...fadeUp} transition={{ duration: 0.65, delay: 0.08 }}>
                    <SectionImage src={section.image} alt={section.imageAlt} />
                  </motion.div>
                </div>
              </div>
            </section>
          );
        })}

      {/* Accra portraits — add file at public/accra-portraits-4337.jpg */}
      <section className="relative overflow-hidden bg-cocoa-950 py-16 md:py-20">
        <div className="absolute inset-0 opacity-25">
          <ImageWithFallback src="/kumasi.jpg" alt="" className="h-full w-full object-cover" aria-hidden />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-cocoa-950 via-cocoa-950/92 to-cocoa-950/75" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 md:grid-cols-2 md:gap-14 lg:px-8">
          <motion.div {...fadeUp} transition={{ duration: 0.65 }}>
            <p className="mb-2 text-sm font-medium uppercase tracking-widest text-brand/90">Accra</p>
            <h2 className="mb-4 text-3xl text-white md:text-4xl">Portraits from our journey</h2>
            <p className="max-w-xl text-cream/80">
              People and presence in Ghana’s capital; reflecting the professionalism, care, and ambition that underpin our sustainability work
              nationwide.
            </p>
          </motion.div>
          <motion.div className="max-w-lg justify-self-end" {...fadeUp} transition={{ duration: 0.65, delay: 0.1 }}>
            <SectionImage
              src="/portraits.jpg"
              alt="Accra portraits: team and stakeholders"
              imgClassName="h-[22rem] w-full md:h-[26rem]"
            />
          </motion.div>
        </div>
      </section>

      {/* Gender and social inclusion */}
      <section className="bg-cream py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
            <motion.div className="lg:col-span-5" {...fadeUp} transition={{ duration: 0.65 }}>
              <div className="sticky top-24 space-y-4">
                <SectionImage src="/support/women1.JPG" alt="Women in the farmer network" imgClassName="h-64 w-full" />
                <div className="grid grid-cols-2 gap-4">
                  <SectionImage
                    src="/gender2.jpg"
                    alt="Quality and inclusion at grading"
                    imgClassName="h-40 w-full"
                  />
                  <SectionImage src="/gender1.jpg" alt="Cocoa community" imgClassName="h-40 w-full" />
                </div>
              </div>
            </motion.div>
            <motion.div className="lg:col-span-7" {...fadeUp} transition={{ duration: 0.65, delay: 0.08 }}>
              <div className="mb-4 inline-block rounded-full bg-cocoa-900/5 px-4 py-2 text-sm font-medium text-brand">Main focus</div>
              <h2 className="mb-6 text-3xl text-cocoa-900 md:text-5xl">Gender and social inclusion</h2>
              <p className="mb-8 text-lg leading-relaxed text-cocoa-700 md:text-xl">
                We recognize that empowering women and vulnerable groups is essential to strengthening household resilience, improving farm
                productivity, and achieving sustainable development outcomes. Our farmer network reflects a diverse and inclusive community,
                currently comprising{' '}
                <strong className="font-semibold text-cocoa-900">8,770 women</strong> and{' '}
                <strong className="font-semibold text-cocoa-900">18,601 men</strong>, as well as youth, persons with disabilities, and elderly
                farmers.
              </p>
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="rounded-2xl border border-cocoa-200 bg-card p-6 shadow-card">
                  <p className="text-4xl font-semibold text-brand">8,770</p>
                  <p className="mt-1 text-sm font-medium text-cocoa-900">Women farmers</p>
                </div>
                <div className="rounded-2xl border border-cocoa-200 bg-card p-6 shadow-card">
                  <p className="text-4xl font-semibold text-brand">18,601</p>
                  <p className="mt-1 text-sm font-medium text-cocoa-900">Men farmers</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Child labour */}
      <section className="bg-gradient-to-b from-cream-dark to-cream py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
            <motion.div {...fadeUp} transition={{ duration: 0.65 }}>
              <div className="mb-4 inline-block rounded-full bg-cocoa-900/5 px-4 py-2 text-sm font-medium text-brand">Safeguarding children</div>
              <h2 className="mb-6 text-3xl text-cocoa-900 md:text-4xl">Child labour</h2>
              <p className="text-lg leading-relaxed text-cocoa-700 md:text-xl">
                Our Child Labour Monitoring and Remediation System (CLMRS) forms a core component of our human rights due diligence framework and
                aligns with internationally recognized standards for responsible supply chain management.
              </p>
            </motion.div>
            <motion.div className="grid gap-4 sm:grid-cols-2" {...fadeUp} transition={{ duration: 0.65, delay: 0.1 }}>
              <SectionImage
                src="/protection/STEP2777.JPG"
                alt="Child labour monitoring and remediation"
                className="sm:col-span-2"
                imgClassName="h-56 w-full"
              />
              <SectionImage src="/child3.jpg" alt="Training supporting remediation" imgClassName="h-44 w-full" />
              <SectionImage src="/child1.jpg" alt="Programme resources" imgClassName="h-44 w-full" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Strategic partnership */}
      <section className="bg-gradient-to-br from-cocoa-950 via-cocoa-900 to-cocoa-950 py-20 text-cream md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <motion.div className="order-2 lg:order-1" {...fadeUp} transition={{ duration: 0.65 }}>
              <div className="grid grid-cols-2 gap-4">
                <motion.div
                  className="flex h-48 items-center justify-center overflow-hidden rounded-2xl bg-white/10 p-6 shadow-2xl ring-1 ring-white/15"
                  whileHover={{ scale: 1.01 }}
                  transition={{ duration: 0.35 }}
                >
                  <ImageWithFallback src="/partner6.png" alt="Strategic partners" className="max-h-full max-w-full object-contain" />
                </motion.div>
                <SectionImage src="/carousel-5.jpg" alt="Sustainable sourcing collaboration" imgClassName="h-48 w-full" />
                <SectionImage
                  src="/carousel-6.jpg"
                  alt="Value chain partnership"
                  className="sm:col-span-2"
                  imgClassName="h-52 w-full"
                />
              </div>
            </motion.div>
            <motion.div className="order-1 lg:order-2" {...fadeUp} transition={{ duration: 0.65, delay: 0.08 }}>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-cream/95 ring-1 ring-white/20">
                <Handshake className="size-4" aria-hidden />
                Collaboration
              </div>
              <h2 className="mb-6 text-3xl md:text-5xl">Strategic partnership</h2>
              <p className="text-lg leading-relaxed text-cream/85 md:text-xl">
                Our partnership-driven approach aligns with internationally recognized sustainability and risk management principles, focusing on
                measurable outcomes, responsible sourcing, and long-term value creation.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
