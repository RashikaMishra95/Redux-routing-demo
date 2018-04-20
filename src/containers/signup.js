import React from 'react';
import {NavLink} from 'react-router-dom';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {registerStudentAction} from '../actions';
import {Paper,TextField,RaisedButton,RadioButtonGroup,RadioButton,
    SelectField,MenuItem} from 'material-ui';
const style = {
    width: 800,
    marginTop: 40,
    textAlign: 'center',
    display: 'inline-block',
};

class Signup extends React.Component{
    constructor(props){
        super(props);
        this.state={
            data:{}
        }
    }
    componentWillMount(){
       debugger;
    }

    handleChange=(e)=>{
        e.preventDefault();
        const {name,value}=e.target;
        const {data}=this.state;
        data[name]=value;
        this.setState({
            data
        })
    };
    handleClassChange=(e,i,standatrd)=>{
        const {data}=this.state;
        data['standard']=standatrd;
        this.setState({
            data
        })
    };
    handleRegister=(e)=>{
        debugger;
        e.preventDefault();
        if(Object.keys(this.state.data).length>0){
            this.props.registerStudentAction(this.state.data);
        }
    };
    shouldComponentUpdate(){
        if(Object.keys(this.state.data).length>0)
            return true;
        else
            return false;
    }
    render(){
        console.log("render");
        const {data}=this.state;
        return(
            <div style={{textAlign:'center'}}>
                <Paper zDepth={1} style={style}>
                    <form style={{textAlign:'center'}}>
                        <div style={{textAlign:'center'}}>
                            <label><h3>Sign Up with Demo App</h3></label>
                        </div>
                        <div >
                            <TextField
                                floatingLabelText={'Name'}
                                name={'Name'}
                                value={data.Name}
                                onChange={this.handleChange}
                            />
                        </div>
                        <div>
                            <TextField
                                floatingLabelText={'Email'}
                                name={'email'}
                                value={data.email}
                                onChange={this.handleChange}
                            />
                        </div>
                        <div>
                            <TextField
                                floatingLabelText={'Password'}
                                type={'password'}
                                name={'password'}
                                value={data.password}
                                onChange={this.handleChange}
                            />
                        </div>
                        <div>
                            <TextField
                                floatingLabelText={'Confirm Password'}
                                type={'password'}
                                name={'confirmPassword'}
                                value={data.confirmPassword}
                                onChange={this.handleChange}
                            />
                        </div>
                        <label>Gender : </label>
                        <div>
                            <RadioButtonGroup name={'gender'} style={{display:'inline-block'}}
                                              onChange={this.handleChange}
                            >
                                <RadioButton
                                    value={'Male'}
                                    label={'Male'}
                                    checked={data.gender==='Male' && 'checked'}
                                />
                                <RadioButton
                                    value={'Female'}
                                    label={'Female'}
                                    checked={data.gender==='Female' && 'checked'}
                                />
                            </RadioButtonGroup>
                        </div>
                        <div>
                            <SelectField
                                name={'standard'}
                                hintText={'Class'}
                                value={data.standard}
                                onChange={this.handleClassChange}
                            >
                                <MenuItem  value={'1st'}>1st</MenuItem>
                                <MenuItem primaryText={'2nd'} value={'2nd'}/>
                                <MenuItem primaryText={'3rd'} value={'3rd'}/>
                                <MenuItem primaryText={'4th'} value={'4th'}/>
                                <MenuItem primaryText={'5th'} value={'5th'}/>
                                <MenuItem primaryText={'6th'} value={'6th'}/>
                                <MenuItem primaryText={'7th'} value={'7th'}/>
                                <MenuItem primaryText={'8th'} value={'8th'}/>
                                <MenuItem primaryText={'9th'} value={'9th'}/>
                                <MenuItem primaryText={'10th'} value={'10th'}/>
                            </SelectField>
                        </div>
                        <div>
                            <TextField
                                floatingLabelText={'Contact No.'}
                                name={'contactNo'}
                                value={data.contactNo}
                                onChange={this.handleChange}
                            />
                        </div>
                        <div align={'center'}>
                            <RaisedButton onClick={this.handleRegister}
                                          label={'Register'}
                                          primary={true}
                            />
                        </div>
                        <div align={'center'}>
                            <NavLink className={'nav-item'} to={'/login'}>Already have an Account?</NavLink>
                        </div>
                    </form>
                </Paper>
            </div>
        )
    };
}

const matchDispatchToProps=(dispatch)=>{
    return bindActionCreators({
        registerStudentAction
    },dispatch)
};
export default connect(null,matchDispatchToProps)(Signup);