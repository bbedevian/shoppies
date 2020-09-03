const INITIAL_STATE = {
    nominated: []
}

const nominatedReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'NOMINATE_MOVIE': 
            return {...state, nominated: [...state.nominated, action.payload]}
        default: 
        return state;
    }
}

export default nominatedReducer;