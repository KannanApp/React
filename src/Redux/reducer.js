import { DECREMENT, INCREMENT, initialState } from "../Constants/Actions";

export const counterReducer = (state = initialState, action) => {
    const {type, payload} = action;
    switch(type){
        case INCREMENT:
            return {...state, count: state.count + payload};
            case DECREMENT:
                return {...state, count: state.count - payload};
                default:
                    return state;
    }
}