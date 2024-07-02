import { ChangeEvent, FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../store/todSlice/todoSlice";

const TodoForm = () => {
	const dispatch = useDispatch();
	const [title, setTitle] = useState<string>("");

	const changeTitle = (e: ChangeEvent<HTMLInputElement>) => {
		setTitle(e.target.value);
	};

	const handeleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const newData = {
			id: Math.random(),
			title,
		};
		dispatch(addTodo(newData));
	};
	return (
		<form onSubmit={handeleSubmit}>
			<input type="text" value={title} onChange={changeTitle} />
			<button type="submit">add</button>
		</form>
	);
};

export default TodoForm;
