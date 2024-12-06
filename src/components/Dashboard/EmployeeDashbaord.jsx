import React from 'react'
import Header from '../Others/Header'
import TaskListNumber from '../Others/TaskListNumber'
import TaskList from '../TaskList/TaskList'

const EmployeeDashbaord = (props) => {
  return (
    <div className='p-10 flex flex-col h-screen gap-4'>
      <Header changeUser = {props.changeUser} data = {props.data}/>
      <TaskListNumber data = {props.data}/>
      <TaskList data = {props.data}/>
    </div>
  )
}

export default EmployeeDashbaord