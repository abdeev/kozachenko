import React from "react";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";

const ButtonPhoneto = ({ tel, label }) => {
  return (
    <Link
      to="/"
      onClick={(e) => {
        window.location.href = tel;
        e.preventDefault();
      }}
    >
      {label}
    </Link>
  );
};

export default ButtonPhoneto;
