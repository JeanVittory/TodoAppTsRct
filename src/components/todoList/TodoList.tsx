import { Todos } from '../../models/Todo';
import { SingleTodo } from '../singleTodo/SingleTodo';
import '../styles.css';

interface Props {
	todoList: Todos[];
	setTodos: React.Dispatch<React.SetStateAction<Todos[]>>;
}

const TodoList = ({ todoList, setTodos }: Props) => {
	if (!todoList.length) return <div>Empty list</div>;
	return (
		<div className='todos'>
			{todoList.map((todo) => (
				<SingleTodo todo={todo} key={todo.id} setTodos={setTodos} todoList={todoList} />
			))}
		</div>
	);
};

export { TodoList };
