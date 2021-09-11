import { FaRegCalendarAlt, FaRegListAlt } from "react-icons/fa";
import Dropdown from "../Dropdown/Dropdown";
import { makeStyles, Theme, Box } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) => ({
  IconGroup: {
    display: "flex",
  },
}));

interface Props {
  projects: string[];
}

const IconGroup: React.FC<Props> = ({ projects }) => {
  const classes = useStyles();
  return (
    <Box className={classes.IconGroup}>
      <Box>
        <Dropdown
          options={["Inbox", "Today", "Next Week"]}
          Icon={FaRegCalendarAlt}
        />
      </Box>
      <Box>
        <Dropdown options={projects} Icon={FaRegListAlt} />
      </Box>
    </Box>
  );
};

export default IconGroup;
