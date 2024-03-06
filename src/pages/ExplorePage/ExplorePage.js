import React, { useState } from 'react';
import './ExplorePage.css';
import jobsData from './jobsData';

function ExplorePage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [displayedJobs, setDisplayedJobs] = useState(jobsData);

  const [hideJobs, setHideJobs] = useState([]);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearch = (event) => {
    event.preventDefault();
  
    const filteredJobs = jobsData.filter((job) =>
    (job.title && job.title.toLowerCase().includes(searchQuery.toLowerCase())) ||
    (job.company && job.company.toLowerCase().includes(searchQuery.toLowerCase())) ||
    (job.location && job.location.toLowerCase().includes(searchQuery.toLowerCase()))
  );
  setDisplayedJobs(filteredJobs);
};
  return (
    <div className="explore-container">
      <form className="search-bar" onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Skill, company, keyword"
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
      <div className="job-listings">
        {displayedJobs.map(job => (
          <div className={`job-card ${hideJobs.includes(job.id) ? 'hide' : ''}`} key={job.id}>
            <h3>{job.title}</h3>
            <p>{job.company}</p>
            <p>{job.location}</p>
            <p>{job.salary}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ExplorePage;
