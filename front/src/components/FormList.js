import React, { useEffect, useState } from "react"

const FormList = () => {

    const [task, setTask] = useState([])

    useEffect(() => {
        fetchData();
    },[]);

    const fetchData = async () => {
        const url = "http://localhost:8080/api/task"
        try {
            const response = await fetch(url);
            const tasks = await response.json();
            console.log(tasks);
            setTask(tasks)
        } catch (error) {
            console.log("error", error);
        }
    };

    return <form>
        <div>
            {
                task.map((task,index)=>{

                    return <div>
                        <h2>{task.name}</h2>
                        <ul>
                            {task.todos.map(((todo,index)=>{
                                return <li key={index} >{todo.name}</li>
                            }))}
                        </ul>

                    </div>
                })
            }
        </div>
    </form>
}

export default FormList