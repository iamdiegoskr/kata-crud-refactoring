import React, { useContext, useEffect } from 'react';
import {Store} from "../store/Store"
import Form from './Form'
import {List} from './List'
import '../styles/FormCategory.css'

const ListTask = (props) => {

    const { dispatch, state } = useContext(Store);

    useEffect(() => {
        fetch("http://localhost:8080/api/task")
            .then(response => response.json())
            .then((list) => {
            dispatch({ type: "update-list-category", list })
            })

    }, [state.todo.list.length, dispatch]);

    const onDelete = (id) => {
        fetch(`http://localhost:8080/api/task/delete/${id}`, {
            method: "DELETE"
        }).then((list) => {
            dispatch({ type: "delete-category", id })
        })
    };

    return <div>
        <div>
            {state.todo.list.map((task,index) => {
                return <div key={index}>
                    <div className="form-category">
                        <h3>{task.name}</h3>
                        <button className="btn btn-secondary" onClick={() => onDelete(task.id)}>Eliminar</button>
                    </div>
                    {/* <Form task={task} todo={state.todo}/> */}
                    <List task={task}/>
                    <hr/>
                </div>
            })}
        </div>

        </div>
}

export default ListTask;