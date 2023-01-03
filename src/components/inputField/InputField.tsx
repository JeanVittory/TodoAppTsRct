import React from 'react';
import { Todos } from '../../models/Todo';
import { useRef } from 'react';
import '../styles.css';

interface Props {
	todo: string;
	setTodo: React.Dispatch<React.SetStateAction<string>>;
	handleAdd: (todo: React.FormEvent) => void;
}

const InputField = ({ todo, setTodo, handleAdd }: Props) => {
	const handleInputOnChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
		setTodo(e.target.value);
	};
	const inputRef = useRef<HTMLInputElement>(null);

	const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
		handleAdd(e);
		inputRef.current?.blur();
	};
	return (
		<form className='input' onSubmit={handleSubmit}>
			<input
				ref={inputRef}
				type='input'
				placeholder='Enter a task'
				className='input__box'
				value={todo}
				onChange={handleInputOnChange}
			/>
			<button className='input__submit' type='submit'>
				Go
			</button>
		</form>
	);
};

export { InputField };
