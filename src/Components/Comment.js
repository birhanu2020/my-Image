import React, { Component } from "react";
import CommentControl from "./CommentControl";
import { FaRegTrashAlt } from "react-icons/fa";

export default class Comment extends Component {
  render() {
    return (
      <div>
        <div>
          {this.props.title}
          <button onClick={this.props.delete}>
            <FaRegTrashAlt />
          </button>
          <li>
            {this.props.id} {this.props.body}
          </li>
          <CommentControl />
        </div>
      </div>
    );
  }
}
