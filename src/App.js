import React from 'react';
import {Switch, Route} from 'react-router-dom'
import './App.css';
// import Directory from './components/directory/directory.component';
import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component'

// const HatsPage = () => (
//   <div>
//     <h1>HATS PAGE</h1>
//   </div>
// )

function App() {
  return (
    <div>
      {/*<Directory />*/}
      <Switch>
        <Route exact path='/' component={Homepage}/>
        <Route path='/shop' component={ShopPage}/>
      </Switch>
    </div>
  );
}

export default App;
