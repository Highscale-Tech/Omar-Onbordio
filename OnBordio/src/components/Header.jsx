import React from 'react'
import { useUserStore } from '../Store/userStore';
import { useState } from 'react';
import { auth } from "../firebase/firebase";

function Header() {
  
    const {user,signOut} = useUserStore();
    const [showDropdown, setShowDropdown] = useState(false);
    const toggleDropdown = () => setShowDropdown(prev => !prev);

   
    const handleSignOutClick = (e) => {
      e.preventDefault();
      signOut();
    };
  
  return (
    <header className="shadow py-4">
        <div className="container mx-auto flex justify-between items-center px-4">
          <h1 className="text-2xl font-bold">Onbordio</h1>
          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-flex items-center"
            >
              Hello, {user.displayName ? user.displayName :  user.email.substring(0, user.email.indexOf('@')).replace(/\d+.*$/, '') }
           
              <span className={`${showDropdown ? 'rotate-180' : ''} ml-2 text-sm`}>▼</span>
            
            </button>
            {showDropdown && (
              <div className="absolute right-0 mt-2 py-2 w-48 bg-white rounded-md shadow-xl z-50">
                <button
                  className="block px-4 py-2 text-sm capitalize text-gray-700 hover:bg-blue-500 hover:text-white w-full text-left"
                  onClick={handleSignOutClick}
                >
                  Sign out
                </button>
              </div>
            )}
          </div>
        </div>
      </header>
  )
}

export default Header