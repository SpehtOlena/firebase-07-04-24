import { useForm } from 'antd/es/form/Form';
import './Authentication.css'
import { getFirebase } from "react-redux-firebase";
import { Button, Form, Input, Space } from 'antd';



const Authentication = () => {
	const usersCollection = getFirebase().firestore().collection('users')

	const registerUserWithEmailAndPassword = async (email, password) => {
		try {
			const userCredential = await getFirebase()
				.auth()
				.createUserWithEmailAndPassword(email, password)
			await userCredential.user.updateProfile({
				displayName: ''
			})
			const newUser = {
				email: userCredential.user.email,
				displayName: '',
				status: 'online',
				photoURL: userCredential.user.photoURL,
				role: 'user'
			}
			await usersCollection.doc(userCredential.user.uid).set(newUser)
		} catch (error) {
			console.log(error);
		}
	}

	const loginWithEmailAndPassword = async (email, password) => {
		try {
			const userCredential = await getFirebase()
				.auth()
				.signInWithEmailAndPassword(email, password);
			await usersCollection.doc(userCredential.user.uid).update({
				status: 'online'
			})
		} catch (e) {
			console.log(e);
		}
	}

	const signInWithProvider = async (provider) => {
		try {
			const userCredential = await getFirebase()
				.login({
					provider,
					type: "popup"
				})
			const { uid, displayName, photoURL } = userCredential.user
			await usersCollection.doc(uid).update({
				status: 'online',
				displayName,
				photoURL
			})
		} catch (e) {
			console.log(e);
		}
	}

	const [form] = useForm();
	const onFinish = async (values) => {
		await registerUserWithEmailAndPassword(values.email, values.password)
	}
	return (
		<div onKeyDown={(event) => {
			if (event.key === 'Enter') form.submit()
		}}>
			<Form
				form={form}
				name={'basic'}
				onFinish={onFinish}
			>
				<Form.Item name={'email'} rules={[{ required: true, type: 'email' }]}>
					<Input />
				</Form.Item>
				<Form.Item name={'password'} rules={[{ required: true, min: 6 }]}>
					<Input.Password />
				</Form.Item>
			</Form>
			< Space align={'start'}>
				<Button onClick={() => signInWithProvider('google')}>Google</Button>
				<Form.Item>
					<Button onClick={form.submit}>Submit</Button>
				</Form.Item>
			</ Space>
		</div>
	)
}
export default Authentication