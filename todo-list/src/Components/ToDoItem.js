import React from 'react';
import { connect } from 'react-redux';

const ToDoItem = (props) => {

    const todoItem = props.todos.map(todo => {
        return <p key={Math.random()}>{todo}</p>
    })
    

    return (
        <p>{todoItem}</p>
    );
}

const mapStateToProps = (state) => {
    return {
        todos: state.todos
    }
}

export default connect(mapStateToProps)(ToDoItem);