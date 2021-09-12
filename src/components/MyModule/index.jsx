import React, { Component } from 'react'
import MyTitleBar from '../MyTitleBar'
import MyRow from '../MyRow'
import './index.css'


export default class MyModule extends Component {
    uploadAvatar = async ()=>{
        const fileHandles = await window.showOpenFilePicker()
        for(const entry of fileHandles){
            let url = ''
            const file = await entry.getFile()
            if (window.createObjectURL) { // basic
                url = window.createObjectURL(file) ;
            }else if (window.webkitURL) { // webkit or chrome
                url = window.webkitURL.createObjectURL(file) ;
            }else if (window.URL) { // mozilla(firefox)
                url = window.URL.createObjectURL(file) ;
            }
            document.querySelector('img').setAttribute('src', url)
        }
    }

    render() {
        const {title, color, rows, avatar, index} = this.props
        return (
            <div className='my-module'>
                <MyTitleBar title={title} index={index} color={color} />
                <div className="content">
                    <div className='rows'>
                    {
                        rows.map((row, index)=>(<MyRow key={index} items={row} />))
                    } 
                    </div>
                    <div className="avatar" style={{display: avatar?'block': 'none'}}>
                        <span onClick={this.uploadAvatar} className="tip">修改</span>
                        <img src={require('../../imgs/default-avatar.png').default} alt="点击上传头像" />
                    </div>
                </div>   
            </div>
        )
    }
}
