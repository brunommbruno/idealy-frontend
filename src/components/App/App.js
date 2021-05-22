import { Component } from "react";
import loading from "../../loading.svg";

class App extends Component {
  componentDidMount() {
    if (!this.props.loaded) {
      this.props.getIdeas();
      console.log("loaded!");
    }
  }

  render() {
    return (
      <div className="app">
        <div className="navbar">
          <a href="#">create your own</a>
        </div>
        {!this.props.loaded ? (
          <img src={loading} className="loading" />
        ) : (
          <h2>loaded</h2>
        )}
      </div>
    );
  }
}

export default App;
