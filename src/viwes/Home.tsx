import { useEffect, useState } from "react";
import Filter from "../component/atoms/Filter";
import Search from "../component/atoms/Search";
import Country from "../component/organism/Country";
import { useSelector } from "react-redux";
import { selectDarkMode } from "../redux-tk/store/features/darkSlice";

export default function Home() {
  const [search, setSearch] = useState<string>('');
  const [FibyRe, setFiByRe] = useState<string>('');
  const isDark = useSelector(selectDarkMode);

  return (
    <div className={`${isDark ? 'bg-gray-900 text-white' : 'bg-white text-black'} min-h-screen`}>
      <div className="pt-7 flex flex-wrap mx-auto gap-x-11 gap-y-1 w-4/5">
        <Search setSearch={setSearch} />
        <Filter setFiByRe={setFiByRe} />
      </div>
      <Country search={search} FibyRe={FibyRe} />
    </div>
  );
}
