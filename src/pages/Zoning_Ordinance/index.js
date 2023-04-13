import React, { Fragment } from "react";
// import Banner from "sections/banner";
import CommonPage from "sections/commonPage";
import image1 from "assets/cta-2-1.png";

const LandTiitleSurvey = () => {
let title = "It's Free!"
let text = "As part of our Beta release the basic services we provide our completly free."
let image = image1

  return (
    <Fragment>
      <CommonPage title={title} text={text} image={image} />
    </Fragment>
  );
};

export default LandTiitleSurvey;
