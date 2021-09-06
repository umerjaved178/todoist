import { Box, Typography } from "@material-ui/core";
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
  icon: any;
  clickHandler: Function;
}

const Day: React.FC<Props> = ({ day, icon, clickHandler }) => {
  const classes = useStyles();

  return (
    <Box className={classes.day} tabIndex={1} onClick={() => clickHandler(day)}>
      <p>{day}</p>
    </Box>
  );
};

export default Day;
