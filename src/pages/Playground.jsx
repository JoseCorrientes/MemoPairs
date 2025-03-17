import Board from "../components/Board";

const Playground = () => {
  return (
    <div className="box-border flex flex-col justify-center items-center w-full h-full ">
      <div className="flex flex-row w-full p-6 h-full bg-blue-300 ">
        <Board />
      </div>
    </div>
  );
};

export default Playground;
