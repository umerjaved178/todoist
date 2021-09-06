import Modal from "./Modal/Modal";
import { HiPlusSm } from "react-icons/hi";
import { Fragment, useState } from "react";
import classes from "./AddItem.module.scss";
import { FaRegCalendarAlt, FaRegListAlt } from "react-icons/fa";
import AddButton from "components/UI/Buttons/AddButton/AddButton";
import CancelButton from "components/UI/Buttons/CancelButton/CancelButton";

interface Props {
  projects: string[];
}

const AddItem: React.FC<Props> = ({ projects }) => {
  const [input, setInput] = useState("");
  const [showProjects, setShowProjects] = useState(false);
  const [showDays, setShowDays] = useState(false);
  const [hiddenForm, setHiddenForm] = useState(true);

  const toggle = () => {
    setHiddenForm((prevState) => !prevState);
  };

  const onCancelHandler = () => {
    setHiddenForm(true);
    setInput("");
  };

  return (
    <Fragment>
      <div className={classes.AddItemButton} onClick={toggle}>
        <HiPlusSm color="red" size={20} />
        <span> &nbsp; Add Task </span>
      </div>

      <div className={classes.FormArea} hidden={hiddenForm}>
        <input
          type="text"
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />
        <div>
          <div style={{ display: "inline-flex", marginBottom: "0" }}>
            <AddButton text="Add Task" />
            <CancelButton text="Cancel" onClick={onCancelHandler} />
          </div>
          <div className={classes.Icons}>
            <div
              onClick={() => {
                setShowDays((prevState) => !prevState);
                setShowProjects(false);
              }}
            >
              <FaRegCalendarAlt size={18} color="grey" />
            </div>
            <div
              onClick={() => {
                setShowProjects((prevState) => !prevState);
                setShowDays(false);
              }}
            >
              <FaRegListAlt size={18} color="grey" />
            </div>
          </div>
        </div>
      </div>
      <div hidden={!showProjects}>
        <Modal items={projects} />
      </div>
      <div hidden={!showDays}>
        <Modal items={["INBOX", "TODAY", "NEXT WEEK"]} />
      </div>
    </Fragment>
  );
};

export default AddItem;
