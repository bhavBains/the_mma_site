import React, { Component } from "react";

class ActivateDarkMode extends Component {
  toggleDarkMode() {
    const darkMode = localStorage.getItem("darkMode");
    if (darkMode === "enabled") {
      document.body.classList.remove("dark-mode");
      document.querySelector(".dark-mode-icon").classList.remove("active-dark");
      localStorage.setItem("darkMode", "disabled");
    } else if (darkMode === "disabled") {
      document.body.classList.add("dark-mode");
      document.querySelector(".dark-mode-icon").classList.add("active-dark");
      localStorage.setItem("darkMode", "enabled");
    }
  }

  componentDidMount() {
    const darkMode = localStorage.getItem("darkMode");
    // check for darkMode object in local storage if any
    if (!darkMode) {
      localStorage.setItem("darkMode", "enabled");
    }
    if (darkMode === "enabled") {
      document.body.classList.add("dark-mode");
      // change the icons
      document.querySelector(".dark-mode-icon").classList.add("active-dark");
    } else if (darkMode === "disabled") {
      document.body.classList.remove("dark-mode");
      // change the icons
      document.querySelector(".dark-mode-icon").classList.remove("active-dark");
    }
  }

  render() {
    return (
      <div>
        <div className="dark-mode-icon my-3">
          <div onClick={this.toggleDarkMode}>
            <i className="fas fa-cloud-sun light-sun"></i>
            <i className="fas fa-cloud-moon dark-moon"></i>
          </div>
        </div>
      </div>
    );
  }
}

export default ActivateDarkMode;
