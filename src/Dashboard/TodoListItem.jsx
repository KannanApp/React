const TodoListItem = (props) => {
    const {
        completed, 
        title, 
        id, 
        markTodoCompleted
    } = props;
    return (
        <div>
            <input
            type="checkbox"
            checked={completed}
            onChange={(e) => markTodoCompleted(id, e.target.checked)}
            >
            </input>
            <label>{title}</label>
        </div>
    );
}
 
export default TodoListItem ;