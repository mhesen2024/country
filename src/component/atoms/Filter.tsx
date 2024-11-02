import { useSelector } from "react-redux";
import { selectDarkMode } from "../../redux-tk/store/features/darkSlice";

type FilterProps = {
  setFiByRe: React.Dispatch<React.SetStateAction<string>>;
};

interface Region {
  region: string;
}

export default function Filter(props: FilterProps) {
  const isDark = useSelector(selectDarkMode);

  const regFilter: Region[] = [
    { region: 'All' },
    { region: 'Africa' },
    { region: 'America' },
    { region: 'Asia' },
    { region: 'Europe' },
    { region: 'Oceania' },
  ];

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    props.setFiByRe(event.target.value);
    console.log(event.target.value);
  };

  return (
    <select
      className={`border p-2 outline-none w-[150px] ${isDark ? 'bg-gray-700 text-gray-200 border-gray-600' : 'bg-white text-gray-900 border-gray-300'}`}
      onChange={handleChange}
    >
      <option hidden>Filter by region</option>
      {regFilter.map((region, index) => (
        <option key={index} value={region.region}>{region.region}</option>
      ))}
    </select>
  );
}
