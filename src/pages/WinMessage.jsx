import { useDispatch, useSelector } from "react-redux";
import {
  setCurrentRoundGlobal,
  setDifficultyGlobal,
  setGameBoard,
  setMatrixSizeGlobal,
  setPointsGlobal,
  setRoundsToPlayGlobal,
} from "../redux/dataSlice";
import { Link } from "react-router-dom";
import sounds from "../assets/sounds/sounds";
import { Howl } from "howler";
import backgroundimage from "../assets/wallpaper/wallpaper";

const WinMessage = () => {
  const dispatch = useDispatch();
  const currentRoundWinMessage = useSelector(
    (state) => state.data.currentRound
  );
  const roundsWinMEssage = useSelector((state) => state.data.rounds);

  const newSound = new Howl({
    src: [sounds.applause],
    volume: 0.01,
    autoplay: true,
  });
  newSound.play;

  const onContinue = () => {
    dispatch(setCurrentRoundGlobal(currentRoundWinMessage + 1));
  };

  const onRestart = () => {
    dispatch(setMatrixSizeGlobal(0));
    dispatch(setGameBoard([]));
    dispatch(setCurrentRoundGlobal(0));
    dispatch(setDifficultyGlobal(0));
    dispatch(setPointsGlobal(null));
    dispatch(setRoundsToPlayGlobal(0));
  };

  return (
    <div className="flex flex-col justify-center items-center w-full h-full  bg-cover bg-center bg-no-repeat border-black"
         style={{ backgroundImage: `url(${backgroundimage['wall']}` }}
    
    >
      {currentRoundWinMessage < roundsWinMEssage && (
        <div className="flex text-center flex-col p-8 border-2 border-blue-200 bg-blue-300 shadow-lg shadow-zinc-800">
          <h1 className="text-center text-black text-2xl font-mono mb-5">
            You Won The Round {currentRoundWinMessage}!
          </h1>
          <Link
            className="text-center p-4 mb-2 w-full border-2 border-blue-400  text-white bg-blue-400 rounded-lg hover:bg-blue-700 hover:border-blue-700"
            onClick={onContinue}
            to="/playground"
          >
            CONTINUE
          </Link>

          <Link
            className="text-center p-4 mb-2 w-full border-2 border-blue-400  text-white bg-blue-400 rounded-lg hover:bg-blue-700 hover:border-blue-700"
            onClick={onRestart}
            to="/"
          >
            RESTART
          </Link>
        </div>
      )}

      {currentRoundWinMessage == roundsWinMEssage && (
        <div className="flex text-center flex-col p-8 border-2 border-blue-200 bg-blue-300 shadow-lg shadow-zinc-800">
          <h1 className="text-center text-black text-2xl font-mono mb-5">
            You Won The Game!
          </h1>
          <Link
            className="text-center p-4 mb-2 w-full border-2 border-blue-400  text-white bg-blue-400 rounded-lg hover:bg-blue-700 hover:border-blue-700"
            onClick={onRestart}
            to="/"
          >
            RESTART
          </Link>
        </div>
      )}
    </div>
  );
};

export default WinMessage;
