import { HiPlusSm } from "react-icons/hi";
import { FaPizzaSlice } from "react-icons/fa";
import { makeStyles, Theme, Box } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) => ({
  ToolbarButtons: {
    display: "flex",
    alignItems: "center",
  },
  Margin: {
    marginLeft: theme.spacing(2),
  },
}));

const ToolbarButtons: React.FC = () => {
  const classes = useStyles();

  return (
    <Box className={classes.ToolbarButtons}>
      <HiPlusSm size={35} />
      <Box className={classes.Margin}>
        <FaPizzaSlice size={22} />
      </Box>
    </Box>
  );
};

export default ToolbarButtons;
