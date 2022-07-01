import React from "react";

const App = () => {
  console.log("ssssss", process.env.REACT_APP_TEST);
  return <div>These value is from .env file {process.env.REACT_APP_TEST}</div>;
};

export default App;
