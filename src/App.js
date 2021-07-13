import './App.css';
import React, {useState, useRef, useEffect} from 'react';
import TodoList from './TodoList';
// import { uuid } from 'uuidv4';
import { v4 as uuidv4 } from 'uuid';

const LOCAL_STORAGE_KEY = 'todoApp.todos'

function App() {

  const [todos, setTodos] = useState([]);
  const todoNameRef = useRef()

  useEffect(()=>{
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if(storedTodos)setTodos(storedTodos)
  },[])

  useEffect(()=>{
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))}, [todos])

  function toggleTodos(id){
    const newTodos = [...todos]
    const todo= newTodos.find(todo=> todo.id === id)
    todo.completed = !todo.completed
    setTodos(todo)
  }

  function handleAddTodo(e){
    const name = todoNameRef.current.value

    if(name === '') return 
    console.log(name)

    setTodos(prevTodos =>{
      return [...prevTodos, { id: uuidv4(), name:name,
      completed: false}]
    })

    todoNameRef.current.value = null
  }

  return (
    <>
    <TodoList todoList={todos} toggleTodos={toggleTodos}/>
    <input ref={todoNameRef} type="text" />
    <button onClick={handleAddTodo}>Add Todos</button>
    <button>Clear Todos</button>
    <div>0 left to do</div>
    </>
  )
}

export default App;
