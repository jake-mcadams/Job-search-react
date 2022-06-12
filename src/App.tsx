import "./styles/App.css";
import MainHeader from "./shared/components/Navigation/MainHeader";
import JobSearch from "./Mainsearch/pages/JobSearch";
import ListingSearch from "./Mainsearch/components/ListingSearch";

// console.count("outside App component");

const App = () => {
  // console.count("inside App component");
  return (
    <>
      <MainHeader />
      {/* <ListingSearch></ListingSearch> */}
      <JobSearch />
    </>
  );
};

export default App;
