import React from "react";
import { Box } from "@material-ui/core";
import Project from "components/Actions/Project/Project";
import { makeStyles, Theme } from "@material-ui/core";
import Day from "components/Actions/Day/Day";
import { dayType } from "literals/types";

const useStyles = makeStyles((theme: Theme) => ({
  ActionArea: {
    gridArea: "ActionArea",
    marginTop: theme.spacing(3),
  },
}));

interface Props {
  projects: string[];
  clickHandler: Function;
  days: dayType[];
  mobileScreen?: boolean;
}

export const Action: React.FC<Props> = ({
  projects,
  clickHandler,
  days,
  mobileScreen,
}) => {
  const classes = useStyles();
  return (
    <Box className={classes.ActionArea}>
      <Box>
        {React.Children.toArray(
          days.map((x: dayType) => (
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
