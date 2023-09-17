import React, { useEffect, useState } from "react";
import { IATAdATA } from "@/data/IATA";

const Dropdown = ({ query, from, handleFromSelection, handleToSelection }) => {
  const [displayingData, setDisplayingData] = useState([]);

  useEffect(() => {
    if (query) {
      if (query === "") {
        setDisplayingData(IATAdATA);
        return;
      }
      const result = IATAdATA.filter(
        (file) =>
          file.LOCATION_NAME.toLowerCase().includes(query.toLowerCase()) &&
          query
            .replace(/[^a-zA-Z]/g, "")
            .split("")
            .some((letter) =>
              file.LOCATION_NAME.toLowerCase().includes(letter.toLowerCase())
            )
      );
      setDisplayingData(result);
    } else {
      setDisplayingData(IATAdATA);
    }
  }, [query]);

  return (
    <div>
      <ul
        id="dropdown1"
        className="h-[300px] bg-white overflow-auto flex flex-col shadow-lg p-[20px] rounded-lg"
      >
        {displayingData?.map((item, index) => (
          <li
            key={index}
            onClick={() => {
              if (from) {
                handleFromSelection(item);
              } else {
                handleToSelection(item);
              }
            }}
            className="cursor-pointer hover:bg-gray-400"
          >
            {item.LOCATION_NAME}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dropdown;
