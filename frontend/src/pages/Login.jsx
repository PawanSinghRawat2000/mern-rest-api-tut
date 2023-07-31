import React, { useState } from "react";
import { FaSignInAlt } from "react-icons/fa";

function Login() {

  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')


  
  const onSubmit=(e)=>{
    e.preventDefault();
  }

  
  return (
    <>
      <section className="heading">
        <h1>
          <FaSignInAlt />
          Login{" "}
        </h1>
        <p>Enter Credentials</p>
      </section>

      <section className="form">
        <form onSubmit={onSubmit}>

            <div className="form-group">
                <input
                    type="email"
                    className="form-control"
                    id="email"
                    value={email}
                    placeholder="Enter your Email"
                    onChange={(e)=>setEmail(e.target.value)}
                />
            </div>

            <div className="form-group">
                <input
                    type="password"
                    className="form-control"
                    id="password"
                    value={password}
                    placeholder="Enter Password"
                    onChange={(e)=>setPassword(e.target.value)}
                />
            </div>


            <div className="form-group">
                <button type="submit" className="btn btn-block">Login</button>
            </div>


            
        </form>
      </section>
    </>
  );
}

export default Login;
