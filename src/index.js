import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider, useSelector } from 'react-redux';
import { rrfProps, store } from './redux/store';
import { ReactReduxFirebaseProvider, isLoaded } from 'react-redux-firebase';
import Icon from './components/Icon/Icon';



const root = ReactDOM.createRoot(document.getElementById('root'));

function AuthIsLoaded({ children }) {
	const auth = useSelector(state => state.firebase.auth)
	if (!isLoaded(auth)) return <Icon />
	return children
}
root.render(
	<Provider store={store}>
		<ReactReduxFirebaseProvider {...rrfProps}>
			<AuthIsLoaded>
				<App />
			</AuthIsLoaded>
		</ReactReduxFirebaseProvider>
	</Provider>
);

