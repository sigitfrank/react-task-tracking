import React from 'react'
import TaskBody from './TaskBody'
import TaskHeader from './TaskHeader'
import TaskForm from './TaskForm'
import Brightness5Icon from '@mui/icons-material/Brightness5'
import Brightness2Icon from '@mui/icons-material/Brightness2'
import { useTask, useTheme } from '../Providers/Providers'
function Task() {
    const { darkTheme, toggleThemes, themeStyle } = useTheme()
    const { show } = useTask()
    let boxShadow = '1px 1px 5px 1px rgba(0, 0, 0, .25)'
    if (darkTheme) boxShadow = '1px 1px 5px 1px rgba(255, 255, 255, 0.25)'
    return (
        <div className='task-container' style={{ background: themeStyle.background, boxShadow }}>
            <div className={`${darkTheme ? 'animate-light' : 'animate-dark'} theme`} onClick={toggleThemes}>
                {
                    darkTheme ? <span ><Brightness5Icon /></span> : <span ><Brightness2Icon /></span>
                }
            </div>
            <TaskHeader />
            {
                show && <TaskForm />
            }
            <TaskBody />
        </div>
    )
}

export default Task
