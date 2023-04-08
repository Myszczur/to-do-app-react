import React, { useState } from 'react';
import Button from "./Button";
import { removeOperation, updateOperation } from "../api/operations";

const Operation = ({ description, id, onRemoveOperation, timeSpent: _timeSpent, status }) => {
    const [timeSpentForm, setTimeSpentForm] = useState(false);
    const [timeSpent, setTimeSpent] = useState(_timeSpent);
    const [timeSpentInput, setTimeSpentInput] = useState("");

    const hours = Math.floor(timeSpent / 60);
    const minutes = timeSpent % 60;

    const handleTimeSave = (e) => {
        e.preventDefault();

        const operation = {
            description,
            timeSpent: timeSpent + parseInt(timeSpentInput)
        };

        updateOperation(id, operation, data => {
            setTimeSpent(data.timeSpent);
            setTimeSpentForm(false);
            setTimeSpentInput("");
        });
    };

    const handleRemove = () => {

        removeOperation(id, () => {
            onRemoveOperation(id);
        });
    };

    return (
        <>
            <li className="list-group-item d-flex justify-content-between align-items-center">
                <div>
                    {description}
                    {timeSpent > 0 && (
                        <span className="badge badge-success badge-pill ml-2">
                            {hours}h {minutes}m
                        </span>
                    )}
                </div>

                {timeSpentForm && (
                    <form onSubmit={handleTimeSave}>
                        <div className="input-group input-group-sm">
                            <input type="number"
                                className="form-control"
                                placeholder="Spent time in minutes"
                                value={timeSpentInput}
                                style={{ width: "12rem" }}
                                onChange={e => setTimeSpentInput(e.target.value)} />
                            <div className="input-group-append">
                                <Button color={"success"} outline icon={"fas fa-save"} />
                                <Button color={"dark"} outline icon={"fas fa-times"}
                                    onClick={() => setTimeSpentForm(false)} />
                            </div>
                        </div>
                    </form>
                )}

                {!timeSpentForm && (
                    <div>
                        {status === "open" && (
                            <Button
                                icon={"fas fa-clock"}
                                color={"success"}
                                outline
                                small
                                className={"mr-2"}
                                onClick={() => setTimeSpentForm(true)}>
                                Add time
                            </Button>
                        )}
                        <Button icon={"fas fa-trash"} color={"danger"} outline small onClick={handleRemove} />
                    </div>
                )}
            </li>
        </>
    );
};

export default Operation;