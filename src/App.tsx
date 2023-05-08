import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import GlobalStyles from "./components/GlobalStyles";
import GameDetailContainer from "./components/GameDetail";

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/game/:gameId" element={<GameDetailContainer />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
