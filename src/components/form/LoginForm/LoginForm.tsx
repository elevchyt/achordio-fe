import { useTranslation } from "react-i18next";
import FormInput from "../FormInput/FormInput";
import "./styles.scss";
import { Formik, Form, Field, FieldProps, ErrorMessage } from "formik";

interface FormFieldProps extends FieldProps {
  type: string;
}

const LoginForm = () => {
  const { t } = useTranslation();
  
  return (
    <div className="LoginForm">
      <Formik
        initialValues={{ email: "" }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        <Form className="LoginForm__form">
          {/* E-Mail */}
          <div className="LoginForm__rowField">
            <label className="LoginForm__label" htmlFor="email">
              {t('LOGIN_FORM.EMAIL')}
            </label>
            <div className="LoginForm__inputFieldContainer">
              <Field
                component={FormInput}
                type="email"
                name="email"
                placeholder={t('LOGIN_FORM.ENTER_EMAIL')}
              />
            </div>
          </div>
          {/* Password */}
          <div className="LoginForm__rowField">
            <label className="LoginForm__label" htmlFor="password">
            {t('LOGIN_FORM.PASSWORD')}
            </label>
            <div className="LoginForm__inputFieldContainer">
              <Field
                component={FormInput}
                type="password"
                name="password"
                placeholder={t('LOGIN_FORM.ENTER_PASSWORD')}
              />
            </div>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm;
