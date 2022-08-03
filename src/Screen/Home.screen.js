import styled from "@emotion/styled";
import React from "react";
import { Headings, Paragraph, SubHeadings } from "../UI/Typography";
import ActionsComponent from "../Components/ActionsComp/Actions.comp";

const HomeScreen = () => {
  return (
    <Wrapper>
      <Greetings>
        <Headings>Good Morning ! Yogesh</Headings>
        <Paragraph>Rent All the Bikes available now.</Paragraph>
      </Greetings>
      <ActionsComponent />
    </Wrapper>
  );
};

const Wrapper = styled.div({});
const Greetings = styled.div({});

export default HomeScreen;
