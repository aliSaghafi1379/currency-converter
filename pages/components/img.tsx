import Image from "next/image";
import Data from "../data.json";

const Img = ({ chooseFlag }: { chooseFlag: string }) => {
  const flag = Data[chooseFlag as keyof typeof Data].toLocaleLowerCase();
  return (
    <Image
      src={`https://flagcdn.com/h60/${flag}.png`}
      alt="country"
      width={55}
      height={50}
      priority={true}
      className="rounded-[50px] absolute left-0 top-1"
    />
  );
};

export default Img;
