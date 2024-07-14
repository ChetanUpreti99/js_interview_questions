import { useReducer } from "react";

const cartReducer = (state, action) => {
    switch (action.type) {
        case "ADD_ITEMS":
            return {
                ...state,
                cart: [...state.cart, action.payload]
            };
        case "CLEAR_CART":
            return {
                ...state,
                cart: [],
            };
        case "REMOVE_ITEM":
            return {
                ...state,
                cart: state.cart.filter((item) => item.id !== action.payload.id),
            };
        default:
            break;

    }
}
const initialState = {
    cart: []
}


const UseReducerHook = () => {
    return (
        <div>
            <h3>
                <u>use reducer hook!</u>

            </h3>
            <h5>Question 1: What is useReducer in React?</h5>
            {/*
                  - It is a hook used for managing complex state logic by utilizing a reducer function. 
                  - Alternative to useState and provides a way to update state based on defined actions.
            */}
            <h5>Question 2: When should you use useReducer instead of useState?</h5>
            {/* 
                    - When managing complex state transitions or logic that involves multiple sub-values.
                    - When state logic follows a pattern or when multiple actions need to update the state
                    in predictable ways.
            */}
            <h5>
                Question 3: Give Example of useReducer for Shopping Cart State
                Management?
            </h5>
            <ShoppingCart />
        </div>
    )
}
export default UseReducerHook;

const products = [
    { id: 1, name: "Product 1" },
    { id: 2, name: "Product 2" },
    { id: 3, name: "Product 3" },
];

const ShoppingCart = () => {
    const [state, dispatch] = useReducer(cartReducer, initialState);
    return (
        <div>
            {state.cart.length ? <>
                <p>Cart Items</p>
                <ul>
                    {

                        state.cart.map((cartItem) => {
                            return (
                                <li key={cartItem.id}>
                                    {cartItem.name}{" "}
                                    <br></br>
                                    <button onClick={() => dispatch({ type: "REMOVE_ITEM", payload: cartItem })}>Remove Itme</button>
                                </li>
                            )
                        })
                    }
                </ul>
                {
                    <button onClick={() => {
                        dispatch({ type: "CLEAR_CART" })
                    }}>Clear Cart</button>
                }
            </> : null
            }
            {
                products.map((product) => {
                    return (
                        <div key={product.id}>
                            <button onClick={() => {
                                dispatch({ type: "ADD_ITEMS", payload: product })
                            }}>{product.name}</button>
                        </div>
                    )
                })
            }

        </div>
    )
}