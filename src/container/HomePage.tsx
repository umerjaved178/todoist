import React, { useState } from 'react'
import AddItem from '../components/Funtonality/AddItem/AddItem'
import Day from '../components/Funtonality/Day/Day'
import Accordian from '../components/Funtonality/Project/Accordian'
import Project from '../components/Funtonality/Project/Project'
import ToDo from '../components/Funtonality/toDo/ToDo'
import classes from './HomePage.module.scss'

function HomePage() {
    const [toDos, setToDos] = useState(
        [
            {
                toDo: "cooking and planning",
                project: "MUSIC",
                dueDay: "Inbox"
            },
            {
                toDo: "Sheesha",
                project: "none",
                dueDay: "Inbox"
            },
            {
                toDo: "Gardening",
                project: "none",
                dueDay: "Inbox"
            },
            {
                toDo: "Sleeping",
                project: "none",
                dueDay: "Today"
            },
            {
                toDo: "cooking & future planning",
                project: "FUTURE",
                dueDay: "Next 7 days"
            },
        ]
    )
    const [days, setDays] = useState([
        {
            day: "Inbox",
            icon: "BsInboxFill"
        }, 
        {
            day: "Today",
            icon: "BiCalendarAlt"
        }, 
        {
            day: "Next 7 days",
            icon: "RiCalendarTodoFill"
        }, 
    ])
    const [projects, setProjects] = useState(["OFFICE", "DAILY", "FUTURE", "WORDS", "MUSIC"])
    const [filterDay, setFilterDay] = useState("Inbox")

    const filterClickHandler = (current: string) => {
        setFilterDay(current)
    }
    
    var customisedResult = toDos.filter(x => 
        (filterDay === "Inbox" || filterDay === "Today" || filterDay === "Next 7 days") 
        ? (x.dueDay === filterDay)
        : (x.project === filterDay))
    
    
    return (
        <div className={classes.HomePageLayout}>
            <div >
                {/* Date Elements */}
                <div className={classes.Date}>
                    {React.Children.toArray(days.map(x => <Day day={x.day} icon={x.icon} clickHandler={filterClickHandler}/>))}     
                </div>

                {/* Accordian  */}
                <Accordian projects={projects} clickHandler={filterClickHandler}/>
            </div>

            <div className={classes.LayoutToDos}>
                <p className={classes.ToDosHeading}> {filterDay} </p>
                {React.Children.toArray(customisedResult.map(x => <ToDo toDo={x.toDo} />))}
                <AddItem />
            </div>
           
        </div>
    )
}

export default HomePage
