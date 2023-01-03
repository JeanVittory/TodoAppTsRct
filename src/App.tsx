import React, { useState } from 'react';
import { InputField } from './components/inputField/InputField';
import { TodoList } from './components/todoList/TodoList';
import { Todos } from './models/Todo';
import './App.css';

const App: React.FC = () => {
	const [todo, setTodo] = useState<string>('');
	const [todos, setTodos] = useState<Todos[]>([]);

	const handleAdd = (e: React.FormEvent) => {
		e.preventDefault();
		if (todo) {
			setTodos([...todos, { id: Date.now(), todo: todo, isDone: false }]);
			setTodo('');
		}
	};
	return (
		<div className='App'>
			<span className='heading'>Taskify</span>
			<InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
			<TodoList todoList={todos} setTodos={setTodos} />
		</div>
	);
};

export default App;
