import template0 from '../templates/template0.json'

const initialState = {
    modules: template0.modules,
    color: template0.color,
    titleBar: template0.titleBar,
    moduleIndex: 0,// 在哪一个module插入新行
    lineIndex: 0// 在哪一行的后面插入新行
}

export default initialState