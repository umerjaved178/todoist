import { makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => ({
  CancelButton: {
    color: "grey",
    fontWeight: 900,
    display: "inline-block",
    padding: theme.spacing(0, 2),
    margin: "1rem 0 0.5rem 0",
    "&:hover": {
      cursor: "pointer",
    },
    "&:active": {
      transform: " translateY(2px)",
    },
  },
}));

interface Props {
  text: string;
  onClick: () => void;
}

const CancelButton: React.FC<Props> = ({ text, onClick }) => {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.CancelButton} onClick={onClick}>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default CancelButton;
