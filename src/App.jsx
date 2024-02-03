import "./App.scss";
import { Header } from "./components/Header/Header";
import { Jobs } from "./components/jobs/Jobs";
import { Info } from "./components/info-page/Info";
import { useState } from "react";
import data from "./data.json";

function App() {
  const [jobsData, setJobsData] = useState(data);
  const [infoPageOpen, setInfoPageOpen] = useState(false);
  const [contractCheckBox, setContractCheckBox] = useState("");
  const [jobIndex, setJobIndex] = useState();
  const [loadMore, setLoadMore] = useState(false);
  const [nika, setNika] = useState(false);

  return (
    <>
      <Header
        infoPageOpen={infoPageOpen}
        contractCheckBox={contractCheckBox}
        setContractCheckBox={setContractCheckBox}
        jobsData={jobsData}
        setJobsData={setJobsData}
        setLoadMore={setLoadMore}
        setNika={setNika}
        nika={nika}
      />
      {infoPageOpen ? (
        <Info jobIndex={jobIndex} jobsData={jobsData} />
      ) : (
        <Jobs
          setJobIndex={setJobIndex}
          setInfoPageOpen={setInfoPageOpen}
          jobsData={jobsData}
          loadMore={loadMore}
          setLoadMore={setLoadMore}
          nika={nika}
        />
      )}
    </>
  );
}

export default App;
