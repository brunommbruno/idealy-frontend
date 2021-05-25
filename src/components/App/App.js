import { Component } from "react";
import Creator from "../Creator";

import loading from "../../loading.svg";
import thumbsUp from "../../thumbsUp.svg";
import at from "../../at.png";
import ideaSvg from "../../idea.svg";

import { HashRouter, Route, Switch } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      index: 0,
      liked: false,
      likes: 0,
    };

    this.randomiseIndex = this.randomiseIndex.bind(this);
    this.likeIdea = this.likeIdea.bind(this);
  }

  componentDidMount() {
    if (!this.props.loaded) {
      this.props.getIdeas();
      console.log("loaded!");
    }
  }

  likeIdea(id, likes) {
    if (!this.state.liked) {
      this.props.likeIdea({ id: id, likes: likes });
      this.setState({
        liked: true,
        likes: this.props.ideas[this.state.index].likes + 1,
      });
    }
  }

  randomiseIndex() {
    const rndInt = Math.floor(Math.random() * this.props.amount) + 1;
    this.setState({ index: rndInt, liked: false });
  }

  render() {
    const ideas = this.props.ideas;

    return (
      <HashRouter basename="/">
        <>
          <Switch>
            <Route exact path="/">
              <div className="app">
                <div
                  className="likedPopup"
                  style={{ display: this.state.liked ? "block" : "none" }}
                >
                  <p>Liked!</p>
                </div>

                <div className="navbar">
                  <a href="/#/create">create your own</a>
                </div>
                {!this.props.loaded ? (
                  <img src={loading} alt="loading icon" className="loading" />
                ) : (
                  <>
                    <div
                      className="idea-card"
                      style={{
                        backgroundColor: ideas[this.state.index].bk_color,
                      }}
                    >
                      <p
                        className="description"
                        style={{ color: ideas[this.state.index].txt_color }}
                      >
                        {ideas[this.state.index].description}
                      </p>
                      <div
                        style={{
                          display: "flex",
                          margin: "1rem",
                        }}
                      >
                        <div className="likes">
                          <img
                            alt="thumbs up"
                            onClick={() =>
                              this.likeIdea(
                                ideas[this.state.index].id,
                                ideas[this.state.index].likes
                              )
                            }
                            src={thumbsUp}
                          />
                          <p
                            style={{ color: ideas[this.state.index].txt_color }}
                          >
                            {this.state.liked
                              ? this.state.likes
                              : ideas[this.state.index].likes}
                          </p>
                        </div>
                        <div className="user">
                          <img src={at} alt="at icon" />
                          <p
                            style={{ color: ideas[this.state.index].txt_color }}
                          >
                            {ideas[this.state.index].user}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="randomise">
                      <button onClick={() => this.randomiseIndex()}>
                        randomise
                      </button>
                    </div>
                  </>
                )}
                <div className="idea-footer">
                  <img src={ideaSvg} alt="idea icon" className="idea-icon" />
                  <p>{this.props.amount}</p>
                </div>
              </div>
            </Route>

            <Route exact path="/create">
              <Creator />
            </Route>
          </Switch>
        </>
      </HashRouter>
    );
  }
}

export default App;
