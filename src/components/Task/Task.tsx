import React from "react";
import Checkbox from "@material-ui/core/Checkbox";
import CircleCheckedFilled from "@material-ui/icons/CheckCircle";
import CircleUnchecked from "@material-ui/icons/RadioButtonUnchecked";
import { makeStyles, Theme, Box } from "@material-ui/core";

const useStyles = makeStyles({
  divider: {
    borderTop: "1px solid rgb(236, 236, 236)",
  },
});

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
    <Box>
      <Checkbox
        icon={<CircleUnchecked />}
        checked={checked}
        onChange={handleChange}
        checkedIcon={<CircleCheckedFilled style={{ color: "#DB4C3F" }} />}
      />
      <span>{toDo}</span>
      <hr className={classes.divider} />
    </Box>
  );
};

export default Task;
