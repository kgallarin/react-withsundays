import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Carousel from "./Carousel";
import VideoCarousel from "./VideoCarousel";
import Image from "../img/img.jpg";
import Photography from "../img/photography.jpg";
import social from "../img/social.jpg";

function TabContainer({ children, dir }) {
  return (
    <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
      {children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
  dir: PropTypes.string.isRequired
};

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.background.paper
  },
  container: {
    maxWidth: "1100px",
    margin: "0 auto"
  },
  tabContent: {
    background: theme.palette.background.transparent
  },
  navTabContainer: {
    background: theme.palette.transparent
  },
  navTab: {
    borderRadius: "8px",
    background: "rgba(0,0,0,0.0)",
    minWidth: "10px",
    minHeight: "30px",
    padding: "0"
  },
  labelContainer: {
    padding: "0"
  },
  vBtn: {
    background: "#178bc1",
    color: theme.palette.primary.main
  },
  textContainer: {
    marginBottom: "50px"
  }
});

const tabStyle = {
  navTab: {
    borderRadius: "8px",
    background: "rgba(0,0,0,0.0)",
    minWidth: "10px"
  },
  activeNavTab: {
    borderRadius: "8px",
    background: "rgba(0,0,0,0.3)",
    minWidth: "10px"
  }
};

class FullWidthTabs extends React.Component {
  state = {
    value: 0
  };
  getStyle(isActive) {
    // const { classes } = this.props;
    return isActive ? tabStyle.activeNavTab : tabStyle.default_tab;
  }
  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };

  render() {
    const { classes, theme } = this.props;
    const { value } = this.state;
    return (
      <Fragment>
        <div className={classes.root}>
          <Grid container justify="center">
            <Grid item xs={11} md={6} lg={6}>
              <Tabs value={value} onChange={this.handleChange} fullWidth>
                <Tab
                  className={classes.navTab}
                  classes={{
                    labelContainer: classes.labelContainer
                  }}
                  style={this.getStyle(value === 0)}
                  label="Video"
                  selected
                />
                <Tab
                  className={classes.navTab}
                  classes={{
                    labelContainer: classes.labelContainer
                  }}
                  style={this.getStyle(value === 1)}
                  label="Photography"
                />
                <Tab
                  className={classes.navTab}
                  classes={{
                    labelContainer: classes.labelContainer
                  }}
                  style={this.getStyle(value === 2)}
                  label="Social"
                />
                <Tab
                  style={this.getStyle(value === 3)}
                  className={classes.navTab}
                  classes={{
                    root: classes.root,
                    labelContainer: classes.labelContainer
                  }}
                  label="PR"
                />
                <Tab
                  style={this.getStyle(value === 4)}
                  className={classes.navTab}
                  classes={{
                    labelContainer: classes.labelContainer
                  }}
                  label="Radio"
                />
              </Tabs>
            </Grid>
          </Grid>
          {value === 0 && (
            <TabContainer dir={theme.direction}>
              <Grid
                className={classes.container}
                container
                justify="space-evenly"
                alignItems="stretch"
                direction="row"
              >
                <Grid item container md={7}>
                  <Grid container alignItems="center" justify="flex-start">
                    <div className="slider-container">
                      <VideoCarousel />
                    </div>
                  </Grid>
                </Grid>
                <Grid item container md={3}>
                  <Grid container alignItems="flex-start" justify="flex-end">
                    <Grid container direction="column">
                      <Grid item className={classes.textContainer}>
                        A 60 second promotional movie trailer played on TV,
                        online as pre rolls and via Facebook, to promote the
                        movie that was waiting to be written to our movie-loving
                        target audience, and encourage them to enter.
                      </Grid>
                      <Grid item>
                        <Grid container alignItems="flex-end" justify="center">
                          <Button
                            variant="contained"
                            color="primary"
                            className={classes.vBtn}
                          >
                            Primary
                          </Button>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </TabContainer>
          )}
          {value === 1 && (
            <TabContainer dir={theme.direction}>
              <Grid
                className={classes.container}
                container
                justify="space-evenly"
                alignItems="stretch"
                direction="row"
              >
                <Grid item container md={7}>
                  <Grid container alignItems="center" justify="flex-start">
                    <div className="slider-container">
                      <Carousel data={Photography} />
                    </div>
                  </Grid>
                </Grid>
                <Grid item container md={3}>
                  <Grid container alignItems="flex-start" justify="flex-end">
                    <Grid container direction="column">
                      <Grid item className={classes.textContainer}>
                        Shots posted on Facebook and Instagram every day
                        inspired thousands of entries. We reacted to the
                        storyline as it developed in real time, selecting and
                        treating the next image according to the day’s winning
                        scene.
                      </Grid>
                      <Grid item>
                        <Grid container alignItems="flex-end" justify="center">
                          <Button
                            variant="contained"
                            color="primary"
                            className={classes.vBtn}
                          >
                            Primary
                          </Button>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </TabContainer>
          )}
          {value === 2 && (
            <TabContainer dir={theme.direction}>
              <Grid
                className={classes.container}
                container
                justify="space-evenly"
                alignItems="stretch"
                direction="row"
              >
                <Grid item container md={7}>
                  <Grid container alignItems="center" justify="flex-start">
                    <div className="slider-container">
                      <Carousel data={social} />
                    </div>
                  </Grid>
                </Grid>
                <Grid item container md={3}>
                  <Grid container alignItems="flex-start" justify="flex-end">
                    <Grid container direction="column">
                      <Grid item className={classes.textContainer}>
                        The complete movie storyboard showcased the entire
                        story, completely inspired by stunning images captured
                        in the Whitsundays, with all 20 winning scenes
                        accompanying the images.
                      </Grid>
                      <Grid item>
                        <Grid container alignItems="flex-end" justify="center">
                          <Button
                            variant="contained"
                            color="primary"
                            className={classes.vBtn}
                          >
                            Primary
                          </Button>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </TabContainer>
          )}
          {value === 3 && (
            <TabContainer dir={theme.direction}>
              <Grid
                className={classes.container}
                container
                justify="space-evenly"
                alignItems="stretch"
                direction="row"
              >
                <Grid item container md={7}>
                  <Grid container alignItems="center" justify="flex-start">
                    <div className="slider-container">
                      <Carousel data={Image} />
                    </div>
                  </Grid>
                </Grid>
                <Grid item container md={3}>
                  <Grid container alignItems="flex-start" justify="flex-end">
                    <Grid container direction="column">
                      <Grid item className={classes.textContainer}>
                        We enlisted the help of Craig Pearce as script
                        supervisor, who was tasked with choosing the winner each
                        day to ensure the story flowed properly, and providing
                        daily writing tips to encourage people to take part.
                      </Grid>
                      <Grid item>
                        <Grid container alignItems="flex-end" justify="center">
                          <Button
                            variant="contained"
                            color="primary"
                            className={classes.vBtn}
                          >
                            Primary
                          </Button>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </TabContainer>
          )}

          {value === 4 && (
            <TabContainer dir={theme.direction}>
              <Grid
                className={classes.container}
                container
                justify="space-evenly"
                alignItems="stretch"
                direction="row"
              >
                <Grid item container md={7}>
                  <Grid container alignItems="center" justify="flex-start">
                    <div className="slider-container">
                      <VideoCarousel />
                    </div>
                  </Grid>
                </Grid>
                <Grid item container md={3}>
                  <Grid container alignItems="flex-start" justify="flex-end">
                    <Grid container direction="column">
                      <Grid item className={classes.textContainer}>
                        Live reads from NOVA presenters reflected the
                        ever-evolving story of Jake in real time, and encouraged
                        people to get involved to shape the story themselves.
                      </Grid>
                      <Grid item>
                        <Grid container alignItems="flex-end" justify="center">
                          <Button
                            variant="contained"
                            color="primary"
                            className={classes.vBtn}
                          >
                            Primary
                          </Button>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </TabContainer>
          )}
        </div>
      </Fragment>
    );
  }
}

FullWidthTabs.propTypes = {
  classes: PropTypes.object.isRequired, // [eslint] object is forbidden
  theme: PropTypes.object.isRequired // [eslint] object is forbidden
};

export default withStyles(styles, { withTheme: true })(FullWidthTabs);
