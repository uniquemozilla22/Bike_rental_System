import styled from "@emotion/styled";
import React from "react";
import ActionsComponent from "../../Components/ActionsComp/Actions.comp";
import { Headings, Paragraph } from "../../UI/Typography";

const ManagerHomeScreen = () => {
  const actionData = [
    {
      name: "Show All Bike Listing",
      link: "./bikes",
      image:
        "https://static.vecteezy.com/system/resources/previews/003/488/175/original/motor-classic-illustration-free-vector.jpg",
      type: "Bikes",
    },
    {
      name: "See All Users",
      link: "./users",
      image:
        "https://cdn.dribbble.com/users/1428985/screenshots/6828417/1.jpg?compress=1&resize=400x300",
      type: "users",
    },
    {
      name: "See New Bookings",
      link: "./bookings",
      image:
        "https://cdn.dribbble.com/users/1428985/screenshots/6828417/1.jpg?compress=1&resize=400x300",
      type: "Bookings",
    },
  ];
  return (
    <Wrapper>
      <Greetings>
        <Headings>Good Morning Manager ! Yogesh</Headings>
        <Paragraph>Rent All the Bikes available now.</Paragraph>
      </Greetings>
      <ActionsComponent data={actionData} />
    </Wrapper>
  );
};
const Wrapper = styled.div({});
const Greetings = styled.div({});
export default ManagerHomeScreen;
