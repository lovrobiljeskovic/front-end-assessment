import React, { Fragment } from "react";
import Header from "./components/header";
import Sidebar from "./sidebar";
import Heading from "./components/heading";
import Leaderboard from "./components/leaderboard";

const App = () => {
  return (
    <Fragment>
      <Header />
      <Heading />
      <Leaderboard />
    </Fragment>
  );
};

export default App;
