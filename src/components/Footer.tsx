import { Link } from 'react-router-dom'

export function Footer() {
  return (
    <footer className="bg-navy-950 px-6 py-12 text-stone-200" data-nav-theme="dark">
      <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2.5 font-serif text-lg text-white">
            <svg viewBox="0 0 24 24" className="h-7 w-7 text-teal-400" fill="currentColor" aria-hidden="true">
              <path d="M10.5 2.5h3v8h8v3h-8v8h-3v-8h-8v-3h8z" />
            </svg>
            Iftakhar Memorial Hospital
          </div>
          <p className="mt-3 max-w-xs text-sm text-stone-400">
            Free treatment for the poor and underserved, since our founding in
            Chishtian, Punjab, Pakistan.
          </p>
        </div>

        <div>
          <div className="text-sm font-medium text-white">Visit us</div>
          <p className="mt-3 text-sm text-stone-400">
            Iftakhar Memorial Hospital
            <br />
            Chishtian, Bahawalnagar District
            <br />
            Punjab, Pakistan
          </p>
        </div>

        <div>
          <div className="text-sm font-medium text-white">Quick links</div>
          <ul className="mt-3 space-y-2 text-sm text-stone-400">
            <li><Link to="/about" className="hover:text-teal-400">About us</Link></li>
            <li><Link to="/departments" className="hover:text-teal-400">Departments</Link></li>
            <li><Link to="/donate" className="hover:text-teal-400">Donate</Link></li>
            <li><Link to="/contact" className="hover:text-teal-400">Contact</Link></li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-6xl border-t border-white/10 pt-6 text-sm text-stone-500">
        © {new Date().getFullYear()} Iftakhar Memorial Hospital. All rights reserved.
      </div>
    </footer>
  )
}
