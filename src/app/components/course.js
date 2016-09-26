import React,{PropTypes} from 'react';
import {connect} from 'react-redux';
import * as courseActions from '../actions/courseActions';


class CoursesPage extends React.Component{

    constructor(props,context){
       super(props,context);

       this.state={
         course:{id:1,title:'hello'}
       };

       this.onTitleChange = this.onTitleChange.bind(this);
       this.onClickSave = this.onClickSave.bind(this);

    }

    onTitleChange(event){
      const course = this.state.course;
      course.title = event.target.value;
      this.setState({course:course});
    }

    onClickSave(){
       this.props.dispatch(courseActions.createCourse(this.state.course));
    }

    courseRow(){
      if (!this.props.courses) {
          return null;
       }
      return this.props.courses.map((course,i)=>{
          return(
            <div key={i}>{course.title}</div>
          );
      });
    }

    render(){
      return(
        <div>
          <h2>hello</h2>
          <h3>{this.courseRow()}</h3>
          <input type="text" onChange={this.onTitleChange} value={this.state.course.title}/>
          <input type="submit" value="save" onClick={this.onClickSave}/>
        </div>
      );
    }

}

CoursesPage.propTypes ={
   dispatch: PropTypes.func.isRequired,
   courses: PropTypes.array.isRequired
};

function mapStateToProps(state,ownProps){
     return{
        courses:state.courses || []
     };
}

export default connect(mapStateToProps)(CoursesPage);
