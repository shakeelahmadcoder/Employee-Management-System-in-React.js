import React from 'react'

const TaskListNumber = ({data}) => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-4 gap-4'>
      {/* New Tasks */}
      <div className='bg-yellow-500 text-black p-8 rounded-xl flex flex-col gap-2'>
        <h1 className='text-2xl font-bold'>{data.taskCounts.newTask}</h1>
        <p className='text-xl'>New Tasks</p>
      </div>
      
      {/* Completed Tasks */}
      <div className='bg-green-500 text-black p-8 rounded-xl flex flex-col gap-2'>
        <h1 className='text-2xl font-bold'>{data.taskCounts.completed}</h1>
        <p className='text-xl'>Completed Tasks</p>
      </div>
      
      {/* Active Tasks */}
      <div className='bg-blue-500 text-black p-8 rounded-xl flex flex-col gap-2'>
        <h1 className='text-2xl font-bold'>{data.taskCounts.active}</h1>
        <p className='text-xl'>Active Tasks</p>
      </div>
      
      {/* Failed Tasks */}
      <div className='bg-red-500 text-black p-8 rounded-xl flex flex-col gap-2'>
        <h1 className='text-2xl font-bold'>{data.taskCounts.failed}</h1>
        <p className='text-xl'>Failed Tasks</p>
      </div>
    </div>
  )
}

export default TaskListNumber
