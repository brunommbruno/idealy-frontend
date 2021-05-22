import { Component } from "react";
import loading from "../../loading.svg";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      index: 0,
    };
  }

  componentDidMount() {
    if (!this.props.loaded) {
      this.props.getIdeas();
      console.log("loaded!");
    }
  }

  render() {
    const ideas = this.props.ideas;

    return (
      <div className="app">
        <div className="navbar">
          <a href="#">create your own</a>
        </div>
        {!this.props.loaded ? (
          <img src={loading} className="loading" />
        ) : (
          <div></div>
        )}
      </div>
    );
  }
}

export default App;
