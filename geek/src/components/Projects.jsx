import { useState } from 'react'
import TicTacToe from './TicTacToe'

const PROJECTS = [
  {
    id: 'soundsheet',
    name: 'SoundSheet',
    url: 'https://www.soundsheet.es',
    displayUrl: 'www.soundsheet.es',
    description: 'Web application developed from scratch. Full project owned and built by Albert Formatger.',
    tech: ['React.js', 'JavaScript', 'CSS3', 'HTML5'],
    status: 'live',
  },
  {
    id: 'hifibridge',
    name: 'HIFI BRIDGE',
    url: 'https://www.hifibridge.com',
    displayUrl: 'www.hifibridge.com',
    description: 'Front-end development of the official web application focused on monetary transactions and international currency exchange, avoiding high fees and delays associated with conventional banking. Third design iteration produced.',
    tech: ['React.js', 'JavaScript', 'CSS3', 'HTML5'],
    status: 'live',
  },
  {
    id: 'tokenliquidity',
    name: 'Token Liquidity Foundation',
    url: 'https://www.tokenliquidity.io',
    displayUrl: 'www.tokenliquidity.io',
    description: 'Front-end development of the official web application aimed at improving liquidity and business opportunities through ERC-3643 security tokens. Third design iteration produced.',
    tech: ['React.js', 'JavaScript', 'CSS3', 'HTML5'],
    status: 'live',
  },
  {
    id: 'tictactoe',
    name: 'Tic Tac Toe',
    url: null,
    displayUrl: null,
    description: 'Interactive 3-in-a-row game built with React. Includes turn management, win/draw detection and score tracking across multiple rounds. Play directly below.',
    tech: ['React.js', 'JavaScript', 'CSS3', 'Context API'],
    status: 'playable',
    interactive: true,
  },
]

function ProjectCard({ project }) {
  const [gameOpen, setGameOpen] = useState(false)

  return (
    <div className="project-card card">
      <div className="project-header">
        <div className="project-title-row">
          <h3 className="project-name">{project.name}</h3>
          <span className={`project-status-badge ${project.status}`}>
            <span className="project-status-dot"></span>
            {project.status}
          </span>
        </div>
        {project.displayUrl && (
          <a href={project.url} target="_blank" rel="noopener noreferrer" className="project-url">
            {project.displayUrl}
          </a>
        )}
      </div>

      <p className="project-description">{project.description}</p>

      <div className="project-tech">
        {project.tech.map(t => <span key={t} className="tag">{t}</span>)}
      </div>

      <div className="project-actions">
        {project.interactive ? (
          <button
            className={`btn ${gameOpen ? 'btn-outline' : 'btn-primary'} project-preview-btn${gameOpen ? ' active' : ''}`}
            onClick={() => setGameOpen(o => !o)}
          >
            {gameOpen ? '✕ close game' : '▶ play game'}
          </button>
        ) : (
          <a href={project.url} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            ↗ open site
          </a>
        )}
      </div>

      {project.interactive && gameOpen && (
        <div className="project-game">
          <div className="project-game-bar">
            <span className="terminal-dot red"></span>
            <span className="terminal-dot yellow"></span>
            <span className="terminal-dot green"></span>
            <span className="project-game-title">// tic-tac-toe.jsx — interactive</span>
          </div>
          <TicTacToe />
        </div>
      )}
    </div>
  )
}

function Projects() {
  return (
    <section className="section" id="projects">
      <div className="section-header">
        <h2 className="section-title">projects.ls</h2>
        <p className="section-subtitle">Personal and freelance projects</p>
        <div className="section-divider"></div>
      </div>
      <div className="projects-list">
        {PROJECTS.map(p => <ProjectCard key={p.id} project={p} />)}
      </div>
    </section>
  )
}

export default Projects
