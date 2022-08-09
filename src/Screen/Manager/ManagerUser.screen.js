import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { GetAllUsers } from "../../store/Actions/Users.action";

const ManagerUserScreen = () => {
  const dispatch = useDispatch();
  const [userData, setUserData] = useState([]);

  useEffect(() => fetchUsers, []);

  const fetchUsers = async () => {
    const user = await dispatch(GetAllUsers());

    console.log(user);
  };
  return <div>ManagerUserScreen</div>;
};

export default ManagerUserScreen;
