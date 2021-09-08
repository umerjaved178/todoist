import React from "react";
import classes from "./ToDo.module.scss";
import Checkbox from "@material-ui/core/Checkbox";
import CircleCheckedFilled from "@material-ui/icons/CheckCircle";
import CircleUnchecked from "@material-ui/icons/RadioButtonUnchecked";
import { makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => ({
  divider: {
    borderTop: "1px solid rgb(236, 236, 236)",
  },
}));

interface Props {
  toDo: string;
}

const Task: React.FC<Props> = ({ toDo }) => {
  const [checked, setChecked] = React.useState(false);
  const classes = useStyles();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  return (
    <div>
      <Checkbox
        icon={<CircleUnchecked />}
        checked={checked}
        onChange={handleChange}
        checkedIcon={<CircleCheckedFilled style={{ color: "#DB4C3F" }} />}
      />
      <span>{toDo}</span>
      <hr className={classes.divider} />
    </div>
  );
};

export default Task;
