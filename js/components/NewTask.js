import React, { useState } from 'react';
import { createTask } from "../api/tasks";
import Button from "./Button";

const NewTask = ({ onNewTask }) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const addNewTaskHandle = (e) => {
        e.preventDefault();

        const task = {
            title,
            description,
            status: "open"
        };

        createTask(task, onNewTask);
    }

    return (
        <>
            <div className="card shadow">
                <div className="card-body">
                    <h1 className="card-title">New task</h1>
                    <form onSubmit={addNewTaskHandle}>
                        <div className="form-group">
                            <input type="text"
                                className="form-control"
                                name="title"
                                placeholder="Title"
                                value={title}
                                onChange={e => setTitle(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <input type="text"
                                className="form-control"
                                name="description"
                                placeholder="Description"
                                value={description}
                                onChange={e => setDescription(e.target.value)} />
                        </div>
                        <Button color={"info"} icon={"fas fa-plus-circle"}>Add task</Button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default NewTask;