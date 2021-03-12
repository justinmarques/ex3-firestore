import fbAppli from 'firebase/app';
import 'firebase/firestore';

/******* Ex#3 - Étape B ********************************/ 
// Ajouter votre objet de configuration Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBv9mFk_vvfITLrREOYh_pgl-W21Vpoczs",
  authDomain: "prog-veilletechno.firebaseapp.com",
  projectId: "prog-veilletechno",
  storageBucket: "prog-veilletechno.appspot.com",
  messagingSenderId: "411840747805",
  appId: "1:411840747805:web:3a8c12fa93913db4b8e9f4"
};


// Initialiser Firebase
if(!fbAppli.apps.length) {
  fbAppli.initializeApp(firebaseConfig);
}

// Initialiser Firestore
const bd = fbAppli.firestore();
/******* Ex#3 - Étape C ********************************/ 
// Exporter (par défaut) la référence à "bd" pour pouvoir l'utiliser dans le composant ListeProduits
export default bd;