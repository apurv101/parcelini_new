import React, { Fragment } from "react";
// import Banner from "sections/banner";
import CommonPage from "sections/commonPage";
import image1 from "assets/boost-1-1.png";

const LandTiitleSurvey = () => {
let title = "Perform standard practices with ease and efficiency"
let text = "Reduce costs and time. Keep your customers happy"
let image = image1

  return (
    <Fragment>
      <CommonPage title={title} text={text} image={image} />
    </Fragment>
  );
};

export default LandTiitleSurvey;
