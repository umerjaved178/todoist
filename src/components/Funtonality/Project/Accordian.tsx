import React from 'react'
import { Theme, makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Project from './Project';

const useStyles = makeStyles((theme: Theme) => ({
    root: {
      width: "80%",
    },
    expandedStyle: {
        backgroundColor: "#F7F7F7",
    },
    item: {
        padding: "0 2rem",
        margin: 0,
        flexDirection: 'column'
    }
  }));

interface Props {
    projects: string[]
}

function Accordian(props: Props) {
    const classes = useStyles();
    const {projects} = props

    return (
        <div className={classes.root}>
            <Accordion elevation={0}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} classes={{ expanded: classes.expandedStyle, root: classes.expandedStyle}}>
                    <Typography style={{fontWeight: 600}} >Projects</Typography>
                </AccordionSummary>
                <AccordionDetails 
                    className={classes.item}
                    classes={{ root: classes.expandedStyle }}
                >   
                    {React.Children.toArray(
                        projects.map(x => <Typography style={{fontSize: ".75rem"}}> {x} </Typography>))}      
                </AccordionDetails>
            </Accordion>
        </div>
    )
}

export default Accordian
