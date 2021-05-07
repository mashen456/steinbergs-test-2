import React from 'react';
import {
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Grid,
    makeStyles,
    TextField,
    Typography
} from "@material-ui/core";
import {createMuiTheme} from "@material-ui/core/styles";
import {
    ThemeProvider,
} from '@material-ui/core/styles';
import {purple} from "@material-ui/core/colors";
import {colors} from '@material-ui/core';
import App from '../App';
import theme from "../styles/theme";

const useStyles = makeStyles((theme) => ({

    text: {
        marginTop: "30px",
        marginLeft: "30px"
    },
    '& .MuiInputBase-focused': {
        color: 'green',
    },
    '& .MuiInputBase-underline:after': {
        borderBottomColor: 'green',
    },

}));


function Clients() {
    const classes = useStyles();

    return (
        <div className='clients'>


            <Grid container direction="column"  justify="center" alignItems="center" style={{paddingTop: "10px", }}>


                <Grid item xs={8}>
                    <TextField label="Name" className={classes.text}/>
                    <TextField label="Firma" className={classes.text}/>
                    <TextField label="PLZ" className={classes.text}/>
                    <TextField label="Tel." defaultValue="1822-" className={classes.text}/>
                </Grid>

                <Grid item xs={8} style={{paddingTop:"20px"}}>
                    <Card style={{backgroundColor:"gray", width:"100vh"}}>
                        <CardContent>
                            <Typography gutterBottom variant="headline" component="h2">
                                Test Title
                            </Typography>
                            <Typography component="p">
                                Test Desc
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small" color="primary" href="#" target="_blank">
                                Go To Course
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>

                <Grid item xs={8} style={{paddingTop:"20px"}}>
                    <Card style={{backgroundColor:"gray", width:"100vh"}}>
                        <CardContent>
                            <Typography gutterBottom variant="headline" component="h2">
                                Test Title
                            </Typography>
                            <Typography component="p">
                                Test Desc
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small" color="primary" href="#" target="_blank">
                                Go To Course
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>

                <Grid item xs={8} style={{paddingTop:"20px"}}>
                    <Card style={{backgroundColor:"gray", width:"100vh"}}>
                        <CardContent>
                            <Typography gutterBottom variant="headline" component="h2">
                                Test Title
                            </Typography>
                            <Typography component="p">
                                Test Desc
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small" color="primary" href="#" target="_blank">
                                Go To Course
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>


            </Grid>


        </div>
    );
}

export default Clients;
