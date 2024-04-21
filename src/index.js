import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider, useSelector } from 'react-redux';
import { rrfProps, store } from './redux/store';
import { routes } from './routes';
import { ReactReduxFirebaseProvider, isLoaded } from 'react-redux-firebase';
import { RouterProvider } from 'react-router-dom';



const root = ReactDOM.createRoot(document.getElementById('root'));

function AuthIsLoaded({ children }) {
	const auth = useSelector(state => state.firebase.auth)
	if (!isLoaded(auth)) return <div>Hello</div>
	return children
}
root.render(
	<Provider store={store}>
		<ReactReduxFirebaseProvider {...rrfProps}>
			<AuthIsLoaded>
				<RouterProvider router={routes} />
			</AuthIsLoaded>
		</ReactReduxFirebaseProvider>
	</Provider>
);

