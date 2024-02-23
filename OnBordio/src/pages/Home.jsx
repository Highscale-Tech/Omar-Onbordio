import React , {useState , useEffect} from "react";
import sendEmail from "../api/SendMailApi";
import Header from "../components/Header";
import Candidates from "../components/Candidates";
import Subjects from "../components/Subjects";
import EmailContent from "../components/EmailContent";
import { useCandidates } from "../api/useCandidates";
import { useSubjects } from "../api/useSubjects";
const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCandidate, setSelectedCandidate] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('');
  const [emailContent, setEmailContent] = useState('');
  const candidates = useCandidates();
  const subjects = useSubjects();
  
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleCandidateSelect = (email) => {
    setSelectedCandidate(email);
  };

  const handleSubjectSelect = (subject) => {
    setSelectedSubject(subject);
    setEmailContent(subject);
  };

  const filteredCandidates = searchTerm.length === 0
  ? candidates
  : candidates.filter(candidate =>
      candidate.email.toLowerCase().includes(searchTerm.toLowerCase())
    );

  return (
  <div>
      <div className="gradient-background min-h-screen">
      <Header />
      <section className="text-center py-10">
        <h2 className="text-3xl font-bold">Boss, no time today?💃</h2>
      </section>
      <main className="container mx-auto px-4">
          <div className="flex flex-wrap -mx-2">
            <Candidates searchTerm={searchTerm} handleSearchChange={handleSearchChange} filteredCandidates={filteredCandidates} handleCandidateSelect={handleCandidateSelect} selectedCandidate={selectedCandidate} />
            
            <Subjects subjects={subjects} handleSubjectSelect={handleSubjectSelect} selectedSubject={selectedSubject} />
  
            <EmailContent emailContent={emailContent} setEmailContent={setEmailContent} selectedCandidate={selectedCandidate} selectedSubject={selectedSubject} sendEmail={sendEmail} />
          </div>
        </main>
    </div>
  </div>
  
  );
};

export default Home;
