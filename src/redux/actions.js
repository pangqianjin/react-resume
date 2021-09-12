import { ADD_LINE, ADD_MODULE, DEL_LINE, DEL_MODULE, UPDATE_COLOR, UPDATE_LINE_INDEX, UPDATE_MODULE_INDEX } from "./action-types";

// 添加模块
export const addModuleAction = (module, index) => ({ type: ADD_MODULE, data: { index, module } })
// 删除模块
export const delModuleAction = (index) => ({ type: DEL_MODULE, data: { index } })

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