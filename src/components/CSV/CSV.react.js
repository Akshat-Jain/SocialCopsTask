import React, { Component } from 'react';
import CSVReader from 'react-csv-reader'
import "./CSV.css";

class CSV extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: null
    };
  }

  handleForce = (data) => {
    this.setState({
      data: data
    })
  };

  render() {
    {console.log(this.state.data)}
    return (
        <div className="container">
        <CSVReader
          cssClass="react-csv-input"
          label="Select CSV file with statistics required for the task"
          onFileLoaded={this.handleForce}
        />
        <p>Once you have selected the CSV file, open the console.</p>
      </div>
    );
  }
}

export default CSV;
