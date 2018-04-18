import {LOG_IN} from "./actionTypes";
//const axios=require('axios');

export const login=()=>{
    return((dispatch)=>{
        dispatch(
            {
                type:LOG_IN,
                payload:{"token":"abc123","userType":"A"}
            })
        localStorage.setItem('token',"abc123");
    })

}
localStorage.setItem('userType',"S");
export const logoutAction=()=>{
    return((dispatch)=>{
          dispatch({
              type:"LOG_OUT"
          })
        localStorage.clear()
    })
}
