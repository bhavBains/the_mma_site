import React, { Component } from "react";

class ActivateDarkMode extends Component {
  toggleDarkMode(event) {
    // activate dark mode
    document.body.classList.toggle("dark-mode");

    // change the icons
    const dark = document.querySelector(".dark-mode-icon");
    dark.classList.toggle("active-dark");
  }

  render() {
    return (
      <div>
        <div className="dark-mode-icon mt-3" onClick={this.toggleDarkMode}>
          <i className="fas fa-cloud-sun light-sun"></i>
          <i className="fas fa-cloud-moon dark-moon"></i>
        </div>
      </div>
    );
  }
}

export default ActivateDarkMode;
