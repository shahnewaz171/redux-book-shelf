import { createContext, useContext, useState } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword,signInWithEmailAndPassword, signOut } from "firebase/auth";
import { firebase } from "./firebase";
import { Redirect, Route } from "react-router";
const authContext = createContext();
const provider = new GoogleAuthProvider();

export function ProvideAuth({ children }) {
    const auth = useProvideAuth();
    return (
        <authContext.Provider value={auth}>
            {children}
        </authContext.Provider>
    );
}

export function useAuth() {
    return useContext(authContext);
}

export function PrivateRoute({ children, ...rest }) {
    let { userInfo } = useAuth();

    return (
        <Route
            {...rest}
            render={({ location }) =>
            userInfo ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
}

function useProvideAuth() {
    const [userInfo, setUserInfo] = useState("");
    const auth = getAuth(firebase);

    const formatUserInfo = (user) => ({
        email: user.email,
        name: user.displayName,
        image: user.photoURL,
        uid: user.uid,
    })

    const handleGoogleSignIn = () => {
        return signInWithPopup(auth, provider)
            .then((result) => {
                const user = formatUserInfo(result.user);
                setUserInfo(user)
                console.log(user)
            })
            .catch((error) => {
                console.log(error)
            });
    }

    const createEmailWithPassword = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
            .then((res) => {
                if(res){
                    const newUser = res.user;
                    return newUser;
                }
            })
            .catch((error) => {
                console.error(error.message);
            });
    }

    const signInEmailPassword = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
            .then((res) => {
                const user = formatUserInfo(res.user);
                setUserInfo(user);
                return user;
            })
            .catch((error) => {
                console.error(error.message);
            });
    }

    const logOut = () => {
        return signOut(auth)
            .then(() => {
                setUserInfo("");
            })
    };

    return {
        userInfo,
        handleGoogleSignIn,
        createEmailWithPassword,
        signInEmailPassword,
        logOut
    };
}