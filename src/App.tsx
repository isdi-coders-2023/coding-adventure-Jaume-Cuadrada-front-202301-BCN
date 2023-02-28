import React from "react";
import Form from "./components/Form/Form";
import Button from "./components/Button/Button";

const App = (): JSX.Element => {
  return (
    <>
      <p>Hello Developers!</p>
      <Form />
      <Button text="Sign up" />
    </>
  );
};

export default App;
