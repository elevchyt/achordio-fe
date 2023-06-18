import { useCallback, useContext } from "react";
import axios from "api";
import { useSignIn } from "react-auth-kit";
import { ModalContext } from "context/ModalContext";

type LoginFormValues = {
  email: string;
  password: string;
};

const LoginFormVM = () => {
  const { setIsButtonDisabled } = useContext(ModalContext);
  const signIn = useSignIn();

  // Submit Login Form logic
  const onSubmitForm = useCallback((formValues: LoginFormValues) => {
    setIsButtonDisabled(true);

    axios
      .post("v1/api/user-login", formValues)
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
      })
      .finally(() => {
        setIsButtonDisabled(false);
      });
  }, []);

  return {
    onSubmitForm,
  };
};

export default LoginFormVM;
