import { RadioButton } from "./RadioButton";

export const RadioButtonGroup = ({name, options, onChange}) => {
    return(
        <div>
            {options && options?.map((data) => (
                <div onClick={()=>onChange('Kannnnnn')}>
                    <RadioButton name={name} value={data.value} label={data.label} />
                </div>
            ))}
        </div>
    );
}