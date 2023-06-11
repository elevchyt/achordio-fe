import { useTranslation } from "react-i18next";
import FormInput from "../FormInput/FormInput";
import "./styles.scss";
import { Formik, Form, Field, FieldProps, ErrorMessage } from "formik";
import { motion } from "framer-motion";
import googleLogoUrl from "assets/imgs/google-logo.png";
import { forwardRef, useImperativeHandle, useRef } from "react";

const LoginForm = forwardRef((props, ref) => {
  const { t } = useTranslation();
  const formRef = useRef<any>(null);
  useImperativeHandle(ref, () => ({
    submit: () => {
      if (formRef.current) {
        formRef.current.submitForm();
      }
    },
  }));

  const onSubmitForm = (formValues: Object) => {
    console.log("submitted form!!!");
    console.log(formValues);
  };

  return (
    <div className="LoginForm">
      <Formik
        innerRef={formRef}
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => {
          onSubmitForm(values);
        }}
      >
        <Form className="LoginForm__form">
          {/* E-Mail */}
          <div className="LoginForm__rowField">
            <label className="LoginForm__label" htmlFor="email">
              {t("LOGIN_FORM.EMAIL")}
            </label>
            <div className="LoginForm__inputFieldContainer">
              <Field
                component={FormInput}
                type="email"
                name="email"
                placeholder={t("LOGIN_FORM.ENTER_EMAIL")}
              />
            </div>
          </div>
          {/* Password */}
          <div className="LoginForm__rowField">
            <label className="LoginForm__label" htmlFor="password">
              {t("LOGIN_FORM.PASSWORD")}
            </label>
            <div className="LoginForm__inputFieldContainer">
              <Field
                component={FormInput}
                type="password"
                name="password"
                placeholder={t("LOGIN_FORM.ENTER_PASSWORD")}
              />
            </div>
          </div>
          {/* Extras row */}
          <div className="LoginForm__extrasRow">
            {/* Forgot Password */}
            <motion.div
              className="LoginForm__forgotPassword"
              whileHover={{ color: "#fe8a8a" }}
              whileTap={{ scale: 0.95 }}
            >
              {t("LOGIN_FORM.FORGOT_PASSWORD")}
            </motion.div>
            <div className="LoginForm__authMethods">
              <motion.div
                className="LoginForm__googleLogo"
                style={{ backgroundImage: `url(${googleLogoUrl})` }}
                whileTap={{ opacity: 0.5 }}
              ></motion.div>
            </div>
          </div>
          {/* Create Account */}
          <motion.div
            className="LoginForm__createAccount"
            whileHover={{ color: "#fe3c3c" }}
            whileTap={{ scale: 0.95 }}
          >
            {t("LOGIN_FORM.CREATE_ACCOUNT")}
          </motion.div>

          {/* Submit Button (always hidden - exists only to handle 'Enter' keypresses for form submission) */}
          <button type="submit" className="hidden">Submit</button>
        </Form>
      </Formik>
    </div>
  );
});

export default LoginForm;
