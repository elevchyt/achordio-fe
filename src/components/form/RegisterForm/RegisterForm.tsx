import { useTranslation } from "react-i18next";
import FormInput from "../FormInput/FormInput";
import "./styles.scss";
import { Formik, Form, Field, FieldProps, ErrorMessage } from "formik";
import * as Yup from "yup";
import { motion } from "framer-motion";
import { forwardRef, useContext, useImperativeHandle, useRef } from "react";
import RegisterFormVM from "./RegisterFormVM";
import { ModalContext } from "context/ModalContext";
import FormErrorMessage from "../FormErrorMessage/FormErrorMessage";

const RegisterForm = forwardRef((props, ref) => {
  const { t } = useTranslation();
  const { onSubmitForm } = RegisterFormVM();
  const { modalType, setModalType } = useContext(ModalContext);
  const formRef = useRef<any>(null);
  useImperativeHandle(ref, () => ({
    submit: () => {
      if (formRef.current) {
        formRef.current.submitForm();
      }
    },
  }));

  const goToLoginForm = () => {
    setModalType("login");
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.75 }}
      className="RegisterForm"
    >
      <motion.svg
        onClick={goToLoginForm}
        initial={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.2, opacity: 0.5 }}
        whileTap={{ scale: 0.95, opacity: 0.8 }}
        className="RegisterForm__backButton"
        width="26"
        height="26"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M10.295 19.716a1 1 0 0 0 1.404-1.425l-5.37-5.29h13.67a1 1 0 1 0 0-2H6.336L11.7 5.714a1 1 0 0 0-1.404-1.424l-6.924 6.822a1.25 1.25 0 0 0 0 1.78l6.924 6.823Z" />
      </motion.svg>
      <Formik
        innerRef={formRef}
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => {
          onSubmitForm(values);
        }}
        validateOnChange={false}
        validateOnBlur={false}
        validationSchema={Yup.object({
          email: Yup.string()
            .email(t("AUTH_FORMS.INVALID_EMAIL_ERROR")!)
            .required(t("AUTH_FORMS.EMAIL_REQUIRED_ERROR")!),
          password: Yup.string()
            .min(8, t("AUTH_FORMS.PASSWORD_MIN_CHARACTERS")!)
            .matches(
              /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]+$/,
              t("AUTH_FORMS.PASSWORD_FORMAT_ERROR")!
            )
            .required(t("AUTH_FORMS.PASSWORD_REQUIRED_ERROR")!),
        })}
      >
        <Form className="RegisterForm__form">
          {/* E-Mail */}
          <div className="RegisterForm__rowField">
            <label className="RegisterForm__label" htmlFor="email">
              {t("AUTH_FORMS.EMAIL")}
            </label>
            <div className="LoginForm__errorMessage">
              <ErrorMessage name="email" component={FormErrorMessage} />
            </div>
            <div className="RegisterForm__inputFieldContainer">
              <Field
                component={FormInput}
                type="email"
                name="email"
                placeholder={t("AUTH_FORMS.ENTER_EMAIL")}
              />
            </div>
          </div>
          {/* Password */}
          <div className="RegisterForm__rowField">
            <label className="RegisterForm__label" htmlFor="password">
              {t("AUTH_FORMS.PASSWORD")}
            </label>
            <div className="LoginForm__errorMessage">
              <ErrorMessage name="password" component={FormErrorMessage} />
            </div>
            <div className="RegisterForm__inputFieldContainer">
              <Field
                component={FormInput}
                type="password"
                name="password"
                placeholder={t("AUTH_FORMS.ENTER_PASSWORD")}
              />
            </div>
          </div>

          {/* Submit Button (always hidden - exists only to handle 'Enter' keypresses for form submission) */}
          <button type="submit" className="hidden">
            Submit
          </button>
        </Form>
      </Formik>
    </motion.div>
  );
});

export default RegisterForm;
