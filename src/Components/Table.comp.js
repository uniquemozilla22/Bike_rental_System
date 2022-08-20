import styled from "@emotion/styled";
import { Delete, Edit, EditAttributesOutlined } from "@mui/icons-material";
import { MenuItem, Select, Tooltip } from "@mui/material";
import React, { useEffect, useState } from "react";
import Buttons from "../UI/Buttons";

const TableComponent = ({ data }) => {
  const [headings, setHeadings] = useState([]);
  console.table(data);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const formatData = () => {
    let Headings = [];
    data.forEach((user, index) => {
      const { created, ...rest } = user;
      Headings[index] = Object.keys(rest);
    });
    setHeadings([...Headings]);
  };

  useEffect(() => formatData(), [data, formatData]);

  return (
    <>
      <Table>
        <TableRow>
          <TableHeadingIndex> S.N </TableHeadingIndex>
          {headings[0]?.map((heading, index) => (
            <TableHeading key={index}>{heading}</TableHeading>
          ))}
          <TableHeadingActions>Actions</TableHeadingActions>
        </TableRow>
        {data.map((user, i) => {
          return (
            <TableRow key={i}>
              <TableDataIndex>{i}</TableDataIndex>
              {headings[0]?.map((userData, index) => {
                if (typeof user[userData] === "boolean") {
                  console.log(user[userData]);
                  return (
                    <TableData key={index}>
                      <Selection>
                        <option value={user[userData]}>
                          {user[userData].toString()}
                        </option>
                        <option value={!user[userData]}>
                          {(!user[userData]).toString()}
                        </option>
                      </Selection>
                    </TableData>
                  );
                } else {
                  return <TableData key={index}>{user[userData]}</TableData>;
                }
              })}
              <TableDataActions>
                <Tooltip title={"Edit " + user.email}>
                  <Buttons>
                    <Edit />
                  </Buttons>
                </Tooltip>
                <Tooltip title={"Delete " + user.email}>
                  <Buttons>
                    <Delete />
                  </Buttons>
                </Tooltip>
              </TableDataActions>
            </TableRow>
          );
        })}
      </Table>
    </>
  );
};

const Table = styled.table({
  width: "100%",
  borderCollapse: "seperate",
  borderSpacing: "1rem",
});
const TableRow = styled.tr({});
const TableData = styled.td({
  textAlign: "center",
});
const TableDataActions = styled.td({
  display: "flex",
  gap: "1rem",
  justifyContent: "flex-end",
});

const Selection = styled.select({
  padding: "1rem",
  textTransform: "capitalize",
  alignContent: "interit",
  width: "100%",
  "& option": {
    padding: "1rem",
  },
});
const TableDataIndex = styled.td({
  textAlign: "start",
});
const TableHeadingActions = styled.th({
  textAlign: "end",
  textTransform: "capitalize",
});

const TableHeading = styled.th({
  textTransform: "capitalize",
  textAlign: "center",
  "& td:first-child": {
    textAlign: "start",
  },
});
const TableHeadingIndex = styled.th({
  textTransform: "capitalize",
  textAlign: "start",
});
export default TableComponent;
