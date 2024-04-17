import { fireEvent, render } from "@testing-library/react"
import GuessNumberGame from "./GuessNumberGame"
import '@testing-library/jest-dom'

test('гра вгадування працює', () => {
	const { getByText, getByPlaceholderText } = render(<GuessNumberGame />)
	const input = getByPlaceholderText('Введіть число!')
	const button = getByText('Перевірити!')
	fireEvent.change(input, { target: { value: '50' } })
	fireEvent.click(button)
	const message = getByText(/Ви вгадали число 50 за \d+ спроб!/)
	expect(message).toBeInTheDocument()
})


test('Повідомлення про некоректне число', () => {
	const { getByText, getByPlaceholderText } = render(<GuessNumberGame />)
	const input = getByPlaceholderText('Введіть число!')
	const button = getByText('Перевірити!')
	fireEvent.change(input, { target: { value: "abs" } })
	fireEvent.click(button)
	const message = getByText('Введіть коректне число')
	expect(message).toBeInTheDocument()
})
