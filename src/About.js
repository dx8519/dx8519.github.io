import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";


export default function About() {
  return (
    <Grid container alignItems="center" className="App">
      <Grid item container justify="center">
        <Grid item>
          <Typography variant="h3">
            About
          </Typography>
          <br />
          <Typography>
            Hey there, thanks for visiting my GitHub user page.
            <br />
            <br />
            My name is David Xu and I'm a postgraduate software engineering student from The University of Melbourne.
            <br />
            <br />
            Please feel free to view my CV for my past experiences and contact details.
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}