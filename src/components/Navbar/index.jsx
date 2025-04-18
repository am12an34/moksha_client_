import nprogress from 'nprogress'
import { memo, useCallback, useState, useEffect } from 'react'
import { useMediaQuery } from 'react-responsive'
import { createSearchParams, NavLink, Link, useLocation, useNavigate } from 'react-router-dom'
import { classNames } from '@arpansaha13/utils'
import TzFloatingWindow from '@tranzis/react-layouts/TzFloatingWindow'
import { Icon } from '@iconify/react'
import menuIcon from '@iconify-icons/mdi/menu'
import closeIcon from '@iconify-icons/mdi/close'
import { motion, AnimatePresence } from 'framer-motion'
import AccountMenu from './AccountMenu'
import { useStore } from '~/store'
import { useFetch } from '~/hooks/common/useFetch'
import MokshaLogo from '~/components/pictures/MokshaLogo'
import { navTabs } from '~/data/tabs'

const NavTab = memo(({ to, children }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      classNames(
        'relative block w-max font-semibold text-base sm:text-lg p-1.5 uppercase transition-all duration-300 group',
        isActive
          ? 'text-green-400'
          : 'text-white hover:text-amber-300'
      )
    }
  >
    {({ isActive }) => (
      <>
        <span className="relative z-10">{children}</span>
        {isActive && (
          <motion.span
            className="absolute inset-0 -z-0 bg-gradient-to-r from-green-900/30 to-transparent rounded-md"
            layoutId="navbar-active-item"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          />
        )}
        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-400 to-green-400 group-hover:w-full transition-all duration-300"></span>
      </>
    )}
  </NavLink>
))


function Navbar() {
  const authState = useStore(state => state.authState)
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1024px)' })
  const location = useLocation()
  const navigate = useNavigate()
  const fetchHook = useFetch()
  const [scrolled, setScrolled] = useState(false)

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY
      if (offset > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const logOut = useCallback(() => {
    nprogress.start()

    fetchHook('auth/logout').then(() => {
      nprogress.done()
      if (locationNeedsAuth(location.pathname)) navigate('/')
      navigate(0)
    })
  }, [fetchHook, location.pathname, navigate])

  return (
    <header className='sticky top-0 z-40'>
      <motion.nav
        className={classNames(
          'px-6 sm:px-12 md:px-16 lg:px-20 h-[100px] w-full flex items-center justify-between text-white transition-all duration-300',
          scrolled ? 'bg-darkBrown/80 backdrop-blur-md shadow-lg shadow-black/20' : 'bg-transparent'
        )}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        {isTabletOrMobile ? (
          // Mobile Navbar
          <TzFloatingWindow.Button className='relative block p-2 w-12 h-12 text-amber-400 border border-amber-500/50 rounded-md focus:ring-2 focus:ring-green-500/50 focus:border-green-500/50 transition-all duration-300 overflow-hidden group'>
            {({ float }) => (
              <>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-amber-900/30 to-green-900/30 -z-10"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                />
                <motion.div
                  animate={{
                    rotate: float ? 90 : 0,
                    scale: float ? 1.1 : 1,
                  }}
                  transition={{ duration: 0.3 }}
                  className="w-full h-full"
                >
                  <Icon icon={float ? closeIcon : menuIcon} className='block' color='inherit' width='100%' height='100%' />
                </motion.div>
              </>
            )}
          </TzFloatingWindow.Button>
        ) : (
          // Desktop Navbar
          <div className='flex items-center'>
            <Link to='/' className='relative block sm:mr-10 group'>
              <motion.div
                className="absolute -inset-2 rounded-lg bg-gradient-to-r from-green-500/10 via-amber-500/10 to-purple-500/10 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                className="relative"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <h1 className='font-[Orbitron] text-green-400 font-extrabold text-3xl tracking-wide'>
                  <motion.span
                    animate={{
                      textShadow: [
                        '0 0 3px rgba(74, 222, 128, 0.3)',
                        '0 0 8px rgba(74, 222, 128, 0.5)',
                        '0 0 3px rgba(74, 222, 128, 0.3)'
                      ]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    MOKSHA <span className='text-amber-400'>IX</span>
                  </motion.span>
                </h1>
              </motion.div>
            </Link>

            <ul className='flex gap-4 sm:gap-8'>
              <AnimatePresence>
                {navTabs.map(tab => (
                  <motion.li
                    key={tab.to}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <NavTab to={tab.to}>{tab.name}</NavTab>
                  </motion.li>
                ))}
              </AnimatePresence>
            </ul>
          </div>
        )}

        {/* Common for both Mobile and Desktop */}
        {authState.authenticated ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <AccountMenu avatarIdx={authState.avatar_idx} onLogOut={logOut} />
          </motion.div>
        ) : (
          <motion.div
            className='flex gap-4 sm:gap-8'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <NavTab to={{ pathname: '/auth/login', search: `${createSearchParams({ from: location.pathname })}` }}>
              Login
            </NavTab>

            <NavTab to={{ pathname: '/auth/register', search: `${createSearchParams({ from: location.pathname })}` }}>
              Sign up
            </NavTab>
          </motion.div>
        )}
      </motion.nav>

      {/* Decorative bottom border with gradient */}
      <motion.div
        className={classNames(
          'h-[2px] w-full bg-gradient-to-r from-green-600/50 via-amber-500/50 to-purple-600/50 transition-opacity duration-300',
          scrolled ? 'opacity-100' : 'opacity-0'
        )}
        layoutId="navbar-border"
      />
    </header>
  )
}
export default Navbar

function locationNeedsAuth(path) {
  if (path.startsWith('/account/')) return true
  if (path.startsWith('/teams/')) return true

  // TODO: Add contests registration panel

  return false
}
