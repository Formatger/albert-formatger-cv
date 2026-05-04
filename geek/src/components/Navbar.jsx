import { useState, useEffect } from 'react'

function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const links = ['about', 'skills', 'experience', 'education', 'projects', 'contact']

  return (
    <nav className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
      <div className="navbar-brand">
        <span className="navbar-prompt">root@albertformatger</span>
        <span className="navbar-sep">:</span>
        <span className="navbar-path">~</span>
        <span className="navbar-cursor">█</span>
      </div>
      <ul className="navbar-links">
        {links.map(link => (
          <li key={link}>
            <a href={`#${link}`} className="navbar-link">
              <span className="navbar-link-prefix">./</span>{link}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar
