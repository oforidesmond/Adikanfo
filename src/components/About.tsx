import { ImageWithFallback } from './figma/ImageWithFallback';
import {
  Award,
  Facebook,
  Handshake,
  Heart,
  Leaf,
  Lightbulb,
  Linkedin,
  Mail,
  MinusCircle,
  Phone,
  Scale,
  ShieldCheck,
  Target,
  TrendingUp,
  Twitter,
  Users,
  Zap,
} from 'lucide-react';
import { motion } from 'motion/react';

export function About() {
  const values = [
    {
      icon: Zap,
      title: 'Efficiency',
      description:
        'We operate with speed, precision and discipline along our supply chain. We ensure cocoa beans are purchased, graded, transported, and delivered in a timely manner to reduce post-harvest losses, improve turnaround times and maintain reliable performance to our partners.',
    },
    {
      icon: ShieldCheck,
      title: 'Accountability',
      description:
        'We safeguard every bag of cocoa and take ownership of our actions, decisions, and outcomes. This, we do to ensure transparency, reliability, and trust across our operations with strict adherence to regulatory and contractual obligations.',
    },
    {
      icon: Scale,
      title: 'Integrity',
      description:
        'We uphold honesty and fairness in all our operations to build trust and confidence with our stakeholders. Our decisions are a reflection of ethical principles rather than short-term gains.',
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description:
        'We foster a culture of creativity, continuous improvement, and forward-thinking solutions to keep us competitive and relevant in a rapidly changing market.',
    },
    {
      icon: Heart,
      title: 'Commitment',
      description: 'We build enduring relationships with farmers and partners based on trust, loyalty, and mutual success.',
    },
    {
      icon: MinusCircle,
      title: 'Neutrality',
      description:
        'We conduct our business impartially, ensuring equal opportunity and non-discriminatory purchasing practices for all farmers and stakeholders.',
    },
    {
      icon: Users,
      title: 'Inclusive Growth',
      description:
        'We commit to expand our business in ways that benefits all our stakeholders including farmers, employees and communities. Our success is measured by equity, diversity and shared prosperity.',
    },
    {
      icon: Handshake,
      title: 'Partnership',
      description:
        'We thrive on long term partnerships by working closely with stakeholders including partners and regulatory authorities to promote resilience, transparency, and sustainable value for all.',
    },
    {
      icon: Leaf,
      title: 'Responsibility',
      description:
        'Our operations are conducted with a strong sense of responsibility toward our employees, partners, communities, and the environment. We maintain safe working conditions, and implement practices that protect natural resources, reduce environmental impact, and support sustainable operations across our supply chain.',
    },
  ];

  const timeline = [
    {
      year: '2016',
      title: 'Foundation & Licensing',
      description: 'Licensed by the Ghana Cocoa Board on October 3, 2016, marking the start of ACL’s operations as a Licensed Buying Company.',
    },
    {
      year: '2017',
      title: 'Early Operations',
      description: 'Began operations with 4,303.31 tonnes, building a strong foundation through disciplined sourcing.',
    },
    {
      year: '2019',
      title: 'Growth & Expansion',
      description: 'Expanded across key cocoa-growing regions, strengthening farmer relationships and operational reach.',
    },
    {
      year: '2021',
      title: 'Market Position',
      description: 'Reached a peak of 21,214 metric tonnes.',
    },
    {
      year: '2022',
      title: 'Operational Excellence',
      description: 'Achieved steady growth through efficiency, strong governance, and consistent quality delivery.',
    },
    {
      year: '2023',
      title: 'Expansion',
      description: 'Expanded with department for sustainability and sustainable sourcing. Started with 500 MT of RA Certified Beans',
    },
    {
      year: '2025',
      title: 'Market Position',
      description: 'Achieved a 3.28% market share for internal cocoa market.',
    },
    {
      year: 'Today',
      title: 'Sustainability & Industry Commitment',
      description: 'Promoting sustainable cocoa production through ESG practices as a member of LICOBAG and the World Cocoa Foundation.',
    },
  ];

  const team = [
      {
      name: 'Emmanuel Yorke',
      role: 'Managing Director',
      image: '/number2.jpg',
      socials: {
        facebook: 'https://facebook.com',
        linkedin: 'https://linkedin.com',
        twitter: 'https://twitter.com',
      },
    },
    {
      name: 'Kwadwo Agyapong Asare',
      role: 'Deputy Managing Director',
      image: '/number1.jpg',
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
      name: 'Charles Adu Boahen',
      role: 'Information Systems Manager',
      image: '/number3.jpg',
      socials: {
        facebook: 'https://facebook.com',
        linkedin: 'https://linkedin.com',
        twitter: 'https://twitter.com',
      },
    },
    {
      name: 'Theresa Amaning',
      role: 'Deputy Finance Manager',
      image: '/number6.jpg',
      socials: {
        facebook: 'https://facebook.com',
        linkedin: 'https://linkedin.com',
        twitter: 'https://twitter.com',
      },
    },
    {
      name: 'Vida Ayorkor Laryea',
      role: 'Human Resource Manager',
      image: '/number5.jpg',
      socials: {
        facebook: 'https://facebook.com',
        linkedin: 'https://linkedin.com',
        twitter: 'https://twitter.com',
      },
    },
    {
      name: 'Bampo Koranteng',
      role: 'Risk & Regulatory Compliance Manager',
      image: '/number8.jpg',
      socials: {
        facebook: 'https://facebook.com',
        linkedin: 'https://linkedin.com',
        twitter: 'https://twitter.com',
      },
    },
    {
      name: 'Daniel Osei Nkrumah',
      role: 'Sustainability Manager',
      image: '/number10.jpg',
      socials: {
        facebook: 'https://facebook.com',
        linkedin: 'https://linkedin.com',
        twitter: 'https://twitter.com',
      },
    },
    {
      name: 'Aboagyewaa Caezar-Wood',
      role: 'Marketing & Communications Manager',
      image: '/number7.jpg',
      socials: {
        facebook: 'https://facebook.com',
        linkedin: 'https://linkedin.com',
        twitter: 'https://twitter.com',
      },
    },
    {
      name: 'Charles Sintim',
      role: 'Port Manager, Tema',
      image: '/number11.jpg',
      socials: {
        facebook: 'https://facebook.com',
        linkedin: 'https://linkedin.com',
        twitter: 'https://twitter.com',
      },
    },
    {
      name: 'Henry Cornelius Bawa',
      role: 'Port Manager, Takoradi',
      image: '/number12.jpg',
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
            src="/about-us-hero.jpg"
            alt="Ghana landscape"
            className="w-full h-[40rem] object-cover"
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
            A Decade of Growth, Rooted in Heritage, Sustaining the Future.
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
               Adikanfo Commodities Ltd (ACL), an indigenous Ghanaian-owned Licensed Buying Company, was officially licensed by the Ghana Cocoa Board in October 2016 to operate within Ghana’s internal cocoa market.
              </p>
              <p className="text-cocoa-700 mb-4 text-lg leading-relaxed">
                Since its inception, ACL has grown into a reliable and respected industry player, driven by strong governance, disciplined operations, and effective stakeholder relationships. The company specializes in sourcing high-quality, well-fermented cocoa beans from farmers for delivery to the Cocoa Marketing Company (CMC) Ltd for export.
              </p>
              <p className="text-cocoa-700 text-lg leading-relaxed">
                From an initial purchase of 4,303.31 tonnes, ACL has expanded significantly, reaching a peak of 21,214 tonnes and securing a 3.17% market share in the 2024/2025 crop season.
              </p>
              <br />
              <p className="text-cocoa-700 text-lg leading-relaxed">
                Our name "Adikanfo" reflects our commitment to being pioneers in ethical cocoa trading.
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
                  src="/our-journey.png"
                  alt="Our Journey"
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
              whileHover={{ y: -5, boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)' }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-brand to-brand-deep rounded-xl flex items-center justify-center mb-6 shadow-card">
                <Target className="text-white" size={32} />
              </div>
              <h2 className="text-3xl mb-4 text-cocoa-900">Our Mission</h2>
              <p className="text-cocoa-700 text-lg leading-relaxed">
                To responsibly source and deliver high-quality cocoa through transparent practices that empower
                farmers, protect the environment and promote community well-being and shared prosperity.
              </p>
            </motion.div>

            <motion.div
              className="bg-gradient-to-br from-cocoa-900 to-cocoa-950 p-10 rounded-2xl shadow-card-hover text-cream ring-1 ring-brand/30"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -5, boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)' }}
            >
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-6">
                <TrendingUp className="text-white" size={32} />
              </div>
              <h2 className="text-3xl mb-4">Our Vision</h2>
              <p className="text-cream/85 text-lg leading-relaxed">
                To be the most efficient licensed buying company that demonstrates excellence in sustainable
                sourcing.
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

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
              Our resourceful and dynamic management team, with rich experience in the cocoa industry, is committed to the realization of our mission and vision.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                className="group relative h-96 overflow-hidden rounded-2xl border border-cocoa-200 shadow-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)' }}
              >
                <ImageWithFallback
                  src={member.image}
                  alt={member.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-cocoa-950/90 via-cocoa-950/35 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5 text-left">
                  <h3 className="text-lg font-semibold text-white leading-tight">{member.name}</h3>
                  <p className="mt-1 text-sm text-cream/85">{member.role}</p>
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
              { title: 'Incorporated Enterprise', desc: 'Officially registered under the Ghana Companies Act, 1961 (Act 179).', image: '/coat_arms.png' },
              { title: 'COCOBOD Licensed', desc: 'Fully compliant with Ghana Cocoa Board regulations and operational standards.', image: '/coco.png' },
              { title: 'LICOBAG Member', desc: 'Proud member of the Licensed Cocoa Buyers Association of Ghana.', image: '/partner6.png' },
              { title: 'WCF Affiliate', desc: 'Active member of the World Cocoa Foundation, committed to global cocoa sustainability.', image: '/world_cocoa.jpg' },
              { title: 'Rain Forest Alliance', desc: 'Committed to sustainable and responsible cocoa production.', image: '/partner4.png' },
              { title: 'Fair Trade', desc: 'Committed to Fair Trade Practices', image: '/partner5.svg' },
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
                  className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4 overflow-hidden"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <ImageWithFallback
                    src={cert.image}
                    alt={cert.title}
                    className="w-16 h-16 object-contain"
                  />
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
