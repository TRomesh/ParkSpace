import React from 'react';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import StarRatingComponent from 'react-star-rating-component';


const style = {
  height: 200,
  width: 200,
  margin: 10,
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
             <div className="col-lg-4">
              <Paper style={style} zDepth={1} rounded={false} />
             </div>
             <div className="col-lg-5">
                <div><h3>LKR</h3></div>
                <Divider />
                <div><p>Tuesday, February 7, 2017 9:18 PM</p></div>
                <Divider />
                <div><p>9:18 PM</p></div>
                <div><p>9:18 PM</p></div>
             </div>
             <div className="col-lg-3 container row">.
                <div className="col-md-8"></div>
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
