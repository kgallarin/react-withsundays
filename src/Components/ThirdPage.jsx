import React from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

const styles = theme => ({
  root: {},
  container: {
    maxWidth: "1100px",
    margin: "0 auto"
  },
  title: {
    margin: "25px 0",
    color: theme.palette.primary.main
  }
});
const ThirdPage = props => {
  const { classes } = props;
  return (
    <div className="section third-section">
      <Grid container className={classes.container}>
        <Grid item xs={12}>
          <Typography
            variant="display2"
            className={classes.title}
            align="center"
          >
            Solution
          </Typography>
        </Grid>
      </Grid>
      <Grid
        className={classes.container}
        container
        justify="space-evenly"
        alignItems="stretch"
        direction="row"
      >
        <Grid item container md={6}>
          <Grid container alignItems="flex-start" justify="flex-end">
            <Grid container direction="column">
              <Grid item>
                <Typography variant="subheading">
                  We knew movies rated high on the list of our target’s
                  interests and, with incredible beaches, seaplanes, yachts and
                  glamorous locations, the Whitsundays is the perfect setting
                  for a movie.
                </Typography>
                <Typography variant="subheading">
                  So we invited Australians to write it:
                </Typography>
                <Typography variant="display2">
                  The Whitsundays. A movie that’s waiting to be written.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item container md={6}>
          <Grid container alignItems="flex-start" justify="flex-end">
            <Grid container direction="column">
              <Grid item>
                <Typography variant="display2" className={classes.title}>
                  Problem
                </Typography>
                <Typography variant="subheading">
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

ThirdPage.propTypes = {
  classes: PropTypes.shape({
    root: PropTypes.string,
    container: PropTypes.string,
    title: PropTypes.string
  }).isRequired
};

export default withStyles(styles)(ThirdPage);
