import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addLineAction } from '../../redux/actions'
import './index.css'

class MyNewLineSelector extends Component {
    handleSelect = (index)=>{// 0, 1, 2, 3共四种类型
        const {addLine, moduleIndex, lineIndex} = this.props

        let line
        if(index===0){
            line = [{title: '新建', text: '自定义'}, {title: '新建', text: '自定义'}]
        }else if(index===1){
            line = [{text: '自定义内容，多看高分技巧！'}]
        }else if(index===2){
            line = [{text: '自定义学校/公司等'}, {text: '2015.9 - 2019.6'}]
        }else if(index===3){
            line = [{text: '自定义公司/学校等'}, {text: '自定义职位/专业等'}, {text: '2015.9 - 2019.6'}]
        }
        addLine(line, moduleIndex, lineIndex+1)
        this.close()
    }

    close = ()=>{
        const newLineSelector = document.getElementById('newline-selector')
        newLineSelector.style.display = 'none'
        document.querySelector('#editing-area').style.opacity = '1'
    }

    render() {
        const lineTypes = [
            {title: '类型一', content: '姓名/学历等等  |  性别/年龄等等  |  手机/邮箱等等'},
            {title: '类型二', content: '自定义内容，实习经历，工作内容，项目经历等。'},
            {title: '类型三', content: '学校/公司等等  |  年限/日期等等'},
            {title: '类型四', content: '公司/学校等等  |  职位/专业/学位等等  |  年限/日期等等'},
        ]

        return (
            <div id='newline-selector'>
                {   
                    lineTypes.map((type, index)=>(
                        <div className='line-type' key={index}>
                            <div className='title'>{type.title}</div>
                            <p className='content'>{type.content}</p>
                            <button onClick={()=>this.handleSelect(index)}>+增加</button>
                        </div>
                    ))
                }
                <button onClick={this.close}>关闭</button>
            </div>
        )
    }
}

export default connect(
    state=>({
        newlineType: state.newlineType,
        moduleIndex: state.moduleIndex,
        lineIndex: state.lineIndex,
        modules: state.modules
    }),
    {
        addLine: addLineAction
    }
)(MyNewLineSelector)
