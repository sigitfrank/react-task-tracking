import React, { useContext, useReducer, useState } from 'react'
import TaskReducer, { initialState } from '../reducers/Task'

const ThemeContext = React.createContext()
const TaskContext = React.createContext()

export function useTheme() {
    return useContext(ThemeContext)
}

export function useTask() {
    return useContext(TaskContext)
}

function Providers({ children }) {
    const [taskState, dispatch] = useReducer(TaskReducer, initialState);
    const [darkTheme, setDarkTheme] = useState(false)
    const [show, setShow] = useState(false)
    const [themeStyle, setThemeStyle] = useState({
        background: '#fafafa',
        text: '#070707',
    })
    const toggleThemes = () => {
        setThemeStyle(prev => {
            if (darkTheme) return {
                background: '#fafafa',
                text: '#070707',
            }
            return {
                background: '#070707',
                text: '#fafafa',
            }
        })
        setDarkTheme(prev => !prev)
    }
    const toggleShow = () => {
        setShow(prev => !prev)
    }

    return (
        <ThemeContext.Provider value={{ toggleThemes, darkTheme, themeStyle }}>
            <TaskContext.Provider value={{ toggleShow, show, taskState, dispatch }}>
                {children}
            </TaskContext.Provider>
        </ThemeContext.Provider>
    )
}

export default Providers
