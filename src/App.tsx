import React from 'react';
import './App.css';
import Home  from './Component/Home';
import Products from './Products';  
import Basicdetails from './Component/Basicdetails';
import Main from './Component/Main';

export default class App extends React.Component{

   render() {
      return(
        <div> 
          main
          <Main></Main>

        </div>
      )
   }
}
