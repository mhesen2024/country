import data from "../../API/data.json";
import Card from "../molecules/Card";
import { isCountry } from "../../API/interface/interface";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectDarkMode } from "../../redux-tk/store/features/darkSlice";

export default function Country(props: { search: string, FibyRe: string }) {
  const isDark = useSelector(selectDarkMode);
  const countries: isCountry[] = data as isCountry[];
  const [filtered, setFiltered] = useState<isCountry[]>(countries);

  useEffect(() => {
    searchCountries();
  }, [props.search, countries, props.FibyRe]);
  
  useEffect(() => {
    filterByRegion();
  }, [props.FibyRe]);

  const searchCountries = () => {
    const trimmedSearch = props.search.trim();
    if (trimmedSearch) {
      const filter = countries.filter((country) =>
        country.name.toLowerCase().includes(trimmedSearch.toLowerCase())
      );
      setFiltered(filter);
    } else {
      setFiltered(countries);
    }
  };

  const filterByRegion = () => {
    if (props.FibyRe === 'All' || props.FibyRe === '') {
      setFiltered(countries);
    } else {
      const filter = countries.filter((country) => country.region.toLowerCase() === props.FibyRe.toLowerCase());
      setFiltered(filter);
    }
  };

  return (
    <div className={`py-3 px-3 rounded-md w-11/12 mx-auto mt-[50px] flex gap-4 flex-wrap`}>
      {filtered.length > 0 ? (
        filtered.map((country, index) => (
          <Card
            key={index}
            area={country.area}
            flag={country.flag}
            name={country.name}
            population={country.population}
            region={country.region}
            capital={country.capital}
          />
        ))
      ) : (
        <p>No countries found</p>
      )}
    </div>
  );
}
