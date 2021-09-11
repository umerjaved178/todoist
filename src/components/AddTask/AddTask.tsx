import { HiPlusSm } from "react-icons/hi";
import { useState } from "react";
import IconGroup from "./IconGroup/IconGroup";
import { Buttons } from "./Buttons/Buttons";
import { makeStyles, TextField, Theme, Box } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) => ({
  formHeader: {
    color: "grey",
    display: "flex",
    alignItems: "center",
    padding: ".5rem",
    cursor: "pointer",
    "&:active": {
      transform: "translateY(2px)",
    },
  },
  form: {
    "&:focus ": {
      border: "1px solid #db4c3f",
    },
  },
  buttonsBar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
}));

interface Props {
  projects: string[];
  day: string;
}

const AddTask: React.FC<Props> = ({ projects, day }) => {
  const [input, setInput] = useState("");
  const [hidden, setHidden] = useState(true);
  const classes = useStyles();

  const toggle = () => {
    setHidden((prevState) => !prevState);
  };

  const onCancelHandler = () => {
    setHidden(true);
    setInput("");
  };

  console.log(day);

  return (
    <>
      <Box className={classes.formHeader} onClick={toggle}>
        <HiPlusSm color="red" size={20} />
        <p> &nbsp; Add Task </p>
      </Box>

      <Box hidden={hidden}>
        <TextField
          variant="outlined"
          onChange={(e) => setInput(e.target.value)}
          value={input}
          fullWidth
          className={classes.form}
        />
        <Box className={classes.buttonsBar}>
          <Buttons cancel={onCancelHandler} />
          <IconGroup projects={projects} />
        </Box>
      </Box>
    </>
  );
};

export default AddTask;
