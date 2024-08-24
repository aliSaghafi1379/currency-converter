import Select from "./select";
import Img from "./img";

interface Input {
  setInput: any;
  country: { [key: number]: string }[];
  from: string;
  setFrom: Function;
}

const Input = ({ setInput, country, from, setFrom }: Input) => {
  return (
    <div className="w-full relative">
      <input
        type="number"
        className="w-full h-10 bg-inherit shadow-[#bebebe_4px_4px_6px_0px_inset,rgba(255,255,255,0.5)_-3px_-3px_6px_1px_inset] rounded-[50px] focus:outline-none text-xl font-bold text-center px-16"
        min={0}
        placeholder="1"
        onChange={(e) => setInput(e.target.value)}
      />
      <Select country={country} choose={from} setChoose={setFrom} />
      <Img chooseFlag={from} />
    </div>
  );
};

export default Input;
