const Home = () => {
  return (
    <main className="w-screen h-screen flex justify-center items-center">
      <div className="w-full h-96 px-3">
        <div className="max-w-5xl h-full m-auto bg-[#e0e0e0] rounded-[50px] shadow-[-14px_-14px_28px_#bebebe,14px_14px_28px_#ffffff] flex justify-center items-center">
          <div className="size-4/5 flex flex-col justify-between items-center">
            <span>
              <input
                type="number"
                className="w-full h-10 bg-inherit shadow-[#bebebe_4px_4px_6px_0px_inset,rgba(255,255,255,0.5)_-3px_-3px_6px_1px_inset] rounded-[50px] focus:outline-none px-4 text-[#2d2e37] text-center text-xl font-bold"
              />
            </span>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
