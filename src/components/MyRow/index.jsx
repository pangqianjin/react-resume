import React, { Component } from 'react'
import './index.css'

export default class MyRow extends Component {
    render() {
        const {items} = this.props// items = [{title, text}, ...]

        return (
            <div className='my-row'>
                <div className='items'>
                {
                    items.map((item, index)=>(
                        <div className='item' key={index} style={{width: `${items.length>0?100/items.length:100}%`}}>
                            {item.title?<span suppressContentEditableWarning contentEditable className='title'>{item.title}</span>:null}
                            <span suppressContentEditableWarning contentEditable className='text'>
                                {
                                    item.text.split("\n").filter(line=>line!=="").map((line, index)=>(<div key={index}>{line}</div>))
                                }
                            </span>
                        </div>)
                    )
                }
                </div>
                
                <div className='tools'>
                    <button>🗑️</button>
                    <button>+增加一行</button>
                </div>
            </div>
        )
    }
}
