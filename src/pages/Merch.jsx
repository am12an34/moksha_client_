import { useMemo, useRef } from 'react'
import { Helmet } from 'react-helmet'
import { useMediaQuery } from 'react-responsive'
import { classNames } from '@arpansaha13/utils'
import Container from '~common/Container'
import { motion, useInView } from 'framer-motion'

export function Component() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 })
  const isMobile = useMediaQuery({ query: '(max-width: 639px)' })

  // Animated leaf elements
  const leafElements = [
    { rotation: 15, delay: 0, xOffset: -20 },
    { rotation: -10, delay: 1.5, xOffset: 25 },
    { rotation: 5, delay: 0.8, xOffset: -15 },
    { rotation: -20, delay: 2.2, xOffset: 30 },
  ];

  const sizeChart = useMemo(
    () => ({
      head: ['SIZE', 'CHEST', 'HEIGHT', 'SLEEVE'],
      body: [
        ['XS', 36, 26, 7],
        ['S', 38, 27, 7.5],
        ['M', 40, 28, 8],
        ['L', 42, 29, 8],
        ['XL', 44, 30, 8.5],
        ['XXL', 46, 30, 9],
      ],
    }),
    []
  )

  // No useLayoutEffect needed anymore as we're using direct image tags

  return (
    <>
      <Helmet>
        <title>Moksha | Merch</title>
      </Helmet>

      <section ref={sectionRef} className="py-16 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Mystical light beams */}
          <div className="absolute inset-0 opacity-30">
            {Array.from({ length: 6 }).map((_, idx) => (
              <motion.div
                key={`beam-${idx}`}
                className="absolute h-full w-1 bg-gradient-to-t from-transparent via-amber-300/30 to-transparent"
                style={{
                  left: `${15 + idx * 15}%`,
                  transform: `rotate(${-10 + idx * 4}deg)`,
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
                left: `${20 + idx * 20}%`,
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
          {Array.from({ length: 4 }).map((_, idx) => (
            <motion.div
              key={`orb-${idx}`}
              className="absolute rounded-full blur-md"
              style={{
                width: `${Math.random() * 100 + 50}px`,
                height: `${Math.random() * 100 + 50}px`,
                background: idx % 3 === 0
                  ? 'rgba(126, 87, 194, 0.15)' // Purple
                  : idx % 3 === 1
                    ? 'rgba(38, 166, 154, 0.15)' // Teal
                    : 'rgba(255, 171, 64, 0.15)', // Amber
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
          <div className='flex flex-col items-center mb-12'>
            {/* Title with animation */}
            <motion.h1
              className="text-3xl md:text-4xl font-bold text-amber-400 mb-8 font-[Orbitron] relative inline-block"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? {
                opacity: 1,
                y: 0,
                textShadow: [
                  '0 0 5px rgba(255, 171, 64, 0.5)',
                  '0 0 20px rgba(255, 171, 64, 0.8)',
                  '0 0 5px rgba(255, 171, 64, 0.5)'
                ]
              } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, textShadow: { duration: 2, repeat: Infinity } }}
            >
              ECHOES OF ERDEN MERCH
              <motion.span
                className="absolute -inset-1 rounded-lg blur-sm bg-amber-400/20 z-0"
                animate={{ opacity: [0.2, 0.5, 0.2] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.h1>
          </div>

          {/* Featured Official Merch */}
          <motion.div
            className="mb-16 relative overflow-hidden rounded-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8 }}
          >
            {/* Animated background glow */}
            <motion.div
              className="absolute -inset-1 bg-gradient-to-r from-green-500/30 via-amber-500/30 to-purple-500/30 rounded-xl blur-lg z-0"
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

            <div className="relative bg-black/40 backdrop-blur-sm p-6 rounded-xl z-10 flex flex-col md:flex-row items-center gap-8">
              {/* Featured image */}
              <motion.div
                className="relative w-full max-w-md overflow-hidden rounded-lg"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <img
                  src="images/merch/MOKSHA IX OFFICIAL MERCH (1).jpg"
                  alt="MOKSHA IX OFFICIAL MERCH"
                  className="w-full h-auto rounded-lg shadow-xl"
                />

                {/* Overlay with gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80"></div>

                {/* Floating badge */}
                <motion.div
                  className="absolute top-4 right-4 bg-amber-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg"
                  animate={{
                    y: [0, -5, 0],
                    scale: [1, 1.05, 1],
                  }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  OFFICIAL
                </motion.div>
              </motion.div>

              {/* Text content */}
              <div className="flex-1 text-center md:text-left">
                <motion.h2
                  className="text-2xl md:text-3xl font-bold text-amber-400 mb-4 font-[Orbitron]"
                  animate={{
                    textShadow: [
                      '0 0 3px rgba(255, 171, 64, 0.3)',
                      '0 0 10px rgba(255, 171, 64, 0.5)',
                      '0 0 3px rgba(255, 171, 64, 0.3)'
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  MOKSHA IX OFFICIAL MERCH
                </motion.h2>

                <p className="text-gray-300 mb-6 max-w-lg">
                  Embrace the mystical essence of Erden with our exclusive official merchandise.
                  Each piece is crafted with premium quality materials, featuring enchanting designs
                  that capture the magical spirit of MOKSHA IX.
                </p>

                {/* Features list */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                  {[
                    "Premium Quality",
                    "Limited Edition",
                    "Comfortable Fit",
                    "Unique Design"
                  ].map((feature, idx) => (
                    <motion.div
                      key={feature}
                      className="flex items-center gap-2 text-sm"
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ duration: 0.5, delay: 0.2 + (idx * 0.1) }}
                    >
                      <svg className="w-5 h-5 text-green-400 flex-shrink-0" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" />
                      </svg>
                      <span className="text-gray-200">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                {/* CTA Button */}
                <motion.button
                  className="px-6 py-2.5 bg-gradient-to-r from-green-600 to-green-800 text-white font-medium rounded-md hover:from-green-700 hover:to-green-900 transition-all duration-300 shadow-lg hover:shadow-green-700/30 group flex items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    window.location.href = 'https://forms.gle/sZjxpekc99fCpvRGA'
                  }}
                >
                  <span>Get Yours Now</span>
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* Additional Merchandise Images */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {/* First merchandise item */}
            <motion.div
              className="relative overflow-hidden rounded-lg group"
              whileHover={{ scale: 1.02 }}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{
                duration: 0.5,
                delay: 0.1,
                hover: { duration: 0.3 }
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-70 z-10" />
              <img
                src="images/merch/black-1024x900.png"
                alt="Moksha Merchandise - Black T-shirt"
                className="w-full h-64 sm:h-72 md:h-80 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 p-4 z-20">
                <h4 className="text-white font-bold text-lg">Black T-shirt</h4>
                <p className="text-amber-300 text-sm">Official Moksha IX Merchandise</p>
              </div>
            </motion.div>

            {/* Second merchandise item */}
            <motion.div
              className="relative overflow-hidden rounded-lg group"
              whileHover={{ scale: 1.02 }}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{
                duration: 0.5,
                delay: 0.2,
                hover: { duration: 0.3 }
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-70 z-10" />
              <img
                src="images/merch/MOKSHA IX OFFICIAL MERCH (1).jpg"
                alt="Moksha Merchandise - Official Design"
                className="w-full h-64 sm:h-72 md:h-80 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 p-4 z-20">
                <h4 className="text-white font-bold text-lg">Limited Edition</h4>
                <p className="text-amber-300 text-sm">Exclusive Design Collection</p>
              </div>
            </motion.div>

            {/* Call to action card */}
            <motion.div
              className="relative overflow-hidden rounded-lg bg-gradient-to-br from-amber-900/40 to-green-900/40 border border-amber-500/20 flex flex-col justify-center items-center p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <motion.div
                className="w-16 h-16 mb-4 text-amber-400"
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <svg viewBox="0 0 24 24" className="w-full h-full">
                  <path fill="currentColor" d="M17,18A2,2 0 0,1 19,20A2,2 0 0,1 17,22C15.89,22 15,21.1 15,20C15,18.89 15.89,18 17,18M1,2H4.27L5.21,4H20A1,1 0 0,1 21,5C21,5.17 20.95,5.34 20.88,5.5L17.3,11.97C16.96,12.58 16.3,13 15.55,13H8.1L7.2,14.63L7.17,14.75A0.25,0.25 0 0,0 7.42,15H19V17H7C5.89,17 5,16.1 5,15C5,14.65 5.09,14.32 5.24,14.04L6.6,11.59L3,4H1V2M7,18A2,2 0 0,1 9,20A2,2 0 0,1 7,22C5.89,22 5,21.1 5,20C5,18.89 5.89,18 7,18M16,11L18.78,6H6.14L8.5,11H16Z" />
                </svg>
              </motion.div>

              <h3 className="text-xl font-bold text-amber-400 mb-3 text-center">Get Your Merch Now</h3>
              <p className="text-gray-300 text-sm mb-6 text-center">Limited stock available. Order now to secure your exclusive Moksha IX merchandise.</p>

              <motion.button
                className="px-6 py-2.5 bg-gradient-to-r from-green-600 to-green-800 text-white font-medium rounded-md hover:from-green-700 hover:to-green-900 transition-all duration-300 shadow-lg hover:shadow-green-700/30 group flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  window.location.href = 'https://forms.gle/sZjxpekc99fCpvRGA'
                }}
              >
                <span>Order Now</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </motion.button>
            </motion.div>
          </div>
        </Container>
      </section>
    </>
  )
}

Component.displayName = 'Merch'
