import { initializeApp } from "firebase/app";
import { getAuth, signInWithRedirect, GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyBOCB1V8CByn1DyHkI8gv4r7tjs3Jz8L5Y",
  authDomain: "clothing-e-commerce-fb178.firebaseapp.com",
  projectId: "clothing-e-commerce-fb178",
  storageBucket: "clothing-e-commerce-fb178.appspot.com",
  messagingSenderId: "562797662402",
  appId: "1:562797662402:web:d96b7853c990fd111deb5b"
};

initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider()
googleProvider.setCustomParameters({
  prompt: "select_account"
})

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider)
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider)

export const db = getFirestore()

export const createUserDocumentFromAuth = async (userAuth, additionalInformation) => {
  if (!userAuth) return;
  const userDocRef = doc(db, "users", userAuth.uid)

  const userSnapShot = await getDoc(userDocRef)

  if (!userSnapShot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date()

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation
      })
    } catch (error) {
      console.log("error creatin the user", error.message)
    }
  }

  return userDocRef
}

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return
  return await createUserWithEmailAndPassword(auth, email, password)
}

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return
  return await signInWithEmailAndPassword(auth, email, password)
}