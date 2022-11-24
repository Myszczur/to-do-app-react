import React, {useEffect, useState} from "react";
import ReactDOM from "react-dom";
import NewTask from "./components/NewTask";
import {getTasks} from "./api/tasks";

function App() {
    const [task, setTask] = useState([]);

    useEffect(() => {
        getTasks(setTask);
    }, []);

    const addNewTask = (task) => {
        setTask(prev => {
            return [task, ...prev];
        });
    }

    return (
        <>
            <NewTask newTask={addNewTask}/>
        </>
    );
}

ReactDOM.render(<App/>, document.querySelector("#app"));