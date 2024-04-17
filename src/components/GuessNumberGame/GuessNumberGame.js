import { useState } from "react";
import Button2 from '../Button2/Button2'

const GuessNumberGame = () => {
	const [targetNumber, setTargetNumber] = useState(generateRandomNumber());
	const [userInput, setUserInput] = useState('');
	const [message, setMessage] = useState('');
	const [attempts, setAttempts] = useState(0);

	function generateRandomNumber() {
		return Math.floor(Math.random() * 100) + 1
	}

	function handleInputChange(event) {
		setUserInput(event.target.value)
	}


	function handleGuess() {
		const guess = parseInt(userInput, 10)
		if (isNaN(guess)) {
			setMessage('Введіть коректне число')
		} else {
			setAttempts(attempts + 1)
			if (guess === targetNumber) {
				setMessage(`Ви вгадали число ${targetNumber} за ${attempts + 1} спроб!`)
			} else if (guess < targetNumber) {
				setMessage('Спробуйте більше число!')
			} else {
				setMessage('Спробуйте менше число!')
			}
		}

	}

	return (
		<div>
			<h1>Вгадайте число від 1 до 100</h1>
			<input
				type={'number'}
				placeholder={'Введіть число!'}
				value={userInput}
				onChange={handleInputChange}
			/>
			<Button2 onClick={handleGuess}>Перевірити!</Button2>
			<p>
				{message}
			</p>
		</div>
	)
}

export default GuessNumberGame