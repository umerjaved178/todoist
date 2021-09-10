import { FaRegCalendarAlt, FaRegListAlt } from "react-icons/fa";
import Dropdown from "../Dropdown/Dropdown";
import { makeStyles, Theme } from "@material-ui/core";

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
    <div className={classes.IconGroup}>
      <div>
        <Dropdown
          options={["INBOX", "TODAY", "NEXT WEEK"]}
          Icon={FaRegCalendarAlt}
        />
      </div>
      <div>
        <Dropdown options={projects} Icon={FaRegListAlt} />
      </div>
    </div>
  );
};

export default IconGroup;
