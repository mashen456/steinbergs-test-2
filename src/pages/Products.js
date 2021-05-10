import React, {useEffect, useState} from 'react';
import {
    Card,
    CardActions,
    CardContent, CardMedia,
    Grid,
    IconButton, LinearProgress, makeStyles,
    Typography
} from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import {firebaseDB} from "../firebase";
import moment from "moment";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
        flex: '1 0 auto'
    },
    content: {
        flex: '1 0 auto',
    },

}));


function Products() {
    const classes = useStyles();
    const [orders, setOrders] = useState([]);


    function onDataChange(items) {
        let aufgaben = [];
        items.forEach((firmen) => {
            firmen.forEach((item) => {
                if (item.key === "aufgaben") {
                    item.forEach((aufgabe) => {
                        let aufgabenkey = aufgabe.key;
                        let aufgabendata = aufgabe.val();
                        aufgaben.push({
                            key: aufgabenkey,
                            abgeschlossen: aufgabendata.abgeschlossen,
                            anz: aufgabendata.anz,
                            ersteller: aufgabendata.ersteller,
                            faellig_am: aufgabendata.faellig_am,
                            gelieferteMenge: aufgabendata.gelieferteMenge,
                            kunde: aufgabendata.kunde,
                            preis: aufgabendata.preis,
                            prio: aufgabendata.prio,
                            produzierteMenge: aufgabendata.produzierteMenge,
                            typ: aufgabendata.typ,
                            firmenTyp: firmen.key,
                            img: firmen.val().img

                        });

                    });
                }
            });

        });
        setOrders(aufgaben);
    };


    useEffect(() => {
        firebaseDB.child("firmen").on('value', (snap) => {
            onDataChange(snap);
        });
    }, []);


    return (

        <Grid container direction="row" justify="center" alignItems="center" style={{paddingTop: "10px",}}>
            <Grid item lg={2} xl={2}></Grid>
            <Grid item xs={12} sm={12} md={12} lg={8} xl={8}>
                <Grid container direction="row" justify="center" alignItems="stretch" style={{paddingTop: "10px",}}>
                </Grid>
                <Grid container direction="row" alignItems="stretch" justify="flex-start" spacing={2}
                      style={{paddingTop: "40px"}}>
                    {orders.map((item, key) => (
                        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                            <Card style={{backgroundColor: "gray"}} className={classes.root}>
                                <CardMedia
                                    style={{width: "150px", height: "120px"}}
                                    image={item.img}
                                    title={item.firmenTyp}
                                />
                                <CardContent style={{paddingBottom: "5px"}} className={classes.content}>
                                    <Typography gutterBottom variant="h5" component="h2" className={classes.details}>
                                        {item.anz} x {item.typ} | {moment(item.faellig_am, "DDMMYYYY").fromNow()}
                                    </Typography>
                                    <Typography gutterBottom className={classes.details} style={{display: "inline"}}>
                                        Produziert: {item.produzierteMenge} | Bereits
                                        geliefert: {item.gelieferteMenge} |
                                    </Typography>
                                    <Typography variant="h8" component="h4" gutterBottom className={classes.details}
                                                style={{display: "inline", paddingLeft: "5px", color: "#81ecec"}}>
                                        Noch benötigt: {item.anz - item.produzierteMenge}
                                    </Typography>
                                    <div style={{paddingTop: "8px"}}>
                                        <LinearProgress variant="buffer"
                                                        value={((item.gelieferteMenge / item.anz) * 100)}
                                                        valueBuffer={((item.produzierteMenge / item.anz) * 100)}/>
                                    </div>
                                </CardContent>
                                <CardActions disableSpacing style={{marginTop: "0px", paddingTop: "1px"}}>
                                    <IconButton aria-label="add to favorites">
                                        <EditIcon/>
                                    </IconButton>
                                    <IconButton aria-label="share">
                                        <DeleteIcon/>
                                    </IconButton>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Grid>
            <Grid item lg={2} xl={2}/>
        </Grid>
    );
}

export default Products;
