import React from 'react'
import classes from "./ToDo.module.scss"
import Checkbox from "@material-ui/core/Checkbox";
import CircleCheckedFilled from "@material-ui/icons/CheckCircle";
import CircleUnchecked from "@material-ui/icons/RadioButtonUnchecked";

interface Props {
    toDo: string
}

function ToDo(props: Props) {
    const [checked, setChecked] = React.useState(false);
    const {toDo} = props

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked);
      };

    return (
        <div className={classes.ToDo}>
             <Checkbox
                icon={<CircleUnchecked />}
                checked={checked}
                onChange={handleChange}
                checkedIcon={<CircleCheckedFilled style={{color: "#DB4C3F"}} />}
            />
            <span>{toDo}</span>
            <hr className= {classes.hr} />
        </div>
    )
}

export default ToDo
