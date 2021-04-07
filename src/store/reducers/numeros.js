import {ALTER_MIN, ALTER_MAX} from '../actions/actionsTypes'

const initial = {
    min: 1,
    max: 10
}

export default function(state = initial, action){
    switch (action.type) {
        case ALTER_MIN:
            return{ ...state, min: action.payload }
        case ALTER_MAX:
            return{ ...state, max: action.payload }
        default:
            return state
    }
}