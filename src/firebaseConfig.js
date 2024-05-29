import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyDJdx8hVhVk25U4EjnUD_DcUHM6KWqv2w0",
    authDomain: "test-hope-shelter-room-check.firebaseapp.com",
    projectId: "test-hope-shelter-room-check",
    storageBucket: "test-hope-shelter-room-check.appspot.com",
    messagingSenderId: "687597978933",
    appId: "1:687597978933:web:1e017cbfbd292b457af87c",
    measurementId: "G-XDSZW07DXG"
  };
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get a reference to the database service
const database = getDatabase(app);

export { database };