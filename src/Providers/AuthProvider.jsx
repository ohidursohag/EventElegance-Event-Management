import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from "../Firebase/firebase.config";
export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
   const [user, setUser] = useState(null);
   const [loading, setLoading] = useState(true);
   const googleProvider = new GoogleAuthProvider()
   const githubProvider = new GithubAuthProvider()
   // create User with email and password
   const registerWithEmailPass = (email, password) => {
      setLoading(true);
      return createUserWithEmailAndPassword(auth, email, password)
   }

   // login user with email and password
   const loginWithEmailPass = (email, password) => {
      setLoading(true);
      return signInWithEmailAndPassword(auth, email, password);
   }
   // Signup/Login user with Google account
   const googleLogin = () => {
      return signInWithPopup(auth, googleProvider)
   }

   // signup/login user with github account
   const githubLogin = () => { 
      return signInWithPopup(auth, githubProvider)
   }


   // LogOut user
   const logOut = () => {
      setLoading(true);
      return signOut(auth);
   }

   // get currently logged in user
   useEffect(() => {
      const unSubscribe = onAuthStateChanged(auth, currentUser => {
         // console.log(currentUser);
         setUser(currentUser)
         setLoading(false);
      })
      return () => unSubscribe();

   }, [])

   const authInfo = {
      user,
      registerWithEmailPass,
      loginWithEmailPass,
      googleLogin,
      githubLogin,
      logOut,
      loading,
   }
   return (
      <AuthContext.Provider value={authInfo}>
         {children}
      </AuthContext.Provider >
   );
};

AuthProvider.propTypes = {
   children: PropTypes.node.isRequired
}
export default AuthProvider;