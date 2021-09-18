import React, { useContext, useEffect } from 'react';
import { HOST_API } from '../../App.js';
import { Store } from "../../store/Store";
import '../../styles/ListTodo.css'

export const List = (props) => {

    const { dispatch, state } = useContext(Store);

    useEffect(() => {
        fetch("http://localhost:8080/api/task")
        .then(response => response.json())
        .then((list) => {
            dispatch({ type: "update-list-category", list });
        });
    }, [state.todo.list.length,dispatch]);

    const onDelete = (id) => {
        fetch(HOST_API + "/" + id + "/todo", {
            method: "DELETE"
        }).then((list) => {
            fetch("http://localhost:8080/api/task")
            .then(response => response.json())
            .then((list) => {
            dispatch({ type: "update-list-category", list })
            })
        })
    };

    const onEdit = (todo) => {
        dispatch({ type: "edit-item", item: todo });
    };

    const onChange = (event, todo) => {
        const request = {
        name: todo.name,
        id: todo.id,
        completed: event.target.checked
        };
        fetch(HOST_API + "/todo", {
        method: "PUT",
        body: JSON.stringify(request),
        headers: {
            'Content-Type': 'application/json'
        }
        })
        .then(response => response.json())
        .then((todo) => {
            dispatch({ type: "update-item", item: todo });
        });
    };

    const decorationDone = {
        textDecoration: 'line-through'
    };
    return <div>
        <table className="table-task">
        <thead>
            <tr>
            <td>ID</td>
            <td>Tarea</td>
            <td>¿Completado?</td>
            </tr>
        </thead>
        <tbody>
            {
            state.todo.list.find(task => task.id===props.task.id).todos.map((todo) => {
            return <tr key={todo.id} style={todo.completed ? decorationDone : {}}>
                <td>{todo.id}</td>
                <td>{todo.name}</td>
                <td><input type="checkbox" defaultChecked={todo.completed} onChange={(event) => onChange(event, todo)}></input></td>
                <td>
                    <button
                    className="btn btn-outline-danger btn-action" onClick={() => onDelete(todo.id)}>
                    <i className="far fa-trash-alt icon-delete-task"></i>
                    Eliminar
                    </button></td>
                <td>
                    <button className="btn btn-outline-info btn-action" onClick={() => onEdit(todo)}>
                    Editar
                    </button>
                </td>
            </tr>;
            })}
        </tbody>
        </table>
    </div>;
};
