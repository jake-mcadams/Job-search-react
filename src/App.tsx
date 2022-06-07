import "./styles/App.css";
import MainHeader from "./shared/components/Navigation/MainHeader";
import JobSearch from "./Mainsearch/pages/JobSearch";


const App = () => {
  return (
    <>
      <MainHeader />
      <JobSearch />
    </>
  );
};

export default App;
