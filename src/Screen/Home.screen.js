import styled from "@emotion/styled";
import React from "react";
import ActionButtonComponent from "../Components/ActionsButtons.comp";
import { Headings, Paragraph, SubHeadings } from "../UI/Typography";
import getBikes from "../Image/getbikes.png";

const HomeScreen = () => {
  return (
    <Wrapper>
      <Greetings>
        <Headings>Good Morning ! Yogesh</Headings>
        <Paragraph>Rent All the Bikes available now.</Paragraph>
      </Greetings>

      <Actionscontainer>
        <ActionButtonComponent
          title={"Get Lists"}
          action={() => console.log("done")}
          image={getBikes}
        />
        <ActionButtonComponent
          title={"See My Bookings"}
          action={() => console.log("done")}
          image={
            "https://static.vecteezy.com/system/resources/previews/003/488/175/original/motor-classic-illustration-free-vector.jpg"
          }
        />
      </Actionscontainer>
    </Wrapper>
  );
};

const Wrapper = styled.div({});
const Greetings = styled.div({});

const Actionscontainer = styled.div({
  margin: "3rem 0",
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  gap: "2rem",
});

export default HomeScreen;
