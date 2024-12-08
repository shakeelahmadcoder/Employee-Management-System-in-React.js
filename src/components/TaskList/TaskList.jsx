import React from 'react'
import CompleteTask from './CompleteTask'
import AcceptTask from './AcceptTask'
import FailedTask from './FailedTask'
import NewTask from './NewTask'

const TaskList = ({data}) => {
  console.log(data.tasks)
  return (
    <>
      <h1 className='text-2xl font-bold text-center mt-2'>Tasks List</h1>
      <div  className='flex gap-4 flex-wrap'>
      {data.tasks.map((elem, idx)=>{
        if(elem.newTask){
          return <NewTask key={idx} data={elem} />
        }
        if(elem.active){
          return <AcceptTask key={idx} data={elem} />
        }
        if(elem.completed){
          return <CompleteTask key={idx} data={elem} />
        }
        if(elem.failed){
          return <FailedTask key={idx} data={elem} />
        }
      })}
        
      </div>
    </>
  )
}

export default TaskList
