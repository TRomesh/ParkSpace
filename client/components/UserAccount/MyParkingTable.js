import React from 'react';
import {Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn}
  from 'material-ui/Table';
import TextField from 'material-ui/TextField';
import Toggle from 'material-ui/Toggle';

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
    fare:398
  },
  {
    park: 'Randal White',
    car: 'Toyata Prius',
    city:'Maradana',
    fare:200
  },
  {
    park: 'Stephanie Sanders',
    car: 'Toyata Prius',
    city:'Pannipitiya',
    selected: true,
    fare:400
  },
  {
    park: 'Steve Brown',
    car: 'Toyata Prius',
    city:'Dematagoda',
    fare:450
  },
  {
    park: 'Joyce Whitten',
    car: 'Toyata Prius',
    city:'Borella',
    fare:850

  },
  {
    park: 'Samuel Roberts',
    car: 'Toyata Prius',
    city:'Malabe',
    fare:332

  },
  {
    park: 'Adam Moore',
    car: 'Toyata Prius',
    city:'Nugegoda',
    fare:350
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
    };
  }

  handleToggle = (event, toggled) => {
    this.setState({
      [event.target.park]: toggled,
    });
  };

  handleChange = (event) => {
    this.setState({height: event.target.value});
  };

  render() {
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
            {tableData.map( (row, index) => (
              <TableRow key={index} selected={row.selected}>
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
      </div>
    );
  }
}
