import { Component, useState } from "react";

import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

class App extends Component {
  // monitors the lifecycle of the state
  state = {
    // person object, with boolean that will help toogle on and off
    Person: {
      fullName: "Thankgod Ikefuama",
      bio: "Student: Software Development at Gomycode",
      imgSrc: "./public/my-profilepics.jpg",
      profession: "Developer",
    },
    shows: false,
    timeElapsed: 0,
  };

  //* lifecycle ends

  // this function helps keep tract when our person object is passed to the DOM
  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({ timeElapsed: this.state.timeElapsed + 1 });
    }, 1000);
  }

  // this does the oppossite of Mount but also clears the timer
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  // this basic function is the foundation for displaying or removing the object from the DOM
  toggleShow = () => {
    this.setState({ shows: !this.state.shows });
  };

  // to send our jsx to the dom
  render() {
    // destructuring of the three properties of state
    const { Person, shows, timeElapsed } = this.state;

    return (
      <div>
        <button onClick={this.toggleShow}>
          {shows ? "Hide Profile" : "Show Profile"}
        </button>
        {shows && (
          <div>
            <h1>{Person.fullName}</h1>
            <p>{Person.bio}</p>
            <img style={{ width: "400px" }} src={Person.imgSrc} alt="Profile" />
            <p>{Person.profession}</p>
          </div>
        )}
        <div>
          <p>Time since component mounted: {timeElapsed} seconds</p>
        </div>
      </div>
    );
  }
}

export default App;
