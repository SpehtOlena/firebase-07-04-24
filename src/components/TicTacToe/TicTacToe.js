import { useState } from "react";
import './TicTacToe.css'

const TicTacToe = () => {
	const [board, setBoard] = useState(Array(9).fill(null));
	const [xIsNext, setXIsNext] = useState(true);
	const winner = calculateWinner(board)

	function calculateWinner(squares) {
		const lines = [
			[0, 1, 2],
			[3, 4, 5],
			[6, 7, 8],
			[0, 3, 6],
			[1, 4, 7],
			[2, 5, 8],
			[0, 4, 8],
			[2, 4, 6]
		]
		for (let i = 0; i < lines.length; i++) {
			const [a, b, c] = lines[i]
			if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
				return squares[a]
			}
		}
		return null
	}

	function handleClick(i) {
		if (winner || board[i]) return;
		const newBoard = [...board];
		newBoard[i] = xIsNext ? "X" : "0";
		setBoard(newBoard);
		setXIsNext(!xIsNext)
	}

	function renderSquare(i) {
		return (
			<button onClick={() => handleClick(i)}>
				{board[i]}
			</button>
		)
	}

	const status = winner ? `Переможець: ${winner}` : `Черга гравця: ${xIsNext ? 'X' : "O"}`

	return (
		<div className={'game'}>
			<div className={'game-board'}>
				<div className={'board-row'}>
					{renderSquare(0)}
					{renderSquare(1)}
					{renderSquare(2)}
				</div>
				<div className={'board-row'}>
					{renderSquare(3)}
					{renderSquare(4)}
					{renderSquare(5)}
				</div>
				<div className={'board-row'}>
					{renderSquare(6)}
					{renderSquare(7)}
					{renderSquare(8)}
				</div>
			</div>
			<h1>
				{status}
			</h1>
		</div>
	)
}

export default TicTacToe;