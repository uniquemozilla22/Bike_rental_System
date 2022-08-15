import styled from "@emotion/styled";
import React from "react";

const TableComponent = ({ data }) => {
  let Headings = [];
  let value = [];
  data.forEach((data, index) => {
    Headings[index] = Object.keys(data);
  });
  console.log(data);
  return (
    <>
      <Table>
        <TableRow>
          {Headings[0]?.map((heading, index) => (
            <TableHeading key={index}>{heading}</TableHeading>
          ))}
        </TableRow>
        {value?.map((item, index) => (
          <TableRow key={index}>
            {console.log(item)}
            {item.map((tableData, i) => {
              console.log(typeof tableData);
              if (typeof tableData === "object") return "null";
              return <TableData key={index}>{data[Headings[index]]}</TableData>;
            })}
          </TableRow>
        ))}
      </Table>
    </>
  );
};

const Table = styled.table({
  width: "100%",
});

const TableRow = styled.tr({});
const TableData = styled.td({
  padding: "1rem",
});

const TableHeading = styled.th({
  textTransform: "capitalize",
});

export default TableComponent;
