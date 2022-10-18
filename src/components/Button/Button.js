import React from "react";
import { ButtonContainer, RightSide, Tags } from ".";
import star from "../../images/star.png";

const Button = () => {
  return (
    <ButtonContainer>
      <Tags>
        {" "}
        <span>
          <img src={star} alt="" />
          Favourites
        </span>
        <span>CryptoCurrencies</span>
        <span>DeFi</span>
        <span>NFTs & Collectibles</span>
      </Tags>
      <RightSide>
        <p>show rows</p>
        <span>100</span>
      </RightSide>
    </ButtonContainer>
  );
};

export default Button;
