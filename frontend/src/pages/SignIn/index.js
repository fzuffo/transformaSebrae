import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { withStyles } from '@material-ui/core/styles';

import { Box, Button, CssBaseline, TextField, Container, Typography } from '@material-ui/core';

import Logo from "../../assets/Logotipo-Sebrae-Transforma_-Horizontal.png"
import api from "../../services/api";
import { login } from "../../services/auth";

const styles = theme => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
});



class SignIn extends Component {
    state = {
        email: "",
        password: "",
        error: ""
    };

    handleSignIn = async e => {
        e.preventDefault();
        const { email, password } = this.state;
        if (!email || !password) {
            this.setState({ error: "Preencha e-mail e senha para continuar!" });
        } else {
            try {
                const response = await api.post("/sessions", { email, password });
                login(response.data.token);
                this.props.history.push("/app");
            } catch (err) {
                this.setState({
                    error:
                        "Houve um problema com o login, verifique suas credenciais. T.T"
                });
            }
        }
    };

    render() {
        const { classes } = this.props;
        return (
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div className={classes.paper}>
                    <img src={Logo} width="200" alt="" />
                    <form className={classes.form} onSubmit={this.handleSignIn}>
                        {this.state.error && <Box bgcolor="error.main" color="error.contrastText" p={2}>
                            {this.state.error}
                        </Box>}
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Digite seu e-mail"
                            name="email"
                            autoComplete="email"
                            autoFocus
                            onChange={e => this.setState({ email: e.target.value })}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Digite sua senha"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            onChange={e => this.setState({ password: e.target.value })}
                        />

                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                        >
                            Login
                        </Button>
                    </form>
                </div>
            </Container>
        );
    }
}

export default withRouter(withStyles(styles)(SignIn));