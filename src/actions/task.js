import { GET_TASKS, REMOVE_TASK, SET_NEW_TASK, SET_TASK, SET_TASK_DATE_TIME, SET_TASK_REMINDER, TOGGLE_TASK_REMINDER } from '../Types/Task'

export const getTask = (tasks) => {
    return {
        type: GET_TASKS,
        payload: tasks
    }
}
export const removeTask = (taskId) => {
    return {
        type: REMOVE_TASK,
        payload: taskId
    }
}
export const toggleTaskReminder = (taskId) => {
    return {
        type: TOGGLE_TASK_REMINDER,
        payload: taskId
    }
}
export const setTask = (task) => {
    return {
        type: SET_TASK,
        payload: task
    }
}
export const setDateTime = (dateTime) => {
    return {
        type: SET_TASK_DATE_TIME,
        payload: dateTime
    }
}
export const setReminder = (reminder) => {
    return {
        type: SET_TASK_REMINDER,
        payload: reminder
    }
}

export const setNewTask = (newTask) => {
    return {
        type: SET_NEW_TASK,
        payload: newTask
    }
}