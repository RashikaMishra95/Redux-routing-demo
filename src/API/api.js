
import axios from 'axios';
export const fetchStudents=()=>{
    debugger
    console.log("In fetch");
    return axios.get('http://localhost:3005/students',{
        headers:{
            'x-auth':localStorage.getItem('token')
        }
    }).then(({data})=>{
        debugger
        console.log("In fetchdata=======>",data);
        return data;
    })
};
export const registerStudent=(studentData)=>{
    return axios.post('http://localhost:3005/student',studentData).then(({data})=>{
        return data;
    })
};
export const loginService=(credentials)=>{
    return axios.post('http://localhost:3005/auth/login',credentials).then(({data})=>{
        return data;
    })
};