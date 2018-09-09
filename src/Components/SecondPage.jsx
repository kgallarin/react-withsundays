import React from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import secondSlideLogo from "../img/second_slide_logo.png";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  playContainer: {
    position: "absolute",
    margin: "0 auto",
    width: "100%",
    textAlign: "center"
  },
  logo: {
    margin: "0 20px 0 50px",
    maxWidth: "540px",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      margin: "0",
      padding: "0 15px"
    }
  },
  playImg: {
    width: "100px",
    height: "100px",
    marginTop: "75px"
  }
});

const SecondPage = () => {
  return (
    <div id="section2" className="section second-section">
      <Grid
        container
        justify="space-evenly"
        alignItems="stretch"
        direction="row"
      >
        <Grid item>
          <img src={secondSlideLogo} alt="with-sundays" />
        </Grid>
        <Grid item>
          <Grid container direction="column">
            <Grid item>
              <Typography variant="display3">Background & Audience</Typography>
            </Grid>
            <Grid item>b</Grid>
            <Grid item>c</Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default withStyles(styles)(SecondPage);
