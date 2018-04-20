export default (state=[],action)=>{
    debugger;
    switch(action.type){
        case 'FETCH_STUDENT':
            return action.students;
        case 'NEW_STUDENT':
            debugger;
            return action.student;
        case 'FETCH_STUDENT_ERROR':
            return action.students;
        default:
            return state;
    }
}