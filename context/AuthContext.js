import React, {createContext, useState} from 'react';
import auth from '@react-native-firebase/auth';

export const AuthProvider = ({children}) => {
  const [currentUser, setCurrentUser] = useState(null);
  return (
    <AuthContext.Provider
      value={{
        currentUser,
        setCurrentUser,
        signIn: async (email, password) => {
          try {
            await auth().signInWithEmailAndPassword(email, password);
          } catch (e) {
            console.log(e);
          }
        },
        signUp: async (email, password, username) => {
          try {
            await auth().createUserWithEmailAndPassword(email, password);
            await auth().onAuthStateChanged(user => {
              if (user) {
                user.updateProfile({displayName: username});
              }
            });
          } catch (e) {
            console.log(e);
          }
        },
        logout: async () => {
          try {
            await auth().signOut();
          } catch (e) {
            console.error(e);
          }
        },
      }}>
      {children}
    </AuthContext.Provider>
  );
};

export const AuthContext = createContext();
