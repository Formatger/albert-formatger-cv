import { useState, useEffect } from 'react'

const ROLES = [
  'Front-End Developer',
  'UI Designer',
  'Data Analyst',
  'Full Stack Dev',
]

function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [pausing, setPausing] = useState(false)

  useEffect(() => {
    if (pausing) return
    const currentRole = ROLES[roleIndex]
    const speed = isDeleting ? 45 : 95

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentRole.length) {
          setDisplayText(currentRole.slice(0, displayText.length + 1))
        } else {
          setPausing(true)
          setTimeout(() => { setPausing(false); setIsDeleting(true) }, 1800)
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1))
        } else {
          setIsDeleting(false)
          setRoleIndex(prev => (prev + 1) % ROLES.length)
        }
      }
    }, speed)

    return () => clearTimeout(timer)
  }, [displayText, isDeleting, roleIndex, pausing])

  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <div className="hero-meta">
          <span className="hero-meta-line">{'// Engineer | Developer | Data Analyst'}</span>
        </div>
        <h1 className="hero-name">
          <span className="hero-name-prefix">const </span>
          <span className="hero-name-text">ALBERT_FORMATGER</span>
          <span className="hero-name-eq"> = </span>
          <span className="hero-name-brace">{'{'}</span>
        </h1>
        <div className="hero-role-line">
          <span className="hero-key">{'  '}role</span>
          <span className="hero-comma">: </span>
          <span className="hero-string">"</span>
          <span className="hero-typing">{displayText}</span>
          <span className="hero-cursor blink">█</span>
          <span className="hero-string">"</span>
          <span className="hero-comma">,</span>
        </div>
        <div className="hero-location-line">
          <span className="hero-key">{'  '}location</span>
          <span className="hero-comma">: </span>
          <span className="hero-string">"Premià de Mar, Barcelona"</span>
          <span className="hero-comma">,</span>
        </div>
        <div className="hero-status-line">
          <span className="hero-key">{'  '}status</span>
          <span className="hero-comma">: </span>
          <span className="hero-string green">"open_to_opportunities"</span>
          <span className="hero-comma">,</span>
        </div>
        <div className="hero-close">{'}'}</div>
        <div className="hero-actions">
          <a href="#contact" className="btn btn-primary">$ contact --me</a>
          <a href="#experience" className="btn btn-outline">$ view --work</a>
        </div>
      </div>

      <div className="hero-terminal">
        <div className="terminal-bar">
          <span className="terminal-dot red"></span>
          <span className="terminal-dot yellow"></span>
          <span className="terminal-dot green"></span>
          <span className="terminal-title">albert@portfolio:~</span>
        </div>
        <div className="terminal-body">
          <div className="terminal-line">
            <span className="terminal-prompt">❯</span>
            <span className="terminal-cmd"> whoami</span>
          </div>
          <div className="terminal-output">albert_formatger</div>
          <div className="terminal-line">
            <span className="terminal-prompt">❯</span>
            <span className="terminal-cmd"> cat stack.txt</span>
          </div>
          <div className="terminal-output">React.js · Next.js · Python</div>
          <div className="terminal-output">JavaScript · HTML5 · CSS3</div>
          <div className="terminal-output">MySQL · GitHub · Figma</div>
          <div className="terminal-line">
            <span className="terminal-prompt">❯</span>
            <span className="terminal-cmd"> git log --oneline -3</span>
          </div>
          <div className="terminal-output">a1f2c3d 🚀 FE Dev @ Juno UX (2024-present)</div>
          <div className="terminal-output">d4e5f6g 📊 Data Analyst @ Pulsar (2023)</div>
          <div className="terminal-output">7h8i9j0 💻 FE Dev @ HIFI Bridge (2023)</div>
          <div className="terminal-line">
            <span className="terminal-prompt">❯</span>
            <span className="terminal-cursor blink">█</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
