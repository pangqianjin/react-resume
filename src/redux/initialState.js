import defaultModules from '../templates/default.json'

const color = defaultModules.modules[0].color

const initialState = {
    modules: defaultModules.modules,
    color
}

export default initialState