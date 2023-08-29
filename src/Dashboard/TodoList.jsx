import { useEffect, useMemo, useState } from "react";
import TodoListItem from "./TodoListItem";

export const TodoList = (props) => {
    const {todos, markTodoCompleted} = props;
    const [search, setSearch] = useState("");
    const [sortDirection, setSortDirection] = useState("0");

    
    const filteredTodos = useMemo(
        ()=> todos.filter((todo) => todo.title.includes(search)),
        [todos, search]
    )

    const sortedTodos = useMemo(()=>
        filteredTodos.sort((a, b) => 
        sortDirection === "0" ? (a.title > b.title ? 1 : -1) :
        a.title > b.title ? -1 : 1),
        [filteredTodos, sortDirection]
    );

    return(
        <div>
            <h1>Todo List</h1>
            <input 
            type="text" 
            value={search}
            onChange={e=> setSearch(e.target.value)}  
            />
            <label>Sort</label>
            <select onChange={(e) => setSortDirection(e.target.value)}>
                <option value={0}>A-Z</option>
                <option value={1}>A-Z</option>
            </select>
            <ul>
                {sortedTodos?.map((todo) => (
                    <TodoListItem 
                        key={todo?.id}
                        id={todo?.id}
                        completed={todo?.completed}
                        title={todo?.title}
                        markTodoCompleted={markTodoCompleted}
                    />
                ))}
            </ul>
        </div>
    );
}