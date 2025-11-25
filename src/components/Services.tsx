import { ImageWithFallback } from './figma/ImageWithFallback';
import { Package, TestTube, Truck, GraduationCap, DollarSign, BarChart, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router';
import { Button } from './ui/button';
import { motion } from 'motion/react';

export function Services() {
  const services = [
    {
      icon: Package,
      title: 'Cocoa Procurement',
      description: 'We purchase premium cocoa beans directly from farmers at competitive market rates with immediate payment.',
      features: [
        'Competitive pricing based on COCOBOD rates',
        'Immediate payment upon quality verification',
        'Flexible purchase quantities',
        'Quality-based pricing incentives',
      ],
      color: 'from-blue-500 to-blue-700',
    },
    {
      icon: TestTube,
      title: 'Quality Assessment',
      description: 'Expert quality control ensuring all cocoa meets Ghana and international export standards.',
      features: [
        'Professional grading and sorting',
        'Moisture content analysis',
        'Fermentation quality testing',
        'Bean count and size verification',
      ],
      color: 'from-cyan-500 to-cyan-700',
    },
    {
      icon: Truck,
      title: 'Storage & Logistics',
      description: 'Modern storage facilities with efficient logistics ensuring proper preservation and timely delivery.',
      features: [
        'Climate-controlled warehouses',
        'Proper ventilation systems',
        'Pest prevention measures',
        'Reliable transportation network',
      ],
      color: 'from-teal-500 to-teal-700',
    },
    {
      icon: GraduationCap,
      title: 'Farmer Training',
      description: 'Comprehensive programs to help farmers improve yields, quality, and adopt best practices.',
      features: [
        'Best farming practices workshops',
        'Post-harvest handling training',
        'Pest and disease management',
        'Sustainable farming methods',
      ],
      color: 'from-indigo-500 to-indigo-700',
    },
    {
      icon: DollarSign,
      title: 'Financial Support',
      description: 'Access to financial programs helping farmers invest in their farms and improve productivity.',
      features: [
        'Seasonal credit facilities',
        'Input financing programs',
        'Flexible repayment terms',
        'Financial literacy training',
      ],
      color: 'from-purple-500 to-purple-700',
    },
    {
      icon: BarChart,
      title: 'Market Intelligence',
      description: 'Stay informed with regular updates on cocoa market trends, prices, and industry developments.',
      features: [
        'Daily COCOBOD price updates',
        'Market trend analysis',
        'Export demand forecasts',
        'Industry news and insights',
      ],
      color: 'from-sky-500 to-sky-700',
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
      description: 'Bring your cocoa to our collection centers or arrange for convenient pickup service',
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
            src="https://images.unsplash.com/photo-1618743572100-a3933e759dd7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXJlaG91c2UlMjBhZ3JpY3VsdHVyZXxlbnwxfHx8fDE3NjM4MTUwMzJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Warehouse"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-700/80"></div>
        </motion.div>

        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-block mb-4 px-6 py-2 bg-blue-500/20 backdrop-blur-sm rounded-full border border-blue-400/30"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <span className="text-blue-200">What We Offer</span>
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
            className="text-xl md:text-2xl text-blue-100"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Comprehensive solutions for cocoa farmers and traders
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl mb-4 text-blue-900">What We Offer</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              End-to-end services supporting cocoa farmers and ensuring premium quality
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-blue-100"
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

                  <h3 className="mb-3 text-blue-900">{service.title}</h3>
                  <p className="text-gray-600 text-sm mb-6 leading-relaxed">{service.description}</p>

                  <ul className="space-y-3">
                    {service.features.map((feature, fIndex) => (
                      <motion.li
                        key={fIndex}
                        className="text-sm text-gray-600 flex items-start"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: fIndex * 0.05 }}
                      >
                        <CheckCircle2 className="text-blue-600 mr-2 flex-shrink-0 mt-0.5" size={16} />
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
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl mb-4 text-blue-900">How It Works</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              A simple, transparent process ensuring quality and fair compensation
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8 relative">
            {/* Connecting Line (hidden on mobile) */}
            <div className="hidden md:block absolute top-16 left-0 right-0 h-1 bg-gradient-to-r from-blue-200 via-blue-400 to-blue-600 transform translate-y-8" 
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
                  className="w-32 h-32 bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl relative"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="text-4xl text-white">{step.number}</span>
                  
                  {/* Pulse Effect */}
                  <motion.div
                    className="absolute inset-0 bg-blue-400 rounded-2xl"
                    initial={{ opacity: 0.5, scale: 1 }}
                    animate={{ opacity: 0, scale: 1.2 }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </motion.div>

                <h3 className="mb-3 text-blue-900">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white relative overflow-hidden">
        {/* Animated Background Pattern */}
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

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl mb-4">Why Partner With Adikanfo?</h2>
            <p className="text-blue-100 max-w-2xl mx-auto text-lg">
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
                <p className="text-blue-100 leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl mb-6 text-blue-900">Ready to Get Started?</h2>
            <p className="text-gray-600 text-xl mb-10">
              Join our network of satisfied farmers and experience the Adikanfo difference.
            </p>
            <Link to="/contact">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-xl px-8 py-6 text-lg">
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
