import React, { Component } from "react";

class NotFound extends Component {
  render() {
    return (
      <div className="not-found">
        <h1>Uh oh! 404 Page Not Found</h1>
        <h2>Back to</h2>
        <a href="/"> Homepage </a>
      </div>
    );
  }
}

export default NotFound;
