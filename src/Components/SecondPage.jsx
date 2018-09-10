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
    margin: "0 auto",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      margin: "0",
      padding: "0 15px"
    }
  },
  title: {
    margin: "20px 0",
    color: theme.palette.primary.main,
    [theme.breakpoints.down("sm")]: {
      fontSize: "30px"
    }
  }
});

const SecondPage = props => {
  const { classes } = props;
  return (
    <div className="section second-section">
      <Grid
        className={classes.container}
        container
        justify="space-evenly"
        alignItems="stretch"
        direction="row"
      >
        <Grid item container md={5}>
          <Grid container alignItems="center" justify="flex-start">
            <img
              src={secondSlideLogo}
              alt="with-sundays"
              className={classes.logo}
            />
          </Grid>
        </Grid>
        <Grid item container md={5}>
          <Grid container alignItems="flex-start" justify="flex-end">
            <Grid container direction="column">
              <Grid item>
                <Typography variant="display2" className={classes.title}>
                  Background & Audience
                </Typography>
                <Typography variant="subheading" className={classes.subHeading}>
                  Tourism & Events Queensland wanted to increase consideration
                  of The Whitsundays amongst ‘social fun seekers’; digitally
                  savvy consumers that socialise substantially online.{" "}
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="display2" className={classes.title}>
                  Problem
                </Typography>
                <Typography variant="subheading" className={classes.subHeading}>
                  Tourism & Events Queensland wanted to increase consideration
                  of The Whitsundays amongst ‘social fun seekers’; digitally
                  savvy consumers that socialise substantially online.{" "}
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="display2" className={classes.title}>
                  Objective
                </Typography>
                <Typography variant="subheading" className={classes.subHeading}>
                  Tourism & Events Queensland wanted to increase consideration
                  of The Whitsundays amongst ‘social fun seekers’; digitally
                  savvy consumers that socialise substantially online.{" "}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

SecondPage.propTypes = {
  classes: PropTypes.shape({
    root: PropTypes.string,
    logo: PropTypes.string,
    container: PropTypes.string,
    title: PropTypes.string
  }).isRequired
};

export default withStyles(styles)(SecondPage);
