import React, { Component } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

class DashboardPage extends Component {

  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      users: [],
      headers: []
    }
    this.updateState = this.updateState.bind(this);
  }

  employeeList = {
    user: [{
      "id": 1,
      "name": "test1",
      "age": "11",
      "gender": "male",
      "email": "test1@gmail.com",
      "phoneNo": "9415346313"
    },
    {
      "id": 2,
      "name": "test2",
      "age": "12",
      "gender": "male",
      "email": "test2@gmail.com",
      "phoneNo": "9415346314"
    },
    {
      "id": 3,
      "name": "test3", "age": "13",
      "gender": "male",
      "email": "test3@gmail.com",
      "phoneNo": "9415346315"
    },
    {
      "id": 4,
      "name": "test4",
      "age": "14",
      "gender": "male",
      "email": "test4@gmail.com",
      "phoneNo": "9415346316"
    },
    {
      "id": 5,
      "name": "test5",
      "age": "15",
      "gender": "male",
      "email": "test5@gmail.com",
      "phoneNo": "9415346317"
    },
    {
      "id": 6,
      "name": "test6",
      "age": "16",
      "gender": "male",
      "email": "test6@gmail.com",
      "phoneNo": "9415346318"
    }
    ]
  }

  componentWillMount() {
    let emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let isLoggedIn = this.props.login.email &&
      emailRegex.test(String(this.props.login.email).toLowerCase());
    if (!isLoggedIn) {
      browserHistory.push('/');
    }
  }

  componentDidMount() {
    this.updateState();
  }

  updateState() {
    let headers = Object.keys(this.employeeList.user[0]);
    this.setState({ headers: headers, users: this.employeeList.user });
  }

  render() {
    return (
      <div className="dashboard">
        <h1>Dashboard Page</h1>
        <table className="table">
          <thead>
            <tr>
              {
                this.state.headers.map((header, index) => {
                  return (<th key={index}>{header}</th>)
                })
              }
            </tr>
          </thead>
          <tbody>
            {
              this.state.users.map((user, userIndex) => {
                return (
                  <tr key={userIndex}>{
                    this.state.headers.map((header, headerIndex) => {
                      return (<td key={`${'' + userIndex + '-' + headerIndex}`}>{user[header]}</td>)
                    })
                  }</tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    login: state.login,
  };
}

export default connect(mapStateToProps)(DashboardPage);

