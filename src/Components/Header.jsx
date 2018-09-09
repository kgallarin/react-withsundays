import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";
import Typography from "@material-ui/core/Typography";
import downloadIcon from "../img/download_icon.png";
import playLogo from "../img/logo.png";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  navBar: {
    background: theme.palette.background.header
  },
  button: {
    margin: "0",
    borderRadius: "0"
  },
  lastChildBtn: {
    marginLeft: "auto"
  },
  nav: {
    maxWidth: "960px",
    margin: "0 auto"
  },
  downloadBtn: {
    background: theme.palette.primary.dark,
    borderRadius: theme.spacing.unit * 2
  },
  icon: {
    margin: `0 ${theme.spacing.unit}px 0 3px`,
    height: "10px",
    width: "12px"
  }
});

const Header = props => {
  const { classes, pageAnchors, fullPage } = props;
  return (
    <div className={classes.root}>
      <AppBar className={classes.navBar} position="fixed" color="default">
        <Toolbar>
          <Hidden>
            <Grid
              className={`${classes.nav} navElem`}
              alignItems="center"
              container
            >
              <Grid item>
                <Button
                  disableRipple
                  className={`${classes.nav} btnLogo`}
                  onClick={() => {
                    fullPage.moveTo(pageAnchors[0], 0);
                  }}
                >
                  <Typography>
                    <img src={playLogo} alt="play" />
                  </Typography>
                </Button>
              </Grid>
              <Grid item data-anchor={pageAnchors[1]}>
                <Button
                  className={classes.button}
                  onClick={() => {
                    fullPage.moveTo(pageAnchors[1], 0);
                  }}
                >
                  Background & Challenge
                </Button>
              </Grid>
              <Grid item>
                <Button
                  className={classes.button}
                  onClick={() => {
                    fullPage.moveTo(pageAnchors[2], 0);
                  }}
                >
                  <Typography>Solutions</Typography>
                </Button>
              </Grid>
              <Grid item>
                <Button className={classes.button}>
                  <Typography>Results and Effectiveness</Typography>
                </Button>
              </Grid>
              <Grid item>
                <Button
                  className={classes.button}
                  onClick={() => {
                    fullPage.moveTo(pageAnchors[3], 0);
                  }}
                >
                  <Typography>Slideshow</Typography>
                </Button>
              </Grid>
              <Grid item className={classes.lastChildBtn}>
                <Button className={`${classes.button} ${classes.downloadBtn}`}>
                  <Typography>
                    <img
                      src={downloadIcon}
                      className={classes.icon}
                      alt="download"
                    />
                    Download Board
                  </Typography>
                </Button>
              </Grid>
            </Grid>
          </Hidden>
        </Toolbar>
      </AppBar>
    </div>
  );
};

Header.propTypes = {
  classes: PropTypes.shape({
    root: PropTypes.object,
    navBar: PropTypes.object,
    button: PropTypes.object,
    lastChildBtn: PropTypes.object,
    nav: PropTypes.object,
    downloadBtn: PropTypes.object,
    icon: PropTypes.object
  }).isRequired,
  pageAnchors: PropTypes.shape({
    ["firstPage"]: PropTypes.string,
    ["seconPage"]: PropTypes.string,
    ["thirdPage"]: PropTypes.string,
    ["fourthPage"]: PropTypes.string
  }).isRequired,
  fullPage: PropTypes.func.isRequired
};

export default withStyles(styles)(Header);
