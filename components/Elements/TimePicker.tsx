"use client"
import React, { useState } from 'react'
import { FaGlobeAmericas } from "react-icons/fa";

const TimePicker = ({handleTimeClick}: any) => {

    const [isTimeZoneBtnClicked, setIsTimeZoneBtnClicked] = useState(false)
    const [selectedTimezone, setSelectedTimezone] = useState('Nepal'); // Default timezone

    // Define your list of time periods
    const timePeriods = ['8:00 pm','8:30 pm', '9:00 pm','9:30 pm','10:00 pm','10:30 pm','11:00 pm'];

    // Define a list of standard time zones you want to convert to
    const timezones: any = [
        { name: 'Nepal', offset: 5.75 },
        { name: 'UTC', offset: 0 },
        { name: 'EST', offset: -5 },
        { name: 'PST', offset: -8 },
        // Add more timezones with their offsets as needed
    ];

    // Handle timezone change
    const handleTimezoneChange = (name: any) => {
        setSelectedTimezone(name);
    };

      // Function to get AM/PM
  const getAMPM = (hours:number) => (hours >= 12 ? 'PM' : 'AM');

    return (
        <div>
            <div className='relative'>
                <label className='cursor-pointer flex items-center gap-[10px] text-xl border border-slate-300 shadow-lg shadow-slate-500 rounded-[25px] px-[20px] py-[8px]' onClick={() => setIsTimeZoneBtnClicked(prev => !prev)}><FaGlobeAmericas className="text-primaryBlue" /> Select a Timezone </label>
                {
                    isTimeZoneBtnClicked && (
                        <div className='z-10 w-full flex flex-col gap-[10px] p-[12px] bg-primaryBlue absolute top-[50px] left-[0px] border border-slate-300 shadow-lg shadow-yellow1/75 rounded-[5px] '>
                            {timezones.map((zone: any) => (
                                <p key={zone.name} onClick={() => {
                                    handleTimezoneChange(zone.name)
                                    setIsTimeZoneBtnClicked(false)
                                }}
                                    className='text-lg font-medium text-white tracking-wider cursor-pointer border-b border-slate-500'
                                >
                                    {zone.name}
                                </p>
                            ))}
                        </div>
                    )
                }
            </div>
            <div className='mt-[30px]'>
                <ul className='flex flex-col gap-[10px] '>
                    {timePeriods.map((timePeriod, index) => {
                        const time = new Date();
                        const [hours, minutes] = timePeriod.split(':');
                        time.setHours(parseInt(hours, 10));
                        time.setMinutes(parseInt(minutes, 10));

                        const selectedTimezoneOffset = timezones.find(
                            (zone: any) => zone.name === selectedTimezone
                        ).offset;

                        const utcOffset = time.getTimezoneOffset();
                        time.setMinutes(
                            time.getMinutes() + selectedTimezoneOffset * 60 + utcOffset
                        );

                        const convertedHours = time.getHours();
                        const convertedMinutes = time.getMinutes();
                        const convertedAMPM = getAMPM(convertedHours);

                        return (
                            <li key={index} onClick={()=> handleTimeClick(`${convertedHours}:${convertedMinutes} ${convertedAMPM}`,selectedTimezone)} className='cursor-pointer bg-teal-400/75 hover:bg-teal-600 text-center font-bold rounded-[25px] w-full p-[10px] '>
                                {String(convertedHours).padStart(2, '0')} : {String(convertedMinutes).padStart(2, '0')} {convertedAMPM}
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
}

export default TimePicker