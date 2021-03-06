import React, { Component } from 'react';
// import axios from 'axios';
import Main from '../Main';
import UserProfile from '../UserProfile'; 
import NotFound from '../NotFound';
import Callback from '../Callback';
import Ping from '../Ping';
import TopNavbar from '../TopNavbar';
import HomePage from '../HomePage';
import Footer from '../Footer';
import AboutUs from '../AboutUs';
import Services from '../Services';

import './App.css';


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      loading: true,
      viewPet: false,
    }
  }

  // componentDidMount = async () => {
    //add google api to here
    // const response = await axios.get('/api/petApp')
    // const json = await response.data;
    // console.log(json.randomURL)
    // if(json) this.setState({ loading: false })
  // }

  render() {
    let mainComponent = "";
    if(this.props.location === "main") {
      mainComponent = <Main {...this.props}/>
    } else if (this.props.location === "profile") {
      mainComponent = this.props.auth.isAuthenticated() ? <UserProfile {...this.props} /> : <NotFound />
    } else if(this.props.location === "callback") {
      mainComponent = <Callback />
    } else if (this.props.location === "ping") {
      mainComponent = this.props.auth.isAuthenticated() ? <Ping {...this.props} /> : <NotFound />
    }  else if (this.props.location === "") {
      mainComponent = <HomePage />
    }  else if (this.props.location === "about") {
      mainComponent = <AboutUs />
    } else if (this.props.location === "services") {
      mainComponent = <Services />
    }else {
      mainComponent = <NotFound />
    }
    return (
      <div className="App">
        <TopNavbar {...this.props}/>
        <div className="mainComponent">
          {mainComponent}
        </div>
        <div className="footer">
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
