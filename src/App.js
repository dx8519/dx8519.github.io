import React from 'react';
import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import Home from "./Home";
import {AppBar, Button, createMuiTheme, Toolbar, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {ThemeProvider} from "@material-ui/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import About from "./About";
import Link from '@material-ui/core/Link';


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
    main: {
      color: "#ffffff",
      minHeight: "100vh",
      backgroundColor: "#282c34"
    },
    title: {
      flexGrow: 1,
      fontWeight: 700,
      letterSpacing: "0.06em",

    }
  }));

  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>

      <BrowserRouter>
        <nav>
          <AppBar position="absolute" className={classes.appBar}>
            <Toolbar className="App-container">
              <Typography className={classes.title}>
                <Link href="/" color="inherit">
                DX8519
                </Link>
              </Typography>
              <Button href="/about">About</Button>
              <Button>CV</Button>
            </Toolbar>
          </AppBar>
        </nav>
        <main className={classes.main}>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
        </main>



      </BrowserRouter>
    </ThemeProvider>


  );
}

export default App;
