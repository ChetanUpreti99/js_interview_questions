import { useState } from 'react'
import './App.css'

import UseStateHook from './components/UseStateHook';
import UseEffectHook from './components/UseEffectHook';
import UseRefHook from './components/UseRefHook';
import UseContextHook from './components/UseContextHook';
import UseMemoUseCallBackHook from './components/UseMemoAndUseCallback';
import UseImperativeHandleHook from './components/UseImperativeHandleHook';
import UseReducerHook from './components/UseReducerHook';

function App() {
	let [counter, setCounter] = useState(0);
	return (
		<>
			<div>
				{/* <UseStateHook /> */}
				{/* <UseEffectHook /> */}
				{/* <UseRefHook /> */}
				{/* <UseContextHook /> */}
				{/* <UseMemoUseCallBackHook /> */}
				{/* <UseImperativeHandleHook /> */}
				{<UseReducerHook />}
			</div>
		</>
	)
}

export default App
