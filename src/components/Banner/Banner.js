import React from "react";
import { BannerContainer } from "./index";

import Button from "../Button/Button";
import Carousel from "../Carousel/Carousel";

const Banner = () => {
  return (
    <BannerContainer className="container">
      <Carousel />
      <h1> Top 100 Cryptocurrencies by Market Cap</h1>
      <Button />
    </BannerContainer>
  );
};

export default Banner;
