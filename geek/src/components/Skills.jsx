const TECH_SKILLS = [
  { name: 'React.js', level: 85, category: 'frontend' },
  { name: 'JavaScript', level: 82, category: 'frontend' },
  { name: 'HTML5 / CSS3', level: 90, category: 'frontend' },
  { name: 'Next.js', level: 72, category: 'frontend' },
  { name: 'Python', level: 74, category: 'backend' },
  { name: 'Django', level: 65, category: 'backend' },
  { name: 'MySQL', level: 65, category: 'backend' },
  { name: 'GitHub', level: 80, category: 'tools' },
  { name: 'Figma', level: 75, category: 'tools' },
  { name: 'Power BI', level: 70, category: 'data' },
  { name: 'AutoCAD / SolidWorks', level: 85, category: 'engineering' },
  { name: 'AI Agents', level: 78, category: 'ai' },
]

const SOFT_SKILLS = [
  'Team Management', 'Leadership', 'Analysis & Decision-Making',
  'Proactivity', 'Business Resilience', 'Continuous Improvement',
  'Negotiation', 'People Skills', 'Problem-Solving', 'Creativity',
  'Multitasking', 'Willingness to Learn',
]

const SOFTWARE = [
  'VS Code', 'GitHub', 'Figma', 'Power BI', 'GIMP',
  'MS Office (Word, Excel, PowerPoint, Outlook, Teams)',
  'SolidWorks 3D', 'AutoCAD', 'MasterCAM',
  'Matlab', 'R', 'Maple', 'Claude AI', 'ChatGPT',
]

const CAT_COLOR = {
  frontend: '#00ff41',
  backend: '#00d4ff',
  tools: '#f9ca24',
  data: '#ff9f43',
  engineering: '#a29bfe',
  ai: '#ff6eb4',
}

function SkillBar({ name, level, category }) {
  const color = CAT_COLOR[category]
  return (
    <div className="skill-bar">
      <div className="skill-bar-header">
        <span className="skill-name">{name}</span>
        <span className="skill-level" style={{ color }}>{level}%</span>
      </div>
      <div className="skill-bar-track">
        <div
          className="skill-bar-fill"
          style={{ width: `${level}%`, background: `linear-gradient(90deg, ${color}, ${color}66)` }}
        ></div>
      </div>
    </div>
  )
}

function Skills() {
  return (
    <section className="section skills-section" id="skills">
      <div className="section-header">
        <h2 className="section-title">skills.json</h2>
        <p className="section-subtitle">Technical proficiency and soft skills</p>
        <div className="section-divider"></div>
      </div>
      <div className="skills-grid">
        <div className="skills-tech">
          <h3 className="skills-category-title">
            <span className="code-key">"technical"</span>: [
          </h3>
          <div className="skill-bars">
            {TECH_SKILLS.map(s => <SkillBar key={s.name} {...s} />)}
          </div>
          <div className="skills-close">]</div>
        </div>

        <div className="skills-soft">
          <h3 className="skills-category-title">
            <span className="code-key">"soft_skills"</span>: [
          </h3>
          <div className="soft-skills-grid">
            {SOFT_SKILLS.map(s => (
              <div key={s} className="soft-skill-tag">
                <span className="soft-skill-prefix">+</span> {s}
              </div>
            ))}
          </div>
          <div className="skills-close">]</div>

          <h3 className="skills-category-title" style={{ marginTop: '28px' }}>
            <span className="code-key">"software"</span>: [
          </h3>
          <div className="software-tags">
            {SOFTWARE.map(s => <span key={s} className="tag">{s}</span>)}
          </div>
          <div className="skills-close">]</div>
        </div>
      </div>
    </section>
  )
}

export default Skills
