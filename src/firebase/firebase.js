import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/database";
import "firebase/compat/auth";
import "firebase/compat/storage";


const firebaseConfig = {
	apiKey: "AIzaSyBu0rF44ZBmJVEb2g_dSJEIjyos3Ty6-nk",
	authDomain: "fir-25-03.firebaseapp.com",
	projectId: "fir-25-03",
	storageBucket: "fir-25-03.appspot.com",
	messagingSenderId: "175153513107",
	appId: "1:175153513107:web:03380d81fa1b05da250366",

	databaseURL: 'https://fir-25-03-default-rtdb.europe-west1.firebasedatabase.app/'
};



const app = firebase.initializeApp(firebaseConfig);
const firestore = firebase.firestore();
const database = firebase.database();
const auth = firebase.auth();
const storage = firebase.storage();

export { app, firestore, database, auth, storage }



