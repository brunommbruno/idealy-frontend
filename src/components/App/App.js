import { Component } from "react";
import loading from "../../loading.svg";
import thumbsUp from "../../thumbsUp.svg";
import at from "../../at.png";

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
    const amount = this.props.amount;

    return (
      <div className="app">
        <div className="navbar">
          <a href="#">create your own</a>
        </div>
        {!this.props.loaded ? (
          <img src={loading} className="loading" />
        ) : (
          <>
            <div
              className="idea-card"
              style={{ backgroundColor: ideas[this.state.index].bk_color }}
            >
              <p
                className="description"
                style={{ color: ideas[this.state.index].txt_color }}
              >
                {ideas[this.state.index].description}
              </p>
              <div style={{ display: "flex", margin: "1rem" }}>
                <div className="likes">
                  <img src={thumbsUp} />
                  <p style={{ color: ideas[this.state.index].txt_color }}>
                    {ideas[this.state.index].likes}
                  </p>
                </div>
                <div className="user">
                  <img src={at} />
                  <p style={{ color: ideas[this.state.index].txt_color }}>
                    {ideas[this.state.index].user}
                  </p>
                </div>
              </div>
            </div>
            <div className="generate">
              <button>generate</button>
            </div>
          </>
        )}
      </div>
    );
  }
}

export default App;
