import React from 'react'
import {FaPlusCircle} from 'react-icons/fa'

export const Todoinput = ({text,setText,handlesubmit}) => {

  return (
    <form onSubmit={(e)=>handlesubmit(e)}>
 <div className='input-group bt-3'> 
 <input type='text' name='text'  value={text}
 onChange={e=>setText(e.target.value)}
  className='form-control border-0 shadow-none' placeholder='Add Task' autoFocus/>
<button className='input-group-text border-0 shadow-none btn btn-light' >
<FaPlusCircle className='fs-3 text-primary'></FaPlusCircle>
</button>

 </div>
    
    </form>
   
  )
}

