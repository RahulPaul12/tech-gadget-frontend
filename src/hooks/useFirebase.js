import { useState, useEffect } from 'react';
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, getIdToken } from "firebase/auth";
import initializeAuthentication from '../Firebase/firebase.init';

initializeAuthentication();

const useFirebase = () => {
    const [user, setuser] = useState({});
    const [loading, setloading] = useState(true)
    const [authError, setAuthError] = useState('');
    //const [admin, setAdmin] = useState(false);
    const [token, setToken] = useState('');
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const registerUser =(email,password)=>{
        setloading(true);
        createUserWithEmailAndPassword(auth, email, password)
        .then((result) => {
            // Signed in 
            setAuthError('');
            
            
          })
          .catch((error) => {
            setAuthError(error.message);
            window.alert(error.message);

          })
          .finally(() => setloading(false));
        }

    const HandleGoogleLogin = (location,history) => {
        setloading(true);
        signInWithPopup(auth, googleProvider)
        .then((result)=>{
            setuser(result.user);
            sessionStorage.setItem('email', result.user.email);
            setAuthError("");
        })
        .catch((error) => {setAuthError(error.message)})
            .finally(() => { setloading(false) });
    }


    const logOut = () => {
        setloading(true);
        signOut(auth)
            .then(() => {
               
            })
            .catch((error) => {
               
            })
            .finally(() => setloading(false))
    }
    const loginUser = (email, password, location, history) => {
        setloading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                const destination = location?.state?.from || '/home';
                history.replace(destination);
                setAuthError('');
            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setloading(false));
    }


    // observe whether user auth state changed or not
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setuser(user);
                getIdToken(user)
                    .then(idToken => localStorage.setItem('idToken',idToken));
                
            }
            else {
                setuser({});
            }
            setloading(false);
        });
        return () => unsubscribe;
    }, []);

    const saveUser = (email, displayName, method) => {
        const user = { email, displayName };
        fetch('https://stark-caverns-04377.herokuapp.com/users', {
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
        loading,
        token,
        loginUser,
        authError,
        HandleGoogleLogin,
        
        logOut,
        registerUser
    }
}

export default useFirebase;