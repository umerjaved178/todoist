import React from 'react'
import Toolbar from '../UI/Toolbar/Toolbar'
import classes from "./Layout.module.scss"

function Layout(props: any) {
    return (
        <div className={classes.Layout}>
            <Toolbar />
            <main className={classes.LayoutChild}>{props.children}</main>
        </div>
    )
}

export default Layout
