import React,{Component} from 'react';
import {Switch,Route,withRouter,NavLink} from 'react-router-dom';
import PrivateRoute from '../routes/privateRoute';

const p1=()=>{
    return(
        <h1>Page1</h1>
    )
}

const p2=()=>{
    return(
        <h1>Page2</h1>
    )
}

const p3=()=> {
    return (
        <h1>Page3</h1>
    )
}
class AdminHome extends Component{
    render(){
        return(
         <div>
             <div>
                <NavLink to={'/adminHome/p1'}>Page 1</NavLink>&nbsp;&nbsp;&nbsp;
                 <NavLink to={'/adminHome/p2'}>Page 2</NavLink>&nbsp;&nbsp;&nbsp;
                 <NavLink to={'/adminHome/p3'}>Page 3</NavLink>&nbsp;&nbsp;&nbsp;
             </div>
             <div>
                     <PrivateRoute exact path={'/adminHome/p1'} component={p1}/>
                     <PrivateRoute exact path={'/adminHome/p2'} component={p2}/>
                     <PrivateRoute exact path={'/adminHome/p3'} component={p3}/>
             </div>
         </div>
        )

    }
}
export default AdminHome;