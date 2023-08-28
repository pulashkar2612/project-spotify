//import { useState } from 'react';
import Home from './components/Home/Home'
//import {Login} from './components/Profile/Login.jsx'
import { Provider } from 'react-redux'
import store from './store/store';
//import { Route, Routes } from 'react-router-dom'

function App() {
  //const [loggedIn, isLoggedIn] = useState(false);
  return (
    <>
      {/* {loggedIn ? */}
      <Provider store={store}>
        <Home />
      </Provider>
      {/* : <Login />
        
      } */}

      
        
      
    </>
  )
}

export default App;
