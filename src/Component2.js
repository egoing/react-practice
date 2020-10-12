import { makeStyles } from '@material-ui/core';
import React from 'react';
const useStyles = makeStyles({
    root:{
        border:'1rem solid blue',
        backgroundColor:'powderblue',
        padding:'1rem',
        margin:'1rem',
        '& h1':{
            textDecoration:'underline'
        }
    }
});
export default ()=>{
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <h1>Component2</h1>
            Lorem ipsum.
        </div>
    );
}