import React, { useState, useEffect } from 'react';

// Define the interface for candidate data
interface Candidate {
	avatar: string;
	name: string;
	location: string;
	email: string;
	company: string;
	bio: string;
	reject: boolean;
  }

const CandidateSearch: React.FC = () => {
  // Set up state to hold a candidate; it starts as null until data is fetched
  const [candidate, setCandidate] = useState<Candidate | null>(null);

  // Simulated API call; replace this with your real API function
  const fetchCandidate = async () => {
    // Example candidate data that conforms to the Candidate interface
    const candidateData: Candidate = {
      avatar: 'https://example.com/avatar.jpg',
      name: 'Jane Doe',
      location: 'New York, NY',
      email: 'janedoe@example.com',
      company: 'Tech Corp',
      bio: 'JavaScript obssessed',
      reject: true,
    };
    setCandidate(candidateData);
  };

  // Fetch candidate data when the component mounts
  useEffect(() => {
    fetchCandidate();
  }, []);

  // Render a loading message until candidate data is available
  if (!candidate) return <p>Loading candidate...</p>;

  return (
    <div>
      <h1>Candidate Search</h1>
      <div>
        <img src={candidate.avatar} alt={candidate.name} />
        <h2>{candidate.name}</h2>
        <p>Location: {candidate.location}</p>
        <p>Email: {candidate.email}</p>
        <p>Company: {candidate.company}</p>
          View GitHub Profile
      </div>
    </div>
  );
};

export default CandidateSearch;
