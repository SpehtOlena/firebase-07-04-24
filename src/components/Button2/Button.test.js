import { fireEvent, render } from "@testing-library/react";
import Button2 from "./Button2";
import '@testing-library/jest-dom'

test("Перевірка натискання на кнопку", () => {
	const onClick = jest.fn();
	const { getByText } = render(<Button2 onClick={onClick} children={'Click me!'} />);
	const button = getByText('Click me!');
	fireEvent.click(button)
	expect(onClick).toHaveBeenCalledTimes(1)
})

test("Перевірка тексту кнопки", () => {
	const { getByText } = render(<Button2>Click me!</Button2>);
	const button = getByText('Click me!');
	expect(button).toBeInTheDocument()
})