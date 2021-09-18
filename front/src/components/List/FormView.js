
import React, { useContext, useRef, useState } from 'react'
import {Store} from "../../store/Store"
import { useForm } from "react-hook-form";

import '../../styles/FormViewList.css'

const FormView = (props) => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        onAdd(data.nameList);
    }

    const formRef = useRef(null);

    const { dispatch, state: {todo} } = useContext(Store);

    const [state, setState] = useState({todo});

    const onAdd = (data) => {

        const request = {
            name: data,
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


    return <form ref={formRef} onSubmit={handleSubmit(onSubmit)} className="form-add-list">
        <div className="form-container">
            <input
                type="text"
                className="form-control me-sm-2 input-listname"
                placeholder="Ingrese una categoria..."
                {...register("nameList", {required: true})}
            /><br/>
            <input type="submit" className="btn btn-secondary" value="Crear categoria"/>
        </div>
        <span className="error-empty">{errors.nameList?.type === 'required' && "El nombre de la lista es obligatorio"}</span>
        <br/><br/><br/>
    </form>
}

export default FormView;