import styled from "@emotion/styled";
import { Delete, Edit } from "@mui/icons-material";
import { Modal, Tooltip } from "@mui/material";
import React, { useEffect, useState, useMemo } from "react";
import Buttons from "../UI/Buttons";

const TableComponent = ({ data, openModal }) => {
  const [headings, setHeadings] = useState([]);
  const formatData = useMemo(() => {
    let Headings = [];
    data.forEach((user, index) => {
      const { created, ...rest } = user;
      Headings[index] = Object.keys(rest);
    });
    setHeadings([...Headings]);
  }, [data]);

  useEffect(() => formatData, [data, formatData]);

  return (
    <TableContainer>
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
                return (
                  <TableData key={index}>{user[userData].toString()}</TableData>
                );
              })}
              <TableDataActions>
                <Tooltip title={"Edit " + user.email}>
                  <Buttons onClick={(e) => openModal(user)}>
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
    </TableContainer>
  );
};

const Table = styled.table({
  width: "100%",
  borderCollapse: "seperate",
  borderSpacing: "1rem",
  overflowX: "scroll",
});
const TableRow = styled.tr({});
const TableData = styled.td({
  textAlign: "center",
});

const TableContainer = styled.div({
  maxWidth: "100% ",
  overflowX: "scroll",
});
const TableDataActions = styled.td({
  display: "flex",
  gap: "1rem",
  justifyContent: "flex-end",
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
