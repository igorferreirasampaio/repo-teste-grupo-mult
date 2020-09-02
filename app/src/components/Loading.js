import React from 'react';
import {
    Backdrop,
    CircularProgress,
    makeStyles
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    backdrop: {
        zIndex: theme.zIndex.drawer + 1
    },
    cor: {
        color: '#4682B4'
    }
}));

function Loading({ open }) {
    const classes = useStyles();

    return (
        <Backdrop className={classes.backdrop}
            open={open}>
            <CircularProgress className={classes.cor} />
        </Backdrop>
    );
}

export default Loading;