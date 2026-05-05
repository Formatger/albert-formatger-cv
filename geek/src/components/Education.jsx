const EDUCATION = [
  {
    period: 'Mar 2022 – Present',
    title: 'Programming & Web Development',
    institution: 'IT Academy Barcelona ACTIVA & Udemy',
    icon: '</>',
    details: [
      'Python, React.js, Next.js, JavaScript, HTML5, CSS3, MySQL',
    ],
  },
  {
    period: '2022',
    title: 'Front End Developer Bootcamp',
    institution: 'Ironhack Barcelona',
    icon: '</>',
    details: [
      'HTML5, CSS3, JavaScript, React.js, Node.js',
    ],
  },
  {
    period: '2013 – 2017',
    title: "Bachelor's Degree in Mechanical Engineering",
    institution: 'Universitat Politècnica de Catalunya (UPC)',
    icon: '[ ]',
    details: [
      'EUETIB – School of Technical Engineering of Barcelona',
      'Final project: optical systems to study combustion in dual-fuel engines (APPlus R&D)',
    ],
  },
  {
    period: '2011 – 2013',
    title: 'Scientific-Technical A-Level (Bachillerato)',
    institution: 'Escola Pía Santa Anna de Mataró',
    icon: '{ }',
    details: [
      'Final project: construction of a rechargeable water battery',
    ],
  },
]

function Education() {
  return (
    <section className="section edu-section" id="education">
      <div className="section-header">
        <h2 className="section-title">education.log</h2>
        <p className="section-subtitle">Academic background and certifications</p>
        <div className="section-divider"></div>
      </div>
      <div className="edu-list">
        {EDUCATION.map((edu, i) => (
          <div key={i} className="edu-item card">
            <div className="edu-period">{edu.period}</div>
            <h3 className="edu-title">
              <span className="edu-icon" style={{ color: 'var(--cyan)', marginRight: '8px' }}>{edu.icon}</span>
              {edu.title}
            </h3>
            <div className="edu-institution">{edu.institution}</div>
            <ul className="edu-details">
              {edu.details.map((d, j) => (
                <li key={j} className="edu-detail">
                  <span className="edu-detail-prefix">$</span> {d}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Education
