import { useState, memo, useRef, useEffect } from 'react'
import { Helmet } from 'react-helmet'
import { ChevronDown, ChevronUp, Search, X } from 'lucide-react'
import { slugify } from '@arpansaha13/utils'
import Sheet from '~common/Sheet'
import Container from '~common/Container'
import faqs, { type Faq as FaqType } from '~/data/faqs'
import { motion, useInView, AnimatePresence } from 'framer-motion'



export function Component() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 })
  const [searchTerm, setSearchTerm] = useState('')
  const [filteredFaqs, setFilteredFaqs] = useState(faqs)
  const [activeCategory, setActiveCategory] = useState('all')

  // Extract unique categories from FAQs
  const categories = ['all', ...Array.from(new Set(faqs.map(faq => faq.category || 'general')))]

  // Filter FAQs based on search term and category
  useEffect(() => {
    const filtered = faqs.filter(faq => {
      const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesCategory = activeCategory === 'all' || faq.category === activeCategory
      return matchesSearch && matchesCategory
    })
    setFilteredFaqs(filtered)
  }, [searchTerm, activeCategory])

  return (
    <Container className="py-10">
      <Helmet>
        <title>Moksha | FAQs</title>
      </Helmet>

      <section className="markdown relative" id="moksha-faqs" ref={sectionRef}>
        {/* Background decorative elements */}
        <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
          {/* Animated light rays */}
          <div className="absolute inset-0 opacity-10">
            {Array.from({ length: 8 }).map((_, idx) => (
              <motion.div
                key={`ray-${idx}`}
                className="absolute h-full w-1 bg-gradient-to-t from-transparent via-green-300/30 to-transparent"
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

          {/* Glowing orbs */}
          {Array.from({ length: 4 }).map((_, idx) => (
            <motion.div
              key={`orb-${idx}`}
              className="absolute rounded-full blur-md"
              style={{
                width: `${Math.random() * 100 + 50}px`,
                height: `${Math.random() * 100 + 50}px`,
                background: idx % 3 === 0
                  ? 'rgba(47, 175, 116, 0.15)' // Green (#2FAF74)
                  : idx % 3 === 1
                    ? 'rgba(180, 195, 179, 0.15)' // Light green/coffee (#B4C3B3)
                    : 'rgba(52, 25, 13, 0.15)', // Coffee brown (#34190D)
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

        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-4xl sm:text-5xl font-extrabold text-center text-white mb-8 drop-shadow-lg font-[Orbitron] relative inline-block w-full"
              animate={{
                textShadow: [
                  '0 0 5px rgba(47, 175, 116, 0.5)',
                  '0 0 20px rgba(47, 175, 116, 0.8)',
                  '0 0 5px rgba(47, 175, 116, 0.5)'
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <motion.span
                className="absolute -inset-1 rounded-lg blur-sm bg-green-400/20 z-0"
                animate={{ opacity: [0.2, 0.5, 0.2] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.h1>

            {/* Search bar */}
            <motion.div
              className="relative max-w-2xl mx-auto mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search questions..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-5 py-3 pl-12 pr-10 bg-darkBrown/50 backdrop-blur-sm border border-green-900/50 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-green-500/50 focus:border-transparent transition-all duration-300"
                />
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-green-400">
                  <Search size={20} />
                </div>
                {searchTerm && (
                  <button
                    onClick={() => setSearchTerm('')}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                  >
                    <X size={18} />
                  </button>
                )}
              </div>
            </motion.div>

            {/* Category tabs */}
            <motion.div
              className="flex flex-wrap justify-center gap-2 mb-8"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              {categories.map((category) => (
                <motion.button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeCategory === category
                    ? 'bg-gradient-to-r from-green-600 to-green-800 text-white shadow-lg'
                    : 'bg-darkBrown/50 text-gray-300 hover:bg-darkBrown/70 border border-green-900/30'}`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </motion.button>
              ))}
            </motion.div>

            {/* Results count */}
            {searchTerm && (
              <motion.p
                className="text-center text-gray-400 mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                Found {filteredFaqs.length} result{filteredFaqs.length !== 1 ? 's' : ''} for "{searchTerm}"
              </motion.p>
            )}
          </motion.div>

          <motion.div
            className="space-y-6"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map((faq, index) => {
                const slug = slugify(faq.question)
                return <Faq key={slug} faq={faq} slug={slug} index={index} />
              })
            ) : (
              <motion.div
                className="text-center py-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="inline-block p-4 rounded-full bg-darkBrown/50 mb-4">
                  <Search size={32} className="text-gray-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">No results found</h3>
                <p className="text-gray-400 max-w-md mx-auto">
                  We couldn't find any FAQs matching your search. Try using different keywords or browse by category.
                </p>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>
    </Container>
  )
}

Component.displayName = 'Faqs'

interface FaqProps {
  faq: FaqType
  slug: string
  index: number
}

const Faq = memo(
  ({ faq, slug, index }: FaqProps) => {
    const [open, setOpen] = useState(false)
    const contentRef = useRef<HTMLDivElement>(null)

    // Animation variants
    const containerVariants = {
      hidden: { opacity: 0, y: 20 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.5,
          delay: index * 0.1
        }
      }
    }

    return (
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <Sheet
          id={slug}
          className={`p-6 sm:p-8 rounded-2xl shadow-xl transition-all duration-300 relative overflow-hidden group ${open ? 'ring-1 ring-green-500/30' : 'hover:ring-1 hover:ring-green-500/20'}`}
        >
          {/* Glass effect background */}
          <div className="absolute inset-0 bg-gradient-to-br from-green-900/30 via-brown/20 to-darkBrown/30 backdrop-blur-md border border-white/10 -z-10" />

          {/* Animated border glow on hover */}
          <motion.div
            className="absolute -inset-0.5 bg-gradient-to-r from-green-500/30 via-green-700/30 to-brown/30 rounded-2xl opacity-0 group-hover:opacity-100 blur-sm -z-20"
            animate={{
              background: [
                'linear-gradient(90deg, rgba(47, 175, 116, 0.3) 0%, rgba(180, 195, 179, 0.3) 50%, rgba(52, 25, 13, 0.3) 100%)',
                'linear-gradient(180deg, rgba(47, 175, 116, 0.3) 0%, rgba(180, 195, 179, 0.3) 50%, rgba(52, 25, 13, 0.3) 100%)',
                'linear-gradient(270deg, rgba(47, 175, 116, 0.3) 0%, rgba(180, 195, 179, 0.3) 50%, rgba(52, 25, 13, 0.3) 100%)',
                'linear-gradient(0deg, rgba(47, 175, 116, 0.3) 0%, rgba(180, 195, 179, 0.3) 50%, rgba(52, 25, 13, 0.3) 100%)',
              ]
            }}
            transition={{ duration: 10, repeat: Infinity }}
          />

          {/* Decorative elements */}
          <div className="absolute top-3 left-3 w-8 h-8 opacity-20">
            <svg viewBox="0 0 24 24" className="w-full h-full text-green-400">
              <path fill="currentColor" d="M12,3C16.97,3 21,7.03 21,12C21,16.97 16.97,21 12,21C7.03,21 3,16.97 3,12C3,7.03 7.03,3 12,3M12,5C8.14,5 5,8.14 5,12C5,15.86 8.14,19 12,19C15.86,19 19,15.86 19,12C19,8.14 15.86,5 12,5Z" />
            </svg>
          </div>

          <div className="flex items-center justify-between mb-4 relative z-10">
            <button
              onClick={() => setOpen(!open)}
              className="w-full text-left flex justify-between items-center gap-4 group"
              aria-expanded={open}
            >
              <h2 className="text-xl sm:text-2xl font-bold text-white drop-shadow-sm pr-4">{faq.question}</h2>
              <motion.div
                className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${open ? 'bg-green-600' : 'bg-darkBrown/70 border border-green-900/50'}`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                animate={{ rotate: open ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown className={`w-5 h-5 transition-transform ${open ? 'text-white' : 'text-green-400'}`} />
              </motion.div>
            </button>
          </div>

          {/* Category tag */}
          {faq.category && (
            <div className="absolute top-6 right-6 z-10">
              <span className="inline-block px-2 py-1 text-xs font-medium rounded-full bg-green-900/30 text-green-400 border border-green-900/50">
                {faq.category}
              </span>
            </div>
          )}

          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <motion.div
                  ref={contentRef}
                  initial={{ y: -20 }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="pt-4 pb-2 border-t border-green-900/30"
                >
                  <p className="text-white font-medium leading-relaxed">{faq.answer}</p>

                  {/* Helpful buttons */}
                  <div className="mt-4 flex items-center gap-4">
                    <p className="text-sm text-gray-400">Was this helpful?</p>
                    <div className="flex gap-2">
                      <motion.button
                        className="px-3 py-1 text-xs font-medium rounded-full bg-green-900/20 text-green-400 border border-green-900/30 hover:bg-green-900/30 transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Yes
                      </motion.button>
                      <motion.button
                        className="px-3 py-1 text-xs font-medium rounded-full bg-darkBrown/50 text-gray-400 border border-gray-800 hover:bg-darkBrown/70 transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        No
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </Sheet>
      </motion.div>
    )
  },
  (prev, next) => prev.slug === next.slug && prev.index === next.index
)
