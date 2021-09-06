import Logo from "./Logo/Logo";
import { IconContext } from "react-icons";
import { GiHamburgerMenu } from "react-icons/gi";
import ToolbarButtons from "./NavbarButtons/NavbarButtons";
import { makeStyles, Theme, Hidden } from "@material-ui/core";
import { toggleMobileDrawer } from "redux/slices/slice";
import { useAppDispatch } from "redux/hooks";

const useStyles = makeStyles((theme: Theme) => ({
  navbar: {
    padding: theme.spacing(0, 3),
    backgroundColor: theme.palette.primary.main,
  },
  navbarContent: {
    height: "5vh",
    margin: "auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
}));

const Navbar = () => {
  const classes = useStyles();
  const dispatch = useAppDispatch();

  return (
    <div className={classes.navbar}>
      <IconContext.Provider value={{ color: "white" }}>
        <div className={classes.navbarContent}>
          <Hidden smUp>
            <GiHamburgerMenu
              onClick={() => dispatch(toggleMobileDrawer())}
              size={22}
            />
          </Hidden>
          <Hidden xsDown>
            <Logo size="25" />
          </Hidden>
          <ToolbarButtons />
        </div>
      </IconContext.Provider>
    </div>
  );
};

export default Navbar;
