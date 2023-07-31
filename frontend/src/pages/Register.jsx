import React, { useEffect, useState } from "react";
import { FaUser } from "react-icons/fa";
import {useSelector,useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom' 
import {toast} from 'react-toastify'
import { register,reset } from "../features/auth/authSlice";
import Spinner from "../components/Spinner";

function Register() {
  const [name,setName]=useState('')
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const [password2,setPassword2]=useState('')


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

    if(password!==password2){
      toast.error('Password do not match')
    }else{
      const userData={
        name,
        email,
        password,
      }
      dispatch(register(userData))
    }
  }

  if(isLoading){
    return <Spinner/>
  }
  
  return (
    <>
      <section className="heading">
        <h1>
          <FaUser />
          Register{" "}
        </h1>
        <p>Please create an account</p>
      </section>

      <section className="form">
        <form onSubmit={onSubmit}>
            <div className="form-group">
                <input
                    type="text"
                    className="form-control"
                    id="name"
                    value={name}
                    placeholder="Enter your name"
                    onChange={(e)=>setName(e.target.value)}
                />
            </div>
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
                <input
                    type="password"
                    className="form-control"
                    id="password2"
                    value={password2}
                    placeholder="Confirm Password"
                    onChange={(e)=>setPassword2(e.target.value)}
                />
            </div>

            <div className="form-group">
                <button type="submit" className="btn btn-block">Register</button>
            </div>


            
        </form>
      </section>
    </>
  );
}

export default Register;
