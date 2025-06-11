import React, { Component } from "react";
import { userContext } from "../App";
class Footer extends Component {
  render() {
    let date = new Date();
    return (
      <footer>
        <userContext.Consumer>
          {({ user }) => {
            return (
              <p>
                {" "}
                copyright{user.name}@{date.getFullYear()}
              </p>
            );
            <p></p>;
          }}
        </userContext.Consumer>
      </footer>
    );
  }
}

export default Footer;
