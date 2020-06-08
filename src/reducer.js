const initialState = [];

function pizzListReducer(state = initialState, action = {}) {

    switch (action.type) {
        case 'ADD_PIZZA':
            return [...state, { ...action.payload }]

        default:
            return state


    }

}

export default pizzListReducer