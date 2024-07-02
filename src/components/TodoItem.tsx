import { useSelector } from "react-redux";
import { RootState } from "../store/store";

const TodoItem = () => {
	const { todos } = useSelector((state: RootState) => state.todo);
	return (
		<div>
			{todos?.map((todo) => (
				<div key={todo.id}>{todo.title}</div>
			))}
		</div>
	);
};

export default TodoItem;
