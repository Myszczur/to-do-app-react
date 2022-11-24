import React from 'react';
import Operations from "./Operations";
import Button from "./Button";

const Task = ({title, description, id, status: _status, onRemoveTask}) => {

    return (
        <>
            <section className="card mt-5 shadow-sm">
                <div className="card-header d-flex justify-content-between align-items-center">
                    <div>
                        <h5>{title}</h5>
                        <h6 className="card-subtitle text-muted">{description}</h6>
                    </div>
                    <div>
                        {status === "open" && (
                            <>
                                <Button icon="fas fa-plus-circle"
                                        color="info"
                                        small
                                        onClick={toggleOperationForm}
                                        className="mr-2">
                                    Add operation
                                </Button>

                                <Button icon="fas fa-archive"
                                        color="dark"
                                        small
                                        onClick={handleFinish}>
                                    Finish
                                </Button>
                            </>
                        )}
                        {operations.length === 0 &&
                            <Button icon={"fas fa-trash"} color={"danger"} outline size={"sm"} onClick={handleRemove}
                                    className="ml-2"/>}
                    </div>
                </div>

                <Operations taskID={id}
                            form={operationForm}
                            setForm={setOperationForm}
                            operations={operations}
                            setOperations={setOperations}
                            status={status}/>
            </section>
        </>
    );
};

export default Task;