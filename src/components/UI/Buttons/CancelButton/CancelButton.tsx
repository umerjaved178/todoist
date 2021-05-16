import React from 'react'
import classes from './CancelButton.module.scss'

interface Props {
    text: string
}

function CancelButton(props: Props) {
    const {text} = props

    return (
        <div>
            <div className={classes.CancelButton} >
                <p>{text}</p>
            </div>
        </div>
    )
}

export default CancelButton
