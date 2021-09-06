import { makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => ({
  AddButton: {
    fontWeight: 900,
    borderRadius: "3px",
    display: "inline-block",
    margin: "1rem 0 0.5rem 0",
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
    <div className={classes.AddButton}>
      <p>{text}</p>
    </div>
  );
};

export default AddButton;
