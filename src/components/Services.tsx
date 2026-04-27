import { ImageWithFallback } from './figma/ImageWithFallback';
import {
  CheckCircle,
  CheckCircle2,
  DollarSign,
  GraduationCap,
  Heart,
  Leaf,
  Package,
  ShieldCheck,
  Truck,
  Users,
} from 'lucide-react';
import { Link } from 'react-router';
import { Button } from './ui/button';
import { motion } from 'motion/react';

export function Services() {
  const services = [
    {
      icon: Package,
      title: 'Traceable Cocoa Sourcing',
      description:
        'We source high-quality, traceable cocoa beans (certified or conventional) directly from farmers and deliver to COCOBOD takeover centers in Tema, Takoradi and Kumasi (Kaase).',
      features: [
        'Certified or conventional traceable cocoa',
        'Direct sourcing through our purchasing network',
        'Reliable evacuation to COCOBOD takeover centers',
      ],
      color: 'from-brand to-brand-deep',
    },
    {
      icon: ShieldCheck,
      title: 'Purchasing, Grading & Compliance',
      description:
        'Strict purchasing and grading processes with adherence to COCOBOD quality and compliance standards.',
      features: [
        'Professional grading aligned to COCOBOD standards',
        'Quality control to protect bean integrity',
        'Strong compliance discipline across operations',
      ],
      color: 'from-brand-deep to-cocoa-800',
    },
    {
      icon: Truck,
      title: 'Efficient Transport & Delivery',
      description:
        'Efficient transport and delivery operations designed to reduce post-harvest losses and improve turnaround times.',
      features: [
        'Timely evacuation across our supply chain',
        'Operational discipline for reliable performance',
        'Delivery to Tema, Takoradi and Kumasi (Kaase)',
      ],
      color: 'from-cocoa-800 to-cocoa-950',
    },
    {
      icon: Users,
      title: 'Farmer Registration & Engagement',
      description:
        'Our operations are built on farmer registration and continuous engagement to strengthen traceability and service delivery.',
      features: [
        'Farmer onboarding and data-driven traceability',
        'Consistent engagement across communities',
        'Support embedded within our purchasing network',
      ],
      color: 'from-brand to-cocoa-900',
    },
    {
      icon: Heart,
      title: 'Women & Youth Empowerment',
      description:
        'We strengthen Village Savings and Loan Associations (VSLAs) and targeted Income-Generating Activities (IGAs) to support economic resilience.',
      features: [
        'VSLA formation and strengthening',
        'Targeted IGAs for women and youth',
        'Household financial resilience and inclusion',
      ],
      color: 'from-cocoa-700 to-cocoa-950',
    },
    {
      icon: Leaf,
      title: 'Sustainability & Safeguarding',
      description:
        'We collaborate with global buyers to drive sustainability initiatives, implement CLMRS, and promote climate-resilient livelihoods in our operational communities.',
      features: [
        'CLMRS implementation and remediation support',
        'Agroforestry initiatives for climate resilience',
        'Capacity building on social & environmental best practices',
      ],
      color: 'from-brand-hover to-brand-deep',
    },
  ];

  const processSteps = [
    {
      number: '01',
      title: 'Registration',
      description: 'Register with our system and receive a unique farmer ID for tracking all transactions',
    },
    {
      number: '02',
      title: 'Delivery',
      description: 'Bring your cocoa to our operational districts or arrange for convenient pickup service',
    },
    {
      number: '03',
      title: 'Quality Check',
      description: 'Our experts assess quality and grade your cocoa beans according to COCOBOD standards',
    },
    {
      number: '04',
      title: 'Payment',
      description: 'Receive immediate payment via cash, mobile money, or bank transfer based on weight and quality',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center justify-center overflow-hidden">
        <motion.div
          className="absolute inset-0 z-0"
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
        >
          <ImageWithFallback
            src="/kumasi.jpg"
            alt="Warehouse"
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
        </motion.div>

        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-block mb-4 px-6 py-2 bg-brand-muted backdrop-blur-sm rounded-full border border-brand/35"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <span className="text-cream/90">What We Offer</span>
            </motion.div>
          </motion.div>

          <motion.h1
            className="text-5xl md:text-6xl mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Our Services
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-cream/90"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Comprehensive solutions for cocoa farmers and traders
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-gradient-to-b from-cream to-cream-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl mb-4 text-cocoa-900">What We Offer</h2>
            <p className="text-cocoa-700 max-w-2xl mx-auto text-lg">
              Traceable cocoa sourcing, quality compliance, efficient delivery, farmer engagement, community empowerment, and sustainability
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 border border-cocoa-200"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className={`h-2 bg-gradient-to-r ${service.color}`}></div>

                <div className="p-8">
                  <motion.div
                    className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-6 shadow-lg`}
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <service.icon className="text-white" size={32} />
                  </motion.div>

                  <h3 className="mb-3 text-cocoa-900">{service.title}</h3>
                  <p className="text-cocoa-700 text-sm mb-6 leading-relaxed">{service.description}</p>

                  <ul className="space-y-3">
                    {service.features.map((feature, fIndex) => (
                      <motion.li
                        key={fIndex}
                        className="text-sm text-cocoa-700 flex items-start"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: fIndex * 0.05 }}
                      >
                        <CheckCircle2 className="text-brand mr-2 flex-shrink-0 mt-0.5" size={16} />
                        <span>{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl mb-4 text-cocoa-900">How It Works</h2>
            <p className="text-cocoa-700 max-w-2xl mx-auto text-lg">
              A simple, transparent process ensuring quality and fair compensation
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8 relative">
            {/* Connecting Line (hidden on mobile) */}
            <div className="hidden md:block absolute top-16 left-0 right-0 h-1 bg-gradient-to-r from-cocoa-200 via-brand/60 to-brand-deep transform translate-y-8" 
                 style={{ width: 'calc(100% - 8rem)', left: '4rem' }}></div>

            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                className="text-center relative z-10"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <motion.div
                  className="w-32 h-32 bg-gradient-to-br from-brand to-brand-deep rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-card-hover relative"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="text-4xl text-white">{step.number}</span>
                  
                  {/* Pulse Effect */}
                  <motion.div
                    className="absolute inset-0 bg-brand/40 rounded-2xl"
                    initial={{ opacity: 0.5, scale: 1 }}
                    animate={{ opacity: 0, scale: 1.2 }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </motion.div>

                <h3 className="mb-3 text-cocoa-900">{step.title}</h3>
                <p className="text-cocoa-700 text-sm leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-gradient-to-br from-cocoa-950 via-cocoa-900 to-cocoa-950 text-cream relative overflow-hidden">
        {/* Animated Background Pattern */}
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              'radial-gradient(circle at 25% 70%, rgb(93 168 198 / 0.2), transparent 42%), radial-gradient(circle at 75% 30%, rgb(93 168 198 / 0.12), transparent 45%)',
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl mb-4">Why Partner With Adikanfo?</h2>
            <p className="text-cream/85 max-w-2xl mx-auto text-lg">
              The benefits of working with Ghana's trusted cocoa buying company
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Fair Pricing',
                description: 'Competitive rates based on COCOBOD pricing with quality bonuses',
                icon: DollarSign,
              },
              {
                title: 'Fast Payment',
                description: 'Immediate payment upon quality verification - no delays',
                icon: CheckCircle2,
              },
              {
                title: 'Expert Support',
                description: 'Professional guidance and farmer training programs',
                icon: GraduationCap,
              },
            ].map((benefit, index) => (
              <motion.div
                key={index}
                className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.15)' }}
              >
                <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mb-6">
                  <benefit.icon className="text-white" size={32} />
                </div>
                <h3 className="mb-3">{benefit.title}</h3>
                <p className="text-cream/85 leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-b from-cream-dark to-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl mb-6 text-cocoa-900">Ready to Get Started?</h2>
            <p className="text-cocoa-700 text-xl mb-10">
              Join our network of satisfied farmers and experience the Adikanfo difference.
            </p>
            <Link 
  to="/contact" 
  onClick={() => window.scrollTo({ top: 0, behavior: 'instant' })}
>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" className="bg-gradient-to-r from-brand to-brand-deep hover:from-brand-hover hover:to-brand-deep shadow-card-hover px-8 py-6 text-lg text-white">
                  Contact Us Today
                </Button>
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
