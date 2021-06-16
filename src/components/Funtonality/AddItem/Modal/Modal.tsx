import React from "react";
import { Paper, Divider } from "@material-ui/core";

interface Props {
  items: string[];
}

function Modal(props: Props) {
  return (
    <div
      style={{
        maxWidth: "20rem",
        marginLeft: "auto",
      }}
    >
      <Paper elevation={2}>
        {props.items.map((x) => (
          <>
            <div
              style={{
                padding: ".70rem",
              }}
            >
              {x}
            </div>
            <Divider />
          </>
        ))}
      </Paper>
    </div>
  );
}

export default Modal;
