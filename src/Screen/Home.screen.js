import styled from "@emotion/styled";
import React from "react";
import { Headings, Paragraph, SubHeadings } from "../UI/Typography";
import ActionsComponent from "../Components/ActionsComp/Actions.comp";

const HomeScreen = () => {
  const actionData = [
    {
      name: "Show All Listings",
      link: "./bikes",
      image:
        "https://static.vecteezy.com/system/resources/previews/003/488/175/original/motor-classic-illustration-free-vector.jpg",
      type: "New",
    },
    {
      name: "See my Bookings",
      link: "./",
      image:
        "https://cdn.dribbble.com/users/1428985/screenshots/6828417/1.jpg?compress=1&resize=400x300",
      type: "",
    },
    {
      name: "See my Bookings",
      link: "./",
      image:
        "https://cdn.dribbble.com/users/1428985/screenshots/6828417/1.jpg?compress=1&resize=400x300",
      type: "",
    },
  ];
  return (
    <Wrapper>
      <Greetings>
        <Headings>Good Morning ! Yogesh</Headings>
        <Paragraph>Rent All the Bikes available now.</Paragraph>
      </Greetings>
      <ActionsComponent data={actionData} />
    </Wrapper>
  );
};

const Wrapper = styled.div({});
const Greetings = styled.div({});

export default HomeScreen;
