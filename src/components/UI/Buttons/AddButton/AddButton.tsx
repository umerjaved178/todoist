import { makeStyles, Theme, Box } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) => ({
  AddButton: {
    fontWeight: 900,
    borderRadius: "3px",
    display: "inline-block",
    margin: "1rem 0 1rem 0",
    padding: theme.spacing(0, 2),
    color: theme.palette.common.white,
    backgroundColor: theme.palette.info.main,
    "&:hover": {
      cursor: "pointer",
      backgroundColor: theme.palette.info.light,
    },
    "&:active": {
      backgroundColor: theme.palette.info.dark,
    },
  },
}));

interface Props {
  text: string;
}

const AddButton: React.FC<Props> = ({ text }) => {
  const classes = useStyles();

  return (
    <Box className={classes.AddButton}>
      <p>{text}</p>
    </Box>
  );
};

export default AddButton;
