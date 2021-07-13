import React from 'react'

export default function Todo({todo, toggleTodos}) {

    function handleTodoClick(){
        toggleTodos(todo.id)
    }

    return (
        <div>
        <label>
            <input type="checkbox" checked={todo.completed} onChange={handleTodoClick}
            />
           {todo.name}
        </label>
        </div>
    )
}
