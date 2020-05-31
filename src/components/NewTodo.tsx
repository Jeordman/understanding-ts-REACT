import React, { useRef } from 'react';

import './NewTodo.css'

import { NewTodoProps } from '../models/components/Newtodo.model'

const NewTodo: React.FC<NewTodoProps> = props => {
    const textInputRef = useRef<HTMLInputElement>(null)

    const todoSubmitHandler = (event: React.FormEvent) => {
        event.preventDefault();
        const enteredText = textInputRef.current!.value;
        // console.log(enteredText)
        props.todoAddHandler(enteredText)
        textInputRef.current!.value = '';
    }

    return (
        <form onSubmit={todoSubmitHandler}>
            <div>
                <label htmlFor="todo-text">Todo Text</label>
                <input type="text" id="todo-text" ref={textInputRef}/>
            </div>
            <button type="submit">Add Todo</button>
        </form>
    )
};

export default NewTodo;