import React from 'react'
import { Theme, makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme: Theme) => ({
    root: {
      width: "100%",
    },
    expandedStyle: {
        backgroundColor: "#F7F7F7",
        margin: 0,
        paddingLeft: 0,
    },
    item: {
        padding: "0 2rem",
        margin: 0,
        flexDirection: 'column'
    },
    eachProj: {
        fontSize: ".75rem",
        cursor: "pointer",
        margin: 0,
        padding: ".5rem",
        backgroundColor: "#F7F7F7",
        '&:hover': {
            backgroundColor: "white",
        },
        '&:focus': {
            backgroundColor: "white",
            fontWeight: "bolder",
        }
        
    }
  }));

interface Props {
    projects: string[],
    clickHandler: Function,
}

function Accordian(props: Props) {
    const classes = useStyles();
    const {projects, clickHandler} = props

    return (
        <div className={classes.root}>
            <Accordion elevation={0}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} classes={{ expanded: classes.expandedStyle, root: classes.expandedStyle}}>
                    <Typography style={{fontWeight: 600}} >Projects</Typography>
                </AccordionSummary>
                    {React.Children.toArray(
                        projects.map(x => 
                            <p className={classes.eachProj} tabIndex={1} onClick={()=> clickHandler(x)}> {x} </p> 
                    ))}      
            </Accordion>
        </div>
    )
}

export default Accordian
