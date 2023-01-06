import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import LeaderboardMain from "./pages/LeaderboardMain";
import Metaverse from "./pages/Metaverse";
import Projects from "./pages/Projects";

function App() {
  
  return (
    <>
      <Header></Header>
      <Routes>
        <Route element={<Home />} path="/"></Route>
        <Route element={<Metaverse />} path="/metaverse-nft"></Route> 
        <Route element={<Projects />} path="/projects"></Route>
        <Route element={<LeaderboardMain/>} path="/leaderboard"></Route>
      
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
