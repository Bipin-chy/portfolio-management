import React, { createContext, useContext, useState, useEffect } from "react";
import { Loader } from "../components/UI/Loader";
import { auth } from "../firebase";

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState("");
  const [isAuthLoading, setIsAuthLoading] = useState(true);

  const login = (email, password) => {
    // console.log(email.toString(), password.toString());
    return auth.signInWithEmailAndPassword(email, password);
  };

  const createUsers = (email, password) => {
    return auth.createUserWithEmailAndPassword(email, password);
  };

  const changePassword = (newPassword) => {
    return auth.currentUser.updatePassword(newPassword);
  };

  const logout = () => {
    return auth.signOut();
  };

  const forgotPassword = (email) => {
    return auth.sendPasswordResetEmail(email);
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currUser) => {
      if (currUser) {
        auth.currentUser.getIdTokenResult().then((user) => {
          setCurrentUser(user);
          setIsAuthLoading(false);
        });
      } else {
        setCurrentUser("");
        setIsAuthLoading(false);
      }
    });
    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    login,
    createUsers,
    logout,
    forgotPassword,
    changePassword,
  };

  if (isAuthLoading) {
    return <Loader />;
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
