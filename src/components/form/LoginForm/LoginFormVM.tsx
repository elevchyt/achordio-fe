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
    axios
      .post("v1/api/login", formValues)
      .then((res) => {
        // Store authentication cookie
        const dayInSeconds = 86400;
        signIn({
          token: res.data.token,
          expiresIn: dayInSeconds * 60, // cookie expires in two months (60 days)
          tokenType: "Bearer",
          authState: { email: formValues.email },
        });

        // Refresh page after successful authentication
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return {
    onSubmitForm,
  };
};

export default LoginFormVM;
