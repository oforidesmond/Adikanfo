import { ImageWithFallback } from './figma/ImageWithFallback';
import { Award, Target, Heart, Globe, Handshake, TrendingUp, Facebook, Linkedin, Twitter } from 'lucide-react';
import { motion } from 'motion/react';

export function About() {
  const values = [
    {
      icon: Heart,
      title: 'Integrity',
      description: 'We conduct business with honesty, transparency, and ethical practices in all our dealings with farmers and partners.',
    },
    {
      icon: Target,
      title: 'Excellence',
      description: 'We maintain the highest quality standards in cocoa procurement, processing, and customer service delivery.',
    },
    {
      icon: Globe,
      title: 'Sustainability',
      description: 'Committed to environmentally responsible practices and sustainable farming that protects our future.',
    },
    {
      icon: Handshake,
      title: 'Partnership',
      description: 'Building long-term relationships based on mutual respect, trust, and fair trade principles.',
    },
  ];

  const timeline = [
    {
      year: '2013',
      title: 'Foundation',
      description: 'Adikanfo Commodities was established with a vision to transform cocoa trading in Ghana.',
    },
    {
      year: '2016',
      title: 'Operational License',
      description: 'Obtained operational license to purchase cocoa in Ghana on October 6, 2016, under Ghana Cocoa Board Law 1984 (P.N.D.C Law 81 S.4(6)), marking a major milestone.',
    },
    {
      year: '2018',
      title: 'Expansion',
      description: 'Expanded operations to cover major cocoa-growing regions across Ghana.',
    },
    {
      year: '2020',
      title: 'Digital Innovation',
      description: 'Launched digital payment systems for faster, more transparent farmer payments.',
    },
    {
      year: '2023',
      title: 'Sustainability Initiative',
      description: 'Launched comprehensive farmer training and sustainability programs.',
    },
    {
      year: '2025',
      title: 'Industry Leader',
      description: 'Recognized as one of Ghana\'s leading licensed cocoa buying companies.',
    },
  ];

  const team = [
    {
      name: 'Theophilus Agyare Asare',
      role: 'Co-Founder and Managing Director',
      image: '/number1.jpg',
      socials: {
        facebook: 'https://facebook.com',
        linkedin: 'https://linkedin.com',
        twitter: 'https://twitter.com',
      },
    },
    {
      name: 'Emmanuel Yorke',
      role: 'Co-Founder and Deputy Managing Director',
      image: '/number2.jpg',
      socials: {
        facebook: 'https://facebook.com',
        linkedin: 'https://linkedin.com',
        twitter: 'https://twitter.com',
      },
    },
    {
      name: 'Charles Ken Adu Boahen',
      role: 'IT Manager',
      image: '/number3.jpg',
      socials: {
        facebook: 'https://facebook.com',
        linkedin: 'https://linkedin.com',
        twitter: 'https://twitter.com',
      },
    },
    {
      name: 'Frederick Mensah',
      role: 'Finance Manager',
      image: '/number4.jpg',
      socials: {
        facebook: 'https://facebook.com',
        linkedin: 'https://linkedin.com',
        twitter: 'https://twitter.com',
      },
    },
    {
      name: 'Vida Ayorkor Laryea',
      role: 'HR Manager',
      image: '/number5.jpg',
      socials: {
        facebook: 'https://facebook.com',
        linkedin: 'https://linkedin.com',
        twitter: 'https://twitter.com',
      },
    },
    {
      name: 'Theresa Amaning',
      role: 'Accounts Manager',
      image: '/number6.jpg',
      socials: {
        facebook: 'https://facebook.com',
        linkedin: 'https://linkedin.com',
        twitter: 'https://twitter.com',
      },
    },
    {
      name: 'Aboagyewaa Ceasar-Wood',
      role: 'Research Manager',
      image: '/number7.jpg',
      socials: {
        facebook: 'https://facebook.com',
        linkedin: 'https://linkedin.com',
        twitter: 'https://twitter.com',
      },
    },
    {
      name: 'Daniel Osei Nkrumah',
      role: 'Sustainability Manager',
      image: '/number8.jpg',
      socials: {
        facebook: 'https://facebook.com',
        linkedin: 'https://linkedin.com',
        twitter: 'https://twitter.com',
      },
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
            src="https://images.unsplash.com/photo-1696343782507-a8188a2e4865?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnaGFuYSUyMGxhbmRzY2FwZSUyMGZpZWxkc3xlbnwxfHx8fDE3NjM4MTUyOTd8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Ghana landscape"
            className="w-full h-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(to right, rgba(26,17,13,0.88), rgba(45,33,28,0.4) 45%, transparent 60%), linear-gradient(to left, rgba(93,168,198,0.45), rgba(93,168,198,0) 55%)',
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
              <span className="text-cream/90">Our Story</span>
            </motion.div>
          </motion.div>

          <motion.h1
            className="text-5xl md:text-6xl mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            About Adikanfo Commodities
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-cream/90"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Building Ghana's cocoa industry, one farmer at a time
          </motion.p>
        </div>
      </section>

      {/* Our Story Section */}
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
                whileHover={{ scale: 1.05 }}
              >
                <span className="text-brand text-sm font-medium">Who We Are</span>
              </motion.div>

              <h2 className="text-4xl md:text-5xl mb-6 text-cocoa-900">Our Journey</h2>
              <p className="text-cocoa-700 mb-4 text-lg leading-relaxed">
                Founded in 2013, Adikanfo Commodities emerged with a clear mission: to create a transparent, 
                fair, and efficient cocoa buying system that benefits both farmers and the industry at large.
              </p>
              <p className="text-cocoa-700 mb-4 text-lg leading-relaxed">
                As a fully licensed buying company, we have built a 
                reputation for integrity, reliability, and excellence. Our name "Adikanfo" reflects our 
                commitment to being pioneers in ethical cocoa trading.
              </p>
              <p className="text-cocoa-700 text-lg leading-relaxed">
                Today, we work with over 3,000 smallholder farmers across Ghana's cocoa-growing regions, 
                processing thousands of tons of premium cocoa annually while maintaining the highest standards 
                of quality and sustainability.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1634303316622-33b4d64f1f65?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2NvYSUyMGJlYW5zJTIwY2hvY29sYXRlfGVufDF8fHx8MTc2MzgxNTAzMXww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Cocoa beans"
                  className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-gradient-to-b from-cream-dark to-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              className="bg-card p-10 rounded-2xl shadow-card-hover border border-cocoa-200"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -5, shadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)' }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-brand to-brand-deep rounded-xl flex items-center justify-center mb-6 shadow-card">
                <Target className="text-white" size={32} />
              </div>
              <h2 className="text-3xl mb-4 text-cocoa-900">Our Mission</h2>
              <p className="text-cocoa-700 text-lg leading-relaxed">
                Our primary mission is to purchase quality cocoa beans from the farmers and evacuate same to Ghana Cocoa Board (COCOBOD) and pay adequate compensation to the farmers
              </p>
            </motion.div>

            <motion.div
              className="bg-gradient-to-br from-cocoa-900 to-cocoa-950 p-10 rounded-2xl shadow-card-hover text-cream ring-1 ring-brand/30"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -5, shadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)' }}
            >
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-6">
                <TrendingUp className="text-white" size={32} />
              </div>
              <h2 className="text-3xl mb-4">Our Vision</h2>
              <p className="text-cream/85 text-lg leading-relaxed">
                Our vision is to be the  most  efficient and profitable licenced cocoa buying company in Ghana
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl mb-4 text-cocoa-900">Our Core Values</h2>
            <p className="text-cocoa-700 max-w-2xl mx-auto text-lg">
              The principles that guide our business and shape our relationships
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="text-center group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <motion.div
                  className="w-20 h-20 bg-gradient-to-br from-brand to-brand-deep rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-card"
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  <value.icon className="text-white" size={36} />
                </motion.div>
                <h3 className="mb-3 text-cocoa-900">{value.title}</h3>
                <p className="text-cocoa-700 text-sm leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 bg-gradient-to-b from-cream-dark to-cream">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl mb-4 text-cocoa-900">Our Journey</h2>
            <p className="text-cocoa-700 max-w-2xl mx-auto text-lg">
              Milestones that shaped our company
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-cocoa-200"></div>

            {timeline.map((item, index) => (
              <motion.div
                key={index}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                  <motion.div
                    className="bg-card p-6 rounded-xl shadow-card border border-cocoa-200"
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="text-brand font-medium mb-2">{item.year}</div>
                    <h3 className="text-cocoa-900 mb-2">{item.title}</h3>
                    <p className="text-cocoa-700 text-sm">{item.description}</p>
                  </motion.div>
                </div>

                {/* Center Dot */}
                <motion.div
                  className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-brand rounded-full border-4 border-cream shadow-card z-10"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 + 0.3 }}
                />

                <div className="w-5/12"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl mb-4 text-cocoa-900">Our Team</h2>
            <p className="text-cocoa-700 max-w-2xl mx-auto text-lg">
              Adikanfo Commodities Limited has resourceful and dynamic management team which is committed to the realization of the vision and mission of the company. They have rich experiences in the cocoa industry
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                className="bg-gradient-to-br from-cream-dark to-card p-6 rounded-2xl border border-cocoa-200 text-center shadow-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10, shadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)' }}
              >
                <div className="w-full h-64 mb-6 overflow-hidden rounded-xl">
                  <ImageWithFallback
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-cocoa-900">{member.name}</h3>
                <p className="text-brand font-medium">{member.role}</p>

                <div className="flex items-center justify-center gap-4 mt-6">
                  <a
                    href={member.socials.facebook}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${member.name} Facebook`}
                    className="p-2 rounded-full bg-cocoa-100 text-brand hover:bg-brand-muted transition"
                  >
                    <Facebook size={18} />
                  </a>
                  <a
                    href={member.socials.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${member.name} LinkedIn`}
                    className="p-2 rounded-full bg-cocoa-100 text-brand hover:bg-brand-muted transition"
                  >
                    <Linkedin size={18} />
                  </a>
                  <a
                    href={member.socials.twitter}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${member.name} Twitter`}
                    className="p-2 rounded-full bg-cocoa-100 text-brand hover:bg-brand-muted transition"
                  >
                    <Twitter size={18} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-24 bg-gradient-to-br from-cocoa-950 via-cocoa-900 to-cocoa-950 text-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl mb-4">Licenses & Certifications</h2>
            <p className="text-cream/85 max-w-2xl mx-auto text-lg">
              Fully compliant and certified to the highest standards
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { title: 'COCOBOD Licensed', desc: 'Officially licensed under Ghana Cocoa Board Law 1984 (P.N.D.C Law 81 S.4(6))' },
              { title: 'Quality Certified', desc: 'International Quality Standards' },
              { title: 'Fair Trade', desc: 'Committed to Fair Trade Practices' },
            ].map((cert, index) => (
              <motion.div
                key={index}
                className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl text-center border border-white/20"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.15)' }}
              >
                <motion.div
                  className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <Award className="text-white" size={36} />
                </motion.div>
                <h3 className="mb-2">{cert.title}</h3>
                <p className="text-cream/75 text-sm">{cert.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
