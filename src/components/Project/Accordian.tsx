import React from "react";
import Accordion from "@material-ui/core/Accordion";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Theme, makeStyles } from "@material-ui/core/styles";
import AccordionSummary from "@material-ui/core/AccordionSummary";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: "100%",
  },
  expandedStyle: {
    padding: 0,
    [theme.breakpoints.up("sm")]: {
      padding: theme.spacing(0, 2),
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
  projects: string[];
  clickHandler: Function;
}

const Accordian: React.FC<Props> = ({ projects, clickHandler }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
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
              onClick={() => clickHandler(x)}
            >
              {x}
            </p>
          ))
        )}
      </Accordion>
    </div>
  );
};

export default Accordian;
