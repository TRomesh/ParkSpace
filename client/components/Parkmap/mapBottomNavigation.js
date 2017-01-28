import React, {Component} from 'react';
import FontIcon from 'material-ui/FontIcon';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import FontAwesome from 'react-fontawesome';
import IconLocationOn from 'material-ui/svg-icons/communication/location-on';
import CarParksIcon1 from 'material-ui/svg-icons/maps/map';
import CarParksIcon2 from 'material-ui/svg-icons/maps/my-location';
import CarParksIcon3 from 'material-ui/svg-icons/maps/pin-drop';
import CarParksIcon4 from 'material-ui/svg-icons/maps/navigation';
import CarParksIcon5 from 'material-ui/svg-icons/action/history';
import CarParksIcon6 from 'material-ui/svg-icons/action/favorite';


const recentsIcon = <CarParksIcon5 className="material-icons">restore</CarParksIcon5>;
const favoritesIcon = <CarParksIcon6 className="material-icons">favorite</CarParksIcon6>;
const nearbyIcon = <CarParksIcon3 className="material-icons">nearby</CarParksIcon3>;

/**
 * A simple example of `BottomNavigation`, with three labels and icons
 * provided. The selected `BottomNavigationItem` is determined by application
 * state (for instance, by the URL).
 */
class BottomNavigationExampleSimple extends Component {
  state = {
    selectedIndex: 0,
  };

  select = (index) => this.setState({selectedIndex: index});

  render() {
    return (
      <Paper zDepth={1}>
        <BottomNavigation selectedIndex={this.state.selectedIndex}>
          <BottomNavigationItem
            label="Recents"
            icon={recentsIcon}
            onTouchTap={() => this.select(0)}
          />
          <BottomNavigationItem
            label="Favorites"
            icon={favoritesIcon}
            onTouchTap={() => this.select(1)}
          />
          <BottomNavigationItem
            label="Nearby"
            icon={nearbyIcon}
            onTouchTap={() => this.select(2)}
          />
        </BottomNavigation>
      </Paper>
    );
  }
}

export default BottomNavigationExampleSimple;
