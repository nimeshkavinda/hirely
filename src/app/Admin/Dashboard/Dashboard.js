import classNames from "./Dashboard.module.scss";
import { Button } from "antd";
import JobCard from "./JobCard/JobCard";
import CandidateCard from "./CandidateCard/CandidateCard";

const Dashboard = ({ jobs, candidates, showJobs, showCandidates }) => {
  const getPopularJobs = (jobs) => {
    return jobs.sort((a, b) => b.candidates.length - a.candidates.length);
  };

  return (
    <div className={classNames.wrapper}>
      <div className={classNames.stats}>
        <div className={classNames.statItem}>
          <div>Job openings</div>
          <div>{jobs.length}</div>
        </div>
        <div className={classNames.statItem}>
          <div>Candidates applied</div>
          <div>{candidates.length}</div>
        </div>
      </div>
      <div className={classNames.topicWrapper}>
        <div className={classNames.topic}>
          <div>
            <div>Popular job openings</div>
            <div>
              <Button type="link" onClick={showJobs}>
                See all
              </Button>
            </div>
          </div>
          <div className={classNames.jobCardWrapper}>
            {getPopularJobs(jobs)
              ?.slice(0, 6)
              .map((job) => (
                <JobCard
                  id={job.id}
                  title={job.title}
                  noOfApplicants={job.candidates.length}
                  companyLogo={job.company.companyLogo}
                  description={job.description}
                  jobType={job.jobType}
                  modality={job.isRemote === true ? "Remote" : "In-office"}
                  salary={job.salary}
                  industry={job.industry}
                  location={job.location}
                />
              ))}
          </div>
        </div>
        <div className={classNames.topic}>
          <div>
            <div>Latest applicants</div>
            <div>
              <Button type="link" onClick={showCandidates}>
                See all
              </Button>
            </div>
          </div>
          <div className={classNames.candidateCardWrapper}>
            {candidates.slice(0, 6).map((candidate) => (
              <CandidateCard
                key={candidate.uid}
                uid={candidate.uid}
                name={`${candidate.firstName} ${candidate.lastName}`}
                role={candidate.role}
                profilePhoto={candidate.profilePhoto}
                updated={candidate.updated}
                jobs={candidate.jobs}
              />
            ))}
          </div>
        </div>
        <div className={classNames.topic}>
          <div>
            <div>Latest job openings</div>
            <div>
              <Button type="link" onClick={showJobs}>
                See all
              </Button>
            </div>
          </div>
          <div className={classNames.jobCardWrapper}>
            {jobs?.slice(0, 6).map((job) => (
              <JobCard
                id={job.id}
                title={job.title}
                noOfApplicants={job.candidates.length}
                companyLogo={job.company.companyLogo}
                description={job.description}
                jobType={job.jobType}
                modality={job.isRemote === true ? "Remote" : "In-office"}
                salary={job.salary}
                industry={job.industry}
                location={job.location}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
