import "./jobs.scss";
import { Button } from "../Button";

export const Jobs = (props) => {
  const sliceNumber = props.loadMore ? 15 : 12;

  console.log();
  const jobsMap = props.jobsData.slice(0, sliceNumber).map((job, jobIndex) => {
    const logo = job.logo.slice(1, 100);
    return (
      <button
        onClick={() => {
          props.setJobIndex(jobIndex);
          props.setInfoPageOpen(true);
        }}
        className="job-card"
        key={jobIndex}
      >
        <img className="logo" src={`/src/components/jobs${logo}`} alt="" />
        <div className="info">
          <p className="rate">
            {job.postedAt} <span className="dot">&#x2022;</span> {job.contract}
          </p>
          <h3 className="position">{job.position}</h3>
          <p className="company">{job.company}</p>
        </div>
        <p className="location">{job.location}</p>
      </button>
    );
  });

  return (
    <>
      <div className="jobs-container">
        <div className={`jobs-center-box ${props.nika ? "nika" : ""}`}>
          {jobsMap}
        </div>
        {props.loadMore || (
          <Button onClick={() => props.setLoadMore(true)} name={"Load More"} />
        )}
      </div>
    </>
  );
};
