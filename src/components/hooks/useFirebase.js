import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, getIdToken } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";


initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [adminIsLoading, setAdminIsLoading] = useState(false);
    const [error, setError] = useState('');
    const [name, setName] = useState('');
    const [photoURL, setPhotoURL] = useState('');
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
            .then(result => {
                console.log(result);
            })
            .catch((error) => {
            });
    }

    // profile update from dashboard
    const DashboardUserProfileUpdate = user => {
        console.log(user);
        updateProfile(auth.currentUser, user)
            .then(result => {
                console.log(result);
            })
            .catch((error) => {
            });
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
        setAdminIsLoading(true)
        fetch(`https://hidden-retreat-64560.herokuapp.com/users/${user.email}`)
            .then(res => res.json())
            .then(data => {
                setAdmin(data.admin)

            })
            .finally(() => setAdminIsLoading(false));
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
        admin,
        adminIsLoading,
        setPhotoURL,
        photoURL,
        DashboardUserProfileUpdate

    }
}

export default useFirebase;