import React,{ useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    console.log("Email:", email);
    console.log("password:", password);

    alert("Login Successful")
  };
  return (
    <div className="container">
      <h1>Welcome to Login page!!</h1>

      <input
      type = "email"
      placeholder="Enter Email Id"
      value={email}
      onChange={(e)=>setEmail(e.target.value)}
      />

      <input
      type = "password"
      placeholder="Enter password"
      value={password}
      onChange={(e)=>setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>

    </div>
  );
}