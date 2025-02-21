import { createContext, useState } from "react";

export const SearchDataContext = createContext();

export const SearchDataProvider = ({ children }) => {
  const [searchData, setSearchData] = useState("");

  return (
    <SearchDataContext.Provider value={{ searchData, setSearchData }}>
      {children}
    </SearchDataContext.Provider>
  );
};
