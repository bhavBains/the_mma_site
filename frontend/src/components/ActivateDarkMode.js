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

  enableDarkMode(mode) {
    // document.body.classList.add("dark-mode");

    localStorage.setItem("darkMode", "enabled");
  }

  disableDarkMode(mode) {
    console.log(mode);
    // document.body.classList.remove("dark-mode");
    localStorage.setItem("darkMode", "disabled");
    console.log(localStorage.getItem("darkMode"));
  }

  componentDidMount() {
    const darkMode = localStorage.getItem("darkMode");
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
        <div className="dark-mode-icon mt-3">
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
