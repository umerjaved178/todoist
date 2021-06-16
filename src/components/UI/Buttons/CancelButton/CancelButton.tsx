import React from "react";
import classes from "./CancelButton.module.scss";

interface Props {
  text: string;
  onClick: () => void;
}

function CancelButton(props: Props) {
  const { text, onClick } = props;

  return (
    <div>
      <div className={classes.CancelButton} onClick={onClick}>
        <p>{text}</p>
      </div>
    </div>
  );
}

export default CancelButton;
