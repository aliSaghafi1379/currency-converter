import { Roboto } from "next/font/google";

const roboto = Roboto({
  style: "italic",
  weight: "900",
  subsets: ["latin"],
});

const Title = () => {
  return (
    <span className="text-xl xl:text-3xl text-[#2d2e37] xl:mb-5">
      <p className={roboto.className}>Currncy Converter</p>
    </span>
  );
};

export default Title;
