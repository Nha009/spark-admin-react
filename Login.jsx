import React, { useState } from "react";
import { Eye, EyeOff, LockKeyhole, UserRound, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [show, setShow] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const submit = (e) => {
    e.preventDefault();
    localStorage.setItem("spark_admin_auth", "true");
    localStorage.setItem("spark_admin_token", "demo-token");
    navigate("/");
  };

  return (
    <div className="login-page">
      <div className="ambient ambient-one"></div>
      <div className="ambient ambient-two"></div>
      <form className="login-card" onSubmit={submit}>
        <div className="login-brand"><span className="brand-mark">*</span><b>Spark Admin</b></div>
        <h1>Welcome back</h1>
        <p className="muted">Sign in to access your dashboard</p>

        <label>Username</label>
        <div className="input-wrap">
          <UserRound size={18}/>
          <input value={username} onChange={e => setUsername(e.target.value)} placeholder="Enter your username" required />
        </div>

        <label>Password</label>
        <div className="input-wrap">
          <LockKeyhole size={18}/>
          <input type={show ? "text" : "password"} value={password} onChange={e => setPassword(e.target.value)} placeholder="Enter your password" required />
          <button type="button" className="input-action" onClick={() => setShow(!show)}>{show ? <EyeOff size={18}/> : <Eye size={18}/>}</button>
        </div>

        <div className="form-row"><span></span><a href="#forgot">Forgot Password?</a></div>
        <button className="primary-btn login-btn">Sign In to Dashboard <ArrowRight size={18}/></button>

        <div className="or-divider"><span>OR SIGN IN WITH</span></div>
        <p className="login-footer">Don't have an account? <a href="#register">Register Now</a></p>
      </form>
    </div>
  );
}
