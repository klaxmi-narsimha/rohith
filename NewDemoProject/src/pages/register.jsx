
import './register.css';
import { Link } from 'react-router-dom';
function Register() {
  return (
    <div className="register-container">
      <form className="register-form">
        <h2 className="register-title">Create Account</h2>

        <div className="input-group">
          <label htmlFor="name">Full Name</label>
          <input type="text" id="name" placeholder="Enter your name" required />
        </div>

        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Enter your email" required />
        </div>

        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" placeholder="Create a password" required />
        </div>

        <div className="input-group">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input type="password" id="confirmPassword" placeholder="Re-enter password" required />
        </div>
<Link to="/home">
        <button type="submit" className="register-btn">Sign Up</button>
</Link>
        <p className="login-text">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </form>
    </div>
  );
}

export default Register;
