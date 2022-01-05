import axios from 'axios'
import React from 'react'
import { setDateTime, setNewTask, setReminder, setTask } from '../actions/task'
import { POST_TASK_URL } from '../api/api'
import { config } from '../api/config'
import { useTask, useTheme } from '../Providers/Providers'
import { submitTaskValidation } from '../validations/task'

function TaskForm() {
    const { themeStyle } = useTheme()
    const { taskState, dispatch } = useTask()
    const { form } = taskState
    const handleSubmit = () => {
        const isValid = submitTaskValidation(form)
        if (!isValid) return
        addTask()
    }

    const addTask = async () => {
        try {
            const response = await axios.post(POST_TASK_URL, form, config)
            const newTask = response.data
            dispatch(setNewTask(newTask))
        } catch (error) {

        }
    }

    return (
        <form>
            <div className="form-group">
                <label style={{ color: themeStyle.text }} htmlFor="task">Task</label>
                <input type="text" name="task" id="task" onChange={(e) => dispatch(setTask(e.target.value))} value={form.text} className="form-control" />
            </div>
            <div className="form-group">
                <label style={{ color: themeStyle.text }} htmlFor="day-time">Day & Time</label>
                <input type="text" name="day-time" id="day-time" onChange={(e) => dispatch(setDateTime(e.target.value))} value={form.day} className="form-control" />
            </div>
            <div className="form-group">
                <label style={{ color: themeStyle.text }} htmlFor="reminder">Reminder</label>
                <input type="checkbox" name="reminder" id="reminder" onChange={(e) => dispatch(setReminder(e.target.checked))} checked={form.reminder} value={form.reminder} className="form-check" />
            </div>
            <button type="button" onClick={handleSubmit}>Submit</button>
        </form>
    )
}

export default TaskForm
