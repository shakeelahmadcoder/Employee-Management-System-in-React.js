import React from 'react'

const CompleteTask = ({ data }) => {
  return (
    <div className=' w-[300px] min-h-[280px] h-auto bg-green-700 text-white rounded-xl p-5'>
      <p className='bg-yellow-500 text-black font-bold mb-3 text-center p-2 rounded'>Completed</p>
      <div className='flex justify-between items-center font-bold mb-3'>
        <p className='bg-black text-white p-2'>{data.category}</p>
        <p>{data.date}</p>
      </div>
      <h1 className='text-xl font-bold'>{data.taskTitle}</h1>
      <p>{data.description}</p>

      {/* buttons */}
      <div className='flex justify-between gap-4 mt-4'>
        <button className='bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-all duration-300'>
          🖉 Edit
        </button>
        <button className='bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition-all duration-300'>
          🗑️ Delete
        </button>
      </div>

    </div>
  )
}

export default CompleteTask