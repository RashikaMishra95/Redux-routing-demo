export default (state=[],action)=>{
    switch (action.type) {
        case "STUDENT":
            return action.payload;
        default:
            return state;
    }
0}