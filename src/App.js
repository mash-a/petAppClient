import React, { Component } from 'react';
import axios from 'axios';
import LoginForm from './LoginForm';

class App extends Component {

  state = {
    loading: true,
  }

  componentWillMount = async () => {
    const response = await axios.get('/api/petApp')
    const json = await response.data;
    console.log(json.randomURL)
    if(json) this.setState({ loading:false })
  }

  render() {
    return (
      <div className="App">
        {
          !this.state.loading && 
          <LoginForm />
        }
      </div>
    );
  }
}

export default App;
