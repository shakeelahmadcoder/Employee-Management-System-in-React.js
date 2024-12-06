import React from 'react'

const AllTask = () => {
  return (
    <div className='flex flex-col '>
      <div className='flex justify-between items-center text-center '>
      <h1 className='bg-emerald-600 border h-full   w-full text-center'>Employee Name</h1>
      <h1 className='bg-emerald-600 border h-full   w-full text-center'>Completed Tasks</h1>
      <h1 className='bg-emerald-600 border h-full   w-full text-center'>New Tasks</h1>
      <h1 className='bg-emerald-600 border h-full   w-full text-center'>Failed Tasks</h1>
      </div>
      {/* ye sare useContext Data se aae ge phr un per map hoga  */}
      <div className='flex justify-between items-center text-center '>
      <h1 className=' border text-center h-full  w-full '>Mustjab Hussain</h1>
      <h1 className='bg-green-600 border h-full   w-full text-center'>2</h1>
      <h1 className='bg-pink-600 border h-full   w-full text-center'>5</h1>
      <h1 className='bg-red-600 border h-full   w-full text-center'>0</h1>
      </div>
      <div className='flex justify-between items-center text-center '>
      <h1 className=' border text-center h-full  w-full '>Mustjab Hussain</h1>
      <h1 className='bg-green-600 border h-full   w-full text-center'>2</h1>
      <h1 className='bg-pink-600 border h-full   w-full text-center'>5</h1>
      <h1 className='bg-red-600 border h-full   w-full text-center'>0</h1>
      </div>
      <div className='flex justify-between items-center text-center '>
      <h1 className=' border text-center h-full  w-full '>Mustjab Hussain</h1>
      <h1 className='bg-green-600 border h-full   w-full text-center'>2</h1>
      <h1 className='bg-pink-600 border h-full   w-full text-center'>5</h1>
      <h1 className='bg-red-600 border h-full   w-full text-center'>0</h1>
      </div>
      <div className='flex justify-between items-center text-center '>
      <h1 className=' border text-center h-full  w-full '>Mustjab Hussain</h1>
      <h1 className='bg-green-600 border h-full   w-full text-center'>2</h1>
      <h1 className='bg-pink-600 border h-full   w-full text-center'>5</h1>
      <h1 className='bg-red-600 border h-full   w-full text-center'>0</h1>
      </div>
    </div>
  )
}

export default AllTask