import React from 'react'
import Food from './Foods';
import "./App.css"

const App = () => {

    const foods = ['amala', 'yam', 'potato', 'pizza', 'pounded yam', 'yoghurt'];

  
  return (
    <div className='container'>

        Below are the foods i like

        <Food foods={foods}  />
    </div>
  )
}

export default App