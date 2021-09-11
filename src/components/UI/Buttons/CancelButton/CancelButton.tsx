import { makeStyles, Theme, Box } from "@material-ui/core";

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
    <Box className={classes.CancelButton} onClick={onClick}>
      <p>{text}</p>
    </Box>
  );
};

export default CancelButton;
