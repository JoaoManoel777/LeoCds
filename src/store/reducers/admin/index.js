const initialState = {
    admin: null
}

const reducer = ( state = initialState, action ) => {
    switch (action.type) {
        case "LOGIN":
            const newState = { ...state, data: action.payload }

            return newState
        default:
            return state
    }
}

export default reducer
