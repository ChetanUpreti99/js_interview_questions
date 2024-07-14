
import './App.css';
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AddTodoAction, RemoveTodoAction } from "./actions/TodoActions";

function App() {

	const [todo, setTodo] = useState();
	const Todo = useSelector((state) => state.Todo);
	const { todos } = Todo;
	const dispatch = useDispatch();

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(AddTodoAction({ id: new Date().getTime(), text: todo }));
		setTodo("");
	}

	const removeHandler = (todo) => {
		dispatch(RemoveTodoAction(todo));
	}

	return (
		<div className="App">
			<ReduxComp />
			<header className="App-header">
				<h2>Enter a Todo</h2>
				<form onSubmit={handleSubmit}>
					<input
						placeholder="Enter a todo"
						value={todo}
						style={{
							width: 200,
							padding: 20,
							borderRadius: 20,
							border: "none",
							fontSize: 20,
						}}
						onChange={(e) => setTodo(e.target.value)}
					/>
					<button
						type="submit"
						style={{
							padding: 20,
							borderRadius: 25,
							fontSize: 20,
							marginLeft: 20,
						}}
					>
						GO
					</button>
					<ul>
						{todos &&
							todos.map((t) => (
								<li key={t.id}>
									<span>{t.text}</span>
									<button
										type="button"
										style={{
											borderRadius: 25,
											fontSize: 20,
											marginLeft: 20,
											color: "white",
											backgroundColor: "orange",
										}}
										onClick={() => removeHandler(t)}
									>
										delete
									</button>
								</li>
							))}
					</ul>
				</form>
			</header>
		</div>
	);
}

export default App;



const ReduxComp = () => {
	return (
		<div>
			<h2>Redux Interview Questions in React</h2>
			<h4>
				<u>Question 1: What is Redux?</u>
				<p>
					Redux is a state management library often used with React. It helps in
					managing the application state in a predictable way by centralizing the
					state in a single store, enabling easy debugging and testing.
				</p>
			</h4>

			<h4>
				<u>Question 2: How does the redux state management works?</u>
			</h4>
			<h4>
				<u>Question 3: How do you define an action in Redux?</u>
			</h4>
			<h4>
				<u>Question 4: What is a reducer in Redux? Show an example?</u>
			</h4>
			<h4>
				<u>Question 5: How do you create a Redux store?</u>
			</h4>

			<h4>
				<u>
					Question 6: What is redux-thunk middleware in Redux and how do you
					apply it?
				</u>
				<p>
					Redux Thunk is a middleware for Redux that allows
					write action creators that return a function instead of an action.
					This can be particularly useful for
					handling asynchronous operations like API calls within your Redux actions.
				</p>

			</h4>

			<h4>
				<u>
					Question 6: When would you choose Context API over Redux, and vice
					versa?
				</u>
				<p>
					Context API:

					Simpler state management.
					Suitable for localized state.
					Built-in React solution without external dependencies.
					Good for small to medium-sized applications.
					Redux:

					Handles complex state management.
					Suitable for global state.
					Predictable state updates with middleware support.
					Good for large applications with complex state logic.
					Choosing between Context API and Redux ultimately depends on the specific
					requirements and complexity of your application.
					For simpler cases and smaller applications, Context API is usually sufficient.
					For larger applications with complex state requirements, Redux is a better choice.
				</p>
			</h4>
		</div>
	)
}
