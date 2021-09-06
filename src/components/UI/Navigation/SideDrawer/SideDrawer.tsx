import { makeStyles, Theme, Typography } from "@material-ui/core";
import cn from "classnames";
import Logo from "../NavBar/Logo/Logo";
import { BackDrop } from "./BackDrop";

const useStyles = makeStyles((theme: Theme) => ({
  sideDrawer: {
    zIndex: 200,
    width: "70%",
    height: "100vh",
    position: "fixed",
    backgroundColor: theme.palette.common.white,
    transition: "transform 0.3s ease-out",
  },
  mobileNavBar: {
    zIndex: 300,
    height: "100px",
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    padding: theme.spacing(0, 3),
    justifyContent: "space-between",
    color: theme.palette.common.white,
    backgroundColor: theme.palette.primary.main,
  },
  Open: {
    transform: "translateX(0)",
  },
  Close: {
    transform: "translateX(-110%)",
  },
  content: {
    padding: theme.spacing(0, 3),
  },
}));

interface Props {
  children?: React.ReactNode;
  show: boolean;
}

export const SideDrawer: React.FC<Props> = ({ children, show }) => {
  const classes = useStyles();

  return (
    <>
      <BackDrop show={show} />
      <div
        className={
          show
            ? cn(classes.sideDrawer, classes.Open)
            : cn(classes.sideDrawer, classes.Close)
        }
      >
        <div className={classes.mobileNavBar}>
          <Logo size="40" />
          <Typography variant="h4">ToDoist</Typography>
        </div>
        <div className={classes.content}>{children}</div>
      </div>
    </>
  );
};
