import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component'
import SignInAndSignUpPage from './pages/signIn-signUp/signIn-signUp.component'
import Header from './components/header/header.component'

import { auth } from './firebase/firebase.utils'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null

  componentDidMount() {
    this.unsubscribeFromAuth =  auth.onAuthStateChanged(user => 
      this.setState({
        currentUser: user
      })
    )
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }

  render () {
    return (
      <div>
        <Header/>
        <Switch>
          <Route
            exact
            path='/'
            component={HomePage}
          />
          <Route
            path='/shop'
            component={ShopPage}
          />
          <Route
            path='/signIn'
            component={SignInAndSignUpPage}
          />
        </Switch>
      </div>
    )
  }
}

export default App;
