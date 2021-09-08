import React from "react";
import { Box } from "@material-ui/core";
import Accordian from "components/Actions/Project/Accordian";
import { makeStyles, Theme } from "@material-ui/core";
import Day from "components/Actions/Day/Day";

const useStyles = makeStyles((theme: Theme) => ({
  ActionArea: {
    gridArea: "ActionArea",
    marginTop: theme.spacing(3),
  },
}));

interface Props {
  projects: any;
  clickHandler: any;
  days: any;
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
          days.map((x: any) => (
            <Day
              day={x.day}
              icon={x.icon}
              clickHandler={clickHandler}
              mobileScreen={mobileScreen}
            />
          ))
        )}
      </Box>
      <Accordian
        projects={projects}
        clickHandler={clickHandler}
        mobileScreen={mobileScreen}
      />
    </Box>
  );
};
