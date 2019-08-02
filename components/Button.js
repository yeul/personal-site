import React from "react";

import "../styles/main.scss";

const Button = props => {
  return (
    <div className='button-container'>
      <div className='button'>{props.button}</div>
    </div>
  );
};

export default Button;
