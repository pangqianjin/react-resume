import { combineReducers } from "redux"
import { ADD_LINE, ADD_MODULE, DEL_LINE, DEL_MODULE, UPDATE_ALL_MODULES, UPDATE_COLOR, UPDATE_LINE_INDEX, UPDATE_MODULE_INDEX, UPDATE_TITLE_BAR } from "./action-types"
import initialState from "./initialState"

const modulesReducer = (modules=initialState.modules, action)=>{
    switch(action.type){  
        case UPDATE_ALL_MODULES: // 更新所有模块
            return action.data
        case ADD_MODULE: // 添加模块
        {
            const {index, module} = action.data// howMany=0
            const newModules = [...modules]
            newModules.splice(index, 0, module)
            return newModules
        }   
        case DEL_MODULE: // 删除模块
        {
            const {index} = action.data
            const newModules = [...modules]
            newModules.splice(index, 1)
            return newModules
        }   
        case ADD_LINE: // 添加一行
        {
            const {line, moduleIndex, lineIndex} = action.data
            const newModules = [...modules]
            newModules[moduleIndex].rows.splice(lineIndex, 0, line)
            return newModules
        }   
        case DEL_LINE: // 删除一行
        {
            const {moduleIndex, lineIndex} = action.data
            const newModules = [...modules]
            newModules[moduleIndex].rows.splice(lineIndex, 1)
            return newModules
        }   
        default: 
            return modules
    }
} 

const colorReducer = (color=initialState.color, action)=>{
    switch(action.type){
        case UPDATE_COLOR: 
            return action.data
        default: 
            return color
    }
}

const moduleIndexReducer = (moduleIndex=initialState.moduleIndex, action)=>{
    switch(action.type){
        case UPDATE_MODULE_INDEX: 
            return action.data
        default: 
            return moduleIndex
    }
}

const lineIndexReducer = (lineIndex=initialState.lineIndex, action) =>{
    switch(action.type){
        case UPDATE_LINE_INDEX: 
            return action.data
        default: 
            return lineIndex
    }
}

const titleBarReducer = (titleBar=initialState.titleBar, action)=>{
    switch(action.type){
        case UPDATE_TITLE_BAR: 
            return action.data
        default: 
            return titleBar
    }
}

export default combineReducers({
    modules: modulesReducer,
    color: colorReducer,
    moduleIndex: moduleIndexReducer,
    lineIndex: lineIndexReducer,
    titleBar: titleBarReducer
})