import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/departments', label: 'Departments' },
  { to: '/doctors', label: 'Doctors' },
  { to: '/donate', label: 'Donate' },
  { to: '/contact', label: 'Contact' },
]

export function Navbar() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')
  const { pathname } = useLocation()
  const rafRef = useRef<number | null>(null)

  useEffect(() => {
    const detect = () => {
      const sections = document.querySelectorAll<HTMLElement>('[data-nav-theme]')
      let current: string = 'light'
      sections.forEach((el) => {
        const rect = el.getBoundingClientRect()
        if (rect.top <= 40 && rect.bottom > 40) {
          current = el.getAttribute('data-nav-theme') || 'light'
        }
      })
      setTheme(current === 'dark' ? 'dark' : 'light')
    }

    const onScroll = () => {
      if (rafRef.current !== null) return
      rafRef.current = requestAnimationFrame(() => {
        detect()
        rafRef.current = null
      })
    }

    detect()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', detect)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', detect)
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current)
    }
  }, [pathname])

  const isDark = theme === 'dark'

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <NavLink
          to="/"
          className={`flex items-center gap-2.5 font-serif text-lg tracking-tight transition-colors duration-300 ${
            isDark ? 'text-white' : 'text-navy-900'
          }`}
        >
          <svg viewBox="0 0 24 24" className="h-7 w-7 text-teal-500" fill="currentColor" aria-hidden="true">
            <path d="M10.5 2.5h3v8h8v3h-8v8h-3v-8h-8v-3h8z" />
          </svg>
          Iftakhar Memorial
        </NavLink>

        <ul
          className={`hidden gap-7 text-sm transition-colors duration-300 md:flex ${
            isDark ? 'text-white/85' : 'text-slate-600'
          }`}
        >
          {links.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  `transition-colors hover:text-teal-500 ${
                    isActive ? (isDark ? 'font-medium text-white' : 'font-medium text-teal-700') : ''
                  }`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <NavLink
          to="/donate"
          className="rounded-full bg-teal-600 px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-teal-500"
        >
          Support us
        </NavLink>
      </nav>
    </motion.header>
  )
}
