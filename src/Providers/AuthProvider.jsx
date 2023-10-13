import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import auth from "../Firebase/firebase.config";
export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
   const [user, setUser] = useState(null);
   const [loading, setLoading] = useState(true);

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