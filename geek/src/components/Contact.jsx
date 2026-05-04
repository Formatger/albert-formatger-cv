const CONTACT_ITEMS = [
  { key: 'email', value: 'albert_furma@hotmail.com', href: 'mailto:albert_furma@hotmail.com', display: '"albert_furma@hotmail.com"' },
  { key: 'phone', value: '638 137 451', href: 'tel:+34638137451', display: '"638 137 451"' },
  { key: 'linkedin', value: '/in/albertformatger', href: 'https://www.linkedin.com/in/albertformatger', display: '"/in/albertformatger"' },
  { key: 'github', value: 'github.com/Formatger', href: 'https://www.github.com/Formatger', display: '"github.com/Formatger"' },
  { key: 'website', value: 'www.albertformatger.com', href: 'https://www.albertformatger.com', display: '"www.albertformatger.com"' },
  { key: 'location', value: 'Premià de Mar, Barcelona', href: null, display: '"Premià de Mar, Barcelona"' },
]

function Contact() {
  return (
    <section className="section contact-section" id="contact">
      <div className="section-header">
        <h2 className="section-title">contact.sh</h2>
        <p className="section-subtitle">{"Let's build something together"}</p>
        <div className="section-divider"></div>
      </div>
      <div className="contact-grid">
        <div className="contact-code-block">
          {CONTACT_ITEMS.map(item => (
            <div key={item.key} className="contact-line">
              <span className="code-key">{item.key}</span>
              <span className="code-sep">: </span>
              {item.href
                ? <a href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" className="code-string">{item.display}</a>
                : <span className="code-string">{item.display}</span>
              }
            </div>
          ))}
        </div>

        <div className="contact-terminal">
          <div className="terminal-bar">
            <span className="terminal-dot red"></span>
            <span className="terminal-dot yellow"></span>
            <span className="terminal-dot green"></span>
            <span className="terminal-title">hire_albert.sh</span>
          </div>
          <div className="terminal-body">
            <div className="terminal-line">
              <span className="terminal-prompt">❯</span>
              <span className="terminal-cmd"> ./hire_albert --now</span>
            </div>
            <div className="terminal-output green">✓ Available for new projects</div>
            <div className="terminal-output green">✓ Open to full-time positions</div>
            <div className="terminal-output green">✓ Remote or on-site (Barcelona)</div>
            <div className="terminal-output green">✓ Quick to onboard & self-motivated</div>
            <div className="terminal-line" style={{ marginTop: '8px' }}>
              <span className="terminal-prompt">❯</span>
              <span className="terminal-cursor blink">█</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
