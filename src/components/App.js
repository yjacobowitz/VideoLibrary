import React, { Component } from 'react';
import '../App.css';
import MovieListContainer from './containers/MovieListContainer'
import LoginContainer from './containers/LoginContainer'

class App extends Component {
    constructor(){
        super();
        this.showLogin()
    }

    signInClick() {
        this.setState({ userLoggedIn: true });
    }

    showLogin(){
        let curUser = localStorage.getItem('currentUser');
        if(curUser){
            if(curUser !== "") {
                this.state = {userLoggedIn: true};
                return
            }
        }
        this.state = {userLoggedIn: false };
    }

    logout(){
        localStorage.setItem('currentUser', "");
        this.setState({userLoggedIn: false });
    }

    render() {
        return (
          <div>
              {this.state.userLoggedIn ?
                  <div>
                      <MovieListContainer logout={this.logout.bind(this)}/>
                  </div> :
                  <LoginContainer show={this.state.loginShow} onHide={this.signInClick.bind(this)}/>}
          </div>
        );
    }
}

export default App;
