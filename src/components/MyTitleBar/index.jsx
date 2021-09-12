import React, { Component } from 'react'
import './index.css'

export default class MyTitleBar extends Component {
    render() {
        const {title, color} = this.props

        return (
            <div className='my-title-bar'>
                <div suppressContentEditableWarning contentEditable className='title' style={{backgroundColor: color}}>{title}</div>
                <div className='underline' style={{backgroundColor: color}}></div>
                <div className='tools'>
                    <button>🗑️</button>
                    <button>+增加模块</button>
                </div>
            </div>
        )
    }
}
