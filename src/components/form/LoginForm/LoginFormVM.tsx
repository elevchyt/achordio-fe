import { useCallback } from "react";

type LoginFormValues = {
  email: string;
  password: string;
};

const LoginFormVM = () => {
  const onSubmitForm = useCallback((formValues: LoginFormValues) => {
    console.log("submitted form!!!");
    console.log(formValues);
  }, []);

  return {
    onSubmitForm,
  };
};

export default LoginFormVM;
