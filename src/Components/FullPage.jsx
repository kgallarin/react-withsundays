import React, { Fragment } from "react";
import ReactFullPage from "@fullpage/react-fullpage";
import "fullpage.js/vendors/scrolloverflow"; // [eslint] fullpage.js' should be listed in the project's dependencies. Run 'npm i -S fullpage.js' to a

import Header from "./Header";
import FirstPage from "./FirstPage";

import SecondPage from "./SecondPage";

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
        console.log("render prop change", state); //eslint-disable-line no-console
        return (
          <Fragment>
            <Header pageAnchors={anchors} fullPage={fullpageApi} />
            <div id="fullpage-wrapper">
              <FirstPage />
              <SecondPage />
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
