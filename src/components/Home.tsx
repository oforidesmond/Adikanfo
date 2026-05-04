import { useEffect, useState } from 'react';
import { Link } from 'react-router';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { CheckCircle, Shield, TrendingUp, Users, Award, Leaf, Clock, Globe, Quote } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
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
  const [activeHeroSlide, setActiveHeroSlide] = useState(0);
  const heroImages = Array.from({ length: 6 }, (_, index) => ({
    src: `/carousel-${index + 1}.jpg`,
    alt: `Adikanfo Commodities hero slide ${index + 1}`,
  }));

  const heroCaptions = [
    'Driving innovation and excellence for quality service delivery.',
    'Strengthening regional operations; closer to our farmers and empowering productivity.',
    'Empowering women in cocoa; nurturing livelihoods and supporting communities.',
    'Dedicated hands cultivating quality from the ground up.',
    'Preserving quality through tradition to meet global standards.',
    'Investing in tomorrow’s harvest for stronger, more resilient cocoa farms.',
  ];

  useEffect(() => {
    if (!carouselApi) return;
    const interval = setInterval(() => {
      carouselApi.scrollNext();
    }, 7000);
    return () => clearInterval(interval);
  }, [carouselApi]);

  useEffect(() => {
    if (!carouselApi) return;

    const updateActive = () => {
      setActiveHeroSlide(carouselApi.selectedScrollSnap());
    };

    updateActive();
    carouselApi.on('select', updateActive);
    carouselApi.on('reInit', updateActive);

    return () => {
      carouselApi.off('select', updateActive);
      carouselApi.off('reInit', updateActive);
    };
  }, [carouselApi]);

  const features = [
    {
      icon: Shield,
      title: 'License',
      description:
        'Officially Registered under the Ghana’s Company’s Act 1961, Licensed by Ghana Cocoa Board law  with full regulatory compliance, a Member of the Licensed Cocoa Buyers Association of Ghana (LICOBAG) and a member of the World Cocoa Foundation (WCF).',
    },
    {
      icon: Users,
      title: 'Stakeholder Partnerships',
      description: '29,000+ farmer network in over 4500 communities across 36 operational districts in Ghana. Partnerships with, local processors, Agri-Input dealers, transporters, international and local financial service providers among others along the cocoa value chain.',
    },
    {
      icon: TrendingUp,
      title: 'Sustained Growth',
      description:
        'Operating with speed, precision and discipline. One of the Highest performing indigenous LBCs. Upward growth trajectory with a high purchase of 21,000 tons of quality Cocoa.',
    },
    {
      icon: Leaf,
      title: 'Sustainable Sourcing',
      description:
        'Committed to sustainable practices that drive growth in Ghana’s cocoa sector, promoting environmental stewardship, empowering farmers and communities, and advancing gender inclusion, child protection, and Fair Labor.',
    },
    {
      icon: CheckCircle,
      title: 'Quality & Compliance',
      description:
        'Adherence to Ghana’s premium quality control and traceability standards.\nRainforest Alliance and fairtrade certified.\nCompliance to local and international standards.',
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
    { name: 'Partner 5', image: '/partner5.svg' },
    { name: 'Partner 6', image: '/partner6.png' },
  ];

  const stats = [
    { value: 10, label: 'Years of Excellence', suffix: '' },
    { value: 2900, label: 'Farmers Partnered', suffix: '+' },
    { value: 18000, label: 'Tonnage Average', suffix: '+' },
    { value: 36, label: 'Operational Districts', suffix: '' },
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
      title: 'Efficient Processing',
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
                'linear-gradient(to right, rgba(45,33,28,0.82), rgba(45,33,28,0.35) 45%, transparent 65%),linear-gradient(to left, rgba(45,33,28,0.82), rgba(45,33,28,0) 50%)',
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
              {/* <motion.div
              className="inline-block mb-4 px-4 py-2 bg-brand-muted backdrop-blur-sm rounded-full border border-brand/35"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-white text-sm">Licensed by COCOBOD Ghana</span>
            </motion.div> */}
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
              <AnimatePresence mode="wait">
                <motion.span
                  key={activeHeroSlide}
                  className="block"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.35 }}
                >
                  {heroCaptions[activeHeroSlide] ?? heroCaptions[0]}
                </motion.span>
              </AnimatePresence>
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
            <div className="lg:col-span-5 w-full max-w-md lg:max-w-sm lg:justify-self-end">
              <MarketInsightsWidget compact />
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
        className="text-white py-14"
        style={{ background: 'linear-gradient(90deg, #31717E 0%, #155068 100%)' }}
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
      <section className="py-16 bg-gradient-to-b from-cream to-cream-dark">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-2">
          <motion.div
            className="text-center mb-10"
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-card p-6 rounded-xl shadow-card hover:shadow-card-hover transition-all duration-300 border border-cocoa-200"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <motion.div
                  className="w-14 h-14 bg-gradient-to-br from-brand to-brand-deep rounded-xl flex items-center justify-center mb-4 shadow-card"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <feature.icon className="text-white" size={28} />
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
                Adikanfo Commodities Limited (ACL) is a proponent of sustainable cocoa production through the promotion of responsible environmental stewardship and the advancement of community wellbeing as a part of our operations.
              </p>
              <p className="text-cocoa-700 mb-6 text-lg leading-relaxed">
               Our mission is to responsibly source and deliver high-quality cocoa through transparent practices that empower farmers, protect the environment and promote community well-being and shared prosperity.
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
                    src="/cocoa-beans.jpg"
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
                    src="/cocoa-plant.jpg"
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
      {/* <section className="py-24 bg-gradient-to-b from-cream-dark to-cream">
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
      </section> */}

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

          <div className="partner-ticker" aria-label="Strategic partners">
            <div className="partner-ticker-track">
              {partners.map((partner) => (
                <div key={partner.name} className="partner-ticker-item">
                  <ImageWithFallback
                    src={partner.image}
                    alt={partner.name}
                    className="partner-ticker-logo"
                  />
                </div>
              ))}
              {partners.map((partner) => (
                <div key={`${partner.name}-dup`} className="partner-ticker-item" aria-hidden="true">
                  <ImageWithFallback
                    src={partner.image}
                    alt=""
                    className="partner-ticker-logo"
                  />
                </div>
              ))}
            </div>
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
