/* eslint-disable array-callback-return */
import React from "react";

import "./Content.css";
import Slider from "./Slider/Slider";
import CardField from "./CardField/CardField";
import TagField from "./TagField/TagField";
import BestSeller from "./BestSeller/BestSeller";

function Content() {
  return (
    <>
        <Slider/>
        <CardField/>
        <TagField/>
        <BestSeller/>
        <CardField/>
        <CardField/>
    </>
  );
}

export default Content;
