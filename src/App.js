import React from "react";
import "./App.css";
import Blog from "./class-work/cw2/Blog";
import "semantic-ui-css/semantic.min.css";

class App extends React.Component {
  render() {
    return <div className="app">{<Blog />}</div>;
  }
}

export default App;
