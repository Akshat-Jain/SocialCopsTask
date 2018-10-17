import React, { Component } from 'react';
import CSVReader from 'react-csv-reader';
import "./CSV.css";

class CSV extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: null,
      battingScore: null,
    };
  }

  handleForce = (data) => {
    this.setState({
      data,
    })
    this.handleBattingScore();
  };

  handleBattingScore = () => {
    var battingScore = [];
    for (var i = 1; i < this.state.data.length-1; i++) {
      battingScore.push(this.state.data[i][0]);
    }
    this.setState({
      battingScore,
    })
  };

  render() {
    {console.log(this.state.battingScore)}
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
