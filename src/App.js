import React, { Component } from 'react';
import Header from './components/header';
import Home from './components/home';
import StudList from './containers/student';
import AdminHome from './components/adminHome';
import StudForm from './containers/signup';
import Login from './containers/login';
import './App.css';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import EventList from './containers/events';

class App extends Component {

    render() {
        debugger
        return (
            <BrowserRouter>
                <div>
                    <div>
                        <Header/>
                    </div>
                    <div>
                        <Switch>
                            <Route exact path={'/'} component={Home}/>
                            <Route exact path={'/login'} component={Login}/>
                            <Route exact path={'/signup'} component={StudForm}/>
                            <Route exact path={'/admin'} component={AdminHome}/>
                            <Route exact path={'/student'} component={StudList}/>
                            <Route exact path={'/admin/event'} component={EventList}/>
                        </Switch>
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}
export default App;