import React, { Component } from 'react'
import MyTitleBar from '../MyTitleBar'
import MyRow from '../MyRow'
import './index.css'


export default class MyModule extends Component {
    render() {
        const {title, color, rows, avatar} = this.props
        return (
            <div className='my-module'>
                <MyTitleBar title={title} color={color} />
                <div className="content">
                    <div className='rows'>
                    {
                        rows.map((row, index)=>(<MyRow key={index} items={row} />))
                    } 
                    </div>
                    <div className="avatar" style={{display: avatar?'block': 'none'}}>
                        <span className="tip">修改</span>
                        <img src={require('../../imgs/default-avatar.png').default} alt="点击上传头像" />
                    </div>
                </div>   
            </div>
        )
    }
}
