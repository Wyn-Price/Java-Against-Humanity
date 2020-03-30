import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { MenuItem } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
    appBar: {
        width: '100%',
    },
    title: {
        flexGrow: 1,
    },
}));

function TopBar() {
    const classes = useStyles;

    return (
        <AppBar position='fixed' className={classes.appBar}>
            <Toolbar>
                <MenuItem>
                    <Typography variant='h6' className={classes.title}>
                        Cards Clone
                    </Typography>
                </MenuItem>
            </Toolbar>
        </AppBar>
    );
}
export default TopBar;