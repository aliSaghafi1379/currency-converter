import Img from "./img";
import Select from "./select";

interface Out {
  country: { [key: number]: string }[];
  to: string;
  setTo: Function;
  result?: number;
}

const Output = ({ country, to, setTo, result }: Out) => {
  return (
    <div className="w-full relative">
      <input
        type="number"
        className="w-full h-10 bg-inherit shadow-[#bebebe_4px_4px_6px_0px_inset,rgba(255,255,255,0.5)_-3px_-3px_6px_1px_inset] rounded-[50px] focus:outline-none text-xl font-bold text-center px-16"
        min={0}
        disabled
        value={result}
      />
      <Select country={country} choose={to} setChoose={setTo} />
      <Img chooseFlag={to} />
    </div>
  );
};

export default Output;
