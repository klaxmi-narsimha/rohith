
import "./login.css";
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";

function Login() {
  const [mail, setMail] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useNavigate();

  const valid = mail.trim() !== "" && pass.trim() !== "";

  const handleSubmit = (e) => {
    e.preventDefault();
    if (valid) {
      // Do login logic here (API call, validation, etc.)
      navigate("/home"); 
      // redirect after login
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2 className="login-title">Welcome Back</h2>

        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input
            onChange={(e) => setMail(e.target.value)}
            type="email"
            id="email"
            placeholder="Enter your email"
            required
          />
        </div>

        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input
            onChange={(e) => setPass(e.target.value)}
            type="password"
            id="password"
            placeholder="Enter your password"
            required
          />
        </div>

        <button disabled={!valid} type="submit" className="login-btn">
          Login
        </button>

        <p className="signup-text">
          Don’t have an account? <Link to="/register">Sign up</Link>
        </p>
      </form>
    </div>
  );
}

export default Login;
