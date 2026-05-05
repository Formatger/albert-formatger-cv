import avatarImg from '../assets/avatar.png'

export default function CVPrint() {
  return (
    <div id="cv-print">
      <div className="cvp-page">

        <div className="cvp-generated">CV generated with albertformatger.com</div>

        <header className="cvp-header">
          <img src={avatarImg} className="cvp-avatar" alt="Albert Formatger" />
          <div className="cvp-header-info">
            <h1 className="cvp-name">Albert Formatger</h1>
            <p className="cvp-subtitle">Software Developer · Industrial Engineer</p>
            <div className="cvp-contact-row">
              <span>albert_furma@hotmail.com</span>
              <span>+34 638 137 451</span>
              <span>linkedin.com/in/albertformatger</span>
              <span>Portfolio: albertformatger.com</span>
              <span>Premià de Mar, Barcelona</span>
            </div>
          </div>
        </header>

        <div className="cvp-body">

          <aside className="cvp-sidebar">
            <section className="cvp-section">
              <h2 className="cvp-section-title">Technical Skills</h2>
              <div className="cvp-skills-group">
                <h3 className="cvp-skills-group-title">Frontend</h3>
                <ul>
                  <li>React.js — 85%</li>
                  <li>JavaScript — 82%</li>
                  <li>HTML5 / CSS3 — 90%</li>
                  <li>Next.js — 72%</li>
                </ul>
              </div>
              <div className="cvp-skills-group">
                <h3 className="cvp-skills-group-title">Backend</h3>
                <ul>
                  <li>Python — 74%</li>
                  <li>Django — 65%</li>
                  <li>MySQL — 65%</li>
                </ul>
              </div>
              <div className="cvp-skills-group">
                <h3 className="cvp-skills-group-title">Tools & Other</h3>
                <ul>
                  <li>GitHub, Figma</li>
                  <li>Power BI — 70%</li>
                  <li>AutoCAD / SolidWorks — 85%</li>
                  <li>AI Agents — 78%</li>
                </ul>
              </div>
            </section>

            <section className="cvp-section">
              <h2 className="cvp-section-title">Soft Skills</h2>
              <ul className="cvp-soft-list">
                <li>Team Management &amp; Leadership</li>
                <li>Problem-Solving &amp; Analysis</li>
                <li>Proactivity &amp; Resilience</li>
                <li>Continuous Improvement</li>
                <li>Multitasking</li>
                <li>Negotiation</li>
              </ul>
            </section>

            <section className="cvp-section">
              <h2 className="cvp-section-title">Languages</h2>
              <ul className="cvp-lang-list">
                <li><strong>Spanish</strong> — Native</li>
                <li><strong>Catalan</strong> — Native</li>
                <li><strong>English</strong> — Professional</li>
              </ul>
            </section>

            <section className="cvp-section">
              <h2 className="cvp-section-title">Software</h2>
              <ul className="cvp-soft-list">
                <li>VS Code, GitHub, Figma, Vercel, Render</li>
                <li>Power BI, MS Office</li>
                <li>SolidWorks, AutoCAD, MasterCAM</li>
                <li>Matlab, R, Maple</li>
                <li>Claude AI, ChatGPT</li>
              </ul>
            </section>
          </aside>

          <main className="cvp-main">
            <section className="cvp-section">
              <h2 className="cvp-section-title">Professional Summary</h2>
              <p className="cvp-summary">
                Developer with 8+ years of professional experience across multiple engineering disciplines,
                including 3+ years in Front-End development and 6+ years in industrial engineering.
                Strong background combining software development (React.js, Python, Django) with advanced
                CAD design (SolidWorks, AutoCAD) and team management. Degree in Mechanical Engineering
                from UPC Barcelona. Fluent in Spanish, Catalan and English.
              </p>
            </section>

            <section className="cvp-section">
              <h2 className="cvp-section-title">Professional Experience</h2>

              {[
                {
                  period: 'Feb 2024 – Present',
                  title: 'Front End Developer / UI Designer',
                  company: 'JUNO UX',
                  tech: 'React.js · Redux · Axios · Django · Figma · Scrum',
                  points: [
                    'Developing a web app for start-up Ingenius focused on marketing campaign management',
                    'Implemented user authentication module with secure sessions and access control',
                    'Integrated API calls with Axios; developed Kanban boards with real-time AJAX updates',
                  ],
                },
                {
                  period: 'Dec 2023 – Feb 2024',
                  title: 'Data Analyst / Back End Developer',
                  company: 'Pulsar Logistics',
                  tech: 'Excel · Visual Basic · Power BI',
                  points: [
                    'Designed a database for tracking company sales and expenses',
                    'Created Power BI dashboards: trend analysis, loss/profit analysis, future scenarios',
                  ],
                },
                {
                  period: 'Feb 2023 – Dec 2023',
                  title: 'Front End Developer',
                  company: 'HIFI BRIDGE',
                  tech: 'React.js · JavaScript · CSS3',
                  points: [
                    'Front-end development of the official web app for monetary transactions and international currency exchange',
                  ],
                },
                {
                  period: 'Sept 2022 – Feb 2023',
                  title: 'Front End Developer',
                  company: 'TOKEN LIQUIDITY FOUNDATION',
                  tech: 'React.js · JavaScript · CSS3',
                  points: [
                    'Front-end development of the official web app for improving liquidity through ERC-3643 security tokens',
                  ],
                },
                {
                  period: 'Mar 2022 – Present',
                  title: 'Technical Office Manager',
                  company: 'ICT FILTRATION',
                  tech: 'Python · AutoCAD · SolidWorks · MasterCAM',
                  points: [
                    'Designing industrial filtration elements for pharma, food, and construction sectors',
                    'Developing Python tools for process optimization; managing quotes and prototype validation',
                  ],
                },
                {
                  period: 'Jun 2021 – Sept 2023',
                  title: 'Machining Area Manager',
                  company: 'MEDIANET SOLUTIONS S.A',
                  tech: 'GCODE · FANUC · SINUMERIK · CNC',
                  points: [
                    'Managing a team of 11 people in the CNC Machining area',
                    'Programming in GCODE on FANUC machinery; production management and quality assurance',
                  ],
                },
                {
                  period: 'Sept 2020 – Jun 2021',
                  title: 'Quality Engineer',
                  company: 'HYDRO ALUMINIUM EXTRUSION',
                  tech: 'CNC · Werth 2D · Lab Testing · ISO',
                  points: [
                    'Quality assurance in aluminum extrusion: Brinell hardness, tensile tests, dimensional control',
                    'Certification of safety chamfers for Class A safety profiles',
                  ],
                },
                {
                  period: 'Mar 2018 – Sept 2020',
                  title: 'Engineer / Head of Packaging Dept.',
                  company: 'HYDRO ALUMINIUM EXTRUSION',
                  tech: 'SAP · KPI Analysis · Team Management · Logistics',
                  points: [
                    'Managing teams of up to 36 people on rotating shifts (24h)',
                    'Continuous improvement in packaging productivity, ergonomics and cost reduction',
                  ],
                },
              ].map((exp, i) => (
                <div key={i} className="cvp-exp-item">
                  <div className="cvp-exp-header">
                    <div>
                      <strong className="cvp-exp-title">{exp.title}</strong>
                      <span className="cvp-exp-company"> — {exp.company}</span>
                    </div>
                    <span className="cvp-exp-period">{exp.period}</span>
                  </div>
                  <p className="cvp-exp-tech">{exp.tech}</p>
                  <ul className="cvp-exp-points">
                    {exp.points.map((p, j) => <li key={j}>{p}</li>)}
                  </ul>
                </div>
              ))}
            </section>

            <section className="cvp-section">
              <h2 className="cvp-section-title">Education</h2>
              {[
                {
                  period: 'Mar 2022 – Present',
                  title: 'Programming & Web Development',
                  institution: 'IT Academy Barcelona ACTIVA & Udemy',
                  detail: 'Python, React.js, Next.js, JavaScript, HTML5, CSS3, MySQL',
                },
                {
                  period: '2022',
                  title: 'Front End Developer Bootcamp',
                  institution: 'Ironhack Barcelona',
                  detail: 'HTML5, CSS3, JavaScript, React.js, Node.js',
                },
                {
                  period: '2013 – 2017',
                  title: "Bachelor's Degree in Mechanical Engineering",
                  institution: 'Universitat Politècnica de Catalunya (UPC) — EUETIB Barcelona',
                  detail: 'Final project: optical systems to study combustion in dual-fuel engines (APPlus R&D)',
                },
                {
                  period: '2011 – 2013',
                  title: 'Scientific-Technical A-Level (Bachillerato)',
                  institution: 'Escola Pía Santa Anna de Mataró',
                  detail: '',
                },
              ].map((edu, i) => (
                <div key={i} className="cvp-edu-item">
                  <div className="cvp-exp-header">
                    <strong className="cvp-exp-title">{edu.title}</strong>
                    <span className="cvp-exp-period">{edu.period}</span>
                  </div>
                  <div className="cvp-exp-company">{edu.institution}</div>
                  {edu.detail && <p className="cvp-exp-tech">{edu.detail}</p>}
                </div>
              ))}
            </section>
          </main>

        </div>
      </div>

      </div>
  )
}
