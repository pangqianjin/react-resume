import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addModuleAction, delModuleAction } from '../../redux/actions'
import './index.css'

class MyTitleBar extends Component {
    addModule = ()=>{
        const {index, color} = this.props
        const newModule = {
            title: "新建模块", 
            color, 
            rows: [
                [{text:"自定义内容"}]
            ]
        }

        this.props.addModule(newModule, index+1)
    }

    render() {
        const {title, color, index, delModule} = this.props
        const {borderRadius, backgroundColor, width, underline} = this.props.titleBar

        return (
            <div className='my-title-bar'>
                <div suppressContentEditableWarning contentEditable className='title' style={{width, backgroundColor: backgroundColor? color:'rgba(0,0,0,0)', borderRadius}}>{title}</div>
                {underline && <div className='underline' style={{backgroundColor: color}}></div>}
                <div className='tools'>
                    <button onClick={()=>delModule(index)}>🗑️</button>
                    <button onClick={()=>this.addModule()}>+增加模块</button>
                </div>
            </div>
        )
    }
}

export default connect(
    (state)=>({
        color: state.color,
        titleBar: state.titleBar
    }),
    {
        delModule: delModuleAction,
        addModule: addModuleAction
    }
)(MyTitleBar)
