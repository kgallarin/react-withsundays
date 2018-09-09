import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import SwipeableViews from "react-swipeable-views";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

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
        <Grid container justify="center">
          <Grid item xs={12} sm={6} md={4}>
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
        <SwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={value}
          onChangeIndex={this.handleChangeIndex}
        >
          <TabContainer dir={theme.direction}>
            <Grid container justify="center">
              <Grid item md={10}>
                <Grid
                  className={classes.container}
                  container
                  justify="center"
                  alignItems="stretch"
                  direction="row"
                >
                  <Grid item container md={7}>
                    <Grid container alignItems="center" justify="flex-start">
                      ROW 1
                    </Grid>
                  </Grid>
                  <Grid item container md={3}>
                    <Grid container alignItems="flex-start" justify="flex-end">
                      <Grid container direction="column">
                        <Grid item>tite</Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </TabContainer>
          <TabContainer dir={theme.direction}>
            <Grid container justify="center">
              <Grid item md={10}>
                <Grid
                  className={classes.container}
                  container
                  justify="center"
                  alignItems="stretch"
                  direction="row"
                >
                  <Grid item container md={7}>
                    <Grid container alignItems="center" justify="flex-start">
                      ROW 1
                    </Grid>
                  </Grid>
                  <Grid item container md={3}>
                    <Grid container alignItems="flex-start" justify="flex-end">
                      <Grid container direction="column">
                        <Grid item>tite</Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </TabContainer>
          <TabContainer dir={theme.direction}>
            <Grid container justify="center">
              <Grid item md={10}>
                <Grid
                  className={classes.container}
                  container
                  justify="center"
                  alignItems="stretch"
                  direction="row"
                >
                  <Grid item container md={7}>
                    <Grid container alignItems="center" justify="flex-start">
                      ROW 1
                    </Grid>
                  </Grid>
                  <Grid item container md={3}>
                    <Grid container alignItems="flex-start" justify="flex-end">
                      <Grid container direction="column">
                        <Grid item>tite</Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </TabContainer>
          <TabContainer dir={theme.direction}>
            <Grid container justify="center">
              <Grid item md={10}>
                <Grid
                  className={classes.container}
                  container
                  justify="center"
                  alignItems="stretch"
                  direction="row"
                >
                  <Grid item container md={7}>
                    <Grid container alignItems="center" justify="flex-start">
                      ROW 1
                    </Grid>
                  </Grid>
                  <Grid item container md={3}>
                    <Grid container alignItems="flex-start" justify="flex-end">
                      <Grid container direction="column">
                        <Grid item>tite</Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </TabContainer>
          <TabContainer dir={theme.direction}>
            <Grid container justify="center">
              <Grid item md={10}>
                <Grid
                  className={classes.container}
                  container
                  justify="center"
                  alignItems="stretch"
                  direction="row"
                >
                  <Grid item container md={7}>
                    <Grid container alignItems="center" justify="flex-start">
                      ROW 1
                    </Grid>
                  </Grid>
                  <Grid item container md={3}>
                    <Grid container alignItems="flex-start" justify="flex-end">
                      <Grid container direction="column">
                        <Grid item>tite</Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </TabContainer>
        </SwipeableViews>
      </Fragment>
    );
  }
}

FullWidthTabs.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(FullWidthTabs);
