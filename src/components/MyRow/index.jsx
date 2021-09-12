import React, { Component } from 'react'
import { connect } from 'react-redux'
import './index.css'
import {delLineAction, updateLineIndexAction, updateModuleIndexAction} from '../../redux/actions'

class MyRow extends Component {
    addLine = ()=>{
        const newLineSelector = document.getElementById('newline-selector')
        newLineSelector.style.display = 'block'
        document.querySelector('#editing-area').style.opacity = '0.3'

        const {updateModuleIndex, updateLineIndex, moduleIndex, lineIndex} = this.props
        updateModuleIndex(moduleIndex)
        updateLineIndex(lineIndex)
    }

    delLine = ()=>{
        const {modules, delLine, moduleIndex, lineIndex} = this.props
        if(modules[moduleIndex].rows.length===1){
            alert('别删啦，只剩我一行啦！')
        }else{
            delLine(moduleIndex, lineIndex)
        }
    }

    render() {
        const {items} = this.props// items = [{title, text}, ...]

        return (
            <div className='my-row'>
                <div className='items'>
                {
                    items.map((item, index)=>(
                        <div className='item' key={index} style={{width: `${items.length>0?100/items.length:100}%`}}>
                            {item.title&&<span suppressContentEditableWarning contentEditable className='title'>{item.title}</span>}
                            <span suppressContentEditableWarning contentEditable className='text'>
                                {
                                    item.text?.split("\n").filter(line=>line!=="").map((line, index)=>(<div key={index}>{line}</div>))
                                }
                            </span>
                        </div>)
                    )
                }
                </div>
                
                <div className='tools'>
                    <button onClick={this.delLine}>🗑️</button>
                    <button onClick={this.addLine}>+增加一行</button>
                </div>
            </div>
        )
    }
}

export default connect(
    (state)=>({modules: state.modules}),
    {
        delLine: delLineAction,
        updateModuleIndex: updateModuleIndexAction,
        updateLineIndex: updateLineIndexAction
    }
)(MyRow)