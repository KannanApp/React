import { 
    DECREMENT, 
    INCREMENT 
} from "../Constants/Actions";

export const Increment = (payload) => ({
    type: INCREMENT,
    payload,
});

export const Decrement = (payload) => ({
    type: DECREMENT,
    payload
});