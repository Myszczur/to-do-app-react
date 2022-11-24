import {API_KEY, API_URL} from "./constants";

/**
 * Fetch all operations
 * @param {string} id - ID of task
 * @param {function} successCallback - Function that saves incoming data
 */
export const getOperations = (id, successCallback) => {
    fetch(`${API_URL}/tasks/${id}/operations`, {
        headers: {
            "Authorization": API_KEY
        }
    })
        .then(r => r.json())
        .then(data => {
            if (data.error === false && typeof successCallback === "function") {
                successCallback(data.data);
            }
        })
        .catch(err => console.log(err));
};

/**
 * Create operation
 * @param {string} id - ID of task
 * @param {Object} operation - Complete object with operation details
 * @param {string} operation.description - Operation description
 * @param {number} operation.timeSpent - Operation time spent value
 * @param {function} successCallback - Function that saves incoming data
 */
export const createOperation = (id, operation, successCallback) => {
    fetch(`${API_URL}/tasks/${id}/operations`, {
        headers: {
            "Authorization": API_KEY,
            "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(operation)
    })
        .then(r => r.json())
        .then(data => {
            if (data.error === false && typeof successCallback === "function") {
                successCallback(data.data);
            }
        })
        .catch(err => console.log(err));
};

/**
 * Update operation (create or update)
 * @param {string} id - ID of operation
 * @param {Object} operation - Complete object with operation details
 * @param {string} operation.description - Operation description
 * @param {number} operation.timeSpent - Operation time spent value
 * @param {function} successCallback - Function that saves incoming data
 */
export const updateOperation = (id, operation, successCallback) => {
    fetch(`${API_URL}/operations/${id}`, {
        headers: {
            "Authorization": API_KEY,
            "Content-Type": "application/json",
        },
        method: "PUT",
        body: JSON.stringify(operation)
    })
        .then(r => r.json())
        .then(data => {
            if (data.error === false && typeof successCallback === "function") {
                successCallback(data.data);
            }
        })
        .catch(err => console.log(err));
};

/**
 * Remove operation
 * @param {string} id - ID of operation
 * @param {function} successCallback - Function that is run in success case
 */
export const removeOperation = (id, successCallback) => {
    fetch(`${API_URL}/operations/${id}`, {
        headers: {
            "Authorization": API_KEY
        },
        method: "DELETE"
    })
        .then(r => r.json())
        .then(data => {
            if (data.error === false && typeof successCallback === "function") {
                successCallback();
            }
        })
        .catch(err => console.log(err));
};