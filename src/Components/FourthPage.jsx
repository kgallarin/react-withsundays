import React from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

const styles = theme => ({
  root: {
    color: "#fff"
  },
  container: {
    maxWidth: "1100px",
    margin: "0 auto"
  },
  display2: {
    color: theme.palette.primary.main,
    marginBottom: "30px"
  },
  display1: {
    color: theme.palette.primary.main
  }
});
const FourthPage = props => {
  const { classes } = props;
  return (
    <div className={`${classes.root} section fourth-section`}>
      <Grid container className={classes.container}>
        <Grid item xs={12}>
          <Typography
            variant="display2"
            align="center"
            classes={{ display2: classes.display2 }}
            gutterBottom
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
                <Typography variant="subheading" paragraph>
                  We knew movies rated high on the list of our target’s
                  interests and, with incredible beaches, seaplanes, yachts and
                  glamorous locations, the Whitsundays is the perfect setting
                  for a movie.
                </Typography>
                <Typography variant="subheading" paragraph>
                  So we invited Australians to write it:
                </Typography>
                <Typography
                  variant="display1"
                  classes={{ display1: classes.display1 }}
                  className={classes.subTitle}
                  gutterBottom
                >
                  The Whitsundays. A movie that’s waiting to be written.
                </Typography>
                <Typography paragraph>
                  We enlisted world-renowned screenwriter Craig Pearce as Script
                  Supervisor. Then for 20 days we posted a daily storyboard
                  image on Facebook and Instagram, inviting the public to write
                  scenes for a chance to win a $10,000 luxury holiday.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item container md={4}>
          <Grid container alignItems="flex-start" justify="flex-end">
            <Grid container direction="column">
              <Grid item>
                <Typography variant="subheading" paragraph>
                  The campaign launched with a trailer, radio and online
                  advertising.
                </Typography>
                <Typography paragraph>
                  We reacted to the storyline as it developed, selecting and
                  treating images according to the previous winning scene.
                </Typography>
                <Typography paragraph>
                  Each scene written and shared became a compelling “ad” for the
                  Whitsundays.
                </Typography>
                <Typography paragraph>
                  Together, a Hollywood screenwriter and the Australian public
                  had created the world’s first crowd-sourced movie storyboard
                  and a story universe with millions of possible permutations.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

FourthPage.propTypes = {
  classes: PropTypes.shape({
    root: PropTypes.string,
    container: PropTypes.string,
    title: PropTypes.string
  }).isRequired
};

export default withStyles(styles)(FourthPage);
