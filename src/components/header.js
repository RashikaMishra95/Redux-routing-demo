import React from 'react';
import AppBar from 'material-ui/AppBar'
import {MenuItem} from 'material-ui';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';

class  Header extends React.Component{
    constructor(props){
        super(props);
        this.state={
            user:false
        }
    }
    componentWillReceiveProps(nextProps){
        console.log(nextProps.loginRes);
        this.setState({
            user:true
        })
    }
    render() {
        return (
            <AppBar
                showMenuIconButton={false}
            >
                <MenuItem>
                    {!this.state.user&&<NavLink to={'/'}>Home</NavLink>}
                </MenuItem>
                <MenuItem>
                    {!this.state.user&&<NavLink to={'/signup'}>Signup</NavLink>}
                </MenuItem>
                <MenuItem>
                    {!this.state.user?<NavLink to={'/login'}>Login</NavLink>
                        :<NavLink to={'/login'}>Logout</NavLink>}
                </MenuItem>
            </AppBar>
        )
    };
}
const mapStateToProps=(state)=>{
    return({
        loginRes:state.loginResponse
    })
};
export default connect(mapStateToProps,null)(Header);