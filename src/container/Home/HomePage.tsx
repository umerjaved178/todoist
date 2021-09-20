import React, { useState } from "react";
import ToDo from "components/Task/Task";
import AddTask from "components/AddTask/AddTask";
import { allTasks, projectsArray } from "../data";
import { ActionArea } from "container/ActionArea/ActionArea";
import { toggleMobileDrawer } from "redux/slices/toggleDrawer.slice";
import { setDayFilter, setProjectFilter } from "redux/slices/actionArea.slice";
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
  const dispatch = useAppDispatch();
  const classes = useStyles();

  const dayFilter = useAppSelector(
    (state) => state.actionAreaReducer.dayFilter
  );
  const projectFilter = useAppSelector(
    (state) => state.actionAreaReducer.projectFilter
  );
  const showMobileDrawer = useAppSelector((state) => state.toggleReducer.show);

  const dayFilterHandler = (current: string, mobileScreen?: boolean) => {
    dispatch(setDayFilter(current));
    dispatch(setProjectFilter(""));
    mobileScreen && dispatch(toggleMobileDrawer());
  };

  const projectFilterHandler = (current: string, mobileScreen?: boolean) => {
    dispatch(setDayFilter(""));
    dispatch(setProjectFilter(current));
    mobileScreen && dispatch(toggleMobileDrawer());
  };

  let customisedResult = tasks.filter((x) => {
    return dayFilter === "Inbox" ||
      dayFilter === "Today" ||
      dayFilter === "Next 7 days"
      ? x.dueDay === dayFilter
      : x.project === projectFilter;
  });

  return (
    <Box className={classes.HomePageLayout}>
      <Hidden xsDown>
        <ActionArea
          projects={projects}
          setTasks={setTasks}
          filterDays={dayFilterHandler}
          filterProjects={projectFilterHandler}
        />
      </Hidden>

      <Hidden smUp>
        <SideDrawer show={showMobileDrawer}>
          <ActionArea
            mobileScreen
            projects={projects}
            setTasks={setTasks}
            filterDays={dayFilterHandler}
            filterProjects={projectFilterHandler}
          />
        </SideDrawer>
      </Hidden>

      <Box className={classes.LayoutToDos}>
        <p className={classes.ToDosHeading}>
          {dayFilter ? dayFilter : projectFilter}
        </p>
        {React.Children.toArray(
          customisedResult.map((x) => <ToDo toDo={x.toDo} />)
        )}
        <AddTask
          day={dayFilter}
          project={projectFilter}
          projects={projects}
          setTasks={setTasks}
        />
      </Box>
    </Box>
  );
};

export default HomePage;
