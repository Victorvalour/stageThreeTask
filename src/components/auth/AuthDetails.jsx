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
        <div>
            {authUser ? <div><p>{`Signed In as ${authUser.email}`}</p>  <button onClick={userSignOut}>Sign Out</button></div> : <p>Signed Out</p>};
        </div>
    )
}
export default AuthDetails