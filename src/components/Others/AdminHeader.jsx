import React from 'react'

const AdminHeader = (props) => {
  const handleLogOut = () =>{
    localStorage.setItem("loggedInUser", "")
    props.changeUser("")
  }
  return (
    <div className='flex justify-between items-center border-b-emerald-600'>
      <h1 className='text-xl sm:text-2xl font-bold'>Welcome! <br /> <span className='text-xl sm:text-3xl'>Admin Sahab 😊</span>  </h1>
      <div><button onClick={handleLogOut} className='bg-red-600 px-4 py-2 rounded-xl font-bold'>Log Out</button></div>
    </div>
  )
}

export default AdminHeader