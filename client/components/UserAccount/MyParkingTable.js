import React from 'react';
import {Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn}
  from 'material-ui/Table';
import Dialog from 'material-ui/Dialog';
import DialogDetails from './DialogDetails';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';

const styles = {
  propContainer: {
    width: 200,
    overflow: 'hidden',
    margin: '20px auto 0',
  },
  propToggleHeader: {
    margin: '20px auto 10px',
  },
};

const tableData = [
  {
    park: 'John Smith',
    car: 'Toyata Prius',
    city:'Maharagama',
    selected: true,
    fare:398,
    payment:'...'
  },
  {
    park: 'Randal White',
    car: 'Toyata Prius',
    city:'Maradana',
    fare:200,
    payment:'...'
  },
  {
    park: 'Stephanie Sanders',
    car: 'Toyata Prius',
    city:'Pannipitiya',
    selected: true,
    fare:400,
    payment:'...'
  },
  {
    park: 'Steve Brown',
    car: 'Toyata Prius',
    city:'Dematagoda',
    fare:450,
    payment:'...'
  },
  {
    park: 'Joyce Whitten',
    car: 'Toyata Prius',
    city:'Borella',
    fare:850,
    payment:'...'

  },
  {
    park: 'Samuel Roberts',
    car: 'Toyata Prius',
    city:'Malabe',
    fare:332,
    payment:'...'

  },
  {
    park: 'Adam Moore',
    car: 'Toyata Prius',
    city:'Nugegoda',
    fare:350,
    payment:'...'
  },
];

export default class TableExampleComplex extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      fixedHeader: true,
      fixedFooter: true,
      stripedRows: false,
      showRowHover: false,
      selectable: true,
      multiSelectable: false,
      enableSelectAll: false,
      deselectOnClickaway: true,
      showCheckboxes: true,
      height: '300px',
      open: false
    };
  }

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  handleToggle = (event, toggled) => {
    this.setState({
      [event.target.park]: toggled,
    });
  };

  handleChange = (event) => {
    this.setState({height: event.target.value});
  };

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.handleClose}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        keyboardFocused={true}
        onTouchTap={this.handleClose}
      />,
    ];
    return (
      <div>
        <Table
          height={this.state.height}
          fixedHeader={this.state.fixedHeader}
          fixedFooter={this.state.fixedFooter}
          selectable={this.state.selectable}
          multiSelectable={this.state.multiSelectable}
        >
          <TableHeader
            displaySelectAll={this.state.showCheckboxes}
            adjustForCheckbox={this.state.showCheckboxes}
            enableSelectAll={this.state.enableSelectAll}
          >
            <TableRow>
              <TableHeaderColumn colSpan="3" tooltip="Super Header" style={{textAlign: 'center'}}>
                <h1>MyParking :D</h1>
              </TableHeaderColumn>
            </TableRow>
            <TableRow>
              <TableHeaderColumn tooltip="The ID">ID</TableHeaderColumn>
              <TableHeaderColumn tooltip="The Park">Park</TableHeaderColumn>
              <TableHeaderColumn tooltip="The Car">Car</TableHeaderColumn>
              <TableHeaderColumn tooltip="The City">City</TableHeaderColumn>
              <TableHeaderColumn tooltip="The Fare">Fare</TableHeaderColumn>
              <TableHeaderColumn tooltip="The Payment">Payment Method</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody
            displayRowCheckbox={this.state.showCheckboxes}
            deselectOnClickaway={this.state.deselectOnClickaway}
            showRowHover={this.state.showRowHover}
            stripedRows={this.state.stripedRows}
          >
            {tableData.map( (row, index, indexx) => (
                    <TableRow key={index} selected={row.selected} onTouchTap={this.handleOpen} >
                    <TableRowColumn>{index}</TableRowColumn>
                    <TableRowColumn>{row.park}</TableRowColumn>
                    <TableRowColumn>{row.car}</TableRowColumn>
                    <TableRowColumn>{row.city}</TableRowColumn>
                    <TableRowColumn>LKR {row.fare}</TableRowColumn>
                    <TableRowColumn>{row.payment}</TableRowColumn>
                   </TableRow>
              ))}
          </TableBody>
          <TableFooter
            adjustForCheckbox={this.state.showCheckboxes}
          >
          </TableFooter>
        </Table>
        <Dialog
          title="Dialog With Actions"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          <DialogDetails/>
        </Dialog>
      </div>
    );
  }
}
