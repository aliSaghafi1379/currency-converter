import Image from "next/image";
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
        className="w-full h-10 bg-inherit shadow-[#bebebe_4px_4px_6px_0px_inset,rgba(255,255,255,0.5)_-3px_-3px_6px_1px_inset] rounded-[50px] focus:outline-none text-xl font-bold text-center"
        min={0}
        placeholder={`1`}
        onChange={(e) => setInput(e.target.value)}
      />
      <select
        className="absolute right-2 top-2 rounded-full bg-inherit font-bold"
        value={from}
        onChange={(e) => setFrom(e.target.value)}
      >
        {country.length > 0 &&
          country.map((item: any, key: number) => (
            <option key={key}>{item}</option>
          ))}
      </select>
      <Image
        src={`https://flagcdn.com/h60/sg.png`}
        alt="country"
        width={55}
        height={50}
        priority={true}
        className="rounded-[50px] absolute left-1 top-1"
      />
    </div>
  );
};

export default Input;
