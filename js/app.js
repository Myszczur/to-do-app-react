import React, {useEffect, useState} from "react";
import ReactDOM from "react-dom";
import NewTask from "./components/NewTask";
import {getTasks} from "./api/tasks";
import Task from "./components/Task";

function App() {
    const [task, setTask] = useState([]);

    useEffect(() => {
        /**
         * After component mount fetch all tasks from API
         * @function getTasks - API function
         */
        getTasks(setTask)
            .then(r => {
                console.log(r)
            });
    }, []);

    const addNewTask = (task) => {
        setTask(prev => {
            return [task, ...prev];
        });
    }

    const handleRemoveTask = (id) => {
        setTask(prevState => prevState.filter(task => task.id !== id));
    }

    return (
        <>
            <NewTask onNewTask={addNewTask}/>
            {task.map((task => {
                return <Task key={task.id} {...task} onRemoveTask={handleRemoveTask}/>;
            }))}
        </>
    );
}

ReactDOM.render(<App/>, document.querySelector("#app"));