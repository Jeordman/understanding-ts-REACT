import React, { useState } from 'react';

import TodoList from './components/TodoList'
import NewTodo from './components/NewTodo'

import { TodoState } from './models/todo.model'

const App: React.FC = () => {

  const [todos, setTodos] = useState<TodoState[]>([]);

  const todoAddHandler = (text: string) => {
    console.log(text)
    setTodos(prevTodos => [...prevTodos, { id: Math.random().toString(), text:text }])
  }

  const todoDeleteHandler = (todoId: string) => {
    setTodos(prevTodos => {
      return prevTodos.filter(todo => todo.id !== todoId)
    })
  }

  return (
    <div className="App">
      <NewTodo todoAddHandler={todoAddHandler} />
      <TodoList items={todos} todoDeleteHandler={todoDeleteHandler}/>
    </div>
  );
}

export default App;