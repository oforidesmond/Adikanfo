import { useEffect, useState } from 'react';
import { Link } from 'react-router';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { CheckCircle, Shield, TrendingUp, Users, Award, Leaf, Clock, Globe } from 'lucide-react';
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
    }, 5000);
    return () => clearInterval(interval);
  }, [carouselApi]);

  const features = [
    {
      icon: Shield,
      title: 'COCOBOD Licensed',
      description: 'Officially licensed by the Ghana Cocoa Board with full regulatory compliance',
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
            <CarouselContent className="h-full">
              {heroImages.map((image) => (
                <CarouselItem key={image.src} className="p-0 h-[700px]">
                  <div className="h-full">
                    <img src={image.src} alt={image.alt} className="w-full h-full object-cover" />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex bg-white/50 text-blue-900 border-white/80 hover:bg-white/80" />
            <CarouselNext className="hidden md:flex bg-white/50 text-blue-900 border-white/80 hover:bg-white/80" />
          </Carousel>
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-blue-900/80 via-blue-800/70 to-transparent"></div>
        </motion.div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.div
                className="inline-block mb-4 px-4 py-2 bg-blue-500/20 backdrop-blur-sm rounded-full border border-blue-400/30"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <span className="text-blue-200 text-sm">Licensed by COCOBOD Ghana</span>
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
              className="text-xl md:text-2xl mb-8 text-blue-100"
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
                  <Button size="lg" className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-xl">
                    Become a Partner
                  </Button>
                </motion.div>
              </Link>
              <Link to="/services">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button size="lg" variant="outline" className="bg-white/10 border-white text-white hover:bg-white/20 backdrop-blur-sm">
                    Our Services
                  </Button>
                </motion.div>
              </Link>
            </motion.div>
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
      <section className="bg-gradient-to-r from-blue-700 via-blue-600 to-blue-700 text-white py-20">
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
                <div className="text-blue-100">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section with Stagger Animation */}
      <section className="py-24 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl mb-4 text-blue-900">Why Choose Adikanfo</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Combining traditional values with modern excellence to serve Ghana's cocoa industry
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-blue-100"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <motion.div
                  className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center mb-6 shadow-lg"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <feature.icon className="text-white" size={32} />
                </motion.div>
                <h3 className="mb-3 text-blue-900">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview with Image Animation */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                className="inline-block mb-4 px-4 py-2 bg-blue-100 rounded-full"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                <span className="text-blue-700 text-sm">Our Story</span>
              </motion.div>
              <h2 className="text-4xl md:text-5xl mb-6 text-blue-900">Empowering Ghana's Cocoa Farmers</h2>
              <p className="text-gray-600 mb-4 text-lg leading-relaxed">
                Adikanfo Commodities is a fully licensed cocoa buying company operating under COCOBOD regulations. 
                We are committed to creating sustainable value throughout the cocoa supply chain.
              </p>
              <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                Our mission is to provide farmers with competitive prices, reliable service, and the support they 
                need to thrive. We combine years of industry expertise with modern practices to ensure quality and fairness.
              </p>

              {/* Value Props */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {values.map((value, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-3 p-4 bg-blue-50 rounded-lg"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <value.icon className="text-white" size={20} />
                    </div>
                    <div>
                      <h4 className="text-sm text-blue-900 mb-1">{value.title}</h4>
                      <p className="text-xs text-gray-600">{value.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <Link to="/about">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
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
                className="absolute -top-8 -left-8 w-32 h-32 bg-blue-200 rounded-full opacity-50"
                animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
                transition={{ duration: 20, repeat: Infinity }}
              />
              <motion.div
                className="absolute -bottom-8 -right-8 w-40 h-40 bg-blue-300 rounded-full opacity-30"
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

      {/* CTA Section with Gradient Background */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900"></div>
        <motion.div
          className="absolute inset-0 opacity-10"
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{ duration: 20, repeat: Infinity, repeatType: 'reverse' }}
          style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
            backgroundSize: '60px 60px',
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl mb-6 text-white">Ready to Partner With Us?</h2>
            <p className="text-xl mb-10 text-blue-100 max-w-2xl mx-auto">
              Join thousands of farmers who trust Adikanfo Commodities for fair prices, quality service, and reliable partnerships.
            </p>
            <Link to="/contact">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50 shadow-2xl px-8 py-6 text-lg">
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
