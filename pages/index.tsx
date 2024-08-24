import Operation from "./components/operation";
import Title from "./components/title";

const Home = () => {
  return (
    <main className="w-screen h-screen flex justify-center items-center">
      <div className="w-full h-96 px-3">
        <div className="max-w-5xl h-full m-auto bg-[#e0e0e0] rounded-[50px] shadow-[-14px_-14px_28px_#bebebe,14px_14px_28px_#ffffff] flex flex-col justify-center items-center gap-14 xl:gap-0">
          <Title />
          <Operation />
        </div>
      </div>
    </main>
  );
};

export default Home;
