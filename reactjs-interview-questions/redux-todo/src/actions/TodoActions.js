export const AddTodoAction = (todo) => (dispatch, getState) => {


    const {
        Todo: { todos },
    } = getState();

    const hasTodo = todos.find(i => i.id === todo.id);

    if (!hasTodo && todo.text !== "") {
        dispatch({
            type: "ADD_TODO",
            payload: [todo, ...todos]
        })
    }
}


export const RemoveTodoAction = (todo) => (dispatch, getState) => {
    const {
        Todo: { todos },
    } = getState();
    dispatch({
        type: "REMOVE_TODO",
        payload: todos.filter(to => to.id !== todo.id)
    })
} 