import React from "react";
import {useSelector, useDispatch} from "react-redux";
import { Decrement, Increment } from "../Redux/action";

const Counter = () => {
    const {count} = useSelector((state) => state);
    const dispatch = useDispatch();

    return(
        <div>
            <div>Count: {`${count}`}</div>
            <div>
                <button
                onClick={()=> {
                    dispatch(Increment(1));
                }}
                >+</button>
                <button
                onClick={()=>{
                    dispatch(Decrement(1))
                }}
                >-</button>
            </div>
        </div>
    );
};
export default Counter;