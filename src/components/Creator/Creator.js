import { Component } from "react";

class Creator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      bk_color: "lightblue",
      description: "",
      user: "",
    };

    this.handleBk_color = this.handleBk_color.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  handleBk_color(color) {
    this.setState({ bk_color: color });
  }

  handleInput(e, name) {
    let obj = {};
    obj[name] = e.currentTarget.value;
    this.setState(obj);
  }

  render() {
    return (
      <div className="creator">
        <div className="navbar">
          <a href="/#/">choose an idea</a>
        </div>
        <div
          className="idea-card"
          style={{
            backgroundColor: this.state.bk_color,
          }}
        >
          <input
            style={{
              color: "white",
              backgroundColor: "transparent",
              width: "95%",
              height: "4rem",
              fontWeight: "bold",
              border: "2px solid #4c9bb6",
            }}
            value={this.state.description}
            onChange={(e) => this.handleInput(e, `description`)}
          />
          <div
            style={{ display: "flex", marginTop: "0rem", fontWeight: "bold" }}
          >
            <p>by: </p>
            <input
              style={{
                color: "white",
                backgroundColor: "transparent",
                border: "2px solid #4c9bb6",
                width: "40%",
                height: "1rem",
                fontWeight: "bold",
                marginTop: "1rem",
                marginLeft: "0.5rem",
              }}
              value={this.state.user}
              onChange={(e) => this.handleInput(e, `user`)}
            />
          </div>
          <div
            className="creator-colors"
            style={{ display: "flex", marginTop: "0.5rem" }}
          >
            <button
              style={{ backgroundColor: "lightblue" }}
              onClick={() => this.handleBk_color("lightblue")}
            />
            <button
              style={{ backgroundColor: "#7fc72c" }}
              onClick={() => this.handleBk_color("#7fc72c")}
            />
            <button
              style={{ backgroundColor: "#e35db6" }}
              onClick={() => this.handleBk_color("#e35db6")}
            />
            <button
              style={{ backgroundColor: "#e3735f" }}
              onClick={() => this.handleBk_color("#e3735f")}
            />
            <button
              style={{ backgroundColor: "#e3da5f" }}
              onClick={() => this.handleBk_color("#e3da5f")}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Creator;