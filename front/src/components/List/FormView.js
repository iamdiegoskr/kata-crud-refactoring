
import React, { useContext, useRef, useState } from 'react'
import {Store} from "../../store/Store"
import '../../styles/FormViewList.css'

const FormView = (props) => {

    const formRef = useRef(null);

    const { dispatch, state: {todo} } = useContext(Store);

    const [state, setState] = useState({todo});

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
        .then((list) => {
            dispatch({ type: "add-category", item: list });
            setState({ name: "" });
            formRef.current.reset();
        });
    }


    return <form ref={formRef} className="form-add-list">
        <input
        className="form-control me-sm-2"
        type="text"
        name="name"
        placeholder="Ingrese una categoria de tareas"
        required
        onChange={(event) => {
            setState({ ...state, name: event.target.value })
        }}>
        </input>
        <button className="btn btn-secondary" onClick={onAdd}>
            <i className="fas fa-plus icon-add-list"></i>
            Agregar nueva lista
        </button>
        <br/><br/><br/>
    </form>
}

export default FormView;