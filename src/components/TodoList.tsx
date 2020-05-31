import React from 'react';

import './TodoList.css'

import { TodoListProps } from '../models/components/TodoList.model'

//react . functional component MUST RETURN JSX
const TodoList: React.FC<TodoListProps> = props => {
    return <ul>
        {props.items.map((todo, index) => (
            <li key={todo.id}>
                <span>{todo.text}</span>
                <button onClick={props.todoDeleteHandler.bind(null, todo.id)}>Delete</button>
            </li>
        ))}
    </ul>;
};

export default TodoList;