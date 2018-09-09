import React from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import firstSlideLogo from "../img/first_slide_logo.png";
import playImage from "../img/play.png";
import mediaMp4 from "../img/media/Relaxation.mp4";
import mediaWbm from "../img/media/Relaxation.webm";

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
  },
  video: {
    width: "100% !important",
    height: "100% !important",
    position: "absolute",
    top: "0",
    opacity: "0.14"
  },
  gridCont: {
    height: "100vh"
  }
});
const FirstPage = props => {
  const { classes } = props;
  return (
    <div className="section first-section">
      <div className="video-container">
        <div className="vid-filter">
          <Grid
            container
            className={classes.gridCont}
            alignItems="center"
            justify="flex-start"
          >
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
        <video className={classes.video} autoPlay muted loop controls>
          <track
            default
            kind="subtitles"
            srcLang="en"
            src="/media/examples/stream_of_water.vtt"
          />
          <source src={mediaMp4} type="video/mp4" />Your browser does not
          support the video tag. I suggest you upgrade your browser.
          <source src={mediaWbm} type="video/webm" />Your browser does not
          support the video tag. I suggest you upgrade your browser.
        </video>
      </div>
    </div>
  );
};

FirstPage.propTypes = {
  classes: PropTypes.shape({
    styles: PropTypes.object
  }).isRequired
};

export default withStyles(styles)(FirstPage);
