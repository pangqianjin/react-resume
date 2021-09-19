import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateColorAction, updateTitleBarAction, updateAllModulesAction } from '../../redux/actions'
import './index.css'

import template0 from '../../templates/template0.json'
import template1 from '../../templates/template1.json'
import template2 from '../../templates/template2.json'
import template3 from '../../templates/template3.json'

class MyTemplateSelector extends Component {
    templateSelectorRef = React.createRef()

    getNewTemplate = (index)=>{
        switch (index) {
            case 0:
                return template0
            case 1:
                return template1
            case 2:
                return template2
            case 3:
                return template3
            default:
                return template0
        }
    }

    handleClick = (index)=>{
        this.handleClose()
        const newTemplate = this.getNewTemplate(index)
        this.props.updateModules(newTemplate.modules)
        this.props.updateTitleBar(newTemplate.titleBar)
        this.props.updateColor(newTemplate.color)
    }

    handleClose = ()=>{
        this.templateSelectorRef.current.style.display = 'none'
        document.querySelector('#editing-area').style.opacity = '1'
    }

    render() {
        return (
            <div id='template-selector' ref={this.templateSelectorRef}>
                <div className="templates">
                    {
                        [0, 1, 2, 3].map(index=>(<img onClick={()=>this.handleClick(index)} key={index} src={require(`../../imgs/demo${index}.png`).default} alt={`模板${index}`} />))
                    }
                </div>
                <div onClick={this.handleClose} className='close-button'>关闭</div>
            </div>
        )
    }
}

export default connect(
    ()=>({}),
    {
        updateModules: updateAllModulesAction,
        updateTitleBar: updateTitleBarAction,
        updateColor: updateColorAction
    }
)(MyTemplateSelector)