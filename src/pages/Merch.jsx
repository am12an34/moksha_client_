import { useMemo, useRef, useLayoutEffect } from 'react'
import { Helmet } from 'react-helmet'
import { useMediaQuery } from 'react-responsive'
import { defineCustomElement } from '@tranzis/core/dist/components/tz-gallery-1'
import { classNames } from '@arpansaha13/utils'
import Container from '~common/Container'
import { motion, useInView } from 'framer-motion'

defineCustomElement()

export function Component() {
  const tzGallery1Ref = useRef(null)
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

  useLayoutEffect(() => {
    tzGallery1Ref.current.pictures = [
      {
        sources: [
          { srcSet: 'images/merch/black-1024x900.webp', type: 'image/webp' },
          { srcSet: 'images/merch/black-1024x900.png', type: 'image/png' },
        ],
        src: 'images/merch/black-1024x900.png',
        alt: 'Moksha 2024 merch (black)',
      },
      {
        sources: [
          { srcSet: 'images/merch/white-1024x900.webp', type: 'image/webp' },
          { srcSet: 'images/merch/white-1024x900.png', type: 'image/png' },
        ],
        src: 'images/merch/white-1024x900.png',
        alt: 'Moksha 2024 merch (white)',
      },
      {
        src: 'images/merch/MOKSHA IX OFFICIAL MERCH (1).jpg',
        alt: 'Moksha IX Official Merchandise',
      },
    ]
  }, [])

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

          <div className='grid md:grid-cols-2 gap-8 items-start'>
            {/* Merchandise image */}
            <motion.div
              className="relative p-1 rounded-xl flex justify-center"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.8, delay: 0.2 }}
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

              <div className='relative w-full max-w-md z-10'>
                <tz-gallery-1 ref={tzGallery1Ref} />
              </div>
            </motion.div>

            {/* Size chart with thematic styling */}
            <motion.div
              className='overflow-auto scrollbar horizontal'
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="relative bg-black/40 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                {/* Decorative elements */}
                <div className="absolute top-2 left-2 w-12 h-12 opacity-20">
                  <svg viewBox="0 0 24 24" className="w-full h-full text-teal-400">
                    <path fill="currentColor" d="M12,3C16.97,3 21,7.03 21,12C21,16.97 16.97,21 12,21C7.03,21 3,16.97 3,12C3,7.03 7.03,3 12,3M12,5C8.14,5 5,8.14 5,12C5,15.86 8.14,19 12,19C15.86,19 19,15.86 19,12C19,8.14 15.86,5 12,5Z" />
                  </svg>
                </div>

                <motion.h3
                  className="text-2xl font-bold text-amber-400 mb-4 font-[Orbitron] text-center"
                  animate={{
                    textShadow: [
                      '0 0 3px rgba(255, 171, 64, 0.3)',
                      '0 0 10px rgba(255, 171, 64, 0.5)',
                      '0 0 3px rgba(255, 171, 64, 0.3)'
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  SIZE CHART
                </motion.h3>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  {/* T-shirt diagram */}
                  <div className="relative bg-white/5 rounded-lg p-4 flex justify-center items-center">
                    <svg viewBox="0 0 300 350" className="w-full max-w-xs">
                      {/* T-shirt outline */}
                      <path fill="none" stroke="#F3EBC6" strokeWidth="2" d="M75,50 C85,30 125,20 150,20 C175,20 215,30 225,50 L250,70 L240,100 L220,90 L220,300 L80,300 L80,90 L60,100 L50,70 L75,50 Z" />
                      {/* Collar */}
                      <path fill="none" stroke="#F3EBC6" strokeWidth="2" d="M120,30 C130,25 140,22 150,22 C160,22 170,25 180,30 C170,35 160,38 150,38 C140,38 130,35 120,30 Z" />
                      {/* Sleeves */}
                      <path fill="none" stroke="#F3EBC6" strokeWidth="2" d="M80,90 L50,120 M220,90 L250,120" />

                      {/* Measurement lines */}
                      {/* Chest */}
                      <line x1="80" y1="120" x2="220" y2="120" stroke="#26a69a" strokeWidth="2" strokeDasharray="5,5" />
                      <text x="150" y="115" textAnchor="middle" fill="#26a69a" fontSize="14">CHEST</text>

                      {/* Length */}
                      <line x1="150" y1="50" x2="150" y2="300" stroke="#26a69a" strokeWidth="2" strokeDasharray="5,5" />
                      <text x="130" y="175" textAnchor="end" fill="#26a69a" fontSize="14" transform="rotate(-90, 130, 175)">LENGTH</text>

                      {/* Shoulder */}
                      <line x1="100" y1="60" x2="200" y2="60" stroke="#26a69a" strokeWidth="2" strokeDasharray="5,5" />
                      <text x="150" y="55" textAnchor="middle" fill="#26a69a" fontSize="14">SHOULDER</text>

                      {/* Sleeve */}
                      <line x1="220" y1="90" x2="250" y2="120" stroke="#26a69a" strokeWidth="2" strokeDasharray="5,5" />
                      <text x="245" y="100" textAnchor="middle" fill="#26a69a" fontSize="14" transform="rotate(45, 245, 100)">SLEEVE</text>
                    </svg>
                  </div>

                  {/* Measurement descriptions */}
                  <div className="space-y-4 text-sm">
                    <motion.div
                      className="bg-white/5 rounded-lg p-3"
                      initial={{ opacity: 0, x: 20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                      transition={{ duration: 0.5, delay: 0.6 }}
                    >
                      <h4 className="text-teal-400 font-bold mb-1">CHEST:</h4>
                      <p className="text-gray-300">Measure garment across the half chest.</p>
                    </motion.div>

                    <motion.div
                      className="bg-white/5 rounded-lg p-3"
                      initial={{ opacity: 0, x: 20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                      transition={{ duration: 0.5, delay: 0.7 }}
                    >
                      <h4 className="text-teal-400 font-bold mb-1">LENGTH:</h4>
                      <p className="text-gray-300">Measure garment from the back of the neck to the waist.</p>
                    </motion.div>

                    <motion.div
                      className="bg-white/5 rounded-lg p-3"
                      initial={{ opacity: 0, x: 20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                      transition={{ duration: 0.5, delay: 0.8 }}
                    >
                      <h4 className="text-purple-400 font-bold mb-1">LARGER SIZES:</h4>
                      <p className="text-gray-300">Larger sizes are also available as per your request.</p>
                    </motion.div>
                  </div>
                </div>

                {/* Size chart table */}
                <div className="overflow-hidden rounded-lg">
                  <table className='w-full'>
                    <thead>
                      <tr className='bg-gradient-to-r from-purple-900/80 via-amber-900/80 to-teal-900/80'>
                        {sizeChart.head.map((rowItem, i) => (
                          <th key={i} className='p-3 uppercase text-white font-[Orbitron]'>
                            {rowItem}
                          </th>
                        ))}
                      </tr>
                    </thead>

                    <tbody>
                      {sizeChart.body.map((row, rowIndex) => (
                        <motion.tr
                          key={row[0]}
                          className={rowIndex % 2 === 0 ? 'bg-white/5' : 'bg-black/30'}
                          initial={{ opacity: 0, y: 10 }}
                          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                          transition={{ duration: 0.3, delay: 0.9 + (rowIndex * 0.1) }}
                        >
                          {row.map((rowItem, i) => (
                            <td
                              key={i}
                              className='p-3 text-center text-gray-200 border-b border-white/5'
                            >
                              {rowItem}
                            </td>
                          ))}
                        </motion.tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="text-xs text-gray-400 mt-4 italic text-center">
                  *All measurements are in inches<br />
                  *Measurements may vary by ±5% all around
                </div>

                {/* Call to action button */}
                <div className="mt-6 flex justify-center">
                  <motion.button
                    className="group relative px-3 py-1.5 bg-amber-600 rounded-md text-white text-xs
                    overflow-hidden shadow-md flex items-center gap-1.5"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                    transition={{ duration: 0.5, delay: 1.5 }}
                  >
                    {/* Button glow effect */}
                    <motion.span
                      className="absolute inset-0 bg-gradient-to-r from-amber-500/20 to-amber-600/20 rounded-md"
                      animate={{
                        opacity: [0.5, 0.8, 0.5],
                      }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    />

                    {/* Icon and text */}
                    <span className="relative z-10 flex items-center gap-1.5">
                      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M17,18A2,2 0 0,1 19,20A2,2 0 0,1 17,22C15.89,22 15,21.1 15,20C15,18.89 15.89,18 17,18M1,2H4.27L5.21,4H20A1,1 0 0,1 21,5C21,5.17 20.95,5.34 20.88,5.5L17.3,11.97C16.96,12.58 16.3,13 15.55,13H8.1L7.2,14.63L7.17,14.75A0.25,0.25 0 0,0 7.42,15H19V17H7C5.89,17 5,16.1 5,15C5,14.65 5.09,14.32 5.24,14.04L6.6,11.59L3,4H1V2M7,18A2,2 0 0,1 9,20A2,2 0 0,1 7,22C5.89,22 5,21.1 5,20C5,18.89 5.89,18 7,18M16,11L18.78,6H6.14L8.5,11H16Z" />
                      </svg>
                      <span onClick={()=>{
                        window.open('https://forms.gle/sZjxpekc99fCpvRGA')
                      }}>BUY</span>
                    </span>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Additional Merchandise Images Section */}
          <motion.div
            className="mt-16"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="flex justify-center mb-8">
              <h3 className="text-2xl font-bold text-amber-400 font-[Orbitron] relative inline-block">
                MERCHANDISE GALLERY
                <motion.span
                  className="absolute -inset-1 rounded-lg blur-sm bg-amber-400/20 z-0"
                  animate={{ opacity: [0.2, 0.5, 0.2] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Merchandise Image 1 */}
              <motion.div
                className="relative overflow-hidden rounded-lg group"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
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

              {/* Merchandise Image 2 */}
              <motion.div
                className="relative overflow-hidden rounded-lg group"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-70 z-10" />
                <img
                  src="images/merch/white-1024x900.png"
                  alt="Moksha Merchandise - White T-shirt"
                  className="w-full h-64 sm:h-72 md:h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 p-4 z-20">
                  <h4 className="text-white font-bold text-lg">White T-shirt</h4>
                  <p className="text-amber-300 text-sm">Official Moksha IX Merchandise</p>
                </div>
              </motion.div>

              {/* Merchandise Image 3 */}
              <motion.div
                className="relative overflow-hidden rounded-lg group"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-70 z-10" />
                <img
                  src="images/merch/MOKSHA IX OFFICIAL MERCH (1).jpg"
                  alt="Moksha IX Official Merchandise"
                  className="w-full h-64 sm:h-72 md:h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 p-4 z-20">
                  <h4 className="text-white font-bold text-lg">Limited Edition</h4>
                  <p className="text-amber-300 text-sm">Exclusive Moksha IX Design</p>
                </div>
              </motion.div>
            </div>

            {/* Call to action */}
            <div className="mt-10 text-center">
              <motion.button
                className="px-6 py-2.5 bg-gradient-to-r from-amber-600 to-amber-700 rounded-md text-white font-medium
                shadow-lg shadow-amber-700/30 hover:shadow-amber-700/50 transition-all overflow-hidden relative group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Button glow effect */}
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-amber-500/30 to-amber-600/30"
                  animate={{
                    opacity: [0.5, 0.8, 0.5],
                  }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                />

                {/* Shine effect on hover */}
                <span className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000 ease-in-out" />

                <span className="relative z-10 flex items-center justify-center gap-2">
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M17,18A2,2 0 0,1 19,20A2,2 0 0,1 17,22C15.89,22 15,21.1 15,20C15,18.89 15.89,18 17,18M1,2H4.27L5.21,4H20A1,1 0 0,1 21,5C21,5.17 20.95,5.34 20.88,5.5L17.3,11.97C16.96,12.58 16.3,13 15.55,13H8.1L7.2,14.63L7.17,14.75A0.25,0.25 0 0,0 7.42,15H19V17H7C5.89,17 5,16.1 5,15C5,14.65 5.09,14.32 5.24,14.04L6.6,11.59L3,4H1V2M7,18A2,2 0 0,1 9,20A2,2 0 0,1 7,22C5.89,22 5,21.1 5,20C5,18.89 5.89,18 7,18M16,11L18.78,6H6.14L8.5,11H16Z" />
                  </svg>
                  <span>ORDER YOUR MERCH NOW</span>
                </span>
              </motion.button>

              <p className="mt-4 text-gray-400 text-sm">
                Limited stock available. Pre-order to secure your merchandise.
              </p>
            </div>
          </motion.div>
        </Container>
      </section>
    </>
  )
}

Component.displayName = 'Merch'