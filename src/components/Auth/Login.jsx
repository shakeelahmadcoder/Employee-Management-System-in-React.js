import React, { useState } from 'react'

import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import { FaUserCircle } from 'react-icons/fa';

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    handleLogin(email, password)
  }

  return (
    <div className='flex flex-col justify-center items-center h-screen px-4 sm:px-8'>
      <div className='text-center flex flex-col items-center justify-center mb-4 w-full sm:w-[400px]'>
        <FaUserCircle className='text-8xl mb-4 text-emerald-600' />
        <h1 className="text-xl font-bold">Employee Task Management System</h1>
        <p className="text-sm text-gray-500 italic">Empower your team by assigning tasks and monitoring their completion</p>
      </div>

      <form onSubmit={handleSubmit} className='border-2 border-emerald-600 flex gap-4 flex-col p-8 sm:p-10 rounded-xl w-full sm:w-[400px]'>

        <div className='relative'>
          <MdEmail className='text-emerald-600 top-2 text-3xl left-2 absolute' />
          <input value={email} onChange={(e) => setEmail(e.target.value)} className='bg-transparent px-12 py-2 border-2 outline-none border-emerald-600 rounded-full w-full' placeholder='Enter Your Email' type="email" />
        </div>

        <div className='relative'>
          <FaLock className='text-emerald-600 top-2 text-2xl left-2 absolute' />
          <input value={password} onChange={(e) => setPassword(e.target.value)} className='bg-transparent px-12 py-2 border-2 outline-none border-emerald-600 rounded-full w-full' placeholder='Enter Your Password' type="password" />
        </div>

        <button className='bg-emerald-600 py-2 rounded-full text-white w-full'>Login</button>
      </form>
    </div>
  )
}

export default Login
