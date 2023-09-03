// import { createContext, useState, useContext } from "react";


// const AuthContext = createContext();

// export const AuthData = () => useContext(AuthContext);

// export const AuthWrapper = () => {

//     const [user, setUser] = useState({
//         name: '',
//         isAuthenticated: false
//     });

//     const login = (userName, password) => {

//         return new Promise((resolve, reject) => {

//             if (password === "123456") {
//                 setUser({ name: userName, isAuthenticated: true });
//                 resolve("sucess");
//             } else {
//                 reject("Invalid Password");
//             }

//         });
//     }

//     const logout = () => {
//         setUser({ ...user, isAuthenticated: false });
//     }

//     return (
//         <AuthContext.Provider value={{ user, login, logout }}>
//             <>
//             </>
//         </AuthContext.Provider>
//     );

// }

import React from 'react'

export default function AuthWrapper() {
  return (
    <div>
      
    </div>
  )
}
