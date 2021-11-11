import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, getIdToken } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";


initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');
    const [name, setName] = useState('');
    const [admin, setAdmin] = useState(false);

    const auth = getAuth();


    const signInEmailAndPassword = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)

    }

    const registerEmailAndPassword = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)

    }

    const userName = () => {
        updateProfile(auth.currentUser, { displayName: name })
            .then(result => { })
    }

    const signInUsingGoogle = () => {
        setIsLoading(true);
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider)


    }

    // observe user 
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
                getIdToken(user)
                    .then(idToken => localStorage.setItem('idToken', idToken))
            }
            else {
                setUser({});
            }
            setIsLoading(false);
        });
        return () => unsubscribed
    }, [auth])

    // Checking admin
    useEffect(() => {
        fetch(`http://localhost:5000/users/${user.email}`)
            .then(res => res.json())
            .then(data => {
                setAdmin(data.admin)
            })
    }, [user.email])


    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => { })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => setIsLoading(false));
    }


    const saveUser = (email, displayName, method) => {
        const user = { email, displayName };
        fetch('https://hidden-retreat-64560.herokuapp.com/users', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then()
    }

    return {
        user,
        setUser,
        signInUsingGoogle,
        registerEmailAndPassword,
        signInEmailAndPassword,
        logOut,
        isLoading,
        setIsLoading,
        error,
        setError,
        name,
        setName,
        userName,
        saveUser,
        admin
    }
}

export default useFirebase;