import React, {useState} from "react";
import ReactDOM from "react-dom";
import NewTask from "./components/NewTask";

function App() {
    const [task, setTask] = useState([]);

    return (
        <>
            <NewTask/>
        </>
    );
}

ReactDOM.render(<App/>, document.querySelector("#app"));