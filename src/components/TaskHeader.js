import React from 'react'
import { useTask, useTheme } from '../Providers/Providers'

function TaskHeader() {
    const { show, toggleShow } = useTask()
    const { themeStyle } = useTheme()

    return (
        <div className='task-header' >
            <p style={{ color: themeStyle.text }}>Todo Tracking</p>
            <button
                style={{

                    backgroundColor: show ? '#bf3838' : '#45a670',
                }}
                onClick={toggleShow}>
                {show ? 'Close' : 'Add'}
            </button>
        </div>
    )
}

export default TaskHeader
