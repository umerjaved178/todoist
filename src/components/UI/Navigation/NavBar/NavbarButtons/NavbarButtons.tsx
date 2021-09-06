import { HiPlusSm } from "react-icons/hi";
import { FaPizzaSlice } from "react-icons/fa";
import { makeStyles, Theme } from "@material-ui/core/styles";

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
    <div className={classes.ToolbarButtons}>
      <HiPlusSm size={35} />
      <div className={classes.Margin}>
        <FaPizzaSlice size={22} />
      </div>
    </div>
  );
};

export default ToolbarButtons;
