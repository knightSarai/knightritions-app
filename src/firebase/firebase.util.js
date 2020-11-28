import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAm2jx0PCuhoD-8k12QFVykp6lKpDF7UWI",
    authDomain: "knightritions.firebaseapp.com",
    databaseURL: "https://knightritions.firebaseio.com",
    projectId: "knightritions",
    storageBucket: "knightritions.appspot.com",
    messagingSenderId: "236506751245",
    appId: "1:236506751245:web:1e3bb33f5c74366b31d044",
    measurementId: "G-5TG3D170FX"
};

export const createUserProfileDocument = async (userAuth, args) => {
    if (!userAuth) return;
    const userRef = await firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get()

    if (!snapShot.exists) {
        const {displayName, email} = userAuth;
        const createdAt = new Date();
        await userRef.set({
            displayName,
            email,
            createdAt,
            ...args
        })
    }
    return userRef;
}

export const addCollectionItems = async (collectionKey, objectsToAdd) => {
    /** To Add to firebase: 
     * first instansciate collection ref
     * then new batch obj to batch all your adding togather
     * intansciate a new doc for every element you want to add
     */
    const collectionRef = await firestore.collection(collectionKey);
    const batch = firestore.batch();
    objectsToAdd.forEach(obj => {
        const newDocRef = collectionRef.doc();
        batch.set(newDocRef, obj);
    });
    return await batch.commit()
}

firebase.initializeApp(config)

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;