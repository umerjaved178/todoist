import React from "react";
import { makeStyles, Theme, Box, Button } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) => ({
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
  cancel: () => void;
}

export const Buttons: React.FC<Props> = ({ cancel }) => {
  const classes = useStyles();

  return (
    <Box className={classes.buttonContainer}>
      <Button
        type="submit"
        color="primary"
        variant="contained"
        className={classes.addButton}
      >
        Add Task
      </Button>
      <Button className={classes.cancelButton} onClick={cancel}>
        Cancel
      </Button>
    </Box>
  );
};
