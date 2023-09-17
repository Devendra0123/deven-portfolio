"use client";
import React, { useEffect, useState, useRef } from "react";
import { AiFillCalendar } from "react-icons/ai";
import { FiChevronDown } from "react-icons/fi";
import Dropdown from "./Dropdown";

const TripProForm = () => {
  const [inputValue1, setInputValue1] = useState("");
  const [inputValue2, setInputValue2] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);
  const [activeMonth, setActiveMonth] = useState(0);
  const [openMonth, setOpenMonth] = useState(false);
  const [travellerNum, setTravellerNum] = useState(false);
  const [seniorNum, setSeniorNum] = useState(0);
  const [adultNum, setAdultNum] = useState(1);
  const [childNum, setChildNum] = useState(0);
  const [infantNum, setInfantNum] = useState(0);
  const [totalNum, setTotalNum] = useState(0);
  const [isFromWhereActive, setIsFromWhereActive] = useState(false);
  const [isToWhereActive, setIsToWhereActive] = useState(false);
  const [fromWhere, setFromWhere] = useState("");
  const [toWhere, setToWhere] = useState("");
  const [departureTime, setDepartureTime] = useState(null);

  const [result, setResult] = useState([]);
  useEffect(() => {
    const currentDate = new Date();
    const month = currentDate.getMonth(); // Adding 1 to get 1-based month
    const day = currentDate.getDate();
    setActiveMonth(month);
    setSelectedDate(day);
  }, []);

  const handleDateClick = (day, currentYear) => {
    setSelectedDate(day);
    setDepartureTime(`${day}/${activeMonth}/${currentYear}`);
  };
  const handlePrevMonth = () => {
    if (activeMonth > 0) {
      setActiveMonth((prev) => prev - 1);
    }
  };

  const handleNextMonth = () => {
    if (activeMonth < 11) {
      setActiveMonth((prev) => prev + 1);
    }
  };

  useEffect(() => {
    setSelectedDate(null);
  }, []);
  useEffect(() => {
    setTotalNum(seniorNum + adultNum + childNum + infantNum);
  }, [seniorNum, adultNum, childNum, infantNum]);

  const calendarRef = useRef();
  const calendar1Ref = useRef();

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        calendarRef.current &&
        calendar1Ref.current &&
        !calendarRef.current.contains(event.target) &&
        !calendar1Ref.current.contains(event.target)
      ) {
        setOpenMonth(false);
        setTravellerNum(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  // Fetch search result
  const fetchOneWaySearch = async () => {
    const data = {
      DepartureTime: "23/10/2023",
      DepartureLocationCode: fromWhere?.LOCATION_CODE,
      ArrivalLocationCode: toWhere?.LOCATION_CODE,
    };
   const doc = await fetch("http://localhost:3000/api/tripPro", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => res.json());
    if(doc?.data?.FlightItinerary?.length > 0){
      setResult(doc?.data?.FlightItinerary)
    }
  };

  return (
    <div>
      <div className="min-h-[50vh] w-full px-[11px] flex flex-col lg:px-5 py-5 bg-white rounded-b lg:rounded-tr shadow-md">
        {/* Search Info category Inputs */}
        <div className="flex gap-[20px] flex-col xl:flex-row my-5">
          {/* Search Info From To Inputs */}
          <div className="w-full xl:w-[230vw] flex gap-[20px]  relative">
            <div className="relative z-10">
              <button
                onClick={() => {
                  setIsFromWhereActive(true);
                  setIsToWhereActive(false);
                }}
                className="border border-1 border-[#73767F] px-[20px] py-[12px] rounded-[5px]"
              >
                {fromWhere ? fromWhere.LOCATION_NAME : "From where?"}
              </button>
              {isFromWhereActive && (
                <div className="absolute top-[100%] left-0">
                  <input
                    type="text"
                    name="location"
                    placeholder="From where?"
                    className="w-full h-[51px] border border-[#73767F] px-5 py-5 rounded-[5px] focus:outline-0"
                    value={inputValue1}
                    onChange={(e) => setInputValue1(e.target.value)}
                  />
                  <Dropdown
                    query={inputValue1}
                    from={true}
                    handleFromSelection={(item) => {
                      setFromWhere(item);
                      setIsFromWhereActive(false);
                    }}
                  />
                </div>
              )}
            </div>

            <div className="relative z-10">
              <button
                onClick={() => {
                  setIsToWhereActive(true);
                  setIsFromWhereActive(false);
                }}
                className="border border-1 border-[#73767F] px-[20px] py-[12px] rounded-[5px]"
              >
                {toWhere ? toWhere.LOCATION_NAME : "To where?"}
              </button>
              {isToWhereActive && (
                <div className="absolute top-[100%] left-0">
                  <input
                    type="text"
                    name="location"
                    placeholder="To where?"
                    className="w-full h-[51px] border border-[#73767F] px-5 py-5 rounded-[5px] focus:outline-0"
                    value={inputValue2}
                    onChange={(e) => setInputValue2(e.target.value)}
                  />
                  <Dropdown
                    query={inputValue2}
                    from={false}
                    handleToSelection={(item) => {
                      setToWhere(item);
                      setIsToWhereActive(false);
                    }}
                  />
                </div>
              )}
            </div>
          </div>
          <input
            type="date"
            onChange={(e) => setDepartureTime(e.target.value)}
          />
          {/* Search Info Dates From To Inputs */}
          <div
            ref={calendarRef}
            className={`relative w-full h-[51px] border border-[#73767F] px-5  rounded-[5px] border ${
              openMonth && "border-mainColor"
            } flex items-center cursor-pointer`}
          >
            <div
              className="flex gap-[11px] items-center"
              onClick={() => {
                setTravellerNum(false);
                setOpenMonth((prev) => !prev);
                setOpenMonth(!openMonth);
              }}
            >
              <AiFillCalendar className="text-[#101618]" />
              <h2 className="text-[#9ca3b2] text-[17px] flex items-center whitespace-nowrap">
                {selectedDate
                  ? `${activeMonth}/${selectedDate}/2023`
                  : "Departure"}
              </h2>
            </div>
          </div>

          {/* Search Info Traveller Inputs */}
          <div className="w-full relative">
            <div
              className={`w-full h-[51px] border border-[#73767F] px-5  ${
                travellerNum && "border-mainColor"
              } rounded-[5px] border flex justify-between items-center cursor-pointer`}
              onClick={() => {
                setOpenMonth(false);
                setTravellerNum((prev) => !prev);
                setTravellerNum(!travellerNum);
              }}
            >
              <div className="">
                <h2 className="text-[#9ca3b2] text-[17px] flex items-center">
                  <strong className="text-black mr-1">{totalNum}</strong>
                  {totalNum > 1
                    ? "Travellers"
                    : totalNum <= 1
                    ? "Traveller"
                    : ""}{" "}
                </h2>
              </div>
              <div
                className={`text-[21px] ${travellerNum && "text-mainColor"} `}
              >
                <FiChevronDown />
              </div>
            </div>
            {travellerNum && (
              <div className="flex flex-col p-2 absolute left-0 right-0 top-[111%] bg-white shadow-2xl rounded-[8px] z-50">
                <div className="flex justify-center items-center text-[#73767F] text-[21px] border-b border-[#73767F] py-3">
                  <div
                    className="w-[21px] h-[21px] flex items-center justify-center border border-mainColor font-bold text-mainColor cursor-pointer"
                    onClick={() => {
                      if (seniorNum > 0) {
                        setSeniorNum((prev) => prev - 1);
                      }
                    }}
                  >
                    -
                  </div>
                  <div className="text-[17px] w-[100px] text-center flex gap-1 justify-evenly">
                    <p>{seniorNum}</p>
                    <p>Senior</p>
                  </div>
                  <div
                    className="w-[21px] h-[21px] flex items-center justify-center border border-mainColor font-bold text-mainColor cursor-pointer"
                    onClick={() => {
                      setSeniorNum((prev) => prev + 1);
                    }}
                  >
                    +
                  </div>
                </div>
                <div className="flex justify-center items-center text-[#73767F] text-[21px] border-b border-[#73767F] py-3">
                  <div
                    className="w-[21px] h-[21px] flex items-center justify-center border border-mainColor font-bold text-mainColor cursor-pointer"
                    onClick={() => {
                      if (adultNum > 0) {
                        setAdultNum((prev) => prev - 1);
                      }
                    }}
                  >
                    -
                  </div>
                  <div className="text-[17px] w-[100px] text-center flex gap-1 justify-evenly">
                    <p>{adultNum}</p>
                    <p>Adult</p>
                  </div>
                  <div
                    className="w-[21px] h-[21px] flex items-center justify-center border border-mainColor font-bold text-mainColor cursor-pointer"
                    onClick={() => {
                      setAdultNum((prev) => prev + 1);
                    }}
                  >
                    +
                  </div>
                </div>
                <div className="flex justify-center items-center text-[#73767F] text-[21px] border-b border-[#73767F] py-3">
                  <div
                    className="w-[21px] h-[21px] flex items-center justify-center border border-mainColor font-bold text-mainColor cursor-pointer"
                    onClick={() => {
                      if (childNum > 0) {
                        setChildNum((prev) => prev - 1);
                      }
                    }}
                  >
                    -
                  </div>
                  <div className="text-[17px] w-[100px] text-center flex gap-1 justify-evenly">
                    <p>{childNum}</p>
                    <p>Child</p>
                  </div>
                  <div
                    className="w-[21px] h-[21px] flex items-center justify-center border border-mainColor font-bold text-mainColor cursor-pointer"
                    onClick={() => {
                      setChildNum((prev) => prev + 1);
                    }}
                  >
                    +
                  </div>
                </div>
                <div className="flex justify-center items-center text-[#73767F] text-[21px] py-3">
                  <div
                    className="w-[21px] h-[21px] flex items-center justify-center border border-mainColor font-bold text-mainColor cursor-pointer"
                    onClick={() => {
                      if (infantNum > 0) {
                        setInfantNum((prev) => prev - 1);
                      }
                    }}
                  >
                    -
                  </div>
                  <div className="text-[17px] w-[100px] text-center flex gap-1 justify-evenly">
                    <p>{infantNum}</p>
                    <p>Infant</p>
                  </div>
                  <div
                    className="w-[21px] h-[21px] flex items-center justify-center border border-mainColor font-bold text-mainColor cursor-pointer"
                    onClick={() => {
                      setInfantNum((prev) => prev + 1);
                    }}
                  >
                    +
                  </div>
                </div>
                <div
                  className="w-full"
                  onClick={() => {
                    setTravellerNum(false);
                  }}
                ></div>
              </div>
            )}{" "}
          </div>

          {/* Search Info Search Button */}
          <div className="w-max">
            <button onClick={fetchOneWaySearch}>Search</button>
          </div>
        </div>
      </div>

      {/*...Show Result...*/}
      <div className="flex items-center gap-[30px] flex-wrap ">
        {result?.length > 0 &&
          result.map((item, index) => (
            <div key={index} className="bg-slate-400 p-[10px]">
              <p>{item?.ItineraryId}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default TripProForm;
