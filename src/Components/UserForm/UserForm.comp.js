import styled from "@emotion/styled";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { showWarningMessage } from "../../store/Actions/Alert.action";
import Buttons from "../../UI/Buttons";
import Input from "../../UI/Input";

const UserFormComponent = ({ onSubmit, editData }) => {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const [data, setData] = useState(
    editData
      ? editData
      : {
          email: "",
          password: "",
          isManager: false,
        }
  );

  const checkValidation = () => {
    if (data.email !== "" && data.password !== "") {
      onSubmit(!!editData, data);
    } else {
      dispatch(
        showWarningMessage(
          "Validation Error",
          "There are missing parameters in the form."
        )
      );
    }
  };
  return (
    <Form>
      <Input
        type="email"
        onChange={(e) => setData({ ...data, email: e.target.value })}
        value={data.email}
      />
      <Input
        type={showPassword ? "text" : "password"}
        onChange={(e) => setData({ ...data, password: e.target.value })}
        value={data.password}
      />
      <Select
        onChange={(e) => setData({ ...data, isManager: e.target.value })}
        value={data.isManager}
      >
        <Option value={false}>User</Option>
        <Option value={true}>Manager</Option>
      </Select>
      <SeePassword onClick={() => setShowPassword(!showPassword)}>
        {!showPassword ? <VisibilityOff /> : <Visibility />}
        Show Password
      </SeePassword>
      <Buttons type="submit" primary onClick={(e) => checkValidation()}>
        Submit
      </Buttons>
    </Form>
  );
};

const Form = styled.div({
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
});

const Select = styled.select({
  color: "#2b2b2b",
  borderRadius: "0.3rem",
  padding: "1rem",
  border: "1px solid #2b2b2b",
});
const Option = styled.option({});
const SeePassword = styled.div({
  display: "flex",
  gap: "1rem",
  cursor: "pointer",
  ":hover": {
    textDecoration: "underline",
  },
});

export default UserFormComponent;
