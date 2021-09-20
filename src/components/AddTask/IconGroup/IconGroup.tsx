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
  setDay: React.Dispatch<React.SetStateAction<string>>;
  setProject: React.Dispatch<React.SetStateAction<string>>;
}

const IconGroup: React.FC<Props> = ({ projects, setDay, setProject }) => {
  const classes = useStyles();
  return (
    <Box className={classes.IconGroup}>
      <Box>
        <Dropdown
          options={["Inbox", "Today", "Next Week"]}
          Icon={FaRegCalendarAlt}
          day
          setProject={setProject}
          setDay={setDay}
        />
      </Box>
      <Box>
        <Dropdown
          options={projects}
          Icon={FaRegListAlt}
          setProject={setProject}
          setDay={setDay}
        />
      </Box>
    </Box>
  );
};

export default IconGroup;
