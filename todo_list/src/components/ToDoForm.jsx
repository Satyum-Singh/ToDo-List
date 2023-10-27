import React, { useState } from 'react'

export const ToDoForm = ({ addTodo }) => {

    const [value, setvalue] = useState("");

    const handleChange = (e) => {
        setvalue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!value) return;
        addTodo(value);
        setvalue("");
    }

    return (
        <form className="TodoForm" onSubmit={handleSubmit}>
            <input type="text" value={value} className='todo-input' placeholder="Task for Today" onChange={handleChange} />
            <button type="submit" className='todo-btn'>Add Task</button>
        </form>
    )
}
