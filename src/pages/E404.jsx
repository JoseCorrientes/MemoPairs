import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  setCurrentRoundGlobal,
  setDifficultyGlobal,
  setGameBoard,
  setMatrixSizeGlobal,
  setPointsGlobal,
  setRoundsToPlayGlobal,
} from "../redux/dataSlice";

const E404 = () => {
  const dispatch = useDispatch();

  const onRestart = () => {
    dispatch(setMatrixSizeGlobal(0));
    dispatch(setGameBoard([]));
    dispatch(setCurrentRoundGlobal(0));
    dispatch(setDifficultyGlobal(0));
    dispatch(setPointsGlobal(null));
    dispatch(setRoundsToPlayGlobal(0));
  };

  return (
    <div className="flex flex-col justify-center items-center w-full h-full bg-blue-300 border-2 border-black">
      <div className="flex text-center flex-col p-8 border-2 border-blue-200 bg-blue-300 shadow-lg shadow-zinc-800">
        <h1 className="text-center text-black text-2xl font-mono mb-5">
          Page Not Found!
        </h1>
        <Link
          className="text-center p-4 mb-2 w-full border-2 border-blue-400  text-white bg-blue-400 rounded-lg hover:bg-blue-700 hover:border-blue-700"
          onClick={onRestart}
          to="/"
        >
          RESTART
        </Link>
      </div>
    </div>
  );
};

export default E404;
