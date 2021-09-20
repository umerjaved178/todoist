import React from "react";
import Menu from "@material-ui/core/Menu";
import { useAppDispatch } from "redux/hooks";
import MenuItem from "@material-ui/core/MenuItem";
import { makeStyles, Theme, Box } from "@material-ui/core";
import { setDayFilter, setProjectFilter } from "redux/slices/actionArea.slice";

const useStyles = makeStyles((theme: Theme) => ({
  Icon: {
    cursor: "pointer",
    margin: theme.spacing(1),
    "&:active": {
      transform: "translateY(1.5px)",
    },
  },
  text: {
    fontSize: "12px",
  },
}));

interface Props {
  options: string[];
  Icon?: any;
  day?: boolean;
  setProject: any;
  setDay: any;
}

const Dropdown: React.FC<Props> = ({
  options,
  Icon,
  day,
  setDay,
  setProject,
}) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const handleClickListItem = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (
    event: React.MouseEvent<HTMLElement>,
    index: number,
    option: string
  ) => {
    day ? setDay(option) : setProject(option);
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box>
      <Box onClick={handleClickListItem}>
        <Icon className={classes.Icon} size={18} color="grey" />
      </Box>
      <Menu
        id="lock-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {options.map((option, index) => (
          <MenuItem
            key={option}
            className={classes.text}
            selected={index === selectedIndex}
            onClick={(event) => handleMenuItemClick(event, index, option)}
          >
            {option}
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
};

export default Dropdown;
