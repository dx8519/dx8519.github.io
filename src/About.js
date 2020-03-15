import React from "react";
import Typography from "@material-ui/core/Typography";


export default function About() {
  return (
    <div className="App">
      <div className="App-container App-body">
        <Typography variant="h3">
          About
        </Typography>
        <br />
        <Typography>
          Hey there, thanks for visiting my user page.
          <br />
          <br />
          My name is David Xu and I'm a postgraduate software engineering student from The University of Melbourne.
          <br />
          <br />
          Please feel free to view my CV for more information and contact details.
        </Typography>
      </div>

    </div>
  );
}