import React, { useContext, useRef, useState } from 'react';
import { Store } from '../../store/Store';
import '../../styles/FormTodo.css'


const HOST_API = "http://localhost:8080/api";

const TodoForm = (props) => {

    const formRef = useRef(null);
    const { dispatch, state: {item} } = useContext(Store);

    const [state, setState] = useState({item});

    const onAdd = (event) => {
        event.preventDefault();

        const request = {
            id:null,
            name:state.name,
            completed:false,
            listId:props.task.id
        };

        fetch("http://localhost:8080/api/todo", {
        method: "POST",
        body: JSON.stringify(request),
        headers: {
            'Content-Type': 'application/json'
        }
        })
        .then(response => response.json())
        .then((todo) => {
            // dispatch({ type: "add-item", item: todo });
            // setState({ name: "" });

        fetch("http://localhost:8080/api/task")
        .then(response => response.json())
        .then((list) => {
            dispatch({ type: "update-list-category", list })
        })
        setState({ name: "" });
        formRef.current.reset();
        });
    }


    return <form ref={formRef} className="form-todo">
        <input
            type="text"
            name="name"
            className="form-control me-sm-2"
            placeholder="Nueva tarea...."
            onChange={(event) => {
            setState({ ...state, name: event.target.value })
            }}>
        </input>
        <button
            className="btn btn-info btn-save-todo"
            onClick={onAdd}>Crear</button>
    </form>
}


export default TodoForm;