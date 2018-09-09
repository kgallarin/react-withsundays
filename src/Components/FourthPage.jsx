import React from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import Tabs from "./Tabs";

const styles = theme => ({
  root: {
    color: "#fff"
  },
  container: {
    maxWidth: "1100px",
    margin: "0 auto"
  }
});
const FourthPage = props => {
  const { classes } = props;
  return (
    <div className={`${classes.root} section fourth-section`}>
      <Grid
        container
        justify="space-evenly"
        alignItems="stretch"
        direction="row"
      >
        <Grid item xs={12}>
          <Tabs />
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
