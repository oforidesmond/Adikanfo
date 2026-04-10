import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { useState } from 'react';
import { motion } from 'motion/react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      alert('Thank you for your message! We will get back to you within 24 hours.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
      setIsSubmitting(false);
    }, 1000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Visit Us',
      details: ['Dr. Tagoe Lane GA -375-9289 East Legon', 'Greater Accra'],
      color: 'from-brand to-brand-deep',
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: ['+233 (0) 307 010 132', '+233 (0) 302 556 680'],
      color: 'from-brand-deep to-cocoa-800',
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: ['info@adikanfoghana.com', 'sales@adikanfoghana.com'],
      color: 'from-cocoa-800 to-cocoa-950',
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Mon - Fri: 8:00 AM - 5:00 PM', 'Sat: 9:00 AM - 2:00 PM'],
      color: 'from-brand to-cocoa-900',
    },
  ];

  const collectionCenters = [
    { region: 'Ashanti Region', location: 'Kumasi Collection Center' },
    { region: 'Western Region', location: 'Sefwi Wiawso Center' },
    { region: 'Eastern Region', location: 'Koforidua Center' },
    { region: 'Central Region', location: 'Cape Coast Center' },
    { region: 'Brong-Ahafo', location: 'Sunyani Center' },
    { region: 'Volta Region', location: 'Ho Collection Center' },
  ];

  const faqs = [
    {
      question: 'What documents do I need to sell cocoa?',
      answer: 'You need a valid farmer identification card, land ownership documents or tenancy agreement, and for first-time sellers, proof of residence.',
    },
    {
      question: 'How quickly will I receive payment?',
      answer: 'We offer immediate payment upon successful quality verification. Payments can be made via cash, mobile money (MTN, Vodafone, AirtelTigo), or bank transfer.',
    },
    {
      question: 'What quality standards do you require?',
      answer: 'We accept cocoa beans that meet COCOBOD standards: properly fermented, dried to 7-8% moisture content, free from mold and foreign materials, with good bean size.',
    },
    {
      question: 'Do you offer training for farmers?',
      answer: 'Yes! We conduct regular training on best farming practices, post-harvest handling, and quality improvement. Contact us to join our next program.',
    },
  ];

  return (
    <div>
      {/* Hero — partnership & origin story */}
      <section className="relative min-h-[420px] md:min-h-[480px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1740741703636-1680d0c0f0a0?auto=format&fit=crop&w=2000&q=80"
            alt="Cocoa farmers and communities we partner with across Ghana"
            className="w-full h-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(100deg, rgba(26,17,13,0.9) 0%, rgba(45,33,28,0.72) 42%, rgba(93,168,198,0.28) 100%), linear-gradient(to top, rgba(26,17,13,0.75) 0%, transparent 50%)',
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full text-center md:text-left">
          <div className="max-w-3xl mx-auto md:mx-0">
            <motion.span
              className="inline-block mb-5 px-5 py-2 rounded-full bg-brand-muted backdrop-blur-md border border-brand/40 text-cream text-sm"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              We're here to help
            </motion.span>
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl mb-5 text-cream font-medium leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.08 }}
            >
              Let's build something lasting together
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl text-cream/90 max-w-2xl mx-auto md:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.16 }}
            >
              Questions about selling cocoa, partnerships, or our programs — reach out. Fair pricing and transparent relationships start with a conversation.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 bg-gradient-to-b from-cream to-cream-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                className="bg-card rounded-2xl p-8 text-center shadow-card hover:shadow-card-hover transition-all duration-300 border border-cocoa-200"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <motion.div
                  className={`w-16 h-16 bg-gradient-to-br ${info.color} rounded-xl flex items-center justify-center mx-auto mb-6 shadow-lg`}
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <info.icon className="text-white" size={28} />
                </motion.div>
                <h3 className="mb-4 text-cocoa-900">{info.title}</h3>
                <div className="space-y-2">
                  {info.details.map((detail, dIndex) => (
                    <p key={dIndex} className="text-cocoa-700 text-sm">
                      {detail}
                    </p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Contact Form and Info */}
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-card rounded-2xl shadow-card-hover p-8 border border-cocoa-200">
                <h2 className="text-3xl mb-6 text-cocoa-900">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                  >
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Mensah"
                      className="mt-1"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                  >
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className="mt-1"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                  >
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+233 24 123 4567"
                      className="mt-1"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                  >
                    <Label htmlFor="subject">Subject *</Label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Partnership inquiry"
                      className="mt-1"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                  >
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your inquiry..."
                      rows={5}
                      className="mt-1"
                    />
                  </motion.div>

                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-brand to-brand-deep hover:from-brand-hover hover:to-brand-deep shadow-card text-white"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center justify-center">
                          <motion.div
                            className="w-4 h-4 border-2 border-white border-t-transparent rounded-full mr-2"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                          />
                          Sending...
                        </span>
                      ) : (
                        <span className="flex items-center justify-center">
                          <Send size={18} className="mr-2" />
                          Send Message
                        </span>
                      )}
                    </Button>
                  </motion.div>
                </form>
              </div>
            </motion.div>

            {/* Additional Information */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              {/* Collection Centers */}
              <motion.div
                className="bg-gradient-to-br from-cocoa-900 to-cocoa-950 rounded-2xl p-8 text-cream shadow-card-hover ring-1 ring-brand/25"
                whileHover={{ scale: 1.02 }}
              >
                <h3 className="text-2xl mb-6">Collection Centers</h3>
                <p className="text-cream/80 mb-6">
                  We have multiple collection centers across Ghana for your convenience:
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {collectionCenters.map((center, index) => (
                    <motion.div
                      key={index}
                      className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20"
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                      whileHover={{ backgroundColor: 'rgba(255, 255, 255, 0.15)' }}
                    >
                      <p className="text-sm text-brand mb-1">{center.region}</p>
                      <p className="text-sm">{center.location}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Emergency Contact */}
              <motion.div
                className="bg-card rounded-2xl p-8 shadow-card border border-cocoa-200"
                whileHover={{ scale: 1.02 }}
              >
                <h3 className="mb-4 text-cocoa-900">Need Immediate Assistance?</h3>
                <p className="text-cocoa-700 text-sm mb-6">
                  For urgent matters or immediate support, please call our hotline:
                </p>
                <motion.div
                  className="bg-gradient-to-r from-cream-dark to-cocoa-100 p-6 rounded-xl text-center border border-cocoa-200"
                  whileHover={{ scale: 1.05 }}
                >
                  <p className="text-3xl text-brand mb-2 font-medium">+233 (0) 307 010 132</p>
                  <p className="text-sm text-cocoa-700">Available Monday - Saturday</p>
                </motion.div>
              </motion.div>

              {/* Map Placeholder */}
              <motion.div
                className="bg-cream-dark rounded-2xl h-64 flex items-center justify-center border border-cocoa-200 overflow-hidden"
                whileHover={{ scale: 1.02 }}
              >
                <div className="text-center text-cocoa-600">
                  <MapPin size={48} className="mx-auto mb-2" />
                  <p>Head Office - Accra, Ghana</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl mb-4 text-cocoa-900">Frequently Asked Questions</h2>
            <p className="text-cocoa-700 text-lg">Quick answers to common questions</p>
          </motion.div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="bg-card p-8 rounded-2xl border border-cocoa-200 shadow-card hover:shadow-card-hover transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <h3 className="mb-3 text-cocoa-900">{faq.question}</h3>
                <p className="text-cocoa-700 leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
