const TodoFilter = ({
    showCompleted,
    setShowCompleted
}) => {
    return ( 
        <div>
            <input 
            type="checkbox"
            id="filter"
            checked={showCompleted}
            onChange={(e) => setShowCompleted(e.target.checked)}
            />
            <label htmlFor="filter">Show completed</label>
        </div>
     );
}
 
export default TodoFilter;