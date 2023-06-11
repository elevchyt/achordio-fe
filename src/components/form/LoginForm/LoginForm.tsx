import { useTranslation } from "react-i18next";
import FormInput from "../FormInput/FormInput";
import "./styles.scss";
import { Formik, Form, Field, FieldProps, ErrorMessage } from "formik";
import { motion } from "framer-motion";
import googleLogoUrl from "assets/imgs/google-logo.png";

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
              Ξεχάσατε τον κωδικό;
            </motion.div>
            <div className="LoginForm__authMethods">
              <motion.div
                className="LoginForm__googleLogo"
                style={{ backgroundImage: `url(${googleLogoUrl})` }}
                whileHover={{ rotate: "4deg" }}
                whileTap={{ rotate: "-8deg", scale: 0.9 }}
              ></motion.div>
            </div>
          </div>
          {/* Create Account */}
          <div className="LoginForm__createAccount"></div>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm;
