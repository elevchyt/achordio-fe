import { useCallback } from "react";
import axios from "api";
import { useSignIn } from "react-auth-kit";

type LoginFormValues = {
  email: string;
  password: string;
};

const LoginFormVM = () => {
  const signIn = useSignIn();

  // Submit Login Form logic
  const onSubmitForm = useCallback((formValues: LoginFormValues) => {
    console.log("submitted form!!!");
    console.log(formValues);
    axios.post("v1/api/login", formValues).then((res) => {
      console.log(res);
    });
  }, []);

  return {
    onSubmitForm,
  };
};

export default LoginFormVM;
