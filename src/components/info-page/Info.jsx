import "./info.scss";
import { CompanyButton } from "../CompanyButton";
import { Button } from "../Button";

export const Info = (props) => {
  const choiceVacancy = props.jobsData[props.jobIndex];
  const logo = choiceVacancy.logo.slice(2, 100);

  const list = choiceVacancy.requirements.items.map((item, index) => {
    return (
      <li className="list" key={index}>
        <span key={index}>{item}</span>
      </li>
    );
  });

  const numberList = choiceVacancy.role.items.map((item, index) => {
    return (
      <li className="orderList" key={index}>
        <span>{item}</span>
      </li>
    );
  });

  return (
    <>
      <div className="info-container">
        <div className="info-center-box">
          <div className="info-header">
            <div
              className="logo-box"
              style={{
                background: choiceVacancy.logoBackground,
              }}
            >
              <img
                className="info-logo"
                src={`/src/components/${logo}`}
                alt=""
              />
            </div>
            <div className="company-name-position">
              <div className="company-name-box">
                <h1 className="company-title">{choiceVacancy.company}</h1>
                <p className="company-web">{choiceVacancy.company}.com</p>
              </div>
              <div className="header-button">
                <CompanyButton />
              </div>
            </div>
          </div>

          <div className="info-page-container">
            <div className="posted-at_contract">
              <p>{choiceVacancy.postedAt}</p>
              <span className="dot">&#x2022;</span>
              <p>{choiceVacancy.contract}</p>
            </div>
            <div className="position_button">
              <div className="position_location">
                <h1>{choiceVacancy.position}</h1>
                <p>{choiceVacancy.location}</p>
              </div>
              <Button name={"Apply Now"} />
            </div>
            <p className="description">{choiceVacancy.description}</p>

            <h3 className="requirements">Requirements</h3>

            <p className="content">{choiceVacancy.requirements.content}</p>

            <ul>{list}</ul>

            <h3 className="will-do">What You Will Do</h3>

            <p className="role">{choiceVacancy.role.content}</p>
            <ol>{numberList}</ol>
          </div>
        </div>
        <footer>
          <div className="footer-center-box">
            <div className="position_digital">
              <h3>{choiceVacancy.position}</h3>
              <p>So Digital Inc.</p>
            </div>
            <Button name={"Apply Now"} />
          </div>
        </footer>
      </div>
    </>
  );
};
