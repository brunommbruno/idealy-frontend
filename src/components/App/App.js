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

    this.randomiseIndex = this.randomiseIndex.bind(this);
  }

  componentDidMount() {
    if (!this.props.loaded) {
      this.props.getIdeas();
      console.log("loaded!");
    }
  }

  randomiseIndex() {
    const rndInt = Math.floor(Math.random() * this.props.amount) + 1;
    this.setState({ index: rndInt });
  }

  render() {
    const ideas = this.props.ideas;

    return (
      <div className="app">
        <div className="navbar">
          <a href="#">create your own</a>
        </div>
        {!this.props.loaded ? (
          <img src={loading} alt="loading icon" className="loading" />
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
                  <img alt="thumbs up" src={thumbsUp} />
                  <p style={{ color: ideas[this.state.index].txt_color }}>
                    {ideas[this.state.index].likes}
                  </p>
                </div>
                <div className="user">
                  <img src={at} alt="at icon" />
                  <p style={{ color: ideas[this.state.index].txt_color }}>
                    {ideas[this.state.index].user}
                  </p>
                </div>
              </div>
            </div>
            <div className="randomise">
              <button onClick={() => this.randomiseIndex()}>randomise</button>
            </div>
          </>
        )}
      </div>
    );
  }
}

export default App;
