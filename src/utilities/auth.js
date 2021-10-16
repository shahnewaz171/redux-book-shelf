import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { firebase } from "./firebase";

const provider = new GoogleAuthProvider();

export const handleSignIn = () => {
    const auth = getAuth(firebase);
    signInWithPopup(auth, provider)
    .then((result) => {
        const user = result.user;
        console.log(user)
    })
    .catch((error) => {
        console.log(error)
    });
}