import {API_KEY, API_URL} from "./constants";

/**
 * Fetch all tasks
 * @param {function} successCallback - Function that saves incoming data
 */
export const getTasks = async (successCallback) => {
    try {
        const response = await fetch(`${API_URL}/tasks`, {
            headers: {
                Authorization: API_KEY,
            },
        });

        const data = await response.json();

        if (data.error || typeof successCallback !== "function") {
            throw new Error("Masz Errora!");
        }

        successCallback(data.data);
    } catch (err) {
        console.log(err);
    }
};

/**
 * Save task (create or update)
 * @param {{description: string, title: string, status: (url?: (string | URL), target?: string, features?: string) => (WindowProxy | null)}} task - Complete object with task details
 * @param {string} task.title - Task title
 * @param {string} task.description - Task description
 * @param {string} task.status - Task status (open/closed)
 * @param {function} successCallback - Function that saves incoming data
 */
export const createTask = (task, successCallback) => {
    fetch(`${API_URL}/tasks`, {
        headers: {
            "Authorization": API_KEY,
            "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(task)
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
 * Update task
 * @param {string} id - ID of task
 * @param {Object} task - Complete object with task details
 * @param {string} task.title - Task title
 * @param {string} task.description - Task description
 * @param {string} task.status - Task status (open/closed)
 * @param {function} successCallback - Function that saves incoming data
 */
export const updateTask = (id, task, successCallback) => {
    fetch(`${API_URL}/tasks/${id}`, {
        headers: {
            "Authorization": API_KEY,
            "Content-Type": "application/json",
        },
        method: "PUT",
        body: JSON.stringify(task)
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
 * Remove task
 * @param {string} id - ID of task
 * @param {function} successCallback - Function runs in success case
 */
export const removeTask = (id, successCallback) => {
    fetch(`${API_URL}/tasks/${id}`, {
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
