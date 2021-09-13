import React, { Component } from 'react'
import { BlockPicker } from 'react-color'
import { connect } from 'react-redux'
import {updateColorAction} from '../../redux/actions'
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'
import './index.css'

class MyToolBar extends Component {
    handleColorChange = (color)=>{
        this.props.updateColor(color.hex)
    }

    downloadImage = (type)=>{
        html2canvas(document.getElementById('editing-area')).then(canvas=>{
            const url = canvas.toDataURL(`image/${type}`)// png/jpeg
            const oA = document.createElement("a")
            oA.download = '个人简历'
            oA.href = url
            document.body.appendChild(oA)
            oA.click()
            oA.remove()
        })
    }

    downloadPDF = ()=>{
        const editingArea = document.getElementById('editing-area')
        html2canvas(editingArea).then(canvas=>{
            const doc = new jsPDF('p','pt','a4')
            doc.addImage(canvas, 'JPEG', 0, 0, 596, 842)
            doc.save('个人简历.pdf')
        })
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
                        <button onClick={()=>this.downloadImage('jpeg')} className='download-jpg'>JPG/JIIF</button>
                        <button onClick={()=>this.downloadImage('png')} className='download-jpg'>PNG</button>
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