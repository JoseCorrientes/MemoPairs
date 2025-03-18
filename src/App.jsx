import "./App.css";
import MenuInitialOptions from "./pages/Menu.jsx";
import Playground from "./pages/Playground.jsx";
import E404 from "./pages/E404.jsx";
import WinMessage from "./pages/WinMessage.jsx";
import About from "./pages/About.jsx";

import { Routes, Route, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  setClearVisibleCardsIndex,
  setCurrentRoundGlobal,
  setDifficultyGlobal,
  setGameBoard,
  setMatrixSizeGlobal,
  setPointsGlobal,
  setRoundPairsGlobal,
  setRoundsToPlayGlobal,
  setVisibleAtTheSameTime,
} from "./redux/dataSlice.js";

function App() {
  const dispatch = useDispatch();

  const matrixSize = useSelector((state) => state.data.matrixSize);
  const points = useSelector((state) => state.data.points);
  const currentRound = useSelector((state) => state.data.currentRound);
  const rounds = useSelector((state) => state.data.rounds);
  const difficulty = useSelector((state) => state.data.difficulty);

  const onRestart = () => {
    dispatch(setMatrixSizeGlobal(0));
    dispatch(setGameBoard([]));
    dispatch(setCurrentRoundGlobal(0));
    dispatch(setDifficultyGlobal(0));
    dispatch(setPointsGlobal(null));
    dispatch(setRoundsToPlayGlobal(0));
    dispatch(setRoundPairsGlobal(0));
    dispatch(setVisibleAtTheSameTime(0));
    dispatch(setClearVisibleCardsIndex());
  };

  return (
    <div className="box-content justify-start items-center flex flex-col w-screen h-screen bg-black">
      <div className="flex flex-row mt-1 mb-1 p-2 w-full h-auto justify-start items-center bg-blue-600">
        <div className="w-1/6 flex flex-row justify-center">
          <h1 className="text-white text-3xl font-mono">Memo Pairs</h1>
        </div>

        <div className="w-5/6 flex flex-row justify-between ">
          {rounds == 0 && difficulty == 0 && matrixSize == 0 && (
            <Link
              className="ml-20 text-center p-2   w-[200px] border-2 border-blue-400  text-white bg-blue-400 rounded-lg hover:bg-blue-700 hover:border-blue-700"
              to="/about"
            >
              ABOUT ME
            </Link>
          )}

          {matrixSize != 0 && (
            <div className="flex flex-row justify-center items-center ml-20">
              <div className="w-auto flex flex-row justify-center items-center">
                <p className="text-black font-mono text-xl">SCORE:</p>
                <div className="w-4" />
                <span className="text-white text-4xl mr-6 ">{points}</span>
              </div>
              <div className="w-auto flex flex-row justify-center items-center">
                <p className="text-black font-mono text-xl">ROUND:</p>
                <div className="w-4" />
                <span className="text-white text-4xl">
                  {currentRound} / {rounds}{" "}
                </span>
              </div>
            </div>
          )}
          {rounds != 0 && difficulty != 0 && matrixSize != 0 && (
            <Link
              className="text-center p-2   w-[200px] border-2 border-blue-700  text-white bg-blue-700 rounded-lg hover:bg-red-700 hover:border-red-700"
              onClick={onRestart}
              to="/"
            >
              RESTART
            </Link>
          )}
        </div>
      </div>

      <div className="flex flex-row w-full h-full bg-blue-400 justify-center items-center">
        <Routes>
          <Route path="/" element={<MenuInitialOptions />} />
          <Route path="/playground" element={<Playground />} />
          <Route path="/winRound" element={<WinMessage />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<E404 />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
