
import { initializeApp } from "firebase/app";

const firebaseConfig = {
	apiKey: "AIzaSyA_hSR88ZPjqgrU95yowXE6ucV-cuE-xag",
	authDomain: "my-spotify-5621f.firebaseapp.com",
	projectId: "my-spotify-5621f",
	storageBucket: "my-spotify-5621f.appspot.com",
	messagingSenderId: "98459417422",
	appId: "1:98459417422:web:fb2951bcd17ce250d93c1f"
};

export const initFirebase = initializeApp(firebaseConfig);