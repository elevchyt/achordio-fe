import "./styles.scss";
import { Formik, Form, Field, FieldProps, ErrorMessage } from "formik";

interface FormFieldProps extends FieldProps {
  type: string;
}

const FormInput: React.FC<FormFieldProps> = ({
  field,
  form,
  type,
  ...props
}) => {
  return (
    <div className="FormInput">
      <input
        className="FormInput__input"
        {...field}
        {...props}
        type={type}
        spellCheck="false"
      />
      {/* <ErrorMessage name={field.name} component="div" /> */}
    </div>
  );
};

export default FormInput;
