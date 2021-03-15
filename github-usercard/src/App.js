import React from 'react';
//import UserForm from './components/usercardForm';
import axios from 'axios';

class App extends React.Component {
  constructor() {
    super();
      this.state = {
        users: [],
        followers: ''  
      };
  }
  
  componentDidMount() {
    axios.get("https://api.github.com/users/teresafranxman97")
      .then(res => {
        console.log(res.data)
        this.setState({ 
          ...this.state,
          users: res.data
        })
      })
      .catch(err => console.log('error: ', err))
  }


  render() {
    return (
      <div className="App">
        <h1>hello</h1>
        {this.state.users.map(user => {
          return (
            <h1>{user.name}</h1>
          )
        })}


        {/* <UserForm users={this.state.users} /> */}
      </div>
    )
  }
}

export default App;
