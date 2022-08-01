// import { faCHeckcircle,faEdit,faTimescircle } from 'react-icons/fa'


import { FaCheckCircle,FaEdit, FaTimesCircle} from 'react-icons/fa'
export const Todolist = ({todo,handledelete, handlecomplete, Todohandleupdate}) => {
  return (
<div className='col-lg-8 w-100 col-md-8 col-sm-10 col-12'>
{
  todo.length >0 && todo.map((item)=>{
    return(
      <div  key={item._id}className='d-flex list-zoom  justify-content-between p-3 my-2 shadow-lg'>
      <span className={`${item.completed && 'text-muted  text-decoration-line-through'}`}>{item.text}</span>
      <div className='btn-group '>
      
        {!item.completed && (
         <>
       <FaCheckCircle onClick={e=>handlecomplete(item)}className='text-success btn-action'/>
       <FaEdit onClick={()=>Todohandleupdate(item)} className='text-primary btn-action  mx-2'/> </>
      
    )}
        <FaTimesCircle  onClick={e=>handledelete(item._id)}className='text-danger btn-action'/>
        
      </div>
    </div>
    )
  })
}


</div>

  )
}
