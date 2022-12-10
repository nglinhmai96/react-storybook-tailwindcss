import React from "react";
import Button from "./components/Button";
import LineChart from "./components/Chart/LineChart";

const App = () => {
  return (
    <div className="m-3 text-center">
      <Button variant="outlined" label="Click Me!" />
      <div>
        <LineChart />
      </div>
    </div>
  );
};

export default App;
