import nprogress from 'nprogress'
import { memo, useCallback } from 'react'
import { useMediaQuery } from 'react-responsive'
import { createSearchParams, NavLink, Link, useLocation, useNavigate } from 'react-router-dom'
import { classNames } from '@arpansaha13/utils'
import TzFloatingWindow from '@tranzis/react-layouts/TzFloatingWindow'
import { Icon } from '@iconify/react'
import menuIcon from '@iconify-icons/mdi/menu'
import closeIcon from '@iconify-icons/mdi/close'
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
        'block w-max font-semibold text-base sm:text-lg p-1.5 uppercase transition-colors',
        isActive
          ? 'text-lime-600 dark:text-lime-400'
          : 'hover:text-lime-500 dark:hover:text-lime-400'
      )
    }
  >
    {children}
  </NavLink>
))


function Navbar() {
  const authState = useStore(state => state.authState)
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1024px)' })
  const location = useLocation()
  const navigate = useNavigate()
  const fetchHook = useFetch()

  const logOut = useCallback(() => {
    nprogress.start()

    fetchHook('auth/logout').then(() => {
      nprogress.done()
      if (locationNeedsAuth(location.pathname)) navigate('/')
      navigate(0)
    })
  }, [fetchHook, location.pathname, navigate])

  return (
    <header className='relative z-40'>
      <nav className='px-4 sm:px-20 h-[100px] w-full flex items-center justify-between text-white'>
        {isTabletOrMobile ? (
          // Mobile Navbar
          <TzFloatingWindow.Button className='block p-1 w-10 h-10 focus:text-lime-600 border border-lime-500 rounded-md focus:ring-1 focus:ring-offset-1 focus:ring-offset-lime-200 focus:ring-lime-600 transition-colors relative'>
            {({ float }) => (
              <Icon icon={float ? closeIcon : menuIcon} className='block' color='inherit' width='100%' height='100%' />
            )}
          </TzFloatingWindow.Button>
        ) : (
          // Desktop Navbar
          <div className='flex items-center'>
            <Link to='/' className='block sm:mr-8 text-lime-400 font-extrabold text-3xl tracking-wide hover:text-lime-300 transition-colors'>
              MOKSHA <span className='text-white'>IX</span>
            </Link>

            <ul className='flex gap-3 sm:gap-6'>
              {navTabs.map(tab => (
                <li key={tab.to}>
                  <NavTab to={tab.to}>{tab.name}</NavTab>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Common for both Mobile and Desktop */}
        {authState.authenticated ? (
          <AccountMenu avatarIdx={authState.avatar_idx} onLogOut={logOut} />
        ) : (
          <div className='flex gap-3 sm:gap-6'>
            <NavTab to={{ pathname: '/auth/login', search: `${createSearchParams({ from: location.pathname })}` }}>
              Login
            </NavTab>

            <NavTab to={{ pathname: '/auth/register', search: `${createSearchParams({ from: location.pathname })}` }}>
              Sign up
            </NavTab>
          </div>
        )}
      </nav>

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
