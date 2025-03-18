import Board from "../components/Board";
import backgroundimage from "../assets/wallpaper/wallpaper";

const Playground = () => {
  return (
    <div className="box-border flex flex-col justify-center items-center w-full h-full ">
      <div className="flex flex-row w-full p-6 h-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundimage['wall']}` }}
      >
        <Board />
      </div>
    </div>
  );
};

export default Playground;
