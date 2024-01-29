import "./jobs.scss";
import data from "/src/data";

export const Jobs = () => {
  const jobsMap = data.map((job, jobIndex) => {
    const dom = job.logo.slice(1, 100);
    return (
      <button
        onClick={() => console.log(jobIndex)}
        className="job-card"
        key={jobIndex}
      >
        <img className="logo" src={`/src/components/jobs${dom}`} alt="" />
        <div className="info">
          <p className="rate">
            5h ago <span>&#183;</span> Full Time
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
        <div className="jobs-center-box">{jobsMap}</div>
      </div>
    </>
  );
};
