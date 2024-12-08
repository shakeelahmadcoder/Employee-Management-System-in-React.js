import React, { useContext, useState } from 'react'
import { AuthContext } from '../Context/AuthProvider';

const CreateTask = () => {
  const [userData, setUserData] = useContext(AuthContext)

  const [asignTo, setAsignTo] = useState("");
  const [taskTitle, setTaskTitle] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");

  const [task, setTask] = useState({})

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = ({ active: true, newTask: true, completed: false, failed: false, asignTo, taskTitle, category, date, description })
    setTask(newTask)
    const data = userData;

    data.forEach((elem) => {
      if (asignTo === elem.firstName) {
        elem.tasks.push(task)
        elem.taskCounts.newTask = elem.taskCounts.newTask + 1;
        console.log(elem)
      }

    })
    setUserData(data)

    setAsignTo("")
    setTaskTitle("")
    setCategory("")
    setDate("")
    setDescription("")

  }

  return (
    <div className='bg-[#1C1C1C] p-8 rounded-xl'>
      <h1 className='text-xl md:text-2xl font-bold text-center'>Asign Tasks to Your Employees</h1>
      <hr />
      <form onSubmit={handleSubmit} className='mt-8 md:flex justify-between items-center gap-8'>
        {/* left  */}
        <div className='flex flex-col gap-3 w-full'>

          <div >
            <h4 className='mb-1'>Asign To </h4>
            <input value={asignTo} onChange={(e) => setAsignTo(e.target.value)} className='w-full bg-transparent outline-none border-2 border-gray-500 rounded-xl px-4 py-2' type="text" placeholder='Employee Name' />
          </div>
          <div >
            <h4 className='mb-1'>Task Title </h4>
            <input value={taskTitle} onChange={(e) => setTaskTitle(e.target.value)} className='w-full bg-transparent outline-none border-2 border-gray-500 rounded-xl px-4 py-2' type="text" placeholder='eg: Create the LMS System' />
          </div>
          <div >
            <h4 className='mb-1'>Category </h4>
            <input value={category} onChange={(e) => setCategory(e.target.value)} className='w-full bg-transparent outline-none border-2 border-gray-500 rounded-xl px-4 py-2' type="text" placeholder='Development, Desiging, Art' />
          </div>
          <div >
            <h4 className='mb-1'>Date</h4>
            <input value={date} onChange={(e) => setDate(e.target.value)} className='w-full bg-transparent outline-none border-2 border-gray-500 rounded-xl px-4 py-2' type="date" />
          </div>


        </div>
        {/* right for description */}
        <div className='flex flex-col'>
          <h4 className='mb-1'>Description </h4>
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} className='bg-transparent outline-none border-2 border-gray-500 rounded-xl px-4 py-2' placeholder='Describe you task...' cols={50} rows={9}></textarea>
          <button className='bg-emerald-600 py-2  rounded-xl mt-2'>Submit</button>
        </div>
      </form>
    </div>
  )
}

export default CreateTask