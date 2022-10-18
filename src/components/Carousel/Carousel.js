import React from "react";
import quize from "../../images/quize.png";
import portfolio1 from "../../images/portfolio1.png";
import portfolio2 from "../../images/portfolio2.png";
import AliceCarousel from "react-alice-carousel";
import { Card, CardContainer, TextContainer } from ".";

let items = [
  {
    id: "0",
    img: quize,
    heading: "Take a quiz!",
    title: "Learn and earn $CKB",
  },
  {
    id: "1",
    img: portfolio1,
    heading: "Portfolio 🔥",
    title: "Track your trades in one place, not all over the place",
  },
  {
    id: "2",
    img: portfolio2,
    heading: "Take a quiz!",
    title: "Track your trades in one place, not all over the place",
  },
];

const Carousel = () => {
  const data = items.map((item) => {
    return (
      <CardContainer>
        <Card>
          <img src={item.img} alt="" />
          <TextContainer>
            <p>{item.heading}</p>
            <h2>{item.title}</h2>
          </TextContainer>
        </Card>
      </CardContainer>
    );
  });

  const responsive = {
    0: {
      items: 1,
    },
    512: {
      items: 2,
    },
    768: {
      items: 3,
    },
  };

  return (
    <AliceCarousel
      infinite
      autoPlayInterval={1000}
      animationDuration={1500}
      disableButtonsControls
      // disableDotsControls
      responsive={responsive}
      items={data}
      autoPlay
    />
  );
};

export default Carousel;
