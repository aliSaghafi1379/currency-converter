import { useEffect, useState } from "react";
import Input from "./input";
import Convert from "./convert";
import Output from "./output";
import Data from "../data.json";

const Operation = () => {
  // input : To receive information from the user
  const [input, setInput] = useState<number>(1);
  // country : To store the names of countries in Data file
  const [country, setCountry] = useState<{ [key: number]: string }[]>([]);
  // from : Select the country of origin
  const [from, setFrom] = useState<string>("USD");
  // to : Select the destination country
  const [to, setTo] = useState<string>("IRR");
  // country : To store the currency of countries from the website: https://v6.exchangerate-api.com
  const [currency, setCurrency] = useState<number | null>(null);
  const [isLoading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setCountry(Object.keys(Data));
  }, [Data]);

  //   Fetch Data
  useEffect(() => {
    try {
      fetch(
        `https://v6.exchangerate-api.com/v6/0bfa156cf0ce0f02cbd021be/latest/${from}`
      )
        .then((res) => res.json())
        .then((data) => {
          setCurrency(data.conversion_rates[to]);
          setLoading(false);
        });
    } catch {
      console.log("error");
    }
  }, [to, from]);
  if (isLoading) return <p>Loading...</p>;
  if (!currency) return <p>No Data !</p>;

  // Calculate
  const result: number = input * currency;

  return (
    <div className="w-10/12 sm:w-4/6 md:w-7/12 lg:w-1/2 xl:flex-row xl:w-10/12 xl:gap-5 h-1/2 flex flex-col justify-between items-center text-[#2d2e37] ">
      <Input
        setInput={setInput}
        country={country}
        from={from}
        setFrom={setFrom}
      />
      <Convert to={to} from={from} setTo={setTo} setFrom={setFrom} />
      <Output country={country} to={to} setTo={setTo} result={result} />
    </div>
  );
};

export default Operation;
