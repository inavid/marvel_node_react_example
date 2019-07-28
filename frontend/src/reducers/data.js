function data(state, action) {
    switch (action.type) {
        case 'character_list': {
            return { ...state, ...action.payload }
        }
        case 'modal_is_open': {
            return { ...state, ...action.payload }
        }
        case 'filter_list': {
            return { ...state, ...action.payload }
        }
        case 'is_loading': {
            return { ...state, ...action.payload }
        }
        default:
            return state
    }
}

export default data