import React from 'react'
import classes from './AddButton.module.scss'

interface Props {
    text: string
}

function AddButton(props: Props) {
    const {text} = props

    return (
        <div className={classes.AddButton} >
            <p>{text}</p>
        </div>
    )
}

export default AddButton
