import React from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import secondSlideLogo from "../img/second_slide_logo.png";

const styles = theme => ({
  root: {},
  logo: {
    maxHeight: "115px"
  },
  container: {
    maxWidth: "1100px",
    margin: "0 auto"
  },
  title: {
    margin: "25px 0",
    color: theme.palette.primary.main
  }
});

const SecondPage = props => {
  const { classes } = props;
  return (
    <div id="section2" className="section second-section">
      <Grid
        className={classes.container}
        container
        justify="space-evenly"
        alignItems="stretch"
        direction="row"
      >
        <Grid container md={6} alignItems="center" justify="center">
          <img
            src={secondSlideLogo}
            alt="with-sundays"
            className={classes.logo}
          />
        </Grid>
        <Grid alignItems="flex-start" justify="center" container md={6}>
          <Grid container direction="column">
            <Grid item>
              <Typography variant="display2" className={classes.title}>
                Background & Audience
              </Typography>
              <Typography variant="subheading">
                Tourism & Events Queensland wanted to increase consideration of
                The Whitsundays amongst ‘social fun seekers’; digitally savvy
                consumers that socialise substantially online.{" "}
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="display2" className={classes.title}>
                Problem
              </Typography>
              <Typography variant="subheading">
                Tourism & Events Queensland wanted to increase consideration of
                The Whitsundays amongst ‘social fun seekers’; digitally savvy
                consumers that socialise substantially online.{" "}
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="display2" className={classes.title}>
                Objective
              </Typography>
              <Typography variant="subheading">
                Tourism & Events Queensland wanted to increase consideration of
                The Whitsundays amongst ‘social fun seekers’; digitally savvy
                consumers that socialise substantially online.{" "}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

SecondPage.propTypes = {
  classes: PropTypes.shape({
    root: PropTypes.object,
    logo: PropTypes.object,
    container: PropTypes.object,
    title: PropTypes.object
  }).isRequired
};

export default withStyles(styles)(SecondPage);
