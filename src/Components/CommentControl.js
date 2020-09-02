import React, { Component } from "react";

export default class CommentControl extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newComment: "",
      list: [],
    };
  }
  updateInput(key, value) {
    this.setState({ [key]: value });
  }
  //create comment with new id
  addComment() {
    const newComment = {
      id: 1 + Math.random(),
      value: this.state.newComment.slice(),
    };
    //copy of current list of comment
    const list = [...this.state.list];
    // add new comment list
    list.push(newComment);
    //update state with new list and reset a new comment input
    this.setState({ list, newComment: "" });
  }
  deleteComment(id) {
    //copy current list of comment
    const list = [...this.state.list];
    //filter out comment being deleted
    const updatedList = list.filter((comment) => comment.id !== id);
    this.setState({ list: updatedList });
  }

  render() {
    return (
      <div className="App" style={styleComment}>
        <div>
          comment
          <input
            style={this.input}
            type="text"
            placeholder=" Your comment here..."
            value={this.state.newComment}
            onChange={(e) => this.updateInput("newComment", e.target.value)}
          ></input>
          <button onClick={() => this.addComment()}>(+)Add-Comment</button>
          <br />
          <ul>
            {this.state.list.map((comment) => {
              return (
                <li key={comment.id}>
                  {comment.value}
                  <button onClick={() => this.deleteComment(comment.id)}>
                    X
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}
const styleComment = {
  borderColor: "red",
  width: "50%",
  height: "10rem",
};
