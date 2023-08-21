import { memo, useState } from "react";

const AddTodoFormComponent = ({addTodo}) => {
    const [addTodoInput, setAddTodoInput] = useState("");
    return ( 
        <div>
            <input 
            type="text" 
            value={addTodoInput} 
            onChange={(e)=> setAddTodoInput(e.target.value)}
            />
            <button onClick={()=> addTodo(addTodoInput)}>Add Todo</button>
        </div>
     );
}
 
export const AddTodoForm = memo(AddTodoFormComponent);;