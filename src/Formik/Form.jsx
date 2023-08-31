import * as Yup from "yup";
import { useFormik } from 'formik';
import '../App.css';

const genderOptions = [
    {label: "Kannan", value: "kannan"},
    {label: "Guru", value: "guru"},
];

export const FormikFile = () =>{

    const formik = useFormik({
        initialValues: {
          title: '',
          description: '',
          assignee: '',
          dueDate: '',
        },
        validationSchema: Yup.object({
          title: Yup.string().required('Title is required'),
          description: Yup.string().required('Description is required'),
          assignee: Yup.string().required('Assignee is required'),
          dueDate: Yup.date().required('Due Date is required'),
        }),
        onSubmit: (values) => {
          console.log(values);
        },
      });

    return(
    <form onSubmit={formik.handleSubmit}>
      <div className="formik_div">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          name="title"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.title}
        />
        {formik.touched.title && formik.errors.title ? (
          <div className="error_field">{formik.errors.title}</div>
        ) : null}
      </div>

      <div className="formik_div">
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.description}
        />
        {formik.touched.description && formik.errors.description ? (
          <div className="error_field">{formik.errors.description}</div>
        ) : null}
      </div>

      <div className="formik_div">
        <label htmlFor="assignee">Assignee</label>
        <RadioButtonGroup name={"gender"} options={genderOptions} 
            onChange={()=>formik.handleChange} />
        {formik.touched.assignee && formik.errors.assignee ? (
          <div className="error_field">{formik.errors.assignee}</div>
        ) : null}
      </div>

     

      <div className="formik_div">
        <label htmlFor="dueDate">Due Date</label>
        <input
          type="date"
          id="dueDate"
          name="dueDate"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.dueDate}
        />
        {formik.touched.dueDate && formik.errors.dueDate ? (
          <div className="error_field">{formik.errors.dueDate}</div>
        ) : null}
      </div>

      <button className="formik_submit" type="submit">Submit</button>
    </form>
    );
}

const RadioButtonGroup = ({name, options, onChange}) => {
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

const RadioButton = ({value, label, name}) => {
    return(
        <div>
            <input id={value} type="radio" value={value} name={name} />
            <label htmlFor={value}>
                {label}
            </label>
        </div>
    );
}