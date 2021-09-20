import { Box } from "@material-ui/core";
import { makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => ({
  day: {
    padding: theme.spacing(0.1, 0),
    "&:hover": {
      cursor: "pointer",
      background: theme.palette.common.white,
    },
    "&:active, &:focus": {
      fontWeight: "bolder",
      background: theme.palette.common.white,
    },
    [theme.breakpoints.up("sm")]: {
      paddingLeft: theme.spacing(3),
    },
  },
}));

interface Props {
  day: string;
  setTasks: Function;
  icon: string;
  filterDays: Function;
  mobileScreen?: boolean;
}

const Day: React.FC<Props> = ({ day, setTasks, filterDays, mobileScreen }) => {
  const classes = useStyles();

  return (
    <Box
      className={classes.day}
      tabIndex={1}
      onClick={() => filterDays(day, mobileScreen)}
    >
      <p>{day}</p>
    </Box>
  );
};

export default Day;
