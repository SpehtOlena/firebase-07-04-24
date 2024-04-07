import { getFirebase, isEmpty, isLoaded, useFirestoreConnect } from 'react-redux-firebase'
import './App.css'
import { useSelector } from 'react-redux'
import Authentication from './components/Authentication/Authentication'
import { Button } from 'antd'


const App = () => {
	useFirestoreConnect([
		{ collection: 'users' }
	])
	const auth = useSelector(state => state.firebase.auth)
	const data = useSelector(state => state.firestore.ordered.users);
	return (
		<div>
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