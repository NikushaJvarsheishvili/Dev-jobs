import "./header.scss";
import decoration1 from "../../assets/header-decoration.svg";
import decoration2 from "../../assets/header-decoration2.svg";
import decoration3 from "../../assets/header-decoration3.svg";
import iconTitle from "../../assets/icon-title.svg";
import iconSun from "../../assets/icon-sun.svg";
import searchIcon from "../../assets/icon-search.svg";
import locationIcon from "../../assets/icon-location.svg";
import { Button } from "../Button";
import { useState } from "react";
import data from "/src/data";

export const Header = (props) => {
  const [theme, setTheme] = useState(false);

  const setDarkMode = () => {
    document.querySelector("body").setAttribute("data-theme", "dark");
  };

  const setLightMode = () => {
    document.querySelector("body").setAttribute("data-theme", "light");
  };

  const toggleTheme = () => {
    setTheme(!theme);
    if (!theme) setDarkMode();
    else setLightMode();
  };

  const contractFilter = (e) => {
    props.setNika(!props.nika);
    const filter = props.jobsData.filter((item) => {
      if (item.contract === "Full Time") {
        return true;
      }
    });

    if (e.target.checked) {
      props.setJobsData(filter);
      props.setLoadMore(true);
    } else {
      props.setJobsData(data);
      props.setLoadMore(false);
    }
  };

  return (
    <>
      <div className="header-container">
        <div className="header-bg">
          <img className="first-decoration" src={decoration1} alt="dec1" />
          <img className="second-decoration" src={decoration2} alt="dec2" />
          <img className="third-decoration" src={decoration3} alt="dec3" />
        </div>
        <div className="bg-container">
          <div className="header-center">
            <a href="">
              <img src={iconTitle} alt="title" />
            </a>

            <div className="theme-container">
              <img src={iconSun} />
              <button className="darkLight-container" onClick={toggleTheme}>
                <div className={`ball ${theme ? "switch" : ""}`}></div>
              </button>
              <img
                className="moon"
                src="/src/assets/icons8-moon-64.png"
                alt=""
              />
            </div>
          </div>
          {props.infoPageOpen ? null : (
            <div className="filter-container">
              <div className="search-container">
                <img src={searchIcon} alt="" />
                <input
                  className="search-input"
                  type="text"
                  placeholder="Filter by title, companies, expertise…"
                />
              </div>
              <div className="location-container">
                <img src={locationIcon} alt="" />
                <input
                  className="location-input"
                  type="text"
                  placeholder="Filter by location…"
                />
              </div>
              <div className="rate-container">
                <input
                  type="checkbox"
                  name="contract"
                  value="Full Time"
                  onChange={contractFilter}
                />
                <h3 className="rate-label">Full Time Only</h3>
                <Button name={"Search"} />
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
