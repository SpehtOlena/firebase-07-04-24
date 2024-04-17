import { getFirebase, isEmpty, isLoaded, useFirestoreConnect } from 'react-redux-firebase'
import './App.css'
import { useSelector } from 'react-redux'
import Authentication from './components/Authentication/Authentication'
import { Button, Divider } from 'antd'
import Button2 from './components/Button2/Button2';
import GuessNumberGame from './components/GuessNumberGame/GuessNumberGame'
import TicTacToe from './components/TicTacToe/TicTacToe'


const App = () => {
	useFirestoreConnect([
		{ collection: 'users' }
	])
	const auth = useSelector(state => state.firebase.auth)
	const data = useSelector(state => state.firestore.ordered.users);
	return (
		<div>
			<Divider>TICTACTOE</Divider>
			<TicTacToe />

			<Divider>Testing</Divider>
			<GuessNumberGame />


			<Button2 onClick={() => { alert('Click') }} children={'Test'} />


			<Divider>Firebase</Divider>
			{
				isEmpty(auth) &&
				<Authentication />
			}
			{
				!isEmpty(auth) &&
				<Button onClick={() => getFirebase().auth().signOut()}>EXIT</Button>
			}
		</div>
	)
}
export default App