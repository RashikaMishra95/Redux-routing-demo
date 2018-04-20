export default (state=[],action)=>{
    debugger;
    switch (action.type){
        case 'LOGIN':
            localStorage.setItem('token',action.response.obj.token)
            return action.response;
        default:
            return state;
    }
}