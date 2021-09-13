import React, { Component } from 'react'
import { BlockPicker } from 'react-color'
import { connect } from 'react-redux'
import {updateColorAction} from '../../redux/actions'
import './index.css'

class MyToolBar extends Component {
    handleColorChange = (color)=>{
        this.props.updateColor(color.hex)
    }

    downloadJPG = ()=>{

    }

    downloadPDF = ()=>{
        window.print()
    }

    render() {
        const {color} = this.props

        return (
            <div className='my-toolbar'>
                <div className='color-picker' style={{backgroundColor: color}}>
                    调色
                    <BlockPicker color={color} onChange={this.handleColorChange} />
                </div>
                
                <div className='download-option' style={{backgroundColor: color}}>
                    下载
                    <div className='download-buttons'>
                        <button onClick={this.downloadJPG} className='download-jpg'>JPG</button>
                        <button onClick={this.downloadPDF} className='download-pdf'>PDF</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(
    state=>({
        color: state.color
    }),
    {
        updateColor: updateColorAction
    }
)(MyToolBar)