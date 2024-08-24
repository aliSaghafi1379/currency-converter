interface Select {
  country: { [key: number]: string }[];
  choose: string;
  setChoose: Function;
}
const Select = ({ country, choose, setChoose }: Select) => {
  return (
    <select
      className="absolute right-2 top-2 rounded-full bg-inherit font-bold focus:outline-none w-14"
      value={choose}
      onChange={(e) => setChoose(e.target.value)}
    >
      {country.length > 0 &&
        country.map((item: any, key: number) => (
          <option key={key} value={item}>
            {item}
          </option>
        ))}
    </select>
  );
};

export default Select;
