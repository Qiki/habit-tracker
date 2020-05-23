import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mockData: [
        {
          name: 'neil',
          date: 1590251157604,
          yes: 1,
        },
        {
          name: 'neil',
          date: 1590251157604,
          yes: 0,
        },
        {
          name: 'qi',
          date: 1590251157604,
          yes: 1,
        },
        {
          name: 'neil',
          date: 1590251157604,
          yes: 0,
        },
        {
          name: 'qi',
          date: 1590251157604,
          yes: 1,
        },
        {
          name: 'neil',
          date: 1590251157604,
          yes: 0,
        },

        {
          name: 'qi',
          date: 1590251157604,
          yes: 1,
        },
        {
          name: 'neil',
          date: 1590251157604,
          yes: 1,
        },
        {
          name: 'qi',
          date: 1590251157604,
          yes: 1,
        },
      ],
    };
  }

  componentDidMount() {
    fetch('https://dl.dropboxusercontent.com/s/zqaupva8wk071uy/exercise.json')
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result);
          this.setState({
            ...this.state,
            exercise: result,
          });
        },
        (error) => {}
      );
  }

  renderTable(name) {
    let data = this.state.mockData.filter((item) => item.name === name);

    return data.map((info, index) => {
      const { date, yes } = info;

      let formatDate = new Date(date).toLocaleDateString('en-US');
      return (
        <tr key={index}>
          <td>{formatDate}</td>
          <td>{yes}</td>
        </tr>
      );
    });
  }

  renderTableHeader() {
    return (
      <tr>
        <th>Date</th>
        <th>Yes</th>
      </tr>
    );
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to Qi and Neil's Habit Tracker</h2>
        </div>
        <div className="dashboard">
          <div className="left">
            <div className="name">Neil</div>
            <div className="exercise-table">
              <table>
                <thead>{this.renderTableHeader()}</thead>
                <tbody>{this.renderTable('neil')}</tbody>
              </table>
            </div>
          </div>
          <div className="right">
            <div className="name">Qi</div>
            <div className="exercise-table">
              <table>
                <thead>{this.renderTableHeader()}</thead>
                <tbody>{this.renderTable('qi')}</tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
