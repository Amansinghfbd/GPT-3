import React from "react";
import "./brand.css";
import { google, slack, dropbox, atlassian, shopify } from "./imports";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Brand = () => {
  return (
    <div className="gpt3__brand section padding">
      <div>
        <LazyLoadImage src={google} alt="google" />
      </div>
      <div>
        <LazyLoadImage src={slack} alt="slack" />
      </div>
      <div>
        <LazyLoadImage src={dropbox} alt="dropbox" />
      </div>
      <div>
        <LazyLoadImage src={atlassian} alt="atlassian" />
      </div>
      <div>
        <LazyLoadImage src={shopify} alt="shopify" />
      </div>
    </div>
  );
};

export default Brand;
