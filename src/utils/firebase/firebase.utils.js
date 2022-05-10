import { async } from "@firebase/util";
import { initializeApp } from "firebase/app";
import { getAuth, signInWithRedirect, GoogleAuthProvider, signInWithPopup } from "firebase/auth"
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBOCB1V8CByn1DyHkI8gv4r7tjs3Jz8L5Y",
  authDomain: "clothing-e-commerce-fb178.firebaseapp.com",
  projectId: "clothing-e-commerce-fb178",
  storageBucket: "clothing-e-commerce-fb178.appspot.com",
  messagingSenderId: "562797662402",
  appId: "1:562797662402:web:d96b7853c990fd111deb5b"
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider()
provider.setCustomParameters({
  prompt: "select_account"
})

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)

export const db = getFirestore()
export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid)

  console.log(userDocRef)

  const userSnapShot = await getDoc(userDocRef)
  console.log(userSnapShot);

  if (!userSnapShot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date()

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt
      })
    } catch (error) {
      console.log("error creatin the user", error.message)
    }
  }

  return userDocRef
}