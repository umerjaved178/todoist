import React from "react";

import AddButton from "components/UI/Buttons/AddButton/AddButton";
import CancelButton from "components/UI/Buttons/CancelButton/CancelButton";

interface Props {
  cancel: () => void;
}

export const Buttons: React.FC<Props> = ({ cancel }) => {
  return (
    <div style={{ display: "inline-flex", marginBottom: "0" }}>
      <AddButton text="Add Task" />
      <CancelButton text="Cancel" onClick={cancel} />{" "}
    </div>
  );
};
