// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyC6Rh5GsXLm-SUuJgEx4fiKTZFF3nJQv7o',
	authDomain: 'crwn-clothing-db-81e5e.firebaseapp.com',
	projectId: 'crwn-clothing-db-81e5e',
	storageBucket: 'crwn-clothing-db-81e5e.appspot.com',
	messagingSenderId: '451011137506',
	appId: '1:451011137506:web:94ba490e4518a8ab26b3bb',
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
	prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
	const userDocRef = doc(db, 'users', userAuth.uid);

	console.log(userDocRef);

	const userSnapshot = await getDoc(userDocRef);
	console.log(userSnapshot);
	console.log(userSnapshot.exists());

	//if user data does not exist
	if (!userSnapshot.exists()) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();

		try {
			await setDoc(userDocRef, {
				displayName,
				email,
				createdAt,
			});
		} catch (error) {
			throw new Error('error creating user', error.message);
		}

		return userDocRef;
	}

	//create / set the doc with data from userAuth

	// if user data exists

	// return userDoc
};
