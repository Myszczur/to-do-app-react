import React, {useState} from 'react';
import Button from "./Button";
import Operation from "./Operation";
import {createOperation} from "../api/operations";

const Operations = ({taskID, form, setForm, operations, setOperations, status}) => {
    //operation Description
    const [operation, setOperation] = useState("");

    const newOperation = (e) => {
        e.preventDefault();
        const operationen = {
            description: operation,
            timeSpent: 0
        }
        createOperation(taskID, operationen, (data) => {
            setOperations(prev => {
                return [data, ...prev];
            })
        });
        setForm(false);
        setOperation("");
    }

    const removeOperation = (id) => {
        setOperations(prev => prev.filter(operation => operation.id !== id));
    }

    return (
        <>
            {form && (
                <div className="card-body">
                    <form onSubmit={newOperation}>
                        <div className="input-group">
                            <input type="text"
                                   className="form-control"
                                   placeholder="Operation description"
                                   value={operation}
                                   onChange={e => setOperation(e.target.value)}/>

                            <div className="input-group-append">
                                <Button color={"info"} icon="fas fa-plus-circle">Add</Button>
                            </div>
                        </div>
                    </form>
                </div>
            )}
            <ul className="list-group list-group-flush">
                {operations.map(operation => (
                    <Operation key={operation.id} {...operation} onRemoveOperation={removeOperation}
                               status={status}/>
                ))}
            </ul>
        </>
    );
};

export default Operations;