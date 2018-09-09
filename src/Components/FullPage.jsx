import React, { Fragment } from "react";
import ReactFullPage from "@fullpage/react-fullpage";
import "fullpage.js/vendors/scrolloverflow";

import Header from "./Header";
import FirstPage from "./FirstPage";
import ThirdPage from "./ThirdPage";

import SecondPage from "./SecondPage";
import FourthPage from "./FourthPage";

const fullPageOptions = {
  anchors: ["video", "challenge", "solutions", "slideshow"],
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
        console.log("render prop change", state); //eslint-disable-line no-console
        return (
          <Fragment>
            <Header pageAnchors={anchors} fullPage={fullpageApi} />
            <div id="fullpage-wrapper">
              <FirstPage />
              <SecondPage />
              <ThirdPage />
              <FourthPage />
            </div>
          </Fragment>
        );
      }}
    />
  );
};

const FullPageWithOptions = () => <FullPageWrapper {...fullPageOptions} />;

export default FullPageWithOptions;
