import React, {Component} from 'react';
import {
    Backdrop,
    Button,
    Card,
    CardActions,
    CardContent, CircularProgress, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle,
    FormGroup,
    Grid, IconButton, Paper, Snackbar,
    TextField,
    Typography, withStyles
} from "@material-ui/core";

import SaveIcon from '@material-ui/icons/Save';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import {firebaseDB, firebaseDBA} from '../firebase'
import MuiAlert from '@material-ui/lab/Alert';



const useStyles = theme  => ({

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

});


class Clients extends Component{
    constructor(props) {
        super(props);
        this.state = {
            name:"",
            firma:"",
            plz:"",
            tele:"1822-",
            key:"",
            open:false,
            clients:[],
            openEdit:false
        }
    }
    writeToFireBase(e){
          firebaseDBA.ref('kunden/uid-'+ Date.now()+'/').set(
            {
            firma:this.state.firma,
            name:this.state.name,
            plz:this.state.plz,
            tel:this.state.tele
        },(error) =>{
                if(error){
                    alert(error)
                }else {
                    this.handleClick();
                }

            }
        )
    };

    Alert(props) {
        return <MuiAlert elevation={6} variant="filled" {...props} />;
    }

    handleClick = () => {
        this.setState({open:true});
    };

    handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        this.setState({open:false});
    };
    handleClickOpenEdit = () => {
        this.setState({openEdit: true});
    };

   handleCloseEdit = () => {
        this.setState({openEdit: false});
    };


    onDataChange(items) {
        let tutorials = [];

        items.forEach((item) => {
            let key = item.key;
            let data = item.val();
            tutorials.push({
                key: key,
                firma: data.firma,
                name: data.name,
                plz: data.plz,
                tel: data.tel,
            });
        });

        this.setState({
            clients: tutorials,
        });
    }

    componentDidMount() {
        console.log("comp did mount");
        firebaseDB.child("kunden").on('value', (snap) => {
            console.log("db snap ", snap.val());
            this.onDataChange(snap);
        });
    }


    deleteClient(index){
        firebaseDBA.ref("kunden").child(index).remove();

    }

    updateCliuent(index){
        firebaseDBA.ref("kunden").child(index).update({
            firma:this.state.firma,
            name:this.state.name,
            plz:this.state.plz,
            tel:this.state.tele
        });
        this.handleCloseEdit();
    }




render() {
        const { classes } = this.props;
    return (



        <div className='clients'>

            <Snackbar open={this.state.open} autoHideDuration={6000} onClose={()=>this.handleClose()} anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}>
                <this.Alert onClose={()=>this.handleClose()} severity="success">
                    This is a success message!
                </this.Alert>
            </Snackbar>



            <Grid container direction="row"  justify="center" alignItems="center" style={{paddingTop: "10px", }}>

                <Grid item  lg={2} xl={2} ></Grid>

                <Grid item xs={12} sm={12} md={12} lg={8} xl={8}>
                    <Grid container direction="row"  justify="center" alignItems="stretch" style={{paddingTop: "10px", }}>
                    <FormGroup row={true}>
                    <TextField label="Name" className={classes.text}
                               onChange={(event) => this.setState({name : event.target.value})}
                               size={"medium"}
                    />

                    <TextField label="Firma" className={classes.text}
                               onChange={(event) => this.setState({firma : event.target.value})}
                               size={"medium"}/>
                    <TextField label="PLZ" className={classes.text}
                               onChange={(event) => this.setState({plz : event.target.value})}
                               />
                    <TextField label="Tel." defaultValue="1822-" className={classes.text}
                               onChange={(event) => this.setState({tele : event.target.value})}
                               />
                    <Button
                        variant="contained"
                        color="primary"
                        startIcon={<SaveIcon />}
                        className={classes.text}
                        onClick={() => this.writeToFireBase()}
                    >
                        ADD
                    </Button>
                    </FormGroup>
                    </Grid>

                <Grid container direction="row" alignItems="stretch" justify="flex-start" spacing={2} style={{paddingTop:"40px"}}>

                {this.state.clients.map((client) =>(

                    <Grid item xs={12} sm={6} md={4} lg={4} xl={3} >
                        <Card style={{backgroundColor:"gray"} }>
                            <CardContent style={{paddingBottom:"5px"}}>
                                <Typography gutterBottom variant="h5" component="h2">
                                    {client.firma} | Ansprechpartner: {client.name}
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p"  >
                                    PLZ: {client.plz} | Tele: {client.tel}
                                </Typography>
                            </CardContent>
                            <CardActions disableSpacing style={{marginTop:"0px", paddingTop:"1px"}}>
                                <IconButton aria-label="add to favorites" onClick={()=>(
                                    this.setState({name:client.name, firma:client.firma, key:client.key, plz:client.plz, tele:client.tel, openEdit:true})
                                )} >
                                    <EditIcon />
                                </IconButton>
                                <IconButton aria-label="share" onClick={() => this.deleteClient(client.key)}>
                                    <DeleteIcon />
                                </IconButton>
                            </CardActions>
                        </Card>
                    </Grid>

                ))}
                </Grid>

                </Grid>
                <Grid item lg={2} xl={2}/>




            </Grid>

            <Dialog open={this.state.openEdit} onClose={() => this.handleCloseEdit()} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">{this.state.firma} bearbeiten</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Name"
                        type="text"
                        value={this.state.name}
                        onChange={(event) => this.setState({name : event.target.value})}
                        fullWidth
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="firma"
                        label="Firma"
                        type="text"
                        value={this.state.firma}
                        onChange={(event) => this.setState({firma : event.target.value})}
                        fullWidth
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="plz"
                        label="PLZ"
                        type="text"
                        value={this.state.plz}
                        onChange={(event) => this.setState({plz : event.target.value})}

                        fullWidth
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="tel"
                        label="Tel."
                        type="text"
                        value={this.state.tele}
                        onChange={(event) => this.setState({tele : event.target.value})}
                        fullWidth

                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => this.handleCloseEdit()} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={() => this.updateCliuent(this.state.key)} color="secondary">
                        Update
                    </Button>
                </DialogActions>
            </Dialog>


        </div>

    );
}
componentDidUpdate(prevProps, prevState, snapshot) {
        console.log(this.state);
}

}

export default withStyles(useStyles)(Clients);
