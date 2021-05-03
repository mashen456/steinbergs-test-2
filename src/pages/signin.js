import React, {Component} from "react";
import {Link, Redirect} from "react-router-dom";
import {firebaseApp} from "../firebase";

import '../styles/signin.css'
import {Button, Grid, TextField, Typography} from "@material-ui/core";


class SignIn extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            error: ""
        }
    }

    signIn() {
        this.setState({error: ""});
        console.log("State", this.state);
        const {email, password} = this.state;
        firebaseApp.auth().signInWithEmailAndPassword(email, password)
            .catch(error => {
                this.setState({error})
            }).then(() => {
            if (!this.state.error) {
                window.location = "/";
            }
        });
    }


    render() {

        var user = firebaseApp.auth().currentUser;

        if (user) {
            console.log("user already logged in");
            return <Redirect to="/"/>;
        } else {
            console.log("nope");
        }


        return (
            <Grid container direction="row" justify="center" alignItems="center" style={{paddingTop:"40px"}}>
                <Grid item xs={3}>

                </Grid>
                <Grid item xs={4} style={{color:"white"}}>

                    <Grid container direction="column" justify="center" alignItems="center" spacing={2} style={{border: "1px solid rebeccapurple" }}>

                        <Grid item>
                            <Typography variant="h2" component="h2" gutterBottom>Sign In</Typography>
                        </Grid>

                        <Grid item>
                            <TextField
                                id="filled-basic"
                                label="Email"
                                variant="filled"
                                type="text"
                                placeholder="email"
                                onChange={event => this.setState({email: event.target.value})}
                            />

                        </Grid>

                        <Grid item xs={12}>

                            <TextField
                                id="filled-basic"
                                label="Password"
                                variant="filled"
                                type="password"
                                placeholder="password"
                                onChange={event => this.setState({password: event.target.value})}
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <Button
                                variant="outlined"
                                onClick={() => this.signIn()}
                                style={{marginRight:"16px"}}
                            >Sign In</Button>

                        </Grid>



                        <Grid item xs={12}>
                            <div>{this.state.error.message}</div>
                            <div><Link to={"/signup"}>Sign Up instead</Link></div>
                        </Grid>


                    </Grid>


                </Grid>

                <Grid item xs={3}>

                </Grid>
            </Grid>
        )
    }
}

export default SignIn;