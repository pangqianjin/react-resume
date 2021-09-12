import { combineReducers } from "redux"
import { ADD_LINE, ADD_MODULE, DEL_LINE, DEL_MODULE, UPDATE_COLOR, UPDATE_LINE } from "./action-types"
import initialState from "./initialState"

const modulesReducer = (modules=initialState.modules, action)=>{
    switch(action.type){  
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
        case UPDATE_LINE: // 更新一行
        {
            const {line, moduleIndex, lineIndex} = action.data
            const newModules = [...modules]
            newModules[moduleIndex].rows.splice(lineIndex, 1, line)
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

export default combineReducers({
    modules: modulesReducer,
    color: colorReducer
})