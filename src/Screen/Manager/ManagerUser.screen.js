import styled from "@emotion/styled";
import { Modal } from "@mui/material";
import React, { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import TableComponent from "../../Components/Table.comp";
import UserFormComponent from "../../Components/UserForm/UserForm.comp";
import { GetAllUsers, UpdateUser } from "../../store/Actions/Users.action";
import Buttons from "../../UI/Buttons";
import { Headings, SubHeadings } from "../../UI/Typography";

const ManagerUserScreen = () => {
  const [usersData, setUserData] = useState([]);
  const [showUserModal, setShowUserModal] = useState(false);
  const [userModalData, setUserModalData] = useState(null);

  const dispatch = useDispatch();

  const fetchData = useCallback(async () => {
    const data = await dispatch(GetAllUsers());
    setUserData([...data]);
  }, [dispatch]);

  useEffect(() => fetchData, [fetchData]);

  const handleUserModalClose = () => {
    setShowUserModal(false);
    setUserModalData(null);
  };

  const handleUserModalOpen = (data) => {
    if (data) {
      const { id, created, ...rest } = data;
      setUserModalData({ ...rest });
    }
    setShowUserModal(true);
  };

  const onSubmitData = async (edited, data) => {
    if (edited) {
      const update = await dispatch(UpdateUser(userModalData.id, { ...data }));
    } else {
      console.log("New User", data);
    }
  };

  return (
    <>
      <TitleWrapper>
        <Headings>Users</Headings>
        <Buttons primary onClick={(e) => handleUserModalOpen(null)}>
          Add Users
        </Buttons>
      </TitleWrapper>
      {usersData ? (
        <TableComponent data={usersData} openModal={handleUserModalOpen} />
      ) : (
        <SubHeadings>Loading...</SubHeadings>
      )}
      <Modal open={showUserModal} onClose={handleUserModalClose}>
        <ModalContainer>
          <UserFormComponent onSubmit={onSubmitData} editData={userModalData} />
        </ModalContainer>
      </Modal>
    </>
  );
};

const ModalContainer = styled.div({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)",
  background: "#fff",
  width: "50vw",
  padding: "1rem",
  borderRadius: "5px",
});

const TitleWrapper = styled.div({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

export default ManagerUserScreen;
