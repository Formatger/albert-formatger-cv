import { useState, useEffect } from 'react'

const WINNING_COMBOS = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8],
  [0, 3, 6], [1, 4, 7], [2, 5, 8],
  [0, 4, 8], [2, 4, 6],
]

function TicTacToe() {
  const [values, setValues] = useState(Array(9).fill(null))
  const [turn, setTurn] = useState(0)
  const [winner, setWinner] = useState('')
  const [winLine, setWinLine] = useState([])
  const [score, setScore] = useState({ winX: 0, winO: 0 })

  useEffect(() => {
    if (!values.some(v => v !== null)) return

    for (const combo of WINNING_COMBOS) {
      const [a, b, c] = combo
      if (values[a] && values[a] === values[b] && values[a] === values[c]) {
        const w = values[a]
        setWinner(w)
        setWinLine(combo)
        setScore(prev => ({
          ...prev,
          [w === 'X' ? 'winX' : 'winO']: prev[w === 'X' ? 'winX' : 'winO'] + 1,
        }))
        return
      }
    }

    if (values.every(v => v !== null)) {
      setWinner('draw')
    }
  }, [values])

  const handleClick = (i) => {
    if (values[i] || winner) return
    const next = [...values]
    next[i] = turn % 2 === 0 ? 'X' : 'O'
    setValues(next)
    setTurn(t => t + 1)
  }

  const reset = () => {
    setValues(Array(9).fill(null))
    setTurn(0)
    setWinner('')
    setWinLine([])
  }

  const currentPlayer = turn % 2 === 0 ? 'X' : 'O'

  return (
    <div className="ttt-container">
      <div className="ttt-score">
        <div className="ttt-score-item x">
          <span className="ttt-score-label">player_X</span>
          <span className="ttt-score-value">{score.winX}</span>
        </div>
        <div className="ttt-score-divider">vs</div>
        <div className="ttt-score-item o">
          <span className="ttt-score-label">player_O</span>
          <span className="ttt-score-value">{score.winO}</span>
        </div>
      </div>

      <div className="ttt-status">
        {winner === 'draw'
          ? <span className="ttt-status-draw">// draw — no winner</span>
          : winner
          ? <span className="ttt-status-win">player_{winner} wins! 🏆</span>
          : <span className="ttt-status-turn">
              <span className="ttt-prompt">❯</span> player_{currentPlayer} turn
            </span>
        }
      </div>

      <div className="ttt-grid">
        {values.map((val, i) => (
          <button
            key={i}
            className={[
              'ttt-cell',
              val ? val : '',
              winLine.includes(i) ? 'win' : '',
              !val && !winner ? 'clickable' : '',
            ].join(' ').trim()}
            onClick={() => handleClick(i)}
            disabled={!!val || !!winner}
          >
            {val}
          </button>
        ))}
      </div>

      <button
        className={`ttt-reset btn ${winner ? 'btn-primary' : 'btn-outline'}`}
        onClick={reset}
      >
        $ reset --game
      </button>
    </div>
  )
}

export default TicTacToe
