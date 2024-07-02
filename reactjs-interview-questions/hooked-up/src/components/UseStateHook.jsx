import { useState, useEffect } from 'react';
import { useCustomEffect } from "./UseEffectPolyfill";


function UseStateHook() {
	const [counter, setCounter] = useState(0);
	const [inputValue, setInputValue] = useState("");
	const [count, setCount] = useState(0);
	const [count1, setCount1] = useState(0);
	const [userData, setUserData] = useState({
		firstName: "",
		lastName: "",
		email: ""
	})

	const onChangeUserData = (e) => {
		const { name, value } = e.target;
		setUserData({ ...userData, [name]: value });
	}


	const handleIncrement = () => {
		// setCount(count + 1);
		// setCount(count + 1);
		// setCount(count + 1);

		// We will do this instead of above
		setCount((prev) => prev + 1);
		setCount((prev) => prev + 1);
		setCount((prev) => prev + 1);
	};

	const increment = () => {
		// setCounter(counter + 1);
		setCounter((prev) => prev + 1);

	}

	const decrement = () => {
		setCounter(counter - 1);
	}

	useCustomEffect(() => {
		console.log("useEffect here....");
		return () => {
			console.log("cleanup function!");
		}
	}, [counter]);

	return (
		<div>
			<h3>
				<u>useState Hook</u>
			</h3>
			<h5>Question 1: What is useState in React?</h5>
			{/* 
            useState is a hook in React that allows functional components to manage state by
            declaring state variables and providing a function to update them.
            */}
			<p>Count: {counter}</p>
			<button onClick={increment}>Increment</button>
			<button onClick={decrement}>Decrement</button>


			<h5>Question 2: Whats the Output and How to fix this?</h5>
			<button onClick={handleIncrement}>Increment by 3</button>

			<h5>
				Question 3: What is Two Way Data Binding and How can you achieve it in
				react?
			</h5>
			{/* 
            - It is a concept that allows the synchronization of data between the model (or state) 
            and the view in both directions.
            - You can achieve it by combining state management with controlled components.
            */}
			<input value={inputValue} onChange={(e) => setInputValue(e.target.value)}></input>
			{inputValue}

			<h5>
				Question 4: Build a Form containing First name, last name and email. Use
				only one state to manage all fields.
			</h5>
			<form onSubmit={(e) => {
				e.preventDefault();
				console.log('userData', userData);
			}}>
				<input
					placeholder="Enter First Name"
					type="text"
					name="firstName" onChange={onChangeUserData}>
				</input>
				<input
					placeholder="Enter Last Name"
					type="text"
					name="lastName" onChange={onChangeUserData}>
				</input>
				<input
					placeholder="Enter Email"
					type="text"
					name="email" onChange={onChangeUserData}>
				</input>
				<button type="submit">Submit</button>
			</form>

		</div>
	)
}

export default UseStateHook;