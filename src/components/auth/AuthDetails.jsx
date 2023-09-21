import React, { useEffect, useState } from "react";
import { auth } from "../../firebase"
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const AuthDetails = () => {
    const [authUser, setAuthUser] = useState(null);

    useEffect(() => {
        const listen = onAuthStateChanged(auth, (user) => {
            if (user) {
                setAuthUser(user)
            } else {
                setAuthUser(null);
            }
        });
        return () =>
 {
    listen();
 }    }, [])
 const navigate = useNavigate();

if (authUser) {
  
}
 
        const userSignOut = () => {
            signOut(auth).then(() => {
                console.log("User has signed out")
                navigate("/")
            }).catch(error => console.log(error))
        }
return (
        <div className="bg-gray-800 h-28 flex">
            {authUser ? <div className=""><p className="text-lg m-2 text-white font-bold">{`Signed In as ${authUser.email}`}</p>  <button onClick={userSignOut} className="bg-red-400 border-4 border-black p-2 hover:bg-red-600">Sign Out</button></div> : <p>Signed Out</p>}
        </div>
    )
}
export default AuthDetails