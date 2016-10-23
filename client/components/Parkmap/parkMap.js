import React,{PropTypes} from 'react';
import FontIcon from 'material-ui/FontIcon';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import DatePicker from 'material-ui/DatePicker';
import IconLocationOn from 'material-ui/svg-icons/communication/location-on';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux'
import mapSidebar from './mapSidebar';


const recentsIcon = <FontIcon className="material-icons">restore</FontIcon>;
const favoritesIcon = <FontIcon className="material-icons">favorite</FontIcon>;
const nearbyIcon = <IconLocationOn />;

const Sidestyle = {
  height: 612,
  margin: '0px',
  textAlign: 'center',
  display: 'inline-block',
  flex: 1,
  padding:0,
  resizeMode: 'cover',
};

const Mapstyle = {
    height: 100,
    backgroundColor: 'green'
}

const LocDetStyle={
    height: 100,
    padding:0,
    backgroundColor:'#425765',
    fontSize:20,
}

const TimeStyle={
  height: 400,
  backgroundColor:'#f4f4f4',

}




class parkMap extends React.Component{

    constructor(props,context){
       super(props,context);

       this.state = {
       selectedIndex: 0,
       open: false
       };

      //  this.onTitleChange = this.onTitleChange.bind(this);
      //  this.onClickSave = this.onClickSave.bind(this);

    }



  select = (index) => this.setState({selectedIndex: index});

    // onTitleChange(event){
    //   const course = this.state.course;
    //   course.title = event.target.value;
    //   this.setState({course:course});
    // }
    //
    // onClickSave(){
    //    this.props.actions.createCourse(this.state.course);
    // }

    // courseRow(){
    //   return this.props.courses.map((course,i)=>{
    //       return(
    //         <div key={i}>{course.title}</div>
    //       );
    //   });
    // }

    render() {
    return (
      <div>
        <Paper style={Sidestyle} className="col-md-4" zDepth={2} >
          <div style={LocDetStyle} className="col-md-12">
             <br/>
              <div className="col-md-12">
                <span>PARKING NEAR</span>
              </div>
              <div className="col-md-12">
                <i className="material-icons md-light md-36 col-md-1 ">favorite</i>
                <span className="col-md-11">Melrose Ave, Los Angeles, CA</span>
              </div>
          </div>
          <div style={TimeStyle}>
            <span className="col-md-12" >PICK A DATE & TIME</span>
          </div>
        </Paper>
        <di className="col-md-8" style={Mapstyle}>

        </di>
      </div>
    );
  }

}

// CoursesPage.propTypes ={
//    courses: PropTypes.array.isRequired,
//    actions: PropTypes.object.isRequired
// };
//
// function mapStateToProps(state,ownProps){
//      return{
//         courses:state.courses
//      };
// }
//
// function mapDispatchToProps(dispatch){
//     return{
//       actions: bindActionCreators(courseActions,dispatch)
//     };
// }

// export default connect(mapStateToProps,mapDispatchToProps)(parkMap);

export default parkMap;
