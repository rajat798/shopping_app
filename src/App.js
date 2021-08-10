import React from 'react';
import {Switch, Route} from 'react-router-dom'
import './App.css';
import Header from './components/header/header.component';
// import Directory from './components/directory/directory.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component'
import {auth} from './firebase/firebase.utils'

// const HatsPage = () => (
//   <div>
//     <h1>HATS PAGE</h1>
//   </div>
// )

class App extends React.Component{

  constructor(){
    super()
    this.state = {
      currentUser : null
    }
  }

  unsubscribeFromAuth = null

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({currentUser : user})
      console.log(user)
    })

  }

  componentWillUnmount(){
    this.unsubscribeFromAuth()
  }

  render(){
    return (
      <div>
        {/*<Directory />*/}
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path='/' component={Homepage}/>
          <Route path='/shop' component={ShopPage}/>
          <Route path='/signin' component={SignInAndSignUp}/>
        </Switch>
      </div>
    );
  }
}

export default App;
