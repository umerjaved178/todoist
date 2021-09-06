import { makeStyles, Theme } from "@material-ui/core";
import { toggleMobileDrawer } from "redux/slices/slice";
import { useAppDispatch } from "redux/hooks";

const useStyles = makeStyles((theme: Theme) => ({
  backDrop: {
    backgroundColor: "#00000081",
    height: "100%",
    zIndex: 100,
    width: "100%",
    position: "fixed",
  },
}));

interface Props {
  show: boolean;
}

export const BackDrop: React.FC<Props> = ({ show }) => {
  const dispatch = useAppDispatch();
  const classes = useStyles();

  return show ? (
    <div
      className={classes.backDrop}
      onClick={() => dispatch(toggleMobileDrawer())}
    ></div>
  ) : null;
};
