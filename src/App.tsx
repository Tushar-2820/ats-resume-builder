import Header from "./layouts/Headers";
import {
  JobDescription,
  PersonalInformation,
  Skills,
  Experience,
  Project,
  Education,
  Achievements,
  Certifications,
  GenerateButton,
  ErrorPopUp,
} from "./components";

function App() {
  return (
    <>
      <Header />
      <JobDescription />
      <PersonalInformation />
      <Skills />
      <Experience />
      <Project />
      <Education />
      <Achievements />
      <Certifications></Certifications>
      <GenerateButton></GenerateButton>
      <ErrorPopUp />
    </>
  );
}

export default App;
