import React, { useContext, useEffect } from 'react';
import {Store} from "../../store/Store"
import TodoForm from '../Todo/FormTodo';
import { List } from '../Todo/ListTodo';
import Swal from 'sweetalert2'
import '../../styles/FormCategory.css'

const ListView = (props) => {

    const { dispatch, state } = useContext(Store);

    useEffect(() => {
        fetch("http://localhost:8080/api/task")
            .then(response => response.json())
            .then((list) => {
            dispatch({ type: "update-list-category", list })
            })

    }, [state.todo.list.length, dispatch]);

    const onDelete = (id) => {

        Swal.fire({
            title: 'Estas seguro de elimnar la lista?',
            text: "si lo haces, perderas todas tus tareas",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, borrar'
            }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:8080/api/task/delete/${id}`, {
                    method: "DELETE"
                }).then((list) => {
                    dispatch({ type: "delete-category", id })
                })

                Swal.fire(
                'Eliminado',
                'tu lista ha sido eliminada',
                'success'
            )
            }
        })

    };

    return <div>
        <div>
            {state.todo.list.map((task,index) => {
                return <div key={index}>
                    <div className="form-category">
                        <h3 className="title-category">{task.name}</h3>
                        <button className="btn-delete-list" onClick={() => onDelete(task.id)}>
                        <i className="fas fa-trash-alt"></i>
                        </button>
                    </div>
                    <TodoForm task={task}/>
                    <List task={task}/>
                    <hr/>
                </div>
            })}
        </div>

        </div>
}

export default ListView;