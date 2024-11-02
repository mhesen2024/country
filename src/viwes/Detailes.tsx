import { useParams } from "react-router-dom";
import { isCountry } from "../API/interface/interface";
import data from "../API/data.json";
import { useSelector } from "react-redux";
import { selectDarkMode } from "../redux-tk/store/features/darkSlice";

type ParamsType = {
  name: string;
};

export default function Details() {
  const isDark = useSelector(selectDarkMode);
  const { name } = useParams<ParamsType>();
  const countries: isCountry[] = data as isCountry[];
  const country: isCountry = countries.find((country) => country.name === name);

  return (
    <div className={`mt-20 w-full max-w-6xl mx-auto flex flex-col md:flex-row gap-8 p-5 shadow-lg rounded-lg ${isDark ? 'bg-gray-900' : 'bg-white'} ${isDark ? 'text-white' : 'text-gray-800'}`}>
      <div className="flex-shrink-0 md:w-1/3">
        <img 
          src={country.flag} 
          alt={`Flag of ${country.name}`} 
          className="w-full h-full rounded-lg shadow-md " 
        />
      </div>
      <div className="flex-grow mt-6 md:mt-0 md:pl-8">
        <h1 className="text-3xl font-extrabold">{country.name}</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
          <div>
            <p className="text-lg font-medium">Population: <span className="font-normal">{country.population}</span></p>
            <p className="text-lg font-medium">Area: <span className="font-normal">{country.area.toLocaleString()} km²</span></p>
            <p className="text-lg font-medium">Region: <span className="font-normal">{country.region}</span></p>
            <p className="text-lg font-medium">Capital: <span className="font-normal">{country.capital}</span></p>
          </div>
          <div>
            <p className="text-lg font-medium">Top Level Domain: <span className="font-normal">{country.topLevelDomain}</span></p>
            <p className="text-lg font-medium">
              Language: 
              {country.languages.length !=null ? (
  country.languages.map((language, index) => (
    <span className={`mx-1 p-1 ${isDark ? 'bg-blue-700 text-white' : 'bg-blue-100 text-blue-800'} rounded`} key={index}>
      {language.name}
    </span>
  ))
) : (
  <span>No languages available</span>
)}

            </p>
          </div>
        </div>
        <div className="mt-6">
          <h2 className="text-xl font-semibold">Border Countries:</h2>
          <div className="mt-2 flex flex-wrap gap-2">
          {country.borders != null? (
  country.borders.map((border, index) => (
    <span className={`p-2 ${isDark ? 'bg-gray-700' : 'bg-slate-200'} rounded`} key={index}>
      {border}
    </span>
  ))
) : (
  <span>No borders available</span>
)}

          </div>
        </div>
      </div>
    </div>
  );
}
