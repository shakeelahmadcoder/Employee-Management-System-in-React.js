import React from 'react'
import CreateTask from '../Others/CreateTask'
import AllTask from '../Others/AllTask'
import AdminHeader from '../Others/AdminHeader'

const AdminDashboard = (props) => {
  return (
    <div className='p-10 flex flex-col h-screen gap-4'>
      <AdminHeader changeUser={props.changeUser}/>
      <CreateTask/>
      <AllTask/>
    </div>
  )
}

export default AdminDashboard