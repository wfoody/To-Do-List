import React from 'react';
import { connect } from 'react-redux';

const Todos = (props) => {

    const toDoList = props.todos.map(todo => {
        return (
            <li key={Math.random()}>
                {todo}
                <button onClick={() => props.onDelete(todo)}>Delete</button>
                </li>
        )
    })

    return (
        <div>
            <ul>
                {toDoList}
            </ul>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        todos: state.todos
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
    onDelete: (todo) => dispatch({type: 'DELETE_TODO', value: todo})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Todos);