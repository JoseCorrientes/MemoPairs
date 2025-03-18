import { useDispatch, useSelector } from "react-redux";
import Card from "./Card";
import { useEffect } from "react";
import {
  setGameBoard,
  setPointsGlobal,
  setIsActiveCard,
  setVisibleAtTheSameTime,
  setClearVisibleCardsIndex,
  setToggleTileSelected,
  setRoundPairsGlobal,
} from "../redux/dataSlice";
import { useNavigate } from "react-router-dom";
import sounds from "../assets/sounds/sounds";
import { Howl } from "howler";

const Board = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const matrixSizeBoard = useSelector((state) => state.data.matrixSize);
  const gameBoard = useSelector((state) => state.data.gameBoard);
  const roundPairsBoard = useSelector((state) => state.data.roundPairs);

  const visibleAtTheSameTimeBoard = useSelector(
    (state) => state.data.visibleAtTheSameTime
  );
  const visibleCardsIndexBoard = useSelector(
    (state) => state.data.visibleCardsIndex
  );
  const pointsBoard = useSelector((state) => state.data.points);

  let size = matrixSizeBoard;

  useEffect(() => {
    dispatch(setGameBoard(size));
  }, []);

  useEffect(() => {
    if (
      roundPairsBoard == (matrixSizeBoard * matrixSizeBoard) / 2 &&
      matrixSizeBoard !== 0
    ) {
      dispatch(setRoundPairsGlobal(0));
      navigate("/winRound");
    }
    if (visibleAtTheSameTimeBoard == 2) {
      if (
        visibleCardsIndexBoard[0]["image"] == visibleCardsIndexBoard[1]["image"]
      ) {
        const newSound = new Howl({
          src: [sounds.match],
          volume: 0.01,
          autoplay: true,
        });
        newSound.play;

        dispatch(setPointsGlobal(pointsBoard + 1));

        setTimeout(() => {
          dispatch(
            setIsActiveCard({
              index: visibleCardsIndexBoard[0]["index"],
              status: false,
            })
          );
          dispatch(
            setIsActiveCard({
              index: visibleCardsIndexBoard[1]["index"],
              status: false,
            })
          );
        }, 300),
          dispatch(setVisibleAtTheSameTime(0));
        dispatch(setClearVisibleCardsIndex());
        dispatch(setRoundPairsGlobal(roundPairsBoard + 1));
      }
      if (
        visibleCardsIndexBoard[0]["image"] !==
        visibleCardsIndexBoard[1]["image"]
      ) {
        setTimeout(() => {
          let card1 = {
            tileIndex: visibleCardsIndexBoard[0].index,
            status: false,
          };
          let card2 = {
            tileIndex: visibleCardsIndexBoard[1].index,
            status: false,
          };
          dispatch(setToggleTileSelected(card1));
          dispatch(setToggleTileSelected(card2));
          dispatch(setVisibleAtTheSameTime(0));
          dispatch(setClearVisibleCardsIndex());
        }, 300);
      }
    }
  }, [visibleAtTheSameTimeBoard, roundPairsBoard]);

  let classCard =
    size == 4
      ? ` w-1/4 h-1/4  `
      : size == 6
      ? ` w-1/6 h-1/6 `
      : size == 8
      ? ` w-1/8 h-1/8 `
      : ` w-1/10 h-1/10`;

  return (
    <div className="flex flex-row flex-wrap  w-full h-full ">
      {gameBoard &&
        gameBoard.map((item) => (
          <Card classData={classCard} item={item} key={item.tileIndex} />
        ))}
    </div>
  );
};
export default Board;
