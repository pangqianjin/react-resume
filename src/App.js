import MyModule from './components/MyModule';
import React, { Component } from 'react'
import './App.css';
import { connect } from 'react-redux';

class App extends Component {

  render() {
    return (
      <div className="App">
      {
        this.props.modules.map((module, index)=>(
          <MyModule key={index} index={index} title={module.title} color={module.color} rows={module.rows} avatar={module.avatar} />)
        )
      }
    </div>
    )
  }
}

export default connect(
  (state)=>({modules: state.modules})
)(App)