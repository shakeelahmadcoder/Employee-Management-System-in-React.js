import React from 'react'

const FailedTask = ({ data }) => {
  return (
    <div className=' w-[300px] min-h-[280px] h-auto bg-red-700 text-white rounded-xl p-5'>
      <p className='bg-red-500 text-white font-bold mb-3 text-center p-2 rounded'>Failed</p>
      <div className='flex justify-between items-center font-bold mb-3'>
        <p className='bg-black text-white p-2'>{data.category}</p>
        <p>{data.date}</p>
      </div>
      <h1 className='text-xl font-bold'>{data.taskTitle}</h1>
      <p>{data.description}</p>
      <div className='flex justify-between gap-4 mt-4'>
        <button className='bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition-all duration-300'>
          🔄 Retry
        </button>
        <button className='bg-gray-500 text-white py-2 px-4 rounded-lg hover:bg-gray-600 transition-all duration-300'>
          🗑️ Delete
        </button>
      </div>
    </div>

  )
}

export default FailedTask