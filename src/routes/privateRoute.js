import React from 'react';
import {Redirect,Route} from 'react-router-dom';
import { withRouter } from 'react-router';
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux';
import {push} from 'react-router-redux'
import IdleTimer from 'react-idle-timer';
import {Modal} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import {logoutAction} from '../actions/index';

class PrivateRoute extends React.Component{
    a=5000;
    b;
    constructor(props){
        super(props);
        this.state={
            timeout:4000,
            isIdle:false,
            isActive:false
        }
    }
    // componentWillMount() {
    //     window.addEventListener('unload',this.logout);
    // }
    logout=()=>{
        this.props.logoutAction()
        this.props.goToHome()
    }
    _onIdle=()=> {
        this.setState({
            isActive: true,
            isIdle: true
        })
            if(this.state.isIdle){
                this.ModalTimeOut();
            }


    }
    ModalTimeOut = () => {

        this.b = setTimeout(()=>{
            this.toggle()
        },this.a);
    }
    _onActive=()=>{
        this.setState({ isIdle: false});
        clearTimeout(this.b);
    }
    continueLogin=()=>{
        this._onActive()
        this.setState({
            isActive:!this.state.isActive
        })
        clearTimeout(this.b);
    }
    toggle=()=>{
        clearTimeout(this.b);
        this.setState({isActive:false });
        this.logout();
    }
    render(){

        console.log("this.props====>",this.props);
        return(
            localStorage.getItem('token') ?
                <div>
                <Route {...this.props}/>
                    <IdleTimer
                        ref="idleTimer"
                        element={document}
                        activeAction={this._onActive}
                        idleAction={this._onIdle}
                        timeout={this.state.timeout}
                        startOnLoad={true}
                        format="MM-DD-YYYY HH:MM:ss.SSS">
                    </IdleTimer>
                    <Modal show={this.state.isActive}>
                        <Modal.Header>
                            <Modal.Title>Time Out</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <h4>Session will expire in 30 seconds..</h4>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button onClick={this.continueLogin}>Continue</Button>
                            <Button onClick={this.toggle}>Close</Button>
                        </Modal.Footer>
                    </Modal>
                </div>                     :
                <Redirect to={'/home'}/>
        )
    }
};
const matchDispatchToProps=(dispatch)=>{
    return bindActionCreators({
        logoutAction, goToHome:()=>push('/home')
    },dispatch)
};
export default connect(null,matchDispatchToProps)(PrivateRoute);
