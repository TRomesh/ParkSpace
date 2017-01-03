import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import ParkImage from '../../media/images/login_screen.jpg';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: 500,
    height: 450,
    overflowY: 'auto',
  },
};

const tilesData = [
  {
    img: ParkImage,
    title: 'Breakfast',
    author: 'jill111',
  },
  {
    img:ParkImage,
    title: 'Tasty burger',
    author: 'pashminu',
  },
  {
    img:ParkImage,
    title: 'Camera',
    author: 'Danson67',
  },
  {
    img:ParkImage,
    title: 'Morning',
    author: 'fancycrave1',
  },
  {
    img:ParkImage,
    title: 'Hats',
    author: 'Hans',
  },
  {
    img:ParkImage,
    title: 'Honey',
    author: 'fancycravel',
  },
  {
    img:ParkImage,
    title: 'Vegetables',
    author: 'jill111',
  },
  {
    img:ParkImage,
    title: 'Water plant',
    author: 'BkrmadtyaKarki',
  },
];

const GridListExampleSimple = () => (
  <div style={styles.root}>
    <GridList
      cellHeight={180}
      style={styles.gridList}
    >
      <Subheader>December</Subheader>
      {tilesData.map((tile) => (
        <GridTile
          key={tile.img}
          title={tile.title}
          subtitle={<span>by <b>{tile.author}</b></span>}
          actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
        >
          <img src={tile.img} />
        </GridTile>
      ))}
    </GridList>
  </div>
);

export default GridListExampleSimple;
