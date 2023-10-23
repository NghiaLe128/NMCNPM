/* eslint-disable array-callback-return */
import React from "react";

import "./Content.css";
import Slider from "./Slider/Slider";
import CardField from "./CardField/CardField";
import TagField from "./TagField/TagField";
import BestSeller from "./BestSeller/BestSeller";

function Content() {
  const isLoading = true
  return (
    <>
        <Slider IsLoading = {isLoading} value = {['','','','','','']}/>
        <CardField IsLoading = {isLoading} value = {['','','','','','','','']}/>
        <TagField IsLoading = {isLoading} value = {['','','','','','']}/>
        <BestSeller IsLoading = {isLoading} value = {['','','','','','','','','','']}/>
        <CardField IsLoading = {isLoading} value = {['','','','']}/>
        <CardField IsLoading = {isLoading} value = {['','','','','','']}/>
    </>
  );
}

export default Content;
