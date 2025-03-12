import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import the component
import { faCheck } from '@fortawesome/free-solid-svg-icons'; // Import the specific icon
import { faTrash } from '@fortawesome/free-solid-svg-icons';
export const Todo = (props) => {
  return (
    <div className='Todo'>
         <p className={ props.complete? 'completed' : 'incompleted' }>{props.task}</p>
        <div>
     <FontAwesomeIcon className='check' icon={faCheck} onClick={()=>props.toggle(props.id)}/>
     <FontAwesomeIcon className='check' icon={faTrash} onClick={()=>props.deleteTodo(props.id)}/>
    </div>
     </div>
  )
}
