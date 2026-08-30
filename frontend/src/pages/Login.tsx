import {useState } from "react";

// I create a Login Page for User Authentication 
export default function AuthForm() {
    const [isSignup, setIsSignup] = useState(false);
    const [email , setEmail] = useState("");
    const [password, setpassword]= useState("");
    const [error, setError] = useState("");
    const [loading , setLoading] = useState(false);

async function handleSubmit(e) {
    e.preventDefault();
    setError("");   
}

    if (!email || !password) {
        setError("");
    }
}

  