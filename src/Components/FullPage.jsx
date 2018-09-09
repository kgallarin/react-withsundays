import React, { Fragment } from "react";
import ReactFullPage from "@fullpage/react-fullpage";
import "fullpage.js/vendors/scrolloverflow"; // [eslint] fullpage.js' should be listed in the project's dependencies. Run 'npm i -S fullpage.js' to a
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import Header from "./Header";
import FirstPage from "./FirstPage";
import secondSlideLogo from "../img/second_slide_logo.png";

const fullPageOptions = {
  anchors: ["firstPage", "secondPage", "thirdPage", "fourthPage"],
  callbacks: ["onLeave"],
  scrollOverflow: true,
  navigation: true,
  licenseKey: "null"
};

const FullPageWrapper = props => {
  const { anchors } = props;
  return (
    <ReactFullPage
      {...props}
      render={({ state, fullpageApi }) => {
        console.log("render prop change", state); // eslint-disable-line no-console
        return (
          <Fragment>
            <Header pageAnchors={anchors} fullPage={fullpageApi} />
            <div id="fullpage-wrapper">
              <FirstPage />
              <div id="section2" className="section second-section">
                <Grid
                  container
                  justify="space-evenly"
                  alignItems="stretch"
                  direction="row"
                >
                  <Grid item>
                    <img src={secondSlideLogo} alt="with-sundays" />
                  </Grid>
                  <Grid item>
                    <Grid container direction="column">
                      <Grid item>
                        <Typography variant="display3">
                          Background & Audience
                        </Typography>
                      </Grid>
                      <Grid item>b</Grid>
                      <Grid item>c</Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </div>
              <div className="section">
                <h3>Section 3</h3>
              </div>
              <div className="section">
                <h3>Section 4</h3>
              </div>
            </div>
          </Fragment>
        );
      }}
    />
  );
};

const FullPageWithOptions = () => <FullPageWrapper {...fullPageOptions} />;

export default FullPageWithOptions;
