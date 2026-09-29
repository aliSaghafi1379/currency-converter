import SwapVertRoundedIcon from "@mui/icons-material/SwapVertRounded";
interface Convert {
  to: string;
  from: string;
  setTo: Function;
  setFrom: Function;
}
const Convert = ({ to, from, setTo, setFrom }: Convert) => {
  const convert = () => {
    setFrom(to), setTo(from);
  };
  return (
    <span onClick={() => convert()}>
      <SwapVertRoundedIcon className="!size-10 text-[#737377] cursor-pointer transition-colors duration-300 hover:text-red-500 xl:rotate-90 " />
    </span>
  );
};

export default Convert;
