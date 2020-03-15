import React from 'react';
import './App.css';
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./Home";
import {AppBar, Button, createMuiTheme, Toolbar, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {ThemeProvider} from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
  appBar: {
    boxShadow: "none",
  },
  title: {
    flexGrow: 1,
    fontWeight: 700,
    letterSpacing: "0.06em",

  },
  toolBar: {
    width: "50%",
    minWidth: 320,
    maxWidth: 1080,
    margin: "auto"
  }
}));

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

  const classes = useStyles();

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <nav>
          <AppBar position="absolute" className={classes.appBar}>
            <Toolbar className={classes.toolBar}>
              <Typography className={classes.title}>
                DX8519
              </Typography>
              <Button>About</Button>
              <Button>CV</Button>
            </Toolbar>
          </AppBar>
        </nav>
        <main>
          <Route exact path="/">
            <Home />
          </Route>
        </main>
      </ThemeProvider>



    </BrowserRouter>

  );
}

export default App;
