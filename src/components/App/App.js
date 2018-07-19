import React, { Component } from 'react';
import axios from 'axios';
import LoginForm from '../LoginForm/LoginForm';
import Main from '../Main';
import Secret from '../Secret'; 
import NotFound from '../NotFound';
import Callback from '../Callback';

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
    let mainComponent = "";
    if(this.props.location === ""){
      mainComponent = <Main {...this.props}/>
    } else if (this.props.location === "secret"){
      mainComponent = <Secret />
    } else if(this.props.location === "callback"){
      mainComponent = <Callback />
    } else {
      mainComponent = <NotFound />
    }
    return (
      <div className="App">
        <header> 
          <h1>Welcome {this.props.name}</h1>
        </header>
        {
          !this.state.loading && 
          <LoginForm />
        }
        {mainComponent}
      </div>
    );
  }
}

export default App;
