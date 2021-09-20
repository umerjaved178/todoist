import Navbar from "components/UI/Navigation/NavBar/Navbar";
import { makeStyles, Theme } from "@material-ui/core/styles";
import { useAppSelector } from "redux/hooks";

const useStyles = makeStyles((theme: Theme) => ({
  layout: {
    height: "100vh",
    margin: "auto",
    maxWidth: "1100px",
    backgroundColor: theme.palette.primary.light,
  },
}));

interface Props {
  children: React.ReactNode;
}

function Layout(props: Props) {
  const classes = useStyles();
  const showMobileDrawer = useAppSelector((state) => state.toggleReducer.show);

  return (
    <div className={classes.layout}>
      {!showMobileDrawer && <Navbar />}
      <main>{props.children}</main>
    </div>
  );
}

export default Layout;
