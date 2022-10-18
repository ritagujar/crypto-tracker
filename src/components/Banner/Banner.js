import React from "react";
import { BannerContainer, Card, CardContainer, TextContainer } from "./index";
import quize from "../../images/quize.png";
import portfolio1 from "../../images/portfolio1.png";
import portfolio2 from "../../images/portfolio2.png";
import Button from "../Button/Button";

const Banner = () => {
  return (
    <BannerContainer className="container">
      <CardContainer>
        <Card>
          <img src={quize} alt="" />
          <TextContainer>
            <p>Take a quiz!</p>
            <h2>Learn and earn $CKB</h2>
          </TextContainer>
        </Card>
        <Card>
          <img src={portfolio1} alt="" />
          <TextContainer>
            <p>Portfolio 🔥</p>
            <h2>Track your trades in one place, not all over the place</h2>
          </TextContainer>
        </Card>
        <Card>
          <img src={portfolio2} alt="" />
          <TextContainer>
            <p>Portfolio</p>
            <h2>LTrack your trades in one place, not all over the place</h2>
          </TextContainer>
        </Card>
      </CardContainer>

      <h1> Top 100 Cryptocurrencies by Market Cap</h1>
      <Button />
    </BannerContainer>
  );
};

export default Banner;
