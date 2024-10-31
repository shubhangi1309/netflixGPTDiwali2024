import { useState } from "react";
import { BACKGROUND } from "../utils/constants";
import Header from "./Header";

const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);
    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    }

    return <div>
        <Header/>
        <div className="absolute">
            <img src={BACKGROUND} alt="Background"/>
        </div>
        <form className="w-3/12 absolute p-12 bg-black my-36 mx-auto left-0 right-0 text-white rounded-lg bg-opacity-80">
            <h1 className="font-bold text-3xl py-4">{isSignInForm ? "Sign In":"Sign Up"}</h1>
            {!isSignInForm && <input type="text" placeholder="Full Name" className="p-4 my-4 w-full bg-zinc-800"/>}
            <input type="text" placeholder="Email Address" className="p-4 my-4 w-full bg-zinc-800"/>
            <input type="password" placeholder="Password" className="p-4 my-4 w-full bg-zinc-800"/>
            <button className="p-4 my-6 bg-red-700 w-full rounded-lg">{isSignInForm ? "Sign In":"Sign Up"}</button>
            <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>{isSignInForm ? "New to Netflix? Sign Up Now." : "Already registered? Sign In Now."}</p>
        </form>
    </div>;
}

export default Login;