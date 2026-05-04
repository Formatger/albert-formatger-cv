import avatarSvg from '../assets/avatar.svg'

function About() {
  return (
    <section className="section" id="about">
      <div className="section-header">
        <h2 className="section-title">about_me</h2>
        <p className="section-subtitle">Developer with a multidisciplinary background</p>
        <div className="section-divider"></div>
      </div>
      <div className="about-grid">
        <div className="about-avatar">
          <div className="avatar-container">
            <div className="avatar-placeholder">
              <img src={avatarSvg} alt="Albert Formatger" className="avatar-img" />
            </div>
            <div className="avatar-status">
              <span className="status-dot"></span>
              <span>available_for_hire</span>
            </div>
          </div>
        </div>
        <div className="about-text">
          <div className="about-code-block">
            <span className="code-comment">{'/**'}</span>
            <span className="code-comment">{' * Developer with 8+ years of professional experience.'}</span>
            <span className="code-comment">{' * 3+ years Front-End  |  6+ years Industrial Engineering'}</span>
            <span className="code-comment">{' */'}</span>
          </div>
          <p className="about-p">
            I'm a developer with over <span className="highlight">8 years of professional experience</span> across
            multiple engineering disciplines, including more than <span className="highlight">3 years in Front-End
            development</span> and over 6 years in the industrial sector, working as an engineer in technical office environments.
          </p>
          <p className="about-p">
            My background combines hands-on experience in metallurgy — specializing in aluminum extrusion and CNC machining —
            and <span className="highlight">industrial filtration</span>, with strong expertise in{' '}
            <span className="highlight">3D design using CAD tools</span> for mechanical development and engineering projects.
          </p>
          <p className="about-p">
            I hold a degree from <span className="highlight">UPC Barcelona</span> with strong interest in both
            Back-End & Front-End development, as well as Data Science.
          </p>
          <p className="about-p">
            Fluent in{' '}
            <span className="tag">Spanish</span>{' '}
            <span className="tag">Catalan</span>{' '}
            with a good command of <span className="tag">English</span>.
            Versatile, self-motivated, with a strong ability to adapt and continuously learn.
          </p>
          <div className="about-stats">
            <div className="stat-item">
              <span className="stat-value">8+</span>
              <span className="stat-label">years_experience</span>
            </div>
            <div className="stat-item">
              <span className="stat-value">3+</span>
              <span className="stat-label">years_frontend</span>
            </div>
            <div className="stat-item">
              <span className="stat-value">15+</span>
              <span className="stat-label">technologies</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
