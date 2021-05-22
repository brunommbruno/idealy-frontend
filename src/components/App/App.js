import { Component } from "react";

class App extends Component {
  componentDidMount() {
    if (!this.props.loaded) {
      this.props.getIdeas();
      console.log("loaded!");
    }
  }

  render() {
    return (
      <div>
        <h2>asd</h2>
      </div>
    );
  }
}

export default App;
