import React from 'react';
// import logo from '../logo.svg';
import './App.css';

import './StateManager/StateManager'
import StateManager from './StateManager/StateManager';

function App() {
  return (
    <div className="container App App-header ">
      
      <h1 align="center">Money Distribution App</h1>

<div class="alert alert-info">
   To equally distribute money spent amoung the persons
</div>


        <StateManager />

        <footer>
        <h5>Developed By <a href="http://huzaifairfan.com/">Huzaifa Irfan</a></h5>
        </footer>

     
    </div>
  );
}

export default App;
