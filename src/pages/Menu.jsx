import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setMatrixSizeGlobal,
  setRoundsToPlayGlobal,
  setDifficultyGlobal,
  setPointsGlobal,
  setCurrentRoundGlobal,
} from "../redux/dataSlice";
import { Link } from "react-router-dom";

const MenuInitialOptions = () => {
  const dispatch = useDispatch();

  const [matrixSize, setMatrixSize] = useState("");
  const [roundsToPlay, setRoundsToPlay] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const rounds = useSelector((state) => state.data.rounds);

  //Funcion controladora de las entradas del tamaño de la matriz (4, 6, 8 o 10)
  const changeMatrixSize = (e) => {
    if (matrixSize == "1") {
      if (e.target.value == "10") {
        setMatrixSize("10");
      }
    }
    if (matrixSize == "") {
      if (e.target.value == "4") setMatrixSize("4");
      else if (e.target.value == "6") setMatrixSize("6");
      else if (e.target.value == "8") setMatrixSize("8");
      else if (e.target.value == "1") setMatrixSize("1");
    }
  };

  //Funcion controladora de la entrada de Rondas a jugar (1 a 10)
  const changeRoundsToPlay = (e) => {
    if (roundsToPlay == "1") {
      if (e.target.value == "10") {
        setRoundsToPlay("10");
      }
    }
    if (roundsToPlay == "") {
      if (e.target.value > "0" && e.target.value <= "9")
        setRoundsToPlay(e.target.value);
    }
  };

  //Funcion controladora de la entrada de Dificultad (1-facil, 2-media, 3-dificil )
  const changeDifficulty = (e) => {
    if (difficulty == "") {
      if (
        e.target.value == "1" ||
        e.target.value == "2" ||
        e.target.value == "3"
      )
        setDifficulty(e.target.value);
    }
  };

  //Funcion para borrar un elemento de la entrada del tamaño de la Matriz
  const deleteOneMatrix = (e) => {
    if (e.keyCode === 8) {
      let tempo = matrixSize.toString();
      if (tempo.length == 1) {
        setMatrixSize("");
      } else {
        setMatrixSize(tempo.slice(0, tempo.length - 1));
      }
    }
  };

  //Funcion para borrar un elemento de la entrada de las Rondas a Jugar
  const deleteOneRound = (e) => {
    if (e.keyCode === 8) {
      let tempo = roundsToPlay.toString();
      if (tempo.length == 1) {
        setRoundsToPlay("");
      } else {
        setRoundsToPlay(tempo.slice(0, tempo.length - 1));
      }
    }
  };

  //Funcion para borrar un elemento de la entrada de la Dificultad
  const deleteDifficulty = (e) => {
    if (e.keyCode === 8) {
      let tempo = difficulty.toString();
      if (tempo.length == 1) setDifficulty("");
    }
  };

  //Funcion para enviar al playground y empezar el juego una vez que se elijen matrizsize y rounds
  const submitPlay = () => {
    dispatch(setMatrixSizeGlobal(parseInt(matrixSize)));
    dispatch(setRoundsToPlayGlobal(parseInt(roundsToPlay)));
    dispatch(setDifficultyGlobal(parseInt(difficulty)));
    dispatch(setPointsGlobal(0));
    dispatch(setCurrentRoundGlobal(rounds + 1));
    setRoundsToPlay("");
    setMatrixSize("");
    setDifficulty("");
  };

  let textchain = `Matrix Size (4-6-8-10)`;
  let textchain2 = `Rounds to play (1-10)`;
  let textchain3 = `Difficulty Level (1-3)`;

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex text-center flex-col p-8 border-2 border-blue-200 bg-blue-300 shadow-lg shadow-zinc-800">
        <h1 className="text-black text-2xl font-mono mb-2">OPTIONS</h1>
        <div className="flex flex-row justify-between items-center">
          <p className="text-white text-2xl">{textchain}</p>
          <input
            className="w-[60px] text-center m-2 border-2 border-black"
            value={matrixSize}
            type="text"
            onChange={(e) => changeMatrixSize(e)}
            onKeyDown={(e) => deleteOneMatrix(e)}
          ></input>
        </div>
        <div className="flex flex-row justify-between items-center">
          <p className="text-white text-2xl">{textchain2}</p>
          <input
            className="w-[60px] m-2 text-center border-2 border-black"
            type="text"
            value={roundsToPlay}
            onChange={(e) => changeRoundsToPlay(e)}
            onKeyDown={(e) => deleteOneRound(e)}
          ></input>
        </div>
        <div className="flex flex-row justify-between items-center">
          <p className="text-white text-2xl">{textchain3}</p>
          <input
            className="w-[60px] text-center m-2 border-2 border-black"
            value={difficulty}
            type="text"
            onChange={(e) => changeDifficulty(e)}
            onKeyDown={(e) => deleteDifficulty(e)}
          ></input>
        </div>
        <div className="mt-5 flex flex-row justify-center">
          {(matrixSize == "4" ||
            matrixSize == "6" ||
            matrixSize == "8" ||
            matrixSize == "10") &&
            parseInt(roundsToPlay) > 0 &&
            parseInt(roundsToPlay) <= 10 &&
            (difficulty == "1" || difficulty == "2" || difficulty == "3") && (
              <Link
                className="text-center p-4 w-full border-2 border-blue-400  text-white bg-blue-400 rounded-lg hover:bg-blue-700 hover:border-blue-700"
                onClick={submitPlay}
                to="/playground"
              >
                PLAY
              </Link>
            )}
          {(matrixSize == "" ||
            roundsToPlay == "" ||
            difficulty == "" ||
            matrixSize == "1" ||
            roundsToPlay == "" ||
            difficulty == "") && (
            <button
              className="p-4 w-full border-2  border-blue-400 bg-blue-300 rounded-lg text-blue-400"
              disabled
            >
              PLAY
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default MenuInitialOptions;
