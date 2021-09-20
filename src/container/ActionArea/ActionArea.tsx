import React from "react";
import { dueDays } from "../data";
import { Box } from "@material-ui/core";
import { dayType } from "literals/types";
import Day from "components/Actions/Day/Day";
import { makeStyles, Theme } from "@material-ui/core";
import Project from "components/Actions/Project/Project";

const useStyles = makeStyles((theme: Theme) => ({
  ActionArea: {
    gridArea: "ActionArea",
    marginTop: theme.spacing(3),
  },
}));

interface Props {
  projects: string[];
  filterDays: Function;
  setTasks: Function;
  filterProjects: Function;
  mobileScreen?: boolean;
}

export const ActionArea: React.FC<Props> = ({
  projects,
  setTasks,
  filterDays,
  mobileScreen,
  filterProjects,
}) => {
  const classes = useStyles();
  return (
    <Box className={classes.ActionArea}>
      <Box>
        {React.Children.toArray(
          dueDays.map((x: dayType) => (
            <Day
              day={x.day}
              icon={x.icon}
              setTasks={setTasks}
              filterDays={filterDays}
              mobileScreen={mobileScreen}
            />
          ))
        )}
      </Box>
      <Project
        setTasks={setTasks}
        projects={projects}
        filterProjects={filterProjects}
        mobileScreen={mobileScreen}
      />
    </Box>
  );
};
