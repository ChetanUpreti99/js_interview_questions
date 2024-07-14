import { createStore, applyMiddleware, combineReducers } from "redux";
import { thunk } from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';
import { TodoReducer } from "./reducers/TodoReducers";

const reducers = combineReducers({
    Todo: TodoReducer
})


const initialState = {

}

const middleware = [thunk];

export const store = createStore(reducers,
    initialState,
    composeWithDevTools(
        applyMiddleware(...middleware)
    )
);




