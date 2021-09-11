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
  clickHandler: Function;
  mobileScreen?: boolean;
}

export const Action: React.FC<Props> = ({
  projects,
  clickHandler,
  mobileScreen,
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
              clickHandler={clickHandler}
              mobileScreen={mobileScreen}
            />
          ))
        )}
      </Box>
      <Project
        projects={projects}
        clickHandler={clickHandler}
        mobileScreen={mobileScreen}
      />
    </Box>
  );
};
