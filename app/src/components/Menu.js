import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
    makeStyles,
    Drawer,
    AppBar,
    CssBaseline,
    Toolbar,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Typography,
} from '@material-ui/core';

import {
    Home as HomeIcon,
    AlarmOn as AlarmIcon,
    History as HistoryIcon,
    WbSunny as WbSunnyIcon,
} from '@material-ui/icons';

const TitleEnum = {
    Home: 'Home',
    TemperaturaAtual: 'Temperatura Atual',
    HistoricoTemperaturas: 'Histórico de Temperaturas',
    Alarmes: 'Alarmes',
};

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        backgroundColor: '#4682B4'
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerContainer: {
        overflow: 'auto',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    route: {
        color: 'gray',
    },
    activeRoute: {
        color: '#4682B4',
    }
}));

const Menu = ({ children }) => {
    const classes = useStyles();
    const [title, setTitle] = useState('Home');

    const changeTitleAppBar = (text) => {
        setTitle(text);
    }

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                    <Typography variant="h6" noWrap>
                        {title}
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                className={classes.drawer}
                variant="permanent"
                classes={{
                    paper: classes.drawerPaper,
                }}>
                <Toolbar />
                <div className={classes.drawerContainer}>
                    <List>
                        <ListItem component={NavLink}
                            exact
                            to='/'
                            onClick={() => changeTitleAppBar(TitleEnum.Home)}
                            className={classes.route}
                            activeClassName={classes.activeRoute}>
                            <ListItemIcon>
                                <HomeIcon />
                            </ListItemIcon>
                            <ListItemText primary={TitleEnum.Home} />
                        </ListItem>
                        <ListItem component={NavLink}
                            exact
                            to='/temperatura-atual'
                            onClick={() => changeTitleAppBar(TitleEnum.TemperaturaAtual)}
                            className={classes.route}
                            activeClassName={classes.activeRoute}>
                            <ListItemIcon>
                                <WbSunnyIcon />
                            </ListItemIcon>
                            <ListItemText primary={TitleEnum.TemperaturaAtual} />
                        </ListItem>
                        <ListItem component={NavLink}
                            exact
                            to='/historico-temperaturas'
                            onClick={() => changeTitleAppBar(TitleEnum.HistoricoTemperaturas)}
                            className={classes.route}
                            activeClassName={classes.activeRoute}>
                            <ListItemIcon>
                                <HistoryIcon />
                            </ListItemIcon>
                            <ListItemText primary={TitleEnum.HistoricoTemperaturas} />
                        </ListItem>
                        <ListItem component={NavLink}
                            exact
                            to='/alarmes'
                            onClick={() => changeTitleAppBar(TitleEnum.Alarmes)}
                            className={classes.route}
                            activeClassName={classes.activeRoute}>
                            <ListItemIcon>
                                <AlarmIcon />
                            </ListItemIcon>
                            <ListItemText primary={TitleEnum.Alarmes} />
                        </ListItem>
                    </List>
                </div>
            </Drawer>
            <main className={classes.content}>
                <Toolbar />
                {children}
            </main>
        </div>
    );
}

export default Menu;