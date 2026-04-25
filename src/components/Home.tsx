import { useEffect, useState } from 'react';
import { Link } from 'react-router';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { CheckCircle, Shield, TrendingUp, Users, Award, Leaf, Clock, Globe, Quote } from 'lucide-react';
import { motion } from 'motion/react';
import { AnimatedCounter } from './AnimatedCounter';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from './ui/carousel';
import { MarketInsightsWidget } from './MarketInsightsWidget';

export function Home() {
  const [carouselApi, setCarouselApi] = useState<CarouselApi | null>(null);
  const heroImages = Array.from({ length: 5 }, (_, index) => ({
    src: `/carousel-${index + 1}.jpg`,
    alt: `Adikanfo Commodities hero slide ${index + 1}`,
  }));

  useEffect(() => {
    if (!carouselApi) return;
    const interval = setInterval(() => {
      carouselApi.scrollNext();
    }, 7000);
    return () => clearInterval(interval);
  }, [carouselApi]);

  const features = [
    {
      icon: Shield,
      title: 'COCOBOD Licensed',
      description: 'Officially licensed under Ghana Cocoa Board Law 1984 (P.N.D.C Law 81 S.4(6)) with full regulatory compliance and a registered member of WORLD COCOA FOUNDATION (WCF) and LICENSED COCOA BUYERS ASSOCIATION OF GHANA (LICOBAG)',
    },
    {
      icon: Users,
      title: 'Farmer Partnership',
      description: 'Empowering over 3,000 smallholder farmers across Ghana with fair pricing',
    },
    {
      icon: TrendingUp,
      title: 'Quality Excellence',
      description: 'Premium grade cocoa beans meeting international quality standards',
    },
    {
      icon: CheckCircle,
      title: 'Reliable & Transparent',
      description: 'Immediate payments, efficient operations, and complete transparency',
    },
  ];

  const testimonials = [
    {
      quote:
        'Adikanfo supports us beyond cocoa purchase. They dialogue with us to support our community; they are indeed farmer’s friend.',
      image: '/farmer1.jpg',
      name: 'Mary Afriyie',
      location: 'Enchi',
    },
    {
      quote:
        'Adikanfo support my family well in my career as a purchasing clerk (PC). They always pay the right PC’s commission and pay on time.',
      image: '/farmer2.jpg',
      name: 'John Appiah',
      location: 'Ateiku',
    },
    {
      quote:
        'Adikanfo commodities is a company you can really trust in the industry today. they have honest field personnel who doesn’t cheat farmers and also educate us about good agronomic practices.',
      image: '/farmer3.jpg',
      name: 'Afua Birago',
      location: 'Konongo',
    },
  ];

  const partners = [
    { name: 'Partner 1', image: '/partner1.png' },
    { name: 'Partner 2', image: '/partner2.png' },
    { name: 'Partner 3', image: '/partner3.png' },
    { name: 'Partner 4', image: '/partner4.png' },
  ];

  const stats = [
    { value: 12, label: 'Years of Excellence', suffix: '+' },
    { value: 3000, label: 'Farmers Partnered', suffix: '+' },
    { value: 15000, label: 'Tons Processed/Year', suffix: '+' },
    { value: 6, label: 'Regions of Operation', suffix: '+' },
  ];

  const values = [
    {
      icon: Award,
      title: 'Premium Quality',
      description: 'Only the finest cocoa beans',
    },
    {
      icon: Leaf,
      title: 'Sustainability',
      description: 'Eco-friendly practices',
    },
    {
      icon: Clock,
      title: 'Fast Processing',
      description: 'Quick turnaround times',
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'International partnerships',
    },
  ];

  return (
    <div>
      {/* Hero Section with Carousel */}
      <section className="relative h-[700px] flex items-center justify-center overflow-hidden">
        <motion.div
          className="absolute inset-0 z-0"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.2 }}
        >
          <Carousel className="h-full" opts={{ loop: true }} setApi={setCarouselApi}>
            <CarouselContent className="h-full" style={{ marginLeft: 0 }}>
              {heroImages.map((image) => (
                <CarouselItem key={image.src} className="p-0 h-[700px]" style={{ paddingLeft: 0 }}>
                  <div className="h-full">
                    <img src={image.src} alt={image.alt} className="w-full h-full object-cover" />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex bg-cream/80 text-cocoa-900 hover:bg-cream shadow-card border border-cocoa-200/50" />
            <CarouselNext className="hidden md:flex bg-cream/80 text-cocoa-900 hover:bg-cream shadow-card border border-cocoa-200/50" />
          </Carousel>
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                'linear-gradient(to right, rgba(45,33,28,0.82), rgba(45,33,28,0.35) 45%, transparent 65%),linear-gradient(to left, rgba(93,168,198,0.55), rgba(93,168,198,0) 50%)',
              backdropFilter: 'blur(1px)',
            }}
          ></div>
        </motion.div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            <div className="lg:col-span-7 max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.div
                className="inline-block mb-4 px-4 py-2 bg-brand-muted backdrop-blur-sm rounded-full border border-brand/35"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <span className="text-white text-sm">Licensed by COCOBOD Ghana</span>
              </motion.div>
            </motion.div>

            <motion.h1
              className="text-5xl md:text-6xl lg:text-7xl mb-6 text-white"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Adikanfo Commodities
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl mb-8 text-white"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Ghana's trusted partner in premium cocoa procurement. Empowering farmers, ensuring quality, delivering excellence.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <Link to="/contact">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button size="lg" className="bg-gradient-to-r from-brand to-brand-deep hover:from-brand-hover hover:to-brand-deep cursor-pointer shadow-card-hover text-white">
                    Become a Partner
                  </Button>
                </motion.div>
              </Link>
              <Link to="/services">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button size="lg" variant="outline" className="bg-white/10 border-white text-white hover:bg-white/20 cursor-pointer backdrop-blur-sm">
                    Our Services
                  </Button>
                </motion.div>
              </Link>
            </motion.div>
            </div>
            <div className="lg:col-span-5 w-full max-w-md lg:max-w-none lg:justify-self-end">
              <MarketInsightsWidget />
            </div>
          </div>
        </div>

        {/* Animated Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
            <motion.div
              className="w-1 h-2 bg-white rounded-full"
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </section>

      {/* Stats Section with Animated Counters */}
      <section
        className="text-white py-20"
        style={{ background: 'linear-gradient(90deg, #5da8c6 0%, #3d86a3 100%)' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="text-4xl md:text-5xl mb-2">
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-cream/90">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section with Stagger Animation */}
      <section className="py-24 bg-gradient-to-b from-cream to-cream-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl mb-4 text-cocoa-900">Why Choose Adikanfo</h2>
            <p className="text-cocoa-700 max-w-2xl mx-auto text-lg">
              Combining traditional values with modern excellence to serve Ghana's cocoa industry
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-card p-8 rounded-xl shadow-card hover:shadow-card-hover transition-all duration-300 border border-cocoa-200"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <motion.div
                  className="w-16 h-16 bg-gradient-to-br from-brand to-brand-deep rounded-xl flex items-center justify-center mb-6 shadow-card"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <feature.icon className="text-white" size={32} />
                </motion.div>
                <h3 className="mb-3 text-cocoa-900">{feature.title}</h3>
                <p className="text-cocoa-700 text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview with Image Animation */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                className="inline-block mb-4 px-4 py-2 bg-cocoa-100 rounded-full"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                <span className="text-brand text-sm font-medium">Our Story</span>
              </motion.div>
              <h2 className="text-4xl md:text-5xl mb-6 text-cocoa-900">Empowering Ghana's Cocoa Farmers</h2>
              <p className="text-cocoa-700 mb-4 text-lg leading-relaxed">
                Adikanfo Commodities is a fully licensed cocoa buying company operating under Ghana Cocoa Board Law 1984 (P.N.D.C Law 81 S.4(6)) and strict regulations of WORLD COCOA FOUNDATION (WCF) and LICENSED COCOA BUYERS ASSOCIATION OF GHANA (LICOBAG). 
                We are committed to creating sustainable value throughout the cocoa supply chain.
              </p>
              <p className="text-cocoa-700 mb-6 text-lg leading-relaxed">
                Our mission is to provide farmers with competitive prices, reliable service, and the support they 
                need to thrive. We combine years of industry expertise with modern practices to ensure quality and fairness.
              </p>

              {/* Value Props */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {values.map((value, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-3 p-4 bg-cream-dark rounded-lg border border-cocoa-200/60"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="w-10 h-10 bg-gradient-to-br from-brand to-brand-deep rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm">
                      <value.icon className="text-white" size={20} />
                    </div>
                    <div>
                      <h4 className="text-sm text-cocoa-900 mb-1">{value.title}</h4>
                      <p className="text-xs text-cocoa-700">{value.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <Link to="/about">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button variant="outline" className="border-brand text-brand hover:bg-brand-muted">
                    Learn More About Us
                  </Button>
                </motion.div>
              </Link>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                className="absolute -top-8 -left-8 w-32 h-32 bg-cocoa-200 rounded-full opacity-40"
                animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
                transition={{ duration: 20, repeat: Infinity }}
              />
              <motion.div
                className="absolute -bottom-8 -right-8 w-40 h-40 bg-brand/25 rounded-full opacity-50"
                animate={{ scale: [1, 1.3, 1], rotate: [360, 180, 0] }}
                transition={{ duration: 25, repeat: Infinity }}
              />

              <div className="relative grid grid-cols-2 gap-4">
                <motion.div
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  transition={{ duration: 0.3 }}
                >
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1634303316622-33b4d64f1f65?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2NvYSUyMGJlYW5zJTIwY2hvY29sYXRlfGVufDF8fHx8MTc2MzgxNTAzMXww&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Cocoa beans"
                    className="w-full h-64 object-cover rounded-2xl shadow-xl"
                  />
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05, rotate: -2 }}
                  transition={{ duration: 0.3 }}
                  className="mt-8"
                >
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1740741703636-1680d0c0f0a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwZmFybWVycyUyMGFncmljdWx0dXJlfGVufDF8fHx8MTc2MzgxNTAzMnww&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Farmers"
                    className="w-full h-64 object-cover rounded-2xl shadow-xl"
                  />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Farmers Testimonials */}
      <section className="py-24 bg-gradient-to-b from-cream-dark to-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl mb-4 text-cocoa-900">Farmers Testimonials</h2>
            <p className="text-cocoa-700 max-w-2xl mx-auto text-lg">
              Don’t take our word for it – here’s what our farmers say:
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                className="bg-card p-8 rounded-2xl border border-cocoa-200 shadow-card flex flex-col h-full"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-brand to-brand-deep flex items-center justify-center text-white mb-4 shadow-card">
                  <Quote size={28} />
                </div>
                <p className="text-cocoa-800 text-base leading-relaxed mb-6 flex-1">{testimonial.quote}</p>
                <div className="text-center">
                  <div className="w-40 h-40 mx-auto mb-4 rounded-full overflow-hidden border-4 border-cocoa-200 shadow-card">
                    <ImageWithFallback
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-cocoa-900">{testimonial.name}</h3>
                  <p className="text-sm text-brand">{testimonial.location}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Partners */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl mb-4 text-cocoa-900">Our Strategic Partners</h2>
            <p className="text-cocoa-700 max-w-2xl mx-auto text-lg">
              We collaborate with globally recognized organizations to deliver excellence throughout the cocoa value chain.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {partners.map((partner, index) => (
              <motion.div
                key={partner.name}
                className="p-6 rounded-2xl border border-cocoa-200 bg-gradient-to-br from-card to-cream-dark flex items-center justify-center shadow-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <ImageWithFallback
                  src={partner.image}
                  alt={partner.name}
                  className="max-h-16 object-contain"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section with Gradient Background */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cocoa-950 via-cocoa-900 to-cocoa-950" />
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              'radial-gradient(circle at 20% 80%, rgb(93 168 198 / 0.35), transparent 45%), radial-gradient(circle at 80% 20%, rgb(93 168 198 / 0.2), transparent 40%)',
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl mb-6 text-cream">Ready to Partner With Us?</h2>
            <p className="text-xl mb-10 text-cream/85 max-w-2xl mx-auto">
              Join thousands of farmers who trust Adikanfo Commodities for fair prices, quality service, and reliable partnerships.
            </p>
            <Link to="/contact">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-brand to-brand-deep text-white hover:from-brand-hover hover:to-brand-deep shadow-card-hover px-8 py-6 text-lg"
                >
                  Get Started Today
                </Button>
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
