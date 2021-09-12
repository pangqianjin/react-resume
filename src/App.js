import MyModule from './components/MyModule';
import React, { Component } from 'react'
import './App.css';
import { connect } from 'react-redux';
import MyNewLineSelector from './components/MyNewLineSelector';

class App extends Component {

  render() {
    return (
      <div className="App">
        <div id='editing-area'>
        {
          this.props.modules.map((module, index)=>(
            <MyModule key={index} index={index} title={module.title} color={module.color} rows={module.rows} avatar={module.avatar} />)
          )
        }
        </div>
      
      {/* 插入新行 */}
      <MyNewLineSelector />
    </div>
    )
  }
}

export default connect(
  (state)=>({modules: state.modules})
)(App)