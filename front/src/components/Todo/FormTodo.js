import React, { useContext, useRef, useState } from 'react';
import { Store } from '../../store/Store';
import { useForm } from "react-hook-form";
import '../../styles/FormTodo.css'


const HOST_API = "http://localhost:8080/api";

const TodoForm = (props) => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        onAdd(data.nameTask);
    }

    const formRef = useRef(null);
    const { dispatch, state: {item} } = useContext(Store);

    const [state, setState] = useState({item});

    const onAdd = (nameTask) => {

        const request = {
            id:null,
            name:nameTask,
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

            fetch("http://localhost:8080/api/task")
            .then(response => response.json())
            .then((list) => {
                dispatch({ type: "update-list-category", list })
            })
            setState({ name: "" });
            formRef.current.reset();
        });
    }


    return <form ref={formRef} onSubmit={handleSubmit(onSubmit)} className="form-todo">
        <div className="form-container-tasks">
            <input
                type="text"
                className="form-control me-sm-2 input-task"
                placeholder="Nueva tarea......"
                {...register("nameTask", {required: true})}
            /><br/>
            <input
                type="submit"
                className="btn btn-secondary input-send-task"
                value="Crear"/>
        </div>
        <p className="error-task">
            {errors.nameTask?.type === 'required' && "Ingrese el nombre de la tarea"}
        </p>
    </form>
}


export default TodoForm;