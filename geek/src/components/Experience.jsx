const EXPERIENCES = [
  {
    period: 'Feb 2024 – Present',
    title: 'Front End Developer / UI Designer',
    company: 'JUNO UX',
    type: 'dev',
    tech: ['React.js', 'Redux', 'Axios', 'AJAX', 'Django', 'GitHub', 'Figma', 'Scrum'],
    points: [
      'Developing a web app for start-up Ingenius focused on marketing campaign management',
      'Implemented user authentication module with secure sessions and access control',
      'Integrated API calls with Axios for efficient data handling',
      'Developed breadcrumb navigation and Kanban boards with real-time AJAX updates',
      'Close collaboration with Django back-end team, version control with GitHub',
    ],
  },
  {
    period: 'Dec 2023 – Feb 2024',
    title: 'Data Analyst / Back End Developer',
    company: 'Pulsar Logistics',
    type: 'data',
    tech: ['Excel', 'Visual Basic', 'Power BI'],
    points: [
      'Designed and implemented a primitive database for tracking company sales and expenses',
      'Created Power BI dashboards: trend analysis, loss/profit analysis, future scenario planning',
    ],
  },
  {
    period: 'Feb 2023 – Dec 2023',
    title: 'Front End Developer',
    company: 'HIFI BRIDGE',
    url: 'www.hifibridge.com',
    type: 'dev',
    tech: ['React.js', 'JavaScript', 'CSS3'],
    points: [
      'Front-end development of the official web app for monetary transactions and international currency exchange',
      'Delivered the third design iteration of the platform',
    ],
  },
  {
    period: 'Sept 2022 – Feb 2023',
    title: 'Front End Developer',
    company: 'TOKEN LIQUIDITY FOUNDATION',
    url: 'www.tokenliquidity.io',
    type: 'dev',
    tech: ['React.js', 'JavaScript', 'CSS3'],
    points: [
      'Front-end development of the official web app for improving liquidity through ERC-3643 security tokens',
      'Third design iteration produced for the platform',
    ],
  },
  {
    period: 'Mar 2022 – Present',
    title: 'Technical Office Manager',
    company: 'ICT FILTRATION',
    type: 'engineering',
    tech: ['Python', 'AutoCAD', 'SolidWorks', 'MasterCAM'],
    points: [
      'Designing industrial filtration elements for pharma, food, and construction sectors',
      'Creating 2D/3D drawings with AutoCAD and SolidWorks (advanced level)',
      'Developing Python tools for process optimization',
      'Managing quotes, cost estimates, and prototype validation',
    ],
  },
  {
    period: 'Jun 2021 – Sept 2023',
    title: 'Machining Area Manager',
    company: 'MEDIANET SOLUTIONS S.A',
    type: 'engineering',
    tech: ['GCODE', 'FANUC', 'SINUMERIK', 'CNC'],
    points: [
      'Managing a team of 11 people in the CNC Machining area',
      'Programming in GCODE on FANUC machinery (Enshu 400/500/600, ROMI, LK) and lathes',
      'Production management, quality assurance, and inventory control',
    ],
  },
  {
    period: 'Sept 2020 – Jun 2021',
    title: 'Quality Engineer',
    company: 'HYDRO ALUMINIUM EXTRUSION',
    type: 'engineering',
    tech: ['CNC', 'Werth 2D', 'Lab Testing', 'ISO'],
    points: [
      'Quality assurance in aluminum extrusion: Brinell hardness, tensile tests, dimensional control',
      'Programming and machining test samples with CNC technology',
      'Certification of safety chamfers for Class A safety profiles',
    ],
  },
  {
    period: 'Mar 2018 – Sept 2020',
    title: 'Engineer / Head of Packaging Dept.',
    company: 'HYDRO ALUMINIUM EXTRUSION',
    type: 'engineering',
    tech: ['SAP', 'KPI Analysis', 'Team Management', 'Logistics'],
    points: [
      'Managing teams of up to 36 people on rotating shifts (24h)',
      'Continuous improvement: packaging productivity, ergonomics, cost reduction',
      'Collaborated with IT dept. to develop barcode cart-tracking tools',
    ],
  },
]

const TYPE_COLOR = { dev: '#00ff41', data: '#ff9f43', engineering: '#00d4ff' }

function ExperienceItem({ exp }) {
  const color = TYPE_COLOR[exp.type]
  return (
    <div className="exp-item">
      <div className="exp-timeline">
        <div
          className="exp-dot"
          style={{ borderColor: color, boxShadow: `0 0 8px ${color}` }}
        ></div>
        <div className="exp-line"></div>
      </div>
      <div className="exp-content card">
        <div className="exp-header">
          <div>
            <h3 className="exp-title" style={{ color }}>{exp.title}</h3>
            <div className="exp-company">
              {exp.url
                ? <a href={`https://${exp.url}`} target="_blank" rel="noopener noreferrer">{exp.company}</a>
                : exp.company}
            </div>
          </div>
          <span className="exp-period">{exp.period}</span>
        </div>
        <ul className="exp-points">
          {exp.points.map((p, i) => (
            <li key={i} className="exp-point">
              <span className="exp-point-prefix">{'>'}</span>{p}
            </li>
          ))}
        </ul>
        <div className="exp-tech">
          {exp.tech.map(t => <span key={t} className="tag">{t}</span>)}
        </div>
      </div>
    </div>
  )
}

function Experience() {
  return (
    <section className="section" id="experience">
      <div className="section-header">
        <h2 className="section-title">git_log --work</h2>
        <p className="section-subtitle">Professional experience timeline</p>
        <div className="section-divider"></div>
      </div>
      <div className="exp-legend">
        <span className="legend-item">
          <span className="legend-dot" style={{ background: '#00ff41' }}></span> Dev
        </span>
        <span className="legend-item">
          <span className="legend-dot" style={{ background: '#ff9f43' }}></span> Data
        </span>
        <span className="legend-item">
          <span className="legend-dot" style={{ background: '#00d4ff' }}></span> Engineering
        </span>
      </div>
      <div className="exp-list">
        {EXPERIENCES.map((exp, i) => <ExperienceItem key={i} exp={exp} />)}
      </div>
    </section>
  )
}

export default Experience
