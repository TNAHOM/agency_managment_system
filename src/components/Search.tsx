import { Search as SearchBar } from "lucide-react";

const Search = () => {
  return (
    <div className="relative w-full max-w-2xl">
      <SearchBar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
      <input
        type="search"
        placeholder="Search By Passwport Number, Name, Age, ..."
        className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
};

export default Search;