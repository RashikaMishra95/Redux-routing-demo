import React, { Component } from 'react';
import Header from './components/header';
import Footer from './components/footer';
import PrivateRoute from './routes/privateRoute';
import PublicRoute from './routes/publicRoute';
import AdminHome from './components/adminHome';
import Student from './components/studentHome';
import Login from './containers/login';
import AboutUs from './components/aboutUs';
import ContactUs from './components/contactUs';
import Home from './components/home';
import {Switch,Route,withRouter} from 'react-router-dom';

class App extends Component {
    constructor(props){
        super();
        this.state={
            user:true
        }
    }
    onLogin=()=>{
        this.setState({
            user:true
        })
    }
    onLogout=()=>{
        this.setState({
            user:false
        })
    }
  render() {
    return (
      <div>
          <div>
              <Header/>
          </div>
          <div>
            <Footer/>
          </div>
          <div>
              <Switch>
                  <PublicRoute exact path={'/home'} component={Home}/>
                  <PublicRoute exact path={'/about'} component={AboutUs}/>
                  <PublicRoute exact path={'/contact'} component={ContactUs}/>
                  <PublicRoute exact path={'/login'} component={Login}/>
                  <PrivateRoute path={'/adminHome'} component={AdminHome}/>
                  <PrivateRoute exact path={'/studentHome'} component={Student}/>
              </Switch>
          </div>
      </div>
    );
  }
}
export default App;
