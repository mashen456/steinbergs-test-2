import React, {useState} from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import {SidebarData} from './SidebarData';
import './Navbar.css';
import {IconContext} from 'react-icons';
import SendIcon from '@material-ui/icons/Send';
import {List, ListItem, ListItemIcon, ListItemText, ListSubheader, makeStyles} from "@material-ui/core";
import {Link} from 'react-router-dom';
import DraftsIcon from '@material-ui/icons/Drafts';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
import Collapse from '@material-ui/core/Collapse';


const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 360,
        paddingLeft: '16px',
        paddingRight: '16px',
        paddingTop:'1px'
    },
    nested: {
        paddingLeft: theme.spacing(4),
    },
    MuiListItemIcon: {
        minWidth: '39px',
    },
    sty: {
        textDecoration: "none",
        color: "#f5f5f5",
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        padding: "8px 0px 8px 16px",
        marginTop: "16px",
        borderRadius: "8px",
        transition: "1.3s",
        '&:hover': {
            backgroundColor: '#1a83ff',
            fontSize: "40px",
            width: "100%",
            height: "100%",
            display: "flex",
            paddingLeft:"30px",
            alignItems: "center",
            marginTop: "16px",
            borderRadius: "8px",
            transition: "1.3s",
        },
    },
    stymain: {
        textDecoration: "none",
        color: "#f5f5f5",
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        marginTop: "8px",
        borderRadius: "8px",
        transition: "1.3s",
        '&:hover': {
            backgroundColor: '#1a83ff',
            fontSize: "40px",
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            borderRadius: "8px",
            transition: "1.3s",
        },
    },
    stysub: {
        textDecoration: "none",
        color: "#f5f5f5",
        width: "100%",
        height: "100%",
        display: "flex",
        paddingLeft:"40px",
        marginTop:"6px",
        alignItems: "center",
        borderRadius: "8px",
        transition: "1.3s",
        '&:hover': {
            backgroundColor: '#1a83ff',
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            paddingLeft:"65px",
            borderRadius: "8px",
            transition: "1.3s",
        },
    },
    mtext: {
        fontSize: "10px",
        '&:hover': {
            fontSize: "2rem",
        },
    }
}));


function Navbar() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(true);

    const handleClick = () => {
        setOpen(!open);
    };


    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    return (
        <>
            <IconContext.Provider value={{color: '#fff'}}>
                <div className='navbar'>
                    <Link to='#' className='menu-bars'>
                        <FaIcons.FaBars onClick={showSidebar}/>
                    </Link>
                </div>
                <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                    <ul className='nav-menu-items'>
                        <li className='navbar-toggle'>
                            <Link to='#' className='menu-bars'>
                                <AiIcons.AiOutlineClose onClick={showSidebar}/>
                            </Link>
                        </li>
                        {SidebarData.map((item, index) => {
                            return (
                                <li key={index} className={item.cName}>
                                    <Link to={item.path} onClick={showSidebar}>
                                        {item.icon}
                                        <span style={{marginLeft: "16px"}}>{item.title}</span>
                                    </Link>
                                </li>
                            );
                        })}

                        <List
                            component="nav"
                            className={classes.root}
                        >
                            <ListItem button onClick={handleClick} className={classes.stymain}>
                                <ListItemIcon className={classes.MuiListItemIcon}>
                                    <InboxIcon/>
                                </ListItemIcon>
                                <ListItemText primary="Inbox"/>
                                {open ? <ExpandLess/> : <ExpandMore/>}
                            </ListItem>
                            <Collapse in={open} timeout="auto" unmountOnExit>
                                <List component="div" disablePadding>
                                    <ListItem button className={classes.nested} className={classes.stysub}>
                                        <ListItemIcon className={classes.MuiListItemIcon}>
                                            <StarBorder/>
                                        </ListItemIcon>
                                        <ListItemText primary="Starred"/>
                                    </ListItem>
                                    <ListItem button className={classes.nested} className={classes.stysub}>
                                        <ListItemIcon className={classes.MuiListItemIcon}>
                                            <StarBorder/>
                                        </ListItemIcon>
                                        <ListItemText className={classes.mtext} primary="Starred"></ListItemText>

                                    </ListItem>
                                    <ListItem button className={classes.nested} className={classes.stysub}>
                                        <ListItemIcon className={classes.MuiListItemIcon}>
                                            <StarBorder/>
                                        </ListItemIcon>
                                        <ListItemText primary="Starred2" />
                                    </ListItem>
                                </List>
                            </Collapse>
                        </List>


                        <List
                            component="nav"
                            className={classes.root}
                        >
                            <ListItem button onClick={handleClick} className={classes.stymain}>
                                <ListItemIcon className={classes.MuiListItemIcon}>
                                    <InboxIcon/>
                                </ListItemIcon>
                                <ListItemText primary="Inbox"/>
                                {open ? <ExpandLess/> : <ExpandMore/>}
                            </ListItem>
                            <Collapse in={open} timeout="auto" unmountOnExit>
                                <List component="div" disablePadding>
                                    <ListItem button className={classes.nested} className={classes.stysub}>
                                        <ListItemIcon className={classes.MuiListItemIcon}>
                                            <StarBorder/>
                                        </ListItemIcon>
                                        <ListItemText primary="Starred"/>
                                    </ListItem>
                                    <ListItem button className={classes.nested} className={classes.stysub}>
                                        <ListItemIcon className={classes.MuiListItemIcon}>
                                            <StarBorder/>
                                        </ListItemIcon>
                                        <ListItemText className={classes.mtext} primary="Starred"></ListItemText>

                                    </ListItem>
                                    <ListItem button className={classes.nested} className={classes.stysub}>
                                        <ListItemIcon className={classes.MuiListItemIcon}>
                                            <StarBorder/>
                                        </ListItemIcon>
                                        <ListItemText primary="Starred2" />
                                    </ListItem>
                                </List>
                            </Collapse>
                        </List>

                        <List
                            component="nav" id="sda"
                            className={classes.root}
                        >
                            <ListItem button onClick={handleClick} className={classes.stymain}>
                                <ListItemIcon className={classes.MuiListItemIcon}>
                                    <InboxIcon/>
                                </ListItemIcon>
                                <ListItemText primary="Inbox"/>
                                {open ? <ExpandLess/> : <ExpandMore/>}
                            </ListItem>
                            <Collapse in={open} timeout="auto" unmountOnExit>
                                <List component="div" disablePadding>
                                    <ListItem button className={classes.nested} className={classes.stysub}>
                                        <ListItemIcon className={classes.MuiListItemIcon}>
                                            <StarBorder/>
                                        </ListItemIcon>
                                        <ListItemText primary="Starred"/>
                                    </ListItem>
                                    <ListItem button className={classes.nested} className={classes.stysub}>
                                        <ListItemIcon className={classes.MuiListItemIcon}>
                                            <StarBorder/>
                                        </ListItemIcon>
                                        <ListItemText className={classes.mtext} primary="Starred"></ListItemText>

                                    </ListItem>
                                    <ListItem button className={classes.nested} className={classes.stysub}>
                                        <ListItemIcon className={classes.MuiListItemIcon}>
                                            <StarBorder/>
                                        </ListItemIcon>
                                        <ListItemText primary="Starred2" />
                                    </ListItem>
                                </List>
                            </Collapse>
                        </List>


                    </ul>

                </nav>
            </IconContext.Provider>
        </>
    );
}

export default Navbar;
