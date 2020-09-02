import React, { Component } from "react";
import Comment from "./Components/Comment";
import "./App.css";

export default class App extends Component {
  state = {
    photoArray: [
      {
        title: <h2 style={styleH2}>The Perfect Date</h2>,
        id: 1,
        body: (
          <img
            id="001"
            src="https://s3.amazonaws.com/learn-verified/perfectDate.png"
            alt=""
          ></img>
        ),
      },
      {
        title: <h2 style={styleH2}>Back-end v. Front-end</h2>,
        id: 2,
        body: (
          <img
            src="https://s3.amazonaws.com/learn-verified/backVFront.jpg"
            alt=""
          ></img>
        ),
      },
      {
        title: <h2 style={styleH2}>Good Programmer</h2>,
        id: 3,
        body: (
          <img
            src="https://s3.amazonaws.com/learn-verified/goodProgrammer.png"
            alt=""
          ></img>
        ),
      },

      {
        title: <h2 style={styleH2}>Need Snek</h2>,
        id: 5,
        body: (
          <img
            src="https://s3.amazonaws.com/learn-verified/needSnekToRun.jpeg"
            alt=""
          ></img>
        ),
      },
      {
        title: <h2 style={styleH2}>Risky Captcha</h2>,
        id: 6,
        body: (
          <img
            src="https://s3.amazonaws.com/learn-verified/hopeThisDoesntDoDmg.jpg"
            alt=""
          />
        ),
      },
      {
        title: <h2 style={styleH2}>Amazon Sync Loader</h2>,
        id: 7,
        body: (
          <img
            src="https://s3.amazonaws.com/learn-verified/syncingByAmazon.gif"
            alt=""
          />
        ),
      },
      {
        title: <h2 style={styleH2}>Just Kidding</h2>,
        id: 8,
        body: (
          <img
            src="https://s3.amazonaws.com/learn-verified/woopsNevermind.png"
            alt=""
          />
        ),
      },
      {
        title: <h2 style={styleH2}>Assembly v. The World</h2>,
        id: 9,
        body: (
          <img
            src="https://s3.amazonaws.com/learn-verified/divideBy10.png"
            alt=""
          />
        ),
      },
    ],
  };

  deleteEvent = (index) => {
    const copyPhotoArray = Object.assign([], this.state.photoArray);
    copyPhotoArray.splice(index, 1);
    this.setState({
      photoArray: copyPhotoArray,
    });
  };

  render() {
    return (
      <div style={styleApp}>
        <ul>
          <h1 style={styleHeader}>My friend list</h1>
          {this.state.photoArray.map((photo, index) => {
            return (
              <Comment
                id={photo.id}
                body={photo.body}
                title={photo.title}
                delete={this.deleteEvent.bind(this, index)}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}
const styleHeader = {
  display: "flex",
  margin: "auto",
  color: "blue",
};
const styleApp = {
  display: "flex",
  width: "50%",
  margin: "0px 0px 0px 1rem",
  position: "center",
};
const styleH2 = {
  background: "#F5F5F5",
  color: "black",
  width: "20%",
};
