import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyAnTgDrsnIXjLh6-sFkLt3lhA-GQLUZG8Y",
    authDomain: "shopping-app-1516e.firebaseapp.com",
    projectId: "shopping-app-1516e",
    storageBucket: "shopping-app-1516e.appspot.com",
    messagingSenderId: "645438551863",
    appId: "1:645438551863:web:955725d761b9201c958cb2",
    measurementId: "G-CLKD442THM"
  };

firebase.initializeApp(config)

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if(!userAuth) return;

  // const userRef = firestore.doc('users/12fsgefnfn')
  const userRef = firestore.doc(`users/${userAuth.uid}`)
  const snapShot = await userRef.get()

  console.log(snapShot)


  if(!snapShot.exists){
    const {displayName, email} = userAuth
    const createdAt = new Date()

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log('error creating user',error.message)
    }
  }
  
  return userRef
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();


const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({prompt : 'select_account' })

export const signInwithGoogle = () => auth.signInWithPopup(provider)

export default firebase;

