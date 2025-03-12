import React,{useState} from 'react'

export const TodoForm = (props) => {
    const [value,setValue]=useState("");
    function handleChange(event){
       setValue(event.target.value);
    }
    function handleClick(event){
       event.preventDefault();
       if (value.trim()==="")return;
       props.addTodos(value);
       setValue("");
       
    }
  return (
    <form className='TodoForm'>
   <input 
       type="text" 
       onChange={handleChange} 
       placeholder='What is the task?' 
       value={value}
       className='todo-input'>
   </input>
    <button className='todo-btn' type="submit" onClick={handleClick}>Add Task</button>
    </form>
  )
}
