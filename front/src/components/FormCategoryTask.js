
import React, { useContext, useRef, useState } from 'react'
import {Store} from "../store/Store"
import '../styles/FormTask.css'

const FormCategoryTask = (props) => {

    const formRef = useRef(null);

    const { dispatch, state: {item} } = useContext(Store);

    const [state, setState] = useState({item});

    const onAdd = (event) => {
        event.preventDefault();

    const request = {
        name: state.name,
        id: null
    };


        fetch("http://localhost:8080/api/task/create", {
        method: "POST",
        body: JSON.stringify(request),
        headers: {
            'Content-Type': 'application/json'
        }
        })
        .then(response => response.json())
        .then((task) => {
            dispatch({ type: "add-category", item: task });
            setState({ name: "" });
            formRef.current.reset();
        });
    }


    return <form ref={formRef} className="form-add-task">
        <input
        className="form-control me-sm-2"
        type="text"
        name="name"
        placeholder="Ingrese una categoria de tareas"
        onChange={(event) => {
            setState({ ...state, name: event.target.value })
        }}  ></input>
        <button className="btn btn-secondary" onClick={onAdd}>Agregar</button>
        <br/><br/><br/>
    </form>
}

export default FormCategoryTask;