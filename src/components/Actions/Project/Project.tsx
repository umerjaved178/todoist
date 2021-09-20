import React from "react";
import Accordion from "@material-ui/core/Accordion";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Theme, makeStyles, Box } from "@material-ui/core";
import AccordionSummary from "@material-ui/core/AccordionSummary";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      "& .MuiPaper-root": {
        backgroundColor: theme.palette.primary.light,
      },
    },
  },
  expandedStyle: {
    padding: 0,
    [theme.breakpoints.up("sm")]: {
      margin: theme.spacing(0, 1),
      backgroundColor: theme.palette.primary.light,
    },
  },
  item: {
    margin: 0,
    flexDirection: "column",
  },
  eachProj: {
    margin: 0,
    cursor: "pointer",
    fontSize: ".75rem",
    padding: theme.spacing(1),
    paddingLeft: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      paddingLeft: theme.spacing(3),
      backgroundColor: theme.palette.primary.light,
    },
    "&:hover": {
      backgroundColor: theme.palette.common.white,
    },
    "&:focus": {
      fontWeight: "bolder",
      backgroundColor: theme.palette.common.white,
    },
  },
}));

interface Props {
  setTasks: Function;
  projects: string[];
  filterProjects: Function;
  mobileScreen?: boolean;
}

const Project: React.FC<Props> = ({
  projects,
  setTasks,
  filterProjects,
  mobileScreen,
}) => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Accordion elevation={0}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          classes={{
            expanded: classes.expandedStyle,
            root: classes.expandedStyle,
          }}
        >
          <Typography style={{ fontWeight: 600 }}>Projects</Typography>
        </AccordionSummary>

        {React.Children.toArray(
          projects.map((x) => (
            <p
              className={classes.eachProj}
              tabIndex={1}
              onClick={() => filterProjects(x, mobileScreen)}
            >
              {x}
            </p>
          ))
        )}
      </Accordion>
    </Box>
  );
};

export default Project;
