import { useCallback } from "react";
import axios from "api";

type LoginFormValues = {
  email: string;
  password: string;
};

const LoginFormVM = () => {
  const onSubmitForm = useCallback((formValues: LoginFormValues) => {
    console.log("submitted form!!!");
    console.log(formValues);
    axios.get('test-endpoint')
  }, []);

  return {
    onSubmitForm,
  };
};

export default LoginFormVM;
