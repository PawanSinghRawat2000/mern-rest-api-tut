import React, { useState,useEffect } from "react";
import { FaSignInAlt } from "react-icons/fa";
import {useSelector,useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom' 
import {toast} from 'react-toastify'
import { login,reset } from "../features/auth/authSlice";
import Spinner from "../components/Spinner";

function Login() {

  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')

  const navigate=useNavigate()
  const dispatch=useDispatch()


  const {user, isLoading , isError,isSuccess, message}=useSelector(state=>state.auth)

  useEffect(()=>{
    if(isError){
      toast.error(message)
    }
    if(isSuccess || user){
      navigate('/')
    }
    dispatch(reset())

  },[user,isError,isSuccess,message,navigate,dispatch])

  
  const onSubmit=(e)=>{
    e.preventDefault();

    const userData={
      email,
      password,
      
    }
    dispatch(login(userData))
  }

  if(isLoading){
    return <Spinner/>
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
