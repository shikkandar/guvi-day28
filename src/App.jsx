import React, { useContext } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar';
import Body from './Body';
import Foot from './Foot';

const App = () => {
  return (
    <div>
      <Navbar/>
      <Body/>
      <Foot/>
    </div>
  )
}

export default App