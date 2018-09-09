import React from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import firstSlideLogo from "../img/first_slide_logo.png";
import playImage from "../img/play.png";

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
    margin: "0 20px 0 70px",
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
const FirstPage = props => {
  const { classes } = props;
  return (
    <div className="section first-section">
      <Grid container alignItems="center" justify="flex-start">
        <Grid item>
          <img
            src={firstSlideLogo}
            alt="with-sundays"
            className={classes.logo}
          />
        </Grid>
        <Grid item className={classes.playContainer}>
          <img src={playImage} alt="play" className={classes.playImg} />
        </Grid>
      </Grid>
    </div>
  );
};

FirstPage.propTypes = {
  classes: PropTypes.shape({
    styles: PropTypes.object
  }).isRequired
};

export default withStyles(styles)(FirstPage);
