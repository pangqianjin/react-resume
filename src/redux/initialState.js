import defaultModules from '../templates/default.json'

const color = defaultModules.modules[0].color

const initialState = {
    modules: defaultModules.modules,
    color,
    moduleIndex: 0,// 在哪一个module插入新行
    lineIndex: 0// 在哪一行的后面插入新行
}

export default initialState