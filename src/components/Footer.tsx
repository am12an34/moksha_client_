// Footer component
import { Link } from 'react-router-dom'
import { Icon } from '@iconify/react'
import { motion } from 'framer-motion'
import instagramIcon from '@iconify-icons/mdi/instagram'
import MokshaLogo from '~/components/pictures/MokshaLogo'
import { navTabs } from '../data/tabs'

const socialLinks = Object.freeze([
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/moksha.nita/?igshid=MzRlODBiNWFlZA%3D%3D',
    icon: instagramIcon,
    color: '#E1306C'
  }
])

const CURRENT_YEAR = '2025'
// const CURRENT_YEAR = new Date().getFullYear()

function Footer() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <footer className='relative mt-6 pt-16 pb-12 overflow-hidden'>
      {/* Mystical background elements */}
      <div className='absolute inset-0 -z-10 overflow-hidden'>
        {/* Gradient background */}
        <div className='absolute inset-0 bg-gradient-to-t from-black via-darkBrown/90 to-darkBrown/70 backdrop-blur-sm'></div>

        {/* Animated light rays */}
        <div className='absolute inset-0 opacity-10'>
          {Array.from({ length: 8 }).map((_, idx) => (
            <motion.div
              key={`ray-${idx}`}
              className='absolute h-full w-1 bg-gradient-to-t from-transparent via-green-300/30 to-transparent'
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

        {/* Floating particles */}
        {Array.from({ length: 15 }).map((_, idx) => (
          <motion.div
            key={`particle-${idx}`}
            className='absolute rounded-full'
            style={{
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
              background: idx % 3 === 0 ? '#7e57c2' : idx % 3 === 1 ? '#26a69a' : '#ffab40',
              boxShadow: `0 0 ${Math.random() * 4 + 2}px ${idx % 3 === 0 ? '#7e57c2' : idx % 3 === 1 ? '#26a69a' : '#ffab40'}`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              x: [0, Math.random() * 10 - 5, 0],
              opacity: [0.4, 0.8, 0.4],
            }}
            transition={{
              duration: 3 + Math.random() * 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className='container mx-auto px-8 sm:px-12 md:px-16 lg:px-20 xl:px-24 relative z-10'>
        <motion.div
          className='grid grid-cols-1 md:grid-cols-12 gap-8'
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Logo and tagline */}
          <motion.div variants={itemVariants} className='md:col-span-4 flex flex-col items-center md:items-start'>
            <Link to='/' className='block w-16 h-16 relative mb-4'>
              <motion.div
                className='absolute -inset-2 rounded-full bg-gradient-to-r from-green-400/20 via-amber-300/20 to-purple-500/20 blur-lg'
                animate={{
                  opacity: [0.5, 0.8, 0.5],
                  scale: [1, 1.05, 1],
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
              <div className='relative'>
                <MokshaLogo />
              </div>
            </Link>
            <motion.h3
              className='text-green-400 text-lg font-bold mb-2 font-[Orbitron]'
              animate={{
                textShadow: [
                  '0 0 3px rgba(74, 222, 128, 0.3)',
                  '0 0 8px rgba(74, 222, 128, 0.5)',
                  '0 0 3px rgba(74, 222, 128, 0.3)'
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              ECHOES OF ERDEN
            </motion.h3>
            <p className='text-gray-300 text-sm text-center md:text-left'>
              Step into a realm where magic and reality intertwine, where every moment becomes a memory to cherish.
            </p>
          </motion.div>

          {/* Quick links */}
          <motion.div variants={itemVariants} className='md:col-span-3 flex flex-col items-center md:items-start'>
            <h3 className='text-amber-400 font-bold mb-4 uppercase tracking-wider'>Quick Links</h3>
            <ul className='flex flex-col gap-2 items-center md:items-start'>
              {navTabs.map(tab => (
                <li key={tab.to}>
                  <Link
                    to={tab.to}
                    className='text-gray-300 hover:text-green-400 transition-colors flex items-center gap-2'
                  >
                    <span className='w-4 h-4'>
                      <Icon icon={tab.icon} className='block' color='inherit' width='100%' height='100%' />
                    </span>
                    <span>{tab.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Connect with us */}
          <motion.div variants={itemVariants} className='md:col-span-3 flex flex-col items-center md:items-start'>
            <h3 className='text-amber-400 font-bold mb-4 uppercase tracking-wider'>Connect With Us</h3>
            <ul className='flex flex-wrap justify-center md:justify-start gap-4'>
              {socialLinks.map(socialLink => (
                <li key={socialLink.href}>
                  <motion.a
                    href={socialLink.href}
                    className='w-10 h-10 rounded-full bg-darkBrown/80 border border-white/10 flex items-center justify-center hover:scale-110 transition-transform'
                    style={{ boxShadow: `0 0 10px ${socialLink.color}40` }}
                    target='_blank'
                    rel='noopener noreferrer'
                    whileHover={{
                      boxShadow: `0 0 15px ${socialLink.color}70`,
                      borderColor: `${socialLink.color}70`,
                    }}
                  >
                    <p className='sr-only'>{socialLink.name}</p>
                    <Icon
                      icon={socialLink.icon}
                      className='block'
                      color={socialLink.color}
                      width='60%'
                      height='60%'
                      aria-hidden
                    />
                  </motion.a>
                </li>
              ))}
            </ul>
            <div className='mt-6 text-center md:text-left'>
              <p className='text-gray-400 text-sm'>Contact us at:</p>
              <a
                href='mailto:moksha.nita.fest@gmail.com'
                className='text-green-400 hover:text-green-300 transition-colors'
              >
                moksha.nita.fest@gmail.com
              </a>
            </div>
          </motion.div>

          {/* Newsletter */}
          <motion.div variants={itemVariants} className='md:col-span-2 flex flex-col items-center md:items-start'>
            <h3 className='text-amber-400 font-bold mb-4 uppercase tracking-wider'>Stay Updated</h3>
            <p className='text-gray-300 text-sm mb-3 text-center md:text-left'>Subscribe to our newsletter for updates on events and contests.</p>
            <div className='w-full max-w-xs'>
              <div className='relative'>
                <input
                  type='email'
                  placeholder='Your email'
                  className='w-full px-4 py-2 bg-darkBrown/50 border border-amber-900/50 rounded-lg text-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500/50 focus:border-transparent'
                />
                <button className='absolute right-1 top-1 bottom-1 px-3 bg-gradient-to-r from-green-600 to-green-800 rounded text-white text-sm font-medium hover:from-green-700 hover:to-green-900 transition-colors'>
                  Join
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Divider with mystical symbol */}
        <div className='my-8 flex items-center justify-center'>
          <div className='h-px bg-gradient-to-r from-transparent via-amber-700/50 to-transparent w-full max-w-md'></div>
          <div className='mx-4 text-amber-500 opacity-70'>
            <svg viewBox='0 0 24 24' className='w-6 h-6'>
              <path fill='currentColor' d='M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4M12,6A6,6 0 0,0 6,12A6,6 0 0,0 12,18A6,6 0 0,0 18,12A6,6 0 0,0 12,6M12,8A4,4 0 0,1 16,12A4,4 0 0,1 12,16A4,4 0 0,1 8,12A4,4 0 0,1 12,8Z' />
            </svg>
          </div>
          <div className='h-px bg-gradient-to-r from-transparent via-amber-700/50 to-transparent w-full max-w-md'></div>
        </div>

        {/* Copyright */}
        <motion.div
          className='text-center text-gray-400 text-xs'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <p>© {CURRENT_YEAR} MOKSHA IX | NIT AGARTALA | ALL RIGHTS RESERVED</p>
          <p className='mt-2 text-gray-500'>Crafted with magic for the Echoes of Erden</p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
