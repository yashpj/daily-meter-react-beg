import React from 'react'
import Todo from './Todo'

export default function TodoList({todoList, toggleTodos}) {
    return (
            todoList.map(todos =>{
                return <> <Todo key={todos.id} toggleTodos={toggleTodos} todo={todos}/></>
            }
        )
    )
}
