import MyModule from './components/MyModule';
import React, { Component } from 'react'
import './App.css';
import { connect } from 'react-redux';
import MyNewLineSelector from './components/MyNewLineSelector';
import MyToolBar from './components/MyToolBar';
import MyTemplateSelector from './components/MyTemplateSelector';

class App extends Component {

  render() {
    return (
      <div className="App">
        <MyToolBar id='toolbar' />
        <div id='editing-area'>
        {
          this.props.modules.map((module, index)=>(
            <MyModule key={index} index={index} name={module.name} title={module.title} rows={module.rows} avatar={module.avatar} />)
          )
        }
        </div>
      
      {/* 插入新行 */}
      <MyNewLineSelector />
      {/* 模板选择 */}
      <MyTemplateSelector />
    </div>
    )
  }
}

export default connect(
  (state)=>({modules: state.modules})
)(App)