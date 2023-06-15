import "./styles.scss";

const FormErrorMessage = (props: any) => {
  console.log(props);
  return (
    <div className="FormErrorMessage">
      <div className="FormErrorMessage__error">
        <span role="alert">{props.children}</span>
      </div>
    </div>
  );
};

export default FormErrorMessage;
