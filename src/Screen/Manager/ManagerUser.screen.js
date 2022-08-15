import styled from "@emotion/styled";
import React, { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import TableComponent from "../../Components/Table.comp";
import { GetAllUsers } from "../../store/Actions/Users.action";
import Buttons from "../../UI/Buttons";
import { Headings, SubHeadings } from "../../UI/Typography";

const ManagerUserScreen = () => {
  const [usersData, setUserData] = useState([]);

  const dispatch = useDispatch();

  const fetchData = useCallback(async () => {
    const data = await dispatch(GetAllUsers());
    setUserData([...data]);
  }, [dispatch]);

  useEffect(() => fetchData, [fetchData]);

  return (
    <>
      <TitleWrapper>
        <Headings>Users</Headings>
        <Buttons primary>Add Users</Buttons>
      </TitleWrapper>
      {usersData ? (
        <TableComponent data={usersData} />
      ) : (
        <SubHeadings>Loading...</SubHeadings>
      )}
    </>
  );
};

const TitleWrapper = styled.div({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

export default ManagerUserScreen;
