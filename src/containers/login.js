import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {login} from '../actions/index';
import {push} from 'react-router-redux';

 class Login extends React.Component {
     constructor() {
         super();
         this.state = {
             data: {}
         }
     }

     handleChange = (e) => {
         const {name, value} = e.target;
         const {data} = this.state;
         data[name] = value;
         this.setState({
             data
         })
     };

     handleLogin = (e) => {
         e.preventDefault();

         this.props.login();
         (localStorage.getItem('token') && localStorage.getItem('userType') === 'S') ?
             this.props.goToAdmin() :
             this.props.history.push('/login');
     }
     // handleRegister=(e)=>{
     //     e.preventDefault();
     //     if(Object.keys(this.state.data).length>0){
     //         this.props.studentSignup(this.state.data).then(()=>{
     //             this.props.history.push('/login');
     //         })
     //     }
     // };
     // shouldComponentUpdate(){
     //     if(Object.keys(this.state.data).length>0)
     //         return true;
     //     else
     //         return false;
     // }
     render() {
         const {data} = this.state;
         return (
             <div>
                 <div className='container jumbotron col-sm-6'>
                     <form className={'col-sm-6 offset-sm-3'}>
                         <div align={'center'}>
                             <label>
                                 <h4>LOGIN</h4>
                             </label>
                         </div>
                         <div className={'form-group'}>
                             <input type={'text'}
                                    placeholder={'Enter Email'}
                                    value={data.email}
                                    onChange={this.handleChange}
                                    name={'email'}
                             />
                         </div>
                         <div className={'form-group'}>
                             <input type={'password'}
                                    placeholder={'Enter Password'}
                                    value={data.password}
                                    onChange={this.handleChange}
                                    name={'password'}
                             />
                         </div>
                         <div align={'center'}>
                             <button className={'btn btn-primary'} onClick={this.handleLogin}>LOGIN</button>
                         </div>
                     </form>
                 </div>
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
                login,
        goToAdmin:()=>push('/adminHome')
    },dispatch)
};
export default connect(matchStatetoProps,matchDispatchToProps)(Login);
