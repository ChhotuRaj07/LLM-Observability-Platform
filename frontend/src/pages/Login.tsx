import {useState } from "react";
import { useNavigate } from "react-router-dom";

// I create a Login Page for User Authentication 
export default function AuthForm() {
    const navigate = useNavigate(); 
    const [isSignup, setIsSignup] = useState(false);
    const [email , setEmail] = useState("");
    const [password, setpassword]= useState("");
    const [error, setError] = useState("");
    const [loading , setLoading] = useState(false);

    async function handleSubmit(e) {
    e.preventDefault();
    setError("");   

    if (!email || !password) {
        setError("Please Fill Both Fields ");
        return;
    }
    if (password.length < 8) {
        setError("Password Must be at least 8 characters")
         return;
    }   

    setLoading(true);
    try {
        await new Promise((r) => setTimeout(r,800));

        alert (`${isSignup ? "Signed up": "Logged in"}as ${email}`);
        navigate("/Compare");
    }catch (err) {
        setError(err.message || "Something went wrong ");
    } finally {
        setLoading(false); 
    }
}    



    return (
    <div style={styles.page}>
      <form onSubmit={handleSubmit} style={styles.form}>
        <h2 style={styles.title}>{isSignup ? "Sign Up" : "Log In"}</h2>
 
        <label style={styles.label}>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={styles.input}
          placeholder="you@example.com"
        />
 
        <label style={styles.label}>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setpassword(e.target.value)}
          style={styles.input}
          placeholder="••••••••"
        />
 
        {error && <p style={styles.error}>{error}</p>}
 
        <button type="submit" disabled={loading} style={styles.button}>
          {loading ? "Please wait..." : isSignup ? "Sign Up" : "Log In"}
        </button>
 
        <p style={styles.switchText}>
          {isSignup ? "Already have an account?" : "Don't have an account?"}{" "}
          <span
            style={styles.switchLink}
            onClick={() => {
              setIsSignup(!isSignup);
              setError("");
            }}
          >
            {isSignup ? "Log In" : "Sign Up"}
          </span>
        </p>
      </form>
    </div>
  );
}
 
const styles = {
  page: {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "#f5f5f5",
    fontFamily: "Arial, sans-serif",
  },
  form: {
    background: "#fff",
    padding: "32px",
    borderRadius: "8px",
    boxShadow: "0 1px 4px rgba(0,0,0,0.1)",
    width: "300px",
  },
  title: {
    textAlign: "center",
    marginBottom: "20px",
    fontSize: "20px",
  },
  label: {
    display: "block",
    fontSize: "13px",
    marginBottom: "4px",
    color: "#444",
  },
  input: {
    width: "100%",
    padding: "8px 10px",
    marginBottom: "14px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    fontSize: "14px",
    boxSizing: "border-box",
  },
  button: {
    width: "100%",
    padding: "10px",
    background: "#333",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    fontSize: "14px",
    cursor: "pointer",
  },
  error: {
    color: "red",
    fontSize: "13px",
    marginBottom: "10px",
  },
  switchText: {
    textAlign: "center",
    fontSize: "13px",
    marginTop: "14px",
    color: "#555",
  },
  switchLink: {
    color: "#333",
    fontWeight: "bold",
    cursor: "pointer",
    textDecoration: "underline",
  },
  
};







 



   




   

  