import * as React from "react";

const Button = ({ children, href }) => {
  const redirect = () => {
    window.location.href = href;
  };
  return <button onClick={redirect}>{children} {href}</button>;
};

export default Button;
