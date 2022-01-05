export const submitTaskValidation = (payload)=>{
    const {text, day} = payload
    if(!text) {
        alert('Please add a task')
        return false
    }
    if(!day) {
        alert('Please add date & time')
        return false
    }
    return true
}