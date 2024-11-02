import { useSelector } from "react-redux";
import { selectDarkMode } from "../../redux-tk/store/features/darkSlice";
import { useNavigate } from "react-router-dom";

type CardCountry = {
  flag: any;
  name: string;
  population: number;
  region: string;
  capital: string;
  area: number;
};

export default function Card(props: CardCountry) {
  const isDark = useSelector(selectDarkMode);
  const navigate = useNavigate();
  return (
    <div className={`border w-[250px] rounded-md overflow-hidden pb-5 mx-auto cursor-pointer ${isDark ? 'bg-gray-800 text-white' : 'bg-white text-black'}`} 
    onClick={()=>{
      navigate(`/country/${props.name}`);
    }}>
      <div className="w-full h-[150px]">
        <img
          src={props.flag}
          alt={props.name}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="px-3">
        <h1 className={`font-bold py-2 text-[20px] ${isDark ? 'text-white' : 'text-black'}`}>{props.name}</h1>
        <p>
          Population:
          <span className={`text-gray-700 text-[14px] ${isDark ? 'text-gray-200' : 'text-gray-700'}`}> {props.population}</span>
        </p>
        <p>
          Region:
          <span className={`text-gray-700 text-[14px] ${isDark ? 'text-gray-200' : 'text-gray-700'}`}> {props.region}</span>
        </p>
        <p>
          Capital:
          <span className={`text-gray-700 text-[14px] ${isDark ? 'text-gray-200' : 'text-gray-700'}`}> {props.capital}</span>
        </p>
      </div>
    </div>
  );
}
