import { Todos } from '../../models/Todo';
import { AiFillEdit, AiFillDelete } from 'react-icons/ai';
import { MdDone } from 'react-icons/md';
import React, { useEffect, useRef, useState } from 'react';
import '../styles.css';

interface Props {
	todo: Todos;
	todoList: Todos[];
	setTodos: React.Dispatch<React.SetStateAction<Todos[]>>;
}

const SingleTodo = ({ todo, todoList, setTodos }: Props) => {
	const [isEditing, setIsEditing] = useState<boolean>(false);
	const [editTodo, setEditTodo] = useState<string>(todo.todo);
	const handleDone = (): void => {
		setTodos(
			todoList.map((element) => (element.id === todo.id ? { ...todo, isDone: !todo.isDone } : todo))
		);
	};

	const handleDelete = (): void => {
		setTodos(todoList.filter((element) => element.id !== todo.id));
	};

	const handleEdit = () => {
		if (!isEditing && !todo.isDone) {
			setIsEditing(!isEditing);
		}
	};

	const handleEditInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditTodo(e.target.value);
	};

	const handleSubmitEdition = (e: React.FormEvent) => {
		e.preventDefault();
		setTodos(
			todoList.map((element) => (element.id === todo.id ? { ...todo, todo: editTodo } : todo))
		);
		setIsEditing(false);
	};

	const inputRef = useRef<HTMLInputElement>(null);

	useEffect(() => {
		inputRef.current?.focus();
	}, [isEditing]);

	return (
		<form className='todos__single' onSubmit={handleSubmitEdition}>
			{isEditing ? (
				<input
					ref={inputRef}
					type='text'
					value={editTodo}
					onChange={handleEditInput}
					className='todos__single--text'
				/>
			) : todo.isDone ? (
				<s className='todos__single--text'>{todo.todo}</s>
			) : (
				<span className='todos__single--text'>{todo.todo}</span>
			)}
			<div>
				<span className='icon'>
					<AiFillEdit onClick={handleEdit} />
				</span>
				<span className='icon' onClick={handleDelete}>
					<AiFillDelete />
				</span>
				<span className='icon'>
					<MdDone onClick={handleDone} />
				</span>
			</div>
		</form>
	);
};

export { SingleTodo };
