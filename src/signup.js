import React,{ useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("")

  const handleLogin = (e) => {
    e.preventDefault();

    console.log("Email:", email);
    console.log("password:", password);
    console.log("confirm password:", confirmpassword);

    alert("Sign up Successful")
  };
  return (
    <div className="container">
      <h1>Welcome to Sign up page!!</h1>

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

      <input
      type = "Confirm password"
      placeholder="Re-enter password"
      value={confirmpassword}
      onChange={(e)=>setConfirmPassword(e.target.value)}
      />

      <button onClick={handleLogin}>Sign Up</button>

    </div>
  );
}