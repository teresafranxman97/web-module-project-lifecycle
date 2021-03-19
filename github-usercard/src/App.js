import React from 'react';
import axios from 'axios';
import { Container } from './styles';


class App extends React.Component {
  constructor() {
    super();
      this.state = {
        users: [],
        followers: []  
      };
  }
  
  componentDidMount() {
    axios.get("https://api.github.com/users/teresafranxman97")
      .then(res => {
        this.setState({ 
          ...this.state,
          users: res.data
        });

        return axios.get("https://api.github.com/users/teresafranxman97/followers")
      })

      .then(response => {
        console.log(response.data)
        this.setState({
          ...this.state,
          followers: response.data
        });
      })

      .catch(err => console.log('error: ', err))

  }


  render() {
    return (
      <Container className="App">
        <h1>Welcome</h1>
        <div className="content">
          <p>{this.state.users.name}</p>
          <p>{this.state.users.location}</p>
          <p>{this.state.followers.map(follower => {
            return <p>Followers: {follower.login}</p>
          })}
          </p>
        </div>
      </Container>
    )
  }
}

export default App;
