import Input from "./components/input";
import SwapVertRoundedIcon from "@mui/icons-material/SwapVertRounded";
import { Roboto } from "next/font/google";
import { useEffect, useState } from "react";
import Output from "./components/output";
import Data from "./data.json";

const roboto = Roboto({
  style: "italic",
  weight: "900",
  subsets: ["latin"],
});

const Home = () => {
  const [input, setInput] = useState<number>(1);
  const [country, setCountry] = useState<{ [key: number]: string }[]>([]);
  const [from, setFrom] = useState<string>("USD");
  const [to, setTo] = useState<string>("IRR");

  // console.log(typeof(country));
  useEffect(() => {
    setCountry(Object.keys(Data));
  }, [Data]);

  return (
    <main className="w-screen h-screen flex justify-center items-center">
      <div className="w-full h-96 px-3">
        <div className="max-w-5xl h-full m-auto bg-[#e0e0e0] rounded-[50px] shadow-[-14px_-14px_28px_#bebebe,14px_14px_28px_#ffffff] flex flex-col justify-center items-center gap-14">
          <span className="text-xl text-[#2d2e37]">
            <p className={roboto.className}>Currncy Converter</p>
          </span>
          <div className="w-10/12 h-1/2 flex flex-col justify-between items-center text-[#2d2e37] ">
            <Input
              setInput={setInput}
              country={country}
              from={from}
              setFrom={setFrom}
            />
            <SwapVertRoundedIcon className="size-10 text-[#737377] cursor-pointer transition-colors duration-300 hover:text-red-500" />
            <Output country={country} to={to} setTo={setTo} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
