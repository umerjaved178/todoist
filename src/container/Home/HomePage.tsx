import React, { useState } from "react";
import ToDo from "components/Task/Task";
import AddTask from "components/AddTask/AddTask";
import { allTasks, projectsArray } from "../data";
import { Action } from "container/ActionArea/Action";
import { toggleMobileDrawer } from "redux/slices/slice";
import { useAppSelector, useAppDispatch } from "redux/hooks";
import { makeStyles, Theme, Hidden, Box } from "@material-ui/core";
import { SideDrawer } from "components/UI/Navigation/SideDrawer/SideDrawer";

const useStyles = makeStyles((theme: Theme) => ({
  HomePageLayout: {
    display: "grid",
    gridTemplateColumns: "100%",
    gridTemplateAreas: '"ListArea"',
    [theme.breakpoints.up("sm")]: {
      gridTemplateColumns: "1fr 7fr",
      gridTemplateAreas: ' "ActionArea ListArea"  ',
    },
  },
  LayoutToDos: {
    height: "94.6vh",
    padding: "0 3rem",
    gridArea: "ListArea",
    border: "1px #e3e3e3 solid",
    backgroundColor: theme.palette.common.white,
  },
  ToDosHeading: {
    fontSize: "1.5rem",
  },
  ActionArea: {
    gridArea: "ActionArea",
    marginTop: theme.spacing(3),
  },
}));

const HomePage: React.FC = () => {
  const [tasks, setTasks] = useState(allTasks);
  const [projects, setProjects] = useState(projectsArray);
  const [filterDay, setFilterDay] = useState("Inbox");
  const dispatch = useAppDispatch();
  const classes = useStyles();

  const showMobileDrawer = useAppSelector(
    (state) => state.toggleDrawerReducer.show
  );

  const filterClickHandler = (current: string, mobileScreen?: boolean) => {
    setFilterDay(current);
    mobileScreen && dispatch(toggleMobileDrawer());
  };

  let customisedResult = tasks.filter((x) =>
    filterDay === "Inbox" ||
    filterDay === "Today" ||
    filterDay === "Next 7 days"
      ? x.dueDay === filterDay
      : x.project === filterDay
  );

  return (
    <Box className={classes.HomePageLayout}>
      <Hidden xsDown>
        <Action projects={projects} clickHandler={filterClickHandler} />
      </Hidden>

      <Hidden smUp>
        <SideDrawer show={showMobileDrawer}>
          <Action
            mobileScreen
            projects={projects}
            clickHandler={filterClickHandler}
          />
        </SideDrawer>
      </Hidden>

      <Box className={classes.LayoutToDos}>
        <p className={classes.ToDosHeading}>{filterDay}</p>
        {React.Children.toArray(
          customisedResult.map((x) => <ToDo toDo={x.toDo} />)
        )}
        <AddTask projects={projects} day={filterDay} />
      </Box>
    </Box>
  );
};

export default HomePage;
