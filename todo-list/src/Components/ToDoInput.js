import React, { useState } from 'react';
import { connect } from 'react-redux';
import './ToDoInput.css'

const ToDoInput = (props) => {

    const [todo, setTodo] = useState('');

    const addTodo = (e) => {
        setTodo(e.target.value)
    }

    const handleSubmit = () => {
        if (todo) {
            props.onAddTodo(todo)
            setTodo('')

        } else {
            alert('Please enter a task')
        }
    }

    const handleKeyPress = (e) => {
        if (e.keyCode === 13) {
            props.onAddTodo(todo)
            setTodo('')

        }
      }

    return (
        <div>
            
                <input type='text' value={todo} onChange={addTodo} onKeyUp={handleKeyPress}/>
                <button onClick={handleSubmit}>Add</button>
        </div>
    );
};

// const mapStateToProps = (state) => {
//     return {
//         todos: state.todos
//     }
// }

const mapDispatchToProps = (dispatch) => {
    return {
        onAddTodo: (todo) => dispatch({type: 'ADD_TODO', value: todo})
    }
}

export default connect(null, mapDispatchToProps)(ToDoInput);