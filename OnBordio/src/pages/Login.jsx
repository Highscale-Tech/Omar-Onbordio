import React from 'react'
import { useState } from 'react';
import {useUserStore} from '../Store/userStore';
import { useNavigate } from 'react-router-dom';
import Home from './Home';
import { auth } from '../firebase/firebase';
function Login() {
  const {signInWithGoogle, signInWithEmail, user , isAuth } = useUserStore();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleGoogleSignIn = async (e) => {
    try {
      e.preventDefault();
      await signInWithGoogle();
      navigate("/home")
    } catch (error) {
      console.error('Authentication failed:', error);
    }
  };
 
  const handleEmailAndPasswordAuth = async (e) => {
    try {
      await signInWithEmail(e,email, password);
      navigate("/home")
    } catch (error) {
      console.error(error)
    }

  }
  return (
    <>
       <div className="min-h-screen flex flex-col gradient-background">
        <header className="text-black p-4">
          <h1 className="text-4xl font-mono px-8">onbordio</h1>
        </header>
  
  
        <main className="flex-grow flex justify-center items-center p-4">
          <div className="w-full max-w-4xl flex flex-wrap md:flex-nowrap">
            
            <div className="flex justify-center md:flex-1 md:justify-end">
              <img
                src="/Relax.png"
                alt="Detailed view"
                className="mb-4 md:mb-0 max-w-sm md:max-w-md lg:max-w-lg object-cover"
              />
            </div>
  
        
            <div className="p-8  rounded-lg md:flex-1 md:ml-8">
              <h2 className="text-xl font-bold text-black mb-6">Good Morning</h2>
  
              <button onClick={(e) => handleGoogleSignIn(e)} className="w-full mb-6 py-2 px-4 bg-blue-200 rounded-2xl shadow text-black font-semibold">
                Connect with Google
              </button>
  
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input type="email" onChange={(e) => setEmail(e.target.value)} id="email" className="mt-1 w-full p-2 border-2 border-sky-800 shadow-sm rounded-2xl" placeholder="Email" />
              </div>
  
              <div className="mb-6">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                <input type="password" onChange={(e) => setPassword(e.target.value)} id="password" className="mt-1 w-full p-2 border-2 border-sky-800 shadow-sm rounded-2xl" placeholder="••••••••" />
              </div>
  
              <button type='submit' onClick={(e) => handleEmailAndPasswordAuth(e)} className="w-full py-2 px-4 bg-blue-200 rounded-2xl shadow text-black font-semibold">
                Enter
              </button>
            </div>
          </div>
        </main>
      </div>
    </>
  )
}

export default Login