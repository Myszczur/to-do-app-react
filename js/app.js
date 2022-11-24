import React, {useState} from "react";
import ReactDOM from "react-dom";

function App() {
    const [task, setTask] = useState([]);

    return <h1>Hello World</h1>
}

ReactDOM.render(<App/>, document.querySelector("#app"));