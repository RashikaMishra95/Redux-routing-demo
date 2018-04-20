export const fetchStudentAction=(students)=>{
    debugger
    return({
        type:'FETCH_STUDENTS',
        students
    })
};
export const registerStudentAction=(student)=>{
    return({
        type:'REGISTER_STUDENT',
        payload:student
    })
};
export const loginAction=(credentials)=>{
    debugger;
    return({
        type:'LOGIN_USER',
        payload:credentials
    })
};