import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import {Component} from 'react'
import HomePage from './Components/HomePage'

class Portfolio extends Component{
  render(){
    return (
      <BrowserRouter>
        <Routes>
          <Route exact path='/' Component={HomePage}/>
        </Routes>
      </BrowserRouter>
      
    )
  }
}

export default Portfolio