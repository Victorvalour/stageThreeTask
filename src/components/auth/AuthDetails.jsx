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
        <div className="bg-sky-700 ">
            {authUser ? <div><p className="text-lg font-bold">{`Signed In as ${authUser.email}`}</p>  <button onClick={userSignOut} className="bg-green-400 border-4 border-black p-2">Sign Out</button></div> : <p>Signed Out</p>};
        </div>
    )
}
export default AuthDetails