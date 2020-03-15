import React from "react";
import portrait from "./portrait.jpg";
import Typography from "@material-ui/core/Typography";
import makeStyles from "@material-ui/core/styles/makeStyles";
import classnames from "classnames";
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import IconButton from "@material-ui/core/IconButton";


const PORTRAIT_SIZE = "250";

const useStyles = makeStyles({
  body: {
    textAlign: "center",

  },

  portrait: {
    borderRadius:"50%"
  }

});




export default function Home() {
  const classes=useStyles();
  return (
    <div className="App">
      <div className={classnames("App-container", "App-body", classes.body)}>
        <img src={portrait} alt="portrait" height={PORTRAIT_SIZE} width={PORTRAIT_SIZE} className={classes.portrait}/>
        <Typography variant="h4">
          David Xu
        </Typography>
        <Typography variant="subtitle1">
          Software Engineering Postgraduate
        </Typography>
        <IconButton href="https://github.com/dx8519">
          <GitHubIcon/>
        </IconButton>
        <IconButton href="https://www.linkedin.com/in/david-x-1b885868/">
          <LinkedInIcon/>
        </IconButton>
      </div>




    </div>
  );
}