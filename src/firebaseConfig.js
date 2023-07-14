import { initializeApp } from "firebase/app";
import{getFirestore} from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyDIIb8enTl5PS7bCRoDmYv7ihKSNJs-NTg",
    authDomain: "tukura-fdac0.firebaseapp.com",
    projectId: "tukura-fdac0",
    storageBucket: "tukura-fdac0.appspot.com",
    messagingSenderId: "418322039797",
    appId: "1:418322039797:web:c949f143ee9b4a364dd6bc"
};

const app = initializeApp(firebaseConfig);
export const dataBase = getFirestore(app)