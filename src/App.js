import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom'
import './App.css';
import Header from './components/header/header.component';
// import Directory from './components/directory/directory.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component'
import CheckoutPage from './pages/checkout/checkout.component';
import {auth, createUserProfileDocument} from './firebase/firebase.utils'
import {connect} from 'react-redux'
import {setCurrentUser} from './redux/user/user.actions'
import {createStructuredSelector} from 'reselect'
import {selectCurrentUser} from './redux/user/user.selectors'

// const HatsPage = () => (
//   <div>
//     <h1>HATS PAGE</h1>
//   </div>
// )

class App extends React.Component{

  // constructor(){
  //   super()
  //   this.state = {
  //     currentUser : null
  //   }
  // }

  unsubscribeFromAuth = null

  componentDidMount(){

    const {setCurrentUser} = this.props
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      // this.setState({currentUser : user})
      // console.log(user)
      // createUserProfileDocument(userAuth)
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth)

        // userRef.onSnapshot(snapShot => {
        //   this.setState({
        //     currentUser : {
        //       id : snapShot.id,
        //       ...snapShot.data()
        //     }
        //   },() => console.log(this.state))
        // })
        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id : snapShot.id,
            ...snapShot.data()           
          })
        })
      }else{
        setCurrentUser(userAuth)
      }
    })

  }

  componentWillUnmount(){
    this.unsubscribeFromAuth()
  }

  render(){
    // console.log(this.props.currentUser)
    return (
      <div>
        {/*<Directory />*/}
        {/*<Header currentUser={this.state.currentUser}/>*/} {/*commented after adding redux*/}
        <Header />
        <Switch>
          <Route exact path='/' component={Homepage}/>
          <Route path='/shop' component={ShopPage}/>
          <Route exact path='/checkout' component={CheckoutPage}/>
          {/*<Route path='/signin' component={SignInAndSignUp}/>*/}
          <Route 
            exact 
            path='/signin' 
            render={() => this.props.currentUser ? (
                <Redirect to='/'/>
                ) : (
                  <SignInAndSignUp />
                  )
              }
          />
        </Switch>
      </div>
    );
  }
}

// const mapStateToProps = ({user}) => ({
//   currentUser : user.currentUser
// })

const mapStateToProps = createStructuredSelector({
  currentUser : selectCurrentUser
})

const mapDispatchToProps = (dispatch) => {
  return {
    setCurrentUser : (user) => dispatch(setCurrentUser(user))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
