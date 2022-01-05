import React, { useEffect, useReducer } from 'react'
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import TaskReducer, { initialState } from '../reducers/Task';
import axios from 'axios'
import { DELETE_TASK_URL, GET_TASKS_URL, UPDATE_TASK_URL } from '../api/api';
import { getTask, removeTask, toggleTaskReminder } from '../actions/task'
import { useTask, useTheme } from '../Providers/Providers';
import { config } from '../api/config';
function TaskBody() {
    const { taskState, dispatch } = useTask()
    const { themeStyle } = useTheme()

    useEffect(() => {
        const getTasks = async () => {
            try {
                const response = await axios.get(`${GET_TASKS_URL}`, config)
                dispatch(getTask(response.data))
            } catch (error) {
            }
        }
        getTasks()
    }, [])

    const deleteTask = async (taskId) => {
        try {
            const response = await axios.delete(`${DELETE_TASK_URL}/${taskId}`, config)
            return dispatch(removeTask(taskId))
        } catch (error) {
        }
    }

    const toggleReminder = async (task) => {
        try {
            const newTask = { ...task, reminder: !task.reminder }
            const response = await axios.put(`${UPDATE_TASK_URL}/${task.id}`, newTask, config)
            return dispatch(toggleTaskReminder(task.id))
        } catch (error) {
        }

    }

    return (<div className='task-body'>
        <ul>
            {
                taskState && taskState.tasks.map(task => {
                    return <li onDoubleClick={() => toggleReminder(task)} key={task.id} style={{ borderLeft: task.reminder ? '5px solid green' : '' }}>
                        <p style={{color:themeStyle.text}}>{task.text}!</p>
                        <span className='delete' onClick={() => deleteTask(task.id)}>
                            <HighlightOffIcon color="error" />
                        </span>
                    </li>
                })
            }

        </ul>
    </div>)
}

export default TaskBody
