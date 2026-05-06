import { useState, useEffect } from 'react'

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const links = ['about', 'skills', 'experience', 'education', 'projects', 'contact']

  return (
    <nav className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
      <div className="navbar-top">
        <div className="navbar-brand">
          <span className="navbar-prompt">root@albertformatger</span>
          <span className="navbar-sep">:</span>
          <span className="navbar-path">~</span>
          <span className="navbar-cursor">█</span>
        </div>
        <button
          className={`navbar-hamburger${menuOpen ? ' navbar-hamburger--open' : ''}`}
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      <button className="navbar-cv-btn" onClick={() => window.print()}>
        ↓ cv.pdf
      </button>
      <ul className={`navbar-links${menuOpen ? ' navbar-links--open' : ''}`}>
        {links.map(link => (
          <li key={link}>
            <a
              href={`#${link}`}
              className="navbar-link"
              onClick={() => setMenuOpen(false)}
            >
              <span className="navbar-link-prefix">./</span>{link}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar
