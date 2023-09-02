export const RadioButton = ({value, label, name}) => {
    return(
        <div>
            <input id={value} type="radio" value={value} name={name} />
            <label htmlFor={value}>
                {label}
            </label>
        </div>
    );
}