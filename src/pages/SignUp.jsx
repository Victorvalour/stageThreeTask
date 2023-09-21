import React, { useState } from "react";
import LoginImage from "../images/login-image.jpeg"
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function SignUp() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signUp = (e) => {
        //called on "signin"
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {console.log(userCredential)
        toast("Account creation successful. LOGIN")}).catch((error) => {
            console.log(error)
        })
    }
    const navigate = useNavigate();
    const handleSignIn = () => {
        toast("Logged in");
        navigate("/");
  
    }
    
return   (
<div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full">
    <div className="hidden sm:block">
<img className="w-full h-full object-cover" src={LoginImage} alt="" />
    </div>

    <div className="bg-gray-800 flex flex-col justify-center">


        <form className="max-w-[400px] w-full mx-auto bg-gray-900 p-8 px-8 rounded-lg"
        onSubmit={signUp}>
            <h2 className="text-4xl text-white font-bold text-center">Create an account</h2>

            {/* EMAIL */}
            <div className="flex flex-col text-gray-400 py-2">
                <label>Email</label>
                <input className="text-white rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none" type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}  />
            </div>
 
             {/*PASSWORD*/}

            <div className="flex flex-col text-gray-400 py-2">
                <label>Password</label>
                <input className="text-white rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"  type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}/>
            </div>

            <div className="flex justify-between text-gray-400 py-2">
                <p className="flex items-center"><input className="mr-2" type="checkbox" />Remembr Me</p>
                <p>Forgot Password</p>
            </div>
            <button className="rounded-lg w-full my-5 py-2 bg-rose-500 shadow-lg shadow-rose-500/50 hover:bg-rose-700 hover:shadow-rose-500/30 text-white font-semibold"
            type="submit">Sign Up</button>
        </form>
        <div className="mx-auto text-center text-white"><p>Have you created an account?</p> <button className="bg-purple-500 p-2 rounded font-bold hover:bg-purple-800" onClick={handleSignIn}>Login</button></div>
        <ToastContainer />
</div>
</div>

    )
}