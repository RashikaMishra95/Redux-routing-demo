import React from 'react';
import {push} from 'react-router-redux';
import {NavLink} from 'react-router-dom';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {loginAction} from '../actions';
import {Paper,TextField,RaisedButton} from 'material-ui';
const style = {
    width: 800,
    marginTop: 70,
    textAlign: 'center',
    display: 'inline-block',
};
class Login extends React.Component{
    constructor(props){
        super(props);
        this.state={
            data:{}
        }
    }
    componentWillReceiveProps(nextProps){
        console.log(nextProps.loginRes);
        if(nextProps.loginRes){
            (nextProps.loginRes.obj.userType==='S')?
                this.props.history.push('/student'):
                this.props.history.push('/admin')
        }
    }
    handleChange=(e)=>{
        const {name,value}=e.target;
        const {data}=this.state;
        data[name]=value;
        this.setState({
            data
        })
    };
    handleLogin=(e)=>{
        e.preventDefault();
        debugger
        this.props.loginAction(this.state.data);
    };
    render(){
        const {data}=this.state;
        return(
            <div style={{textAlign:'center'}}>
                <Paper style={style} zDepth={1}>
                    <form style={{textAlign:'center'}}>
                        <div align={'center'}>
                            <label><h3>LOG IN</h3></label>
                        </div>
                        <div className={'form-group'}>
                            <TextField
                                style={{backgroundColor:'none'}}
                                floatingLabelText={'Email'}
                                value={data.email}
                                onChange={this.handleChange}
                                name={'email'}
                            />
                        </div>
                        <div className={'form-group'}>
                            <TextField
                                floatingLabelText={'Password'}
                                type={'password'}
                                value={data.password}
                                onChange={this.handleChange}
                                name={'password'}
                            />
                        </div>
                        <div align={'center'}>
                            <RaisedButton onClick={this.handleLogin}
                                          label={'Log in'}
                                          primary={true}
                            />
                        </div>
                        <div align={'center'}>
                            <NavLink className={'nav-item'} to={'/signup'}>Not Registered?</NavLink>
                        </div>
                    </form>
                </Paper>
            </div>
        )
    };
}
const mapStateToProps=(state)=>{
    return (
        {
            loginRes:state.loginResponse
        }
    )
};
const matchDispatchToProps=(dispatch)=>{
    return bindActionCreators({
        loginAction,
        goToAdmin:()=>push('/admin')
    },dispatch)
};
export default connect(mapStateToProps,matchDispatchToProps)(Login);