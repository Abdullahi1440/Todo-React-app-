import { Todoinput } from './Todoinput'

import {Todolist} from "./Todolist"


import React, { useState } from 'react'


export const Todo = () => {
  //use state
  const [text , setText]=useState('');
const[todo , setTodo]=useState([]);
const [errors ,setErrors]=useState('');
const[success  ,setSuccess]=useState('');
const[todoUpdate ,setTodoupdate]=useState({})
const handledelete=(id)=>{
  const newTodo=todo.filter((t)=>t._id!==id)
  setTodo(newTodo);
  setSuccess('Task deleted successfully');
 setText('')
 setTimeout(() => {
  
 }, 5000);
}
const handlecomplete =(item)=>{
  const newTodo=todo.filter((t)=> t._id !==item._id)
  newTodo.push({_id:item._id , text:item.text , completed :true})
  setTodo(newTodo)
  setSuccess('task completed succesfully')
setTimeout(() => {
  setSuccess('')
}, 5000);

 }
 const Todohandleupdate=(item)=>{
  setText(item.text)
  setTodoupdate(item)
  
 }
 
  const handlesubmit=(e)=>{
    e.preventDefault();
    console.log(text)
    if(text.trim()===''){
      return setErrors('Todo is required field form ');
    
   }
    if(todoUpdate && todoUpdate._id){
      const getTodooldfilter=todo.filter((old)=>old._id !==todoUpdate._id
   
      )
         //Add new update todo the state  
         getTodooldfilter.unshift(
          {
            _id:todoUpdate._id , text , completed: todoUpdate.completed
            
          }
        )
        setTodo(getTodooldfilter)
        setSuccess('new task  is successfully updated');
        setTimeout(() => {
         setSuccess('');
        },5000);
      setText('')
      setTodoupdate({})

        }
   else{
     todo.unshift({_id:Date.now(),text, completed:false})
     setTodo(todo);
    setText('');
    setErrors('');
   setSuccess('new task is successfully');
   setTimeout(() => {
    setSuccess('');
   },5000);
     
   }
  }



  return ( 
    <div className='d-flex justify-content-center align-items-center min-vh-100 text-light'>
      <div className='row'>
        <div className='bg-dark text-light p-5'>
        <div className='col-lg-8 w-100 col-md-8 col-sm-10 col-12  '>
          <div className='bt-3'>
          <div className='display-6 text-center'>
            <h3>Todo List Manager App   </h3>
            <hr></hr>
             </div>
             </div>
             <div className='text-danger  text-center fw-lighter'>
               {errors}
                  </div>
             <div className='text-success  text-center fw-lighter'>
               {success}
                  </div>                
                   <Todoinput text={text} setText={setText}
                  handlesubmit={handlesubmit}/>
               </div>
         <Todolist  todo={todo} handledelete={handledelete}
          handlecomplete={handlecomplete}
          Todohandleupdate={Todohandleupdate}
         />
        </div>
       </div>
    {/* 
   
   */}

    </div>
  )
}
