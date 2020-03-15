import React from 'react';
import './App.css';
import {BrowserRouter, Link, Route} from "react-router-dom";
import Home from "./Home";
import {AppBar, Button, createMuiTheme, Toolbar, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {ThemeProvider} from "@material-ui/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import About from "./About";
import Grid from "@material-ui/core/Grid";
import CV from "./CV.pdf";


const theme = createMuiTheme({
  palette: {
    type: "dark",
    primary:{
      main:"#282c34"
    },
  },
  typography: {
    fontFamily: [
      "monospace"
    ],
    fontSize:16


  }
});






function App() {

  const matchesMd = useMediaQuery(theme.breakpoints.up("sm"));


  const useStyles = makeStyles(theme => ({
    appBar: {
      boxShadow: "none",
    },
    homeLink: {
      width: 0
    },
    main: {
      color: "#ffffff",
      minHeight: "100vh",
      backgroundColor: "#282c34"
    },

    title: {
      fontWeight: 700,
      letterSpacing: "0.06em",
      paddingLeft: 8,
    },
    toolBar: {
      width: matchesMd ? "50%" : "90%",
      minWidth: 300,
      maxWidth: 540,
      margin: "auto"
    }

  }));

  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>

      <BrowserRouter>
        <nav>
          <AppBar position="absolute" className={classes.appBar}>
            <Toolbar className={classes.toolBar}>
              <Grid container justify="space-between" alignItems="baseline">
                <Grid item>
                  <Link to="/" color="inherit" >
                    <Typography className={classes.title}>
                      DX8519
                    </Typography>
                  </Link>
                </Grid>
                <Grid item>
                  <Button href={CV} target="_blank">CV</Button>
                  <Link to="/about"><Button>About</Button></Link>
                </Grid>
              </Grid>



            </Toolbar>
          </AppBar>
        </nav>
        <main className={classes.main}>
          <Route exact path="/" component={() => <Home/>} />
          <Route path={process.env.PUBLIC_URL + "/about"} component={() => <About/>} />
        </main>



      </BrowserRouter>
    </ThemeProvider>


  );
}

export default App;
