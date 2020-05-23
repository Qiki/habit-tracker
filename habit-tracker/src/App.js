import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mockData: [
        {
          name: 'Neil',
          date: '05/02/2020',
          yes: 1,
        },
        {
          name: 'Neil',
          date: '05/02/2020',
          yes: 0,
        },
        {
          name: 'Qi',
          date: '05/02/2020',
          yes: 1,
        },
        {
          name: 'Neil',
          date: '05/03/2020',
          yes: 0,
        },
        {
          name: 'Qi',
          date: '05/03/2020',
          yes: 1,
        },
        {
          name: 'Neil',
          date: '05/04/2020',
          yes: 0,
        },

        {
          name: 'Qi',
          date: '05/04/2020',
          yes: 1,
        },
        {
          name: 'Neil',
          date: '05/04/2020',
          yes: 1,
        },
        {
          name: 'Qi',
          date: '05/04/2020',
          yes: 1,
        },
      ]
    };
  }

  renderTable(name) {
    let data =  this.state.mockData.filter(item => item.name === name);

    return data.map(info => {
      const {date, yes} = info;
      return(
        <tr>
          <td>{date}</td>
          <td>{yes}</td>
        </tr>
      ); 
    })
  }

  renderTableHeader() {
    return (
      <tr>
        <th>Date</th>
        <th>Yes</th>
      </tr>
    )
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to Qi and Neil's Habit Tracker</h2>
        </div>
        <div className="dashboard">
          <div class="left">
            <div class="name">Neil</div>
            <div class="exercise-table">
              <table>
                {this.renderTableHeader()}
                {this.renderTable("Neil")}
              </table>
            </div>
          </div>
          <div class="right">
            <div class="name">Qi</div>
            <div class="exercise-table">
              <table>
                {this.renderTableHeader()}
                {this.renderTable("Qi")}
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
