import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchStudentAction} from '../actions'
import StudentList from '../components/display';

class StudentPage extends React.Component{
    componentDidMount(){
        debugger;
        this.props.fetchStudentAction();
    }
    render(){
        const {students}=this.props;
        return(
            <div>
                <StudentList students={students}/>
            </div>
        )
    }
}
const mapStateToProps=(state)=>{
    return ({
        students:state.students
    })
};
const matchDispatchToProps=(dispatch)=>{
    return bindActionCreators({
        fetchStudentAction
    },dispatch)
};
export default connect(mapStateToProps,matchDispatchToProps)(StudentPage);