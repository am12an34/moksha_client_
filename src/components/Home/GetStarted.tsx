import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import Container from '~common/Container'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import styles from './styles.module.css'
import { ChevronDown } from 'lucide-react'

// Selected FAQs for quick access
const quickFaqs = [
  {
    question: 'Why is registration necessary?',
    answer:
      "Registering on the website will generate a unique Moksha ID. This ID is essential for participation or entry to all the activities going on during Moksha. If you want to register for a competition or collect concert passes, you'll need to have a Moksha ID."
  },
  {
    question: 'How do I register for competitions at Moksha?',
    answer:
      'Registration for the competitions can be done through the official website of Moksha by filling in your personal details.'
  },
  {
    question: 'Is the cultural fest open to students from other colleges and universities?',
    answer:
      "It is open to all the students bearing the Moksha ticket. No entry will be provided to anyone who fails to provide it during the entry, even if he/she is a student of NITA."
  }
];

// FAQ Item Component
const FaqItem = ({ faq, index }: { faq: { question: string; answer: string }, index: number }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      className="mb-3 last:mb-0 overflow-hidden rounded-lg bg-gradient-to-r from-black/40 to-black/60 backdrop-blur-sm border border-white/5 hover:border-green-500/20 transition-all duration-300"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      whileHover={{ boxShadow: '0 4px 20px rgba(74, 222, 128, 0.1)' }}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center p-4 text-left group"
        aria-expanded={isOpen}
      >
        <h3 className="text-lg font-medium text-white group-hover:text-green-400 transition-colors duration-300">{faq.question}</h3>
        <motion.div
          className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center ${isOpen ? 'bg-gradient-to-br from-green-500 to-green-700' : 'bg-gradient-to-br from-darkBrown/70 to-brown/70 border border-green-900/50'}`}
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <ChevronDown className={`w-4 h-4 ${isOpen ? 'text-white' : 'text-green-400'}`} />
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-4 pb-4 text-gray-300 border-t border-white/5 pt-2">
              {faq.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default function GetStarted() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.5 });

  // Animated leaf elements
  const leafElements = [
    { rotation: 15, delay: 0, xOffset: -20 },
    { rotation: -10, delay: 1.5, xOffset: 25 },
    { rotation: 5, delay: 0.8, xOffset: -15 },
    { rotation: -20, delay: 2.2, xOffset: 30 },
    { rotation: 25, delay: 1.2, xOffset: -25 },
    { rotation: -15, delay: 0.5, xOffset: 15 },
  ];

  return (
    <section ref={sectionRef} className="py-16 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Mystical light beams */}
        <div className="absolute inset-0 opacity-30">
          {Array.from({ length: 8 }).map((_, idx) => (
            <motion.div
              key={`beam-${idx}`}
              className="absolute h-full w-1 bg-gradient-to-t from-transparent via-amber-300/30 to-transparent"
              style={{
                left: `${10 + idx * 12}%`,
                transform: `rotate(${-10 + idx * 3}deg)`,
                transformOrigin: 'bottom center',
              }}
              animate={{
                opacity: [0.1, 0.3, 0.1],
                height: ['100%', '120%', '100%'],
              }}
              transition={{
                duration: 8 + idx,
                repeat: Infinity,
                ease: "easeInOut",
                delay: idx * 0.5,
              }}
            />
          ))}
        </div>

        {/* Floating leaves */}
        {leafElements.map((leaf, idx) => (
          <motion.div
            key={`leaf-${idx}`}
            className="absolute w-8 h-8"
            style={{
              top: '-20px',
              left: `${20 + idx * 15}%`,
            }}
            initial={{ y: -100, x: leaf.xOffset, rotate: leaf.rotation }}
            animate={{
              y: ['100vh'],
              rotate: [leaf.rotation, leaf.rotation + 20, leaf.rotation - 20, leaf.rotation],
              x: [leaf.xOffset, leaf.xOffset + 30, leaf.xOffset - 30, leaf.xOffset],
            }}
            transition={{
              duration: 15 + Math.random() * 10,
              repeat: Infinity,
              ease: "linear",
              delay: leaf.delay,
            }}
          >
            <svg viewBox="0 0 24 24" className="w-full h-full text-green-500/40">
              <path
                fill="currentColor"
                d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z"
              />
            </svg>
          </motion.div>
        ))}

        {/* Glowing orbs */}
        {Array.from({ length: 6 }).map((_, idx) => (
          <motion.div
            key={`orb-${idx}`}
            className="absolute rounded-full blur-md"
            style={{
              width: `${Math.random() * 100 + 50}px`,
              height: `${Math.random() * 100 + 50}px`,
              background: idx % 3 === 0
                ? 'rgba(126, 87, 194, 0.15)'
                : idx % 3 === 1
                  ? 'rgba(38, 166, 154, 0.15)'
                  : 'rgba(255, 171, 64, 0.15)',
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <Container>
        {/* Main content card with nature-inspired border */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="relative text-center max-w-4xl mx-auto overflow-hidden"
        >
          {/* Animated border glow */}
          <motion.div
            className="absolute -inset-1 bg-gradient-to-r from-green-400/30 via-amber-300/30 to-purple-500/30 rounded-xl blur-lg"
            animate={{
              background: [
                'linear-gradient(90deg, rgba(74, 222, 128, 0.3) 0%, rgba(252, 211, 77, 0.3) 50%, rgba(168, 85, 247, 0.3) 100%)',
                'linear-gradient(180deg, rgba(74, 222, 128, 0.3) 0%, rgba(252, 211, 77, 0.3) 50%, rgba(168, 85, 247, 0.3) 100%)',
                'linear-gradient(270deg, rgba(74, 222, 128, 0.3) 0%, rgba(252, 211, 77, 0.3) 50%, rgba(168, 85, 247, 0.3) 100%)',
                'linear-gradient(360deg, rgba(74, 222, 128, 0.3) 0%, rgba(252, 211, 77, 0.3) 50%, rgba(168, 85, 247, 0.3) 100%)',
              ],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          />

          {/* Content container */}
          <div className="relative bg-gradient-to-br from-black/70 via-black/50 to-black/60 backdrop-blur-md rounded-2xl p-10 border border-green-500/10 shadow-2xl shadow-green-900/20 z-10 overflow-hidden">
            {/* Decorative background patterns */}
            <div className="absolute inset-0 opacity-10 z-0 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(74,222,128,0.1),transparent_40%)]" />
              <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,rgba(252,211,77,0.1),transparent_40%)]" />
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMjIiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djZoNnYtNmgtNnptNiA2djZoLTZ2LTZoNnptLTYtMTJ2NmgtNnYtNmg2em0tNiA2djZoLTZ2LTZoNnptMTIgMHY2aDZWNDBoLTZ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20" />
            </div>
            {/* Decorative elements */}
            <div className="absolute top-6 left-6 w-16 h-16 opacity-10">
              <svg viewBox="0 0 24 24" className="w-full h-full text-green-400">
                <path fill="currentColor" d="M12,3C16.97,3 21,7.03 21,12C21,16.97 16.97,21 12,21C7.03,21 3,16.97 3,12C3,7.03 7.03,3 12,3M12,5C8.14,5 5,8.14 5,12C5,15.86 8.14,19 12,19C15.86,19 19,15.86 19,12C19,8.14 15.86,5 12,5M12,7C14.76,7 17,9.24 17,12C17,14.76 14.76,17 12,17C9.24,17 7,14.76 7,12C7,9.24 9.24,7 12,7M12,9C10.34,9 9,10.34 9,12C9,13.66 10.34,15 12,15C13.66,15 15,13.66 15,12C15,10.34 13.66,9 12,9Z" />
              </svg>
            </div>
            <div className="absolute bottom-6 right-6 w-20 h-20 opacity-10">
              <svg viewBox="0 0 24 24" className="w-full h-full text-amber-400">
                <path fill="currentColor" d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z" />
              </svg>
            </div>

            {/* Content wrapper with relative positioning */}
            <div className="relative z-10">

            {/* Title with cleaner animation */}
            <div className="relative mb-8 inline-block">
              {/* Static glow effect instead of animated */}
              <div className="absolute -inset-1 rounded-lg blur-md bg-gradient-to-r from-green-400/10 to-emerald-500/10 z-0"></div>

              <h2 className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600 font-[Orbitron] relative z-10">
                Begin Your Adventure
              </h2>

              {/* Subtle highlight animation that doesn't blur the text */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-green-400/10 to-transparent z-5 pointer-events-none"
                animate={{ x: ["-100%", "100%"] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              />
            </div>

            {/* Description with thematic styling */}
            <motion.p
              className='text-lg text-gray-200 mb-10 max-w-2xl mx-auto leading-relaxed backdrop-blur-sm py-3 px-6 rounded-lg bg-black/10 border border-white/5 shadow-inner'
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Step through the ancient gateway and enter the mystical realm of Erden! Discover enchanted{' '}
              <Link to='/events' className="text-green-400 hover:text-green-300 transition-colors font-medium underline decoration-green-500/30 underline-offset-2 hover:decoration-green-500/50">events</Link> and{' '}
              <Link to='/contests' className="text-amber-400 hover:text-amber-300 transition-colors font-medium underline decoration-amber-500/30 underline-offset-2 hover:decoration-amber-500/50">contests</Link> that await brave travelers in this land of wonder and magic.
            </motion.p>

            {/* Buttons with enhanced styling */}
            <motion.div
              className="flex flex-wrap justify-center gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <Link to='/events'>
                <motion.button
                  className="group relative px-8 py-4 bg-gradient-to-br from-green-600 to-green-800 rounded-full text-white font-medium
                  overflow-hidden shadow-xl shadow-green-900/30 border border-green-500/20 hover:border-green-500/40 transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {/* Button glow effect */}
                  <motion.span
                    className="absolute inset-0 bg-gradient-to-tr from-green-400/0 via-green-400/30 to-green-400/0"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.8 }}
                  />

                  {/* Icon and text */}
                  <span className="flex items-center gap-2">
                    <svg className="w-5 h-5" viewBox="0 0 24 24">
                      <path fill="currentColor" d="M12,10A2,2 0 0,0 10,12C10,13.11 10.9,14 12,14C13.11,14 14,13.11 14,12A2,2 0 0,0 12,10Z" />
                      <path fill="currentColor" d="M16.07,1.01C15.36,0.37 14.7,0 14.05,0C13.4,0 12.77,0.32 12.07,0.94L11.65,1.32L11.23,0.94C10.53,0.32 9.9,0 9.25,0C8.6,0 7.94,0.37 7.23,1.01L7.23,1.01C6.59,1.59 6.34,2.17 6.34,2.8C6.34,3.36 6.55,3.91 6.96,4.43L11.65,9.94L16.34,4.43C16.75,3.91 16.96,3.36 16.96,2.8C16.96,2.17 16.71,1.59 16.07,1.01M5,19V21H19V19H5M11.65,14.13L11.65,14.13C11.65,14.13 6.96,8.93 6.96,5.71C6.96,3.93 8.34,2.63 9.25,2.63C10.16,2.63 11.65,4.3 11.65,4.3C11.65,4.3 13.14,2.63 14.05,2.63C14.96,2.63 16.34,3.93 16.34,5.71C16.34,8.93 11.65,14.13 11.65,14.13Z" />
                    </svg>
                    <span>Explore Events</span>
                  </span>
                </motion.button>
              </Link>

              <Link to='/contests'>
                <motion.button
                  className="group relative px-8 py-4 bg-gradient-to-br from-amber-600 to-amber-800 rounded-full text-white font-medium
                  overflow-hidden shadow-xl shadow-amber-900/30 border border-amber-500/20 hover:border-amber-500/40 transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {/* Button glow effect */}
                  <motion.span
                    className="absolute inset-0 bg-gradient-to-tr from-amber-400/0 via-amber-400/30 to-amber-400/0"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.8 }}
                  />

                  {/* Icon and text */}
                  <span className="flex items-center gap-2">
                    <svg className="w-5 h-5" viewBox="0 0 24 24">
                      <path fill="currentColor" d="M18 2C17.1 2 16 3 16 4H8C8 3 6.9 2 6 2H2V11C2 12 3 13 4 13H6.2C6.6 15 7.9 16.7 11 17V19.1C8.8 19.3 8 20.4 8 21.7V22H16V21.7C16 20.4 15.2 19.3 13 19.1V17C16.1 16.7 17.4 15 17.8 13H20C21 13 22 12 22 11V2H18M6 11H4V4H6V11M20 11H18V4H20V11Z" />
                    </svg>
                    <span>Join Contests</span>
                  </span>
                </motion.button>
              </Link>
            </motion.div>

            {/* FAQ Section */}
            <motion.div
              className="mt-12 text-left"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <div className="flex items-center justify-center mb-8">
                <div className="h-px bg-gradient-to-r from-transparent via-green-500/30 to-transparent flex-grow"></div>
                <div className="relative px-4">
                  <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600 font-[Orbitron] relative z-10">Quick Guide</h3>
                  <div className="absolute -inset-1 rounded-full blur-md bg-green-500/10 z-0"></div>
                </div>
                <div className="h-px bg-gradient-to-r from-transparent via-green-500/30 to-transparent flex-grow"></div>
              </div>

              <div className="bg-gradient-to-br from-black/40 to-black/60 backdrop-blur-sm rounded-xl border border-white/10 p-5 shadow-lg shadow-green-900/10">
                {quickFaqs.map((faq, index) => (
                  <FaqItem key={index} faq={faq} index={index} />
                ))}

                <motion.div
                  className="mt-6 text-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.2 }}
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      to="/faqs"
                      className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-gradient-to-r from-green-600/30 to-green-800/30 hover:from-green-600/40 hover:to-green-800/40 border border-green-500/20 text-green-400 hover:text-green-300 transition-all duration-300 font-medium shadow-md shadow-green-900/10"
                    >
                    <span>View all FAQs</span>
                    <svg className="w-4 h-4" viewBox="0 0 24 24">
                      <path fill="currentColor" d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z" />
                    </svg>
                    </Link>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
