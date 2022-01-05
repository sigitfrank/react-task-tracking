import { GET_TASKS, REMOVE_TASK, SET_NEW_TASK, SET_TASK, SET_TASK_DATE_TIME, SET_TASK_REMINDER, TOGGLE_TASK_REMINDER } from "../Types/Task"
export const initialState = {
    tasks: [],
    form: {
        text: '',
        day: '',
        reminder: false,
    }
}
const TaskReducer = (state, action) => {
    if (action.type === GET_TASKS) return { ...state, tasks: action.payload }
    if (action.type === REMOVE_TASK) return { ...state, tasks: state.tasks.filter(task => task.id !== action.payload) }
    if (action.type === TOGGLE_TASK_REMINDER) {
        const updatedTasks = state.tasks.map(task => {
            const obj = Object.assign({}, task)
            if (task.id === action.payload) obj.reminder = !task.reminder
            return obj
        })
        return { ...state, tasks: updatedTasks }
    }
    if (action.type === SET_TASK) return { ...state, form: { ...state.form, text: action.payload } }
    if (action.type === SET_TASK_DATE_TIME) return { ...state, form: { ...state.form, day: action.payload } }
    if (action.type === SET_TASK_REMINDER) return { ...state, form: { ...state.form, reminder: action.payload } }
    if (action.type === SET_NEW_TASK) {
        console.log(action.payload)
        return { ...state, tasks: [action.payload, ...state.tasks] }
    }
    return state
}

export default TaskReducer