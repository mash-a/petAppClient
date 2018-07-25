import React, { Component } from 'react';
import axios from 'axios';
import Main from '../Main';
import UserProfile from '../UserProfile'; 
import NotFound from '../NotFound';
import Callback from '../Callback';
import Ping from '../Ping';

class App extends Component {

  state = {
    loading: true,
  }

  componentDidMount = async () => {
    const response = await axios.get('/api/petApp')
    const json = await response.data;
    console.log(json.randomURL)
    if(json) this.setState({ loading:false })
  }

  render() {
    let mainComponent = "";
    if(this.props.location === "") {
      mainComponent = <Main {...this.props}/>
    } else if (this.props.location === "profile") {
      mainComponent = this.props.auth.isAuthenticated() ? <UserProfile {...this.props}/> : <NotFound />
    } else if(this.props.location === "callback") {
      mainComponent = <Callback />
    } else if (this.props.location === 'ping') {
      mainComponent = this.props.auth.isAuthenticated() ? <Ping {...this.props} /> : <NotFound />
    } else {
      mainComponent = <NotFound />
    }
    return (
      <div className="App">
        <header> 
          <h1>Welcome {this.props.name}</h1>
        </header>
        {
          // !this.state.loading && 
          // <LoginForm />
            
        }
        {mainComponent}
      </div>
    );
  }
}

export default App;
