import ToDo from "components/Task/Task";
import React, { useState } from "react";
import AddItem from "components/AddTask/AddTask";
import { useAppSelector, useAppDispatch } from "redux/hooks";
import { SideDrawer } from "components/UI/Navigation/SideDrawer/SideDrawer";

import { makeStyles, Theme, Hidden } from "@material-ui/core";
import { toDosArray, daysArray, projectsArray } from "../data";
import { toggleMobileDrawer } from "redux/slices/slice";
import { Box } from "@material-ui/core";
import { Action } from "container/ActionArea/Action";

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
  const [toDos, setToDos] = useState(toDosArray);
  const [days, setDays] = useState(daysArray);
  const [projects, setProjects] = useState(projectsArray);
  const [filterDay, setFilterDay] = useState("Inbox");
  const classes = useStyles();

  const dispatch = useAppDispatch();

  const showMobileDrawer = useAppSelector(
    (state) => state.toggleDrawerReducer.show
  );

  const filterClickHandler = (current: string, mobileScreen?: boolean) => {
    setFilterDay(current);
    mobileScreen && dispatch(toggleMobileDrawer());
  };

  let customisedResult = toDos.filter((x) =>
    filterDay === "Inbox" ||
    filterDay === "Today" ||
    filterDay === "Next 7 days"
      ? x.dueDay === filterDay
      : x.project === filterDay
  );

  return (
    <Box className={classes.HomePageLayout}>
      <Hidden xsDown>
        <Action
          projects={projects}
          clickHandler={filterClickHandler}
          days={days}
        />
      </Hidden>

      <Hidden smUp>
        <SideDrawer show={showMobileDrawer}>
          <Action
            projects={projects}
            clickHandler={filterClickHandler}
            days={days}
            mobileScreen
          />
        </SideDrawer>
      </Hidden>

      <Box className={classes.LayoutToDos}>
        <p className={classes.ToDosHeading}> {filterDay} </p>
        {React.Children.toArray(
          customisedResult.map((x) => <ToDo toDo={x.toDo} />)
        )}
        <AddItem projects={projects} />
      </Box>
    </Box>
  );
};

export default HomePage;
