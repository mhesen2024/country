import { useSelector } from "react-redux";
import { selectDarkMode } from "../../redux-tk/store/features/darkSlice";

type SearchProps = {
  setSearch: React.Dispatch<React.SetStateAction<string>>;
};

export default function Search(props: SearchProps) {
  const isDark = useSelector(selectDarkMode);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.setSearch(e.target.value);
  };

  return (
    <form className="w-full max-w-lg mx-auto">
      <label
        htmlFor="default-search"
        className={`mb-2 text-sm font-medium ${isDark ? 'text-gray-300' : 'text-gray-900'} sr-only`}
      >
        Search
      </label>
      <div className="relative">
        <div className={`absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
          <svg
            className="w-4 h-4"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          type="search"
          id="default-search"
          className={`block outline-none w-full p-4 pl-10 text-sm border rounded-lg 
            ${isDark ? 'bg-gray-700 text-gray-200 border-gray-600 placeholder-gray-400' : 'bg-gray-50 text-gray-900 border-gray-300'} 
            focus:ring-blue-500 focus:border-blue-500`}
          placeholder="Search for country..."
          onChange={handleChange}
        />
      </div>
    </form>
  );
}
