import "./App.css";
import BlogPost from "./componenet/BlogPost";
import Card from "./componenet/Card";
import Enqiry from "./componenet/Enqiry";
import NavBar from "./componenet/NavBar";
import NewCard from "./componenet/NewCard";
import Wrapper from "./componenet/Wrapper";

function App() {
  return (
    <div>
      <NavBar />
      <Wrapper />
      <Card />
      <NewCard />
      <Enqiry />
      <BlogPost />
    </div>
  );
}

export default App;
