import { ADD_LINE, ADD_MODULE, DEL_LINE, DEL_MODULE, UPDATE_ALL_MODULES, UPDATE_COLOR, UPDATE_LINE_INDEX, UPDATE_MODULE_INDEX, UPDATE_TITLE_BAR } from "./action-types";

// 添加模块
export const addModuleAction = (module, index) => ({ type: ADD_MODULE, data: { index, module } })
// 删除模块
export const delModuleAction = (index) => ({ type: DEL_MODULE, data: { index } })
// 更新所有模块
export const updateAllModulesAction = (modules)=>({type: UPDATE_ALL_MODULES, data: modules})

// 添加一行
export const addLineAction = (line, moduleIndex, lineIndex) => ({ type: ADD_LINE, data: { moduleIndex, lineIndex, line } })
// 删除一行
export const delLineAction = (moduleIndex, lineIndex) => ({ type: DEL_LINE, data: { moduleIndex, lineIndex } })

// 在哪一个module插入新行
export const updateModuleIndexAction = (moduleIndex)=>({type: UPDATE_MODULE_INDEX, data: moduleIndex})
// 在哪一行的后面插入新行
export const updateLineIndexAction = (lineIndex)=>({type: UPDATE_LINE_INDEX, data:lineIndex})

// 更新主题颜色
export const updateColorAction = (color) => ({ type: UPDATE_COLOR, data: color })

// 更新titleBar
export const updateTitleBarAction = (titleBar)=>({type: UPDATE_TITLE_BAR, data: titleBar})