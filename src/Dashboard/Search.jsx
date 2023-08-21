import React, { useCallback, useEffect, useMemo, useState } from "react";
import {AddTodoForm} from "./AddTodoForm";
import TodoFilter from "./TodoFilter";
import { TodoList } from "./TodoList";

const Search = () => {
    const [todos, setTodos] = useState([]);
    const [showCompleted, setShowCompleted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [count, setCount] = useState(0);

    const increment = () => setCount(count + 1);

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/todos")
        .then((res) => res.json())
        .then((response) => {
            setTodos(response.slice(0, 10))
            setLoading(false);
        })
    }, []);

    const addTodo = useCallback((title)=> {
        setTodos([...todos, 
            {id: todos.length + 1, title: title, completed: false}
        ]);
    }, [todos]);

    const displayTodos = useMemo(()=> {
        return showCompleted ?
        todos.filter((todo) => {
            return todo.completed === true
        })
        :
        todos
    }, [todos, showCompleted]);

    const markTodoCompleted = useCallback((id, completed) => {
        setTodos(
            todos.map((todo) => {
                if(id === todo.id){
                    return {...todo, completed: completed}
                }else{
                    return todo
                }
            })
        );
    }, [todos])

    const handleSearch = useCallback((search)=> {
        setTodos(todos.filter(todo => todo.title.incldes(search)))
    }, [todos]);

    return(
        <div>
            <button onClick={increment}>{count}</button>
            <AddTodoForm addTodo={addTodo} />
            <TodoFilter 
                showCompleted={showCompleted}
                setShowCompleted={setShowCompleted}
            />
            {loading ? (
                <p>Loading...</p>
            ) : (
                <TodoList 
                    todos={displayTodos} 
                    handleSearch={handleSearch}
                    markTodoCompleted={markTodoCompleted}
                />
            )}
        </div>
    );
}
export default Search;