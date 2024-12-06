import React from 'react'

const CreateTask = () => {
  return (
    <div className='bg-[#1C1C1C] p-8 rounded-xl'>
      <h1 className='text-xl md:text-2xl font-bold text-center'>Asign Tasks to Your Employees</h1>
      <hr />
      <form className='mt-8 md:flex justify-between items-center gap-8'>
        {/* left  */}
        <div className='flex flex-col gap-3 w-full'>

          <div >
            <h4 className='mb-1'>Asign To </h4>
            <input className='w-full bg-transparent outline-none border-2 border-gray-500 rounded-xl px-4 py-2' type="text" placeholder='Employee Name' />
          </div>
          <div >
            <h4 className='mb-1'>Task Title </h4>
            <input className='w-full bg-transparent outline-none border-2 border-gray-500 rounded-xl px-4 py-2' type="text" placeholder='eg: Create the LMS System' />
          </div>
          <div >
            <h4 className='mb-1'>Category </h4>
            <input className='w-full bg-transparent outline-none border-2 border-gray-500 rounded-xl px-4 py-2' type="text" placeholder='Development, Desiging, Art' />
          </div>
          <div >
            <h4 className='mb-1'>Date</h4>
            <input className='w-full bg-transparent outline-none border-2 border-gray-500 rounded-xl px-4 py-2' type="date"  />
          </div>


        </div>
        {/* right for description */}
        <div className='flex flex-col'>
          <h4 className='mb-1'>Description </h4>
          <textarea className='bg-transparent outline-none border-2 border-gray-500 rounded-xl px-4 py-2' placeholder='Describe you task...' cols={50} rows={9}></textarea>
          <button className='bg-emerald-600 py-2  rounded-xl mt-2'>Submit</button>
        </div>
      </form>
    </div>
  )
}

export default CreateTask