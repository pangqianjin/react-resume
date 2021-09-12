import MyModule from './components/MyModule';
import defaultModules from './templates/default.json'
import React, { Component } from 'react'
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div className="App">
      {
        defaultModules.modules.map((module, index)=>(
          <MyModule key={index} title={module.title} color={module.color} rows={module.rows} />)
        )
      }
    </div>
    )
  }
}

