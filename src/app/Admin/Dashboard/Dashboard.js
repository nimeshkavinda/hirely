import classNames from "./Dashboard.module.scss";
import { Button } from "antd";
import JobCard from "./JobCard/JobCard";
import CandidateCard from "./CandidateCard/CandidateCard";

const Dashboard = ({ showJobs, showCandidates }) => {
  return (
    <div className={classNames.wrapper}>
      <div className={classNames.stats}>
        <div className={classNames.statItem}>
          <div>Job openings</div>
          <div>15</div>
        </div>
        <div className={classNames.statItem}>
          <div>Candidates applied</div>
          <div>250</div>
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
            <JobCard />
            <JobCard />
            <JobCard />
            <JobCard />
            <JobCard />
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
            <CandidateCard />
            <CandidateCard />
            <CandidateCard />
            <CandidateCard />
            <CandidateCard />
            <CandidateCard />
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
            <JobCard />
            <JobCard />
            <JobCard />
            <JobCard />
            <JobCard />
            <JobCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
