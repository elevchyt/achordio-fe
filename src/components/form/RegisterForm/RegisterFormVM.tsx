import { useCallback } from "react";
import axios from "api";
import { useSignIn } from "react-auth-kit";

type RegisterFormValues = {
  email: string;
  password: string;
};

const RegisterFormVM = () => {
  const signIn = useSignIn();

  // Submit Register Form logic
  const onSubmitForm = useCallback((formValues: RegisterFormValues) => {
    axios
      .post("v1/api/user-register", formValues)
      .then((res) => {
        // Store authentication cookie
        const dayInSeconds = 86400;
        signIn({
          token: res.data.token,
          expiresIn: dayInSeconds * 60, // cookie expires in two months (60 days)
          tokenType: "Bearer",
          authState: { email: formValues.email },
        });

        // Refresh page after successful registration & authentication
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

export default RegisterFormVM;
