import React,{Component} from 'react';
import {NavLink,Switch,Route} from 'react-router-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {logoutAction} from '../actions/index';
import {push} from 'react-router-redux';

class Header extends Component{
    render(){
        return(
            <div>
                <nav  className={'navbar navbar-expand-m bg-warning'}>
                    <div   className='col-md-4' align={'left'}>
                        <h4>DEMO</h4>
                    <div align={'right'} className={'col-md-8'}>
                    </div>
                        <NavLink to={'/home'}>HOME</NavLink>&nbsp;
                        {localStorage.getItem('token') ?
                            <NavLink to={''} onClick={(e)=>{e.preventDefault();
                                this.props.logoutAction()
                                this.props.goToHome()
                            }}>LOGOUT </NavLink> :
                            <NavLink to={'/login'}>LOGIN</NavLink> }
                        <NavLink to={'/about'}>ABOUT US</NavLink>&nbsp;
                        <NavLink to={'/contact'}>CONTACT</NavLink>&nbsp;
                    </div>
                </nav>
            </div>
        )
    }
}
const matchStatetoProps=(state)=>{
    return {
        logins:state.auth
    }
}
const matchDispatchToProps=(dispatch)=>{
    return bindActionCreators({
        logoutAction,
        goToHome:()=>push('/home')
    },dispatch)
};
export default connect(matchStatetoProps,matchDispatchToProps)(Header);
