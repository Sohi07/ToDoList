import React,{useState} from 'react'
import { v4 as uuidv4 } from 'uuid';
import { TodoForm } from './TodoForm'
import { Todo } from './Todo';
export const TodoWrapper = (props) => {
    const [todos,setTodos]=useState([]);
    function addTodos(todo){
        setTodos(prev=>[...prev,{id:uuidv4(),
            task:todo,
            completed:false}]);
    }
    function toggle(id){
      setTodos(prev=>
        prev.map(todo=>
            todo.id===id?{...todo,completed:!todo.completed}:todo)
      );
    }
    function deleteTodo(id){
        setTodos(prev=>
            prev.filter(todo=>
                todo.id!==id)
        );
    }


  return (
    <div className='TodoWrapper'>
        <h1>Task Manager</h1>
    <TodoForm addTodos={addTodos} />

    {todos.map((todo)=>(
        <Todo 
        task={todo.task} 
        id={todo.id} 
        complete={todo.completed}
        toggle={toggle}
        deleteTodo={deleteTodo}
        />
    ))}
    
    
    </div>
  )
}
