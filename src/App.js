import React from 'react';
import './App.css';
import {HashRouter, Link, Route} from "react-router-dom";
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
      "Inter",
      "-apple-system",
      "BlinkMacSystemFont",
      "Roboto",
      "Segoe UI",
      "Helvetica",
      "Arial",
      "sans-serif"
    ].join(","),
    fontSize:16,
    button: {
      textTransform: 'none'
    }
  }
});






function App() {

  const matchesMd = useMediaQuery(theme.breakpoints.up("md"));


  const useStyles = makeStyles(theme => ({
    appBar: {
      boxShadow: "none",
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
    }

  }));

  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>

      <HashRouter>
        <nav>
          <AppBar position="absolute" className={classes.appBar}>
            <Grid container justify="center">
              <Grid item xs={12} md={10} lg={8} xl={6}>
                <Toolbar>
                  <Grid container justify="space-between" alignItems="center">
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
              </Grid>
            </Grid>

          </AppBar>
        </nav>
        <main className={classes.main}>
          <Grid container justify="center">
            <Grid item xs={10} md={9} lg={8} xl={6}>
              <Route exact path="/" component={() => <Home/>} />
              <Route path={process.env.PUBLIC_URL + "/about"} component={() => <About/>} />
            </Grid>
          </Grid>
        </main>



      </HashRouter>
    </ThemeProvider>


  );
}

export default App;
