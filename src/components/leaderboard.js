import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table } from "reactstrap";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  table {
    width: 50%;
  }
  @media only screen and (max-width: 600px) {
    /* Force table to not be like tables anymore */
    table,
    thead,
    tbody,
    th,
    td,
    tr {
      display: block;
    }

    /* Hide table headers (but not display: none;, for accessibility) */
    thead tr {
      position: absolute;
      top: -9999px;
      left: -9999px;
    }

    tr {
      border: 1px solid #ccc;
    }

    td {
      /* Behave  like a "row" */
      border: none;
      border-bottom: 1px solid #eee;
      position: relative;
      word-break: break-all;
    }

    td:before {
      /* Now like a table header */
      position: absolute;
      /* Top/left values mimic padding */
      top: 6px;
      left: 6px;
      width: 45%;
      padding-right: 10px;
      white-space: nowrap;
    }
  }
`;

const Leaderboard = () => {
  const [data, setData] = useState({ results: [] });

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        "https://api.apy.vision/currentLPCount/0x6555c79a8829b793F332f1535B0eFB1fE4C11958/0x9e71bc8eea02a63969f509818f2dafb9254532904319f9dbda79b67bd34a5f3d/0x7084f5476618d8e60b11ef0d7d3f06914655adb8793e28ff7f018d4c76d505d5/11407437"
      );

      setData(result.data);
    };

    fetchData();
  }, []);

  const sorted = data?.results.sort((a, b) => (a.amount < b.amount ? 1 : -1));
  console.log("sorted", sorted);
  return (
    <Container>
      <h1>Current leaderboard</h1>
      <Table>
        <tbody>
          {sorted.map((result, idx) => {
            return (
              <tr>
                <th scope="row">{idx + 1}</th>
                <td>Address: {result.address}</td>
                <td>{result.amount} %</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Container>
  );
};

export default Leaderboard;
