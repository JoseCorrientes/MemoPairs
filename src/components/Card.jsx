import { useDispatch, useSelector } from "react-redux";
import {
  setToggleTileSelected,
  setVisibleAtTheSameTime,
  setVisibleCardsIndex,
  setUnvisibleCardsIndex,
} from "../redux/dataSlice";
import images from "../assets/cardsImages/images";
import backs from "../assets/cardsBack/back";

import { Howl } from "howler";
import sounds from "../assets/sounds/sounds";

function Card({ item, classData }) {
  const dispatch = useDispatch();
  const visibleAtTheSameTimeCard = useSelector(
    (state) => state.data.visibleAtTheSameTime
  );
  const difficulty = useSelector((state) => state.data.difficulty);
  const backPatternCard = useSelector((state) => state.data.backPattern);

  const VisibilityManage = (item) => {
    if (!item["IsSelected"] && visibleAtTheSameTimeCard < 2) {
      let data = {
        tileIndex: item.tileIndex,
        status: true,
      };
      const newSound = new Howl({
        src: [sounds["flipCard"]],
        autoplay: true,
        volume: 0.01,
      });
      newSound.play;
      dispatch(setToggleTileSelected(data));
      dispatch(setVisibleAtTheSameTime(visibleAtTheSameTimeCard + 1));
      dispatch(
        setToggleTileSelected({ tileIndex: item.tileIndex, status: true })
      );
      dispatch(
        setVisibleCardsIndex({ index: item.tileIndex, image: item.imageIndex })
      );
    }

    if (item["IsSelected"]) {
      let data = {
        tileIndex: item.tileIndex,
        status: false,
      };
      dispatch(setToggleTileSelected(data));
      if (visibleAtTheSameTimeCard > 0)
        dispatch(setVisibleAtTheSameTime(visibleAtTheSameTimeCard - 1));
      dispatch(setUnvisibleCardsIndex(item.tileIndex));
    }
  };

  let a = item.imageIndex;
  let b = difficulty;
  let imageName = `l${b}i${a}`;
  let backName = `b${backPatternCard}`;

  return (
    <div className={classData}>
      {item["IsActive"] && !item["IsSelected"] && (
        <div
          className={`flex flex-row w-full h-full  bg-contain bg-center bg-no-repeat`}
          style={{ backgroundImage: `url(${backs[backName]}` }}
          onClick={() => VisibilityManage(item)}
        ></div>
      )}

      {item["IsActive"] && item["IsSelected"] && (
        <div
          className={`flex flex-row w-full h-full  bg-contain bg-center bg-no-repeat`}
          style={{ backgroundImage: `url(${images[imageName]}` }}
        ></div>
      )}
    </div>
  );
}

export default Card;
