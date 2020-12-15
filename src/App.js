import React from "react";
import "./App.css";
import ProductTable from "./class-work/cw1/ProductTable";

class App extends React.Component {
  render() {
    return <div className="app">{<ProductTable />}</div>;
  }
}

export default App;
