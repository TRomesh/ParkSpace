import React from 'react';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import StarRatingComponent from 'react-star-rating-component';


const style = {
  height: 300,
  width: 300,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
};

class DialogDetails extends React.Component{


    constructor(props){
      super(props);
      this.state = {
          rating: 0
      };

    }

    onStarClick(nextValue, prevValue, name) {
        this.setState({rating: nextValue});
    }


      render(){
        const { rating } = this.state;
         return(
           <div className="container-fluid row">
             <div className="col-lg-4" style={{background:'yellow'}}>
              <Paper style={style} zDepth={3} rounded={false} />
             </div>
             <div className="col-lg-6" style={{background:'white'}}>
                <div><h3>LKR</h3></div>
                <Divider />
                <div><p>Tuesday, February 7, 2017 9:18 PM</p></div>
                <Divider />
                <div><p>9:18 PM</p></div>
                <div><p>9:18 PM</p></div>
             </div>
             <div className="col-lg-2" style={{background:'blue'}}>
                <StarRatingComponent
                    name="rate1"
                    starCount={5}
                    value={rating}
                    onStarClick={this.onStarClick.bind(this)}
                />
                </div>
           </div>
         );
      }

}

export default DialogDetails;
