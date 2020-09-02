import React from 'react';
import { makeStyles } from '@material-ui/core';
import { Alert } from '@material-ui/lab';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },
}));

const Alerta = ({ severity, text }) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Alert severity={severity}>{text}</Alert>
        </div>
    );
}

export default Alerta;