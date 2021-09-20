import { useState } from "react";
import { HiPlusSm } from "react-icons/hi";
import IconGroup from "./IconGroup/IconGroup";
import { makeStyles, TextField, Theme, Box, Button } from "@material-ui/core";

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
  buttonContainer: {
    margin: theme.spacing(3, 0),
  },
  addButton: {
    fontWeight: 900,
    marginRight: theme.spacing(1.5),
    color: theme.palette.common.white,
    backgroundColor: theme.palette.info.main,
    "&:hover": {
      cursor: "pointer",
      backgroundColor: theme.palette.info.light,
    },
    "&:active": {
      backgroundColor: theme.palette.info.dark,
    },
  },
  cancelButton: {
    color: "grey",
    fontWeight: 900,
    "&:hover": {
      cursor: "pointer",
      backgroundColor: "inherit",
    },
    "&:active": {
      transform: " translateY(2px)",
    },
  },
}));

interface Props {
  projects: string[];
  day: string;
  project: string;
  setTasks: React.Dispatch<
    React.SetStateAction<
      {
        toDo: string;
        project: string;
        dueDay: string;
      }[]
    >
  >;
}

const AddTask: React.FC<Props> = ({ day, project, projects, setTasks }) => {
  const [input, setInput] = useState("");
  const [hidden, setHidden] = useState(true);
  const classes = useStyles();
  const [dropDownDay, setDropDownDay] = useState("");
  const [dropDownProject, setDropDownProject] = useState("");

  const toggle = () => {
    setHidden((prevState) => !prevState);
  };

  const onCancelHandler = () => {
    setHidden(true);
    setInput("");
  };

  const addTaskSubmitHandler = (e: any) => {
    e.preventDefault();
    const newEntry = {
      toDo: input,
      project: dropDownProject ? dropDownProject : project,
      dueDay: dropDownDay ? dropDownDay : day,
    };
    setTasks((prevState: any[]) => [...prevState, newEntry]);
    setInput("");
  };

  return (
    <>
      <Box className={classes.formHeader} onClick={toggle}>
        <HiPlusSm color="red" size={20} />
        <p> &nbsp; Add Task </p>
      </Box>

      <Box hidden={hidden}>
        <form onSubmit={addTaskSubmitHandler}>
          <TextField
            fullWidth
            value={input}
            variant="outlined"
            className={classes.form}
            onChange={(e) => setInput(e.target.value)}
          />
          <Box className={classes.buttonsBar}>
            <Box className={classes.buttonContainer}>
              <Button
                type="submit"
                color="primary"
                variant="contained"
                className={classes.addButton}
              >
                Add Task
              </Button>
              <Button
                className={classes.cancelButton}
                onClick={onCancelHandler}
              >
                Cancel
              </Button>
            </Box>
            <IconGroup
              projects={projects}
              setDay={(day) => setDropDownDay(day)}
              setProject={(project) => setDropDownProject(project)}
            />
          </Box>
        </form>
      </Box>
    </>
  );
};

export default AddTask;
