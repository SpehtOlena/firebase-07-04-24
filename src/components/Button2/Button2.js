import { Button } from 'antd'
import './Button2.css'

const Button2 = ({ children, onClick }) => {
	return (
		<Button onClick={onClick} children={children} />
	)
}
export default Button2