

const initialState = {
    todos: []
}

const reducer = (state = initialState, action) => {
    if (action.type === 'ADD_TODO') {
        return {
            ...state,
            todos: state.todos.concat(action.value)
        }
    }
    if (action.type === 'DELETE_TODO') {
        return {
            todos: [
                ...state.todos.filter(todo => todo !== action.value)
            ]
        }
    }
    return state;
}

export default reducer;