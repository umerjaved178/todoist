import React, {Fragment, useState} from 'react'
import { HiPlusSm } from 'react-icons/hi';
import { FaRegCalendarAlt, FaRegListAlt } from 'react-icons/fa';
import ButtonGroup from '../../UI/ButtonGroup/ButtonGroup';
import classes from './AddItem.module.scss'

function AddItem() {
    const [input, setInput] = useState("")
    const [showForm, setShowForm] = useState(true)

    const toggle = () => {
        setShowForm(prevState => !prevState)
    }

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value)
        console.log(e.target.value)
    }

    return (
        <Fragment>
            <div className={classes.AddItemButton}  onClick={toggle}>
                <HiPlusSm color="red" size={20}  />
                <span> &nbsp; Add Task </span>
            </div>

            <div className={classes.FormArea} hidden={showForm}>
                <input type="text" onChange={onChangeHandler} value={input}/>
                <div className={classes.ButtonGroupParent} >
                    <ButtonGroup/>
                    <div className={classes.Icons}>
                        <div><FaRegCalendarAlt size={18} color="grey"/></div>
                        <div><FaRegListAlt size={18} color="grey"/></div>
                    </div>
                </div>
                
            </div>
        </Fragment>
    )
}

export default AddItem
