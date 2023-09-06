import React, { useReducer } from "react";
import { DECREMENT, INCREMENT, initialState } from "../Constants/Actions";
import { reducerRoot } from "./ReducerRoot";

const Reducer = () => {
    const [todos, dispatch] = useReducer(reducerRoot, initialState);

    return (
        <div>
            <h1>Reducer</h1>
            <div className="reducer_div">
                <button onClick={() => dispatch({type: INCREMENT})}>Increment</button>
                <h4>{`${todos?.count}`}</h4>
                <button onClick={() => dispatch({type: DECREMENT})}>Decrement</button>
            </div>
        </div>
    );
}
export default Reducer;