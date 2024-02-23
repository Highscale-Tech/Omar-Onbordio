import create from 'zustand';
import { auth, googleProvider , db } from "../firebase/firebase" 
import { signInWithPopup, signInWithEmailAndPassword, signOut,onAuthStateChanged } from 'firebase/auth';
import {doc , setDoc} from 'firebase/firestore'
import { devtools , persist } from 'zustand/middleware'

const store = ((set) => ({
  user: null,
  isAuth: false,
  setUser: (user) => set({ user }),
  setAuth: (isAuth) => set({ isAuth }),
  signInWithGoogle: async () => {
    try {
     
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      set({ user });
      const userRef = doc(db, "users", user.uid);
      await setDoc(userRef,{
        uid: user.uid,
        email: user.email,
        displayName: user.displayName,
        photoUrl: user.photoURL
      },{merge: true})
      set({ isAuth: true });
      console.log("done")
    } catch (error) {
      console.error(error);
    }
  },

  signInWithEmail: async (e,email, password) => {
    try {
      e.preventDefault();
      const result = await signInWithEmailAndPassword(auth, email, password);
      const user = result.user;
      set({ user });
      set({ isAuth: true });
      console.log("done")
    } catch (error) {
      console.error(error);
    }
  },
  signOut: async () => {
    await signOut(auth);
    set({ user: null });
    set({ isAuth: false });
  }
}));

export const  useUserStore = create(persist(devtools(store), { name: "user" }))