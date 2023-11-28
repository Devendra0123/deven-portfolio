import React from "react";

const Loader = () => {
  return (
    <div className="flex items-center gap-[3px]">
      <div className="loader-circle loader-circle-1 w-[6px] h-[6px] rounded-full bg-slate-500 " />
      <div className="loader-circle loader-circle-2 w-[6px] h-[6px] rounded-full bg-slate-500 " />
      <div className="loader-circle loader-circle-3 w-[6px] h-[6px] rounded-full bg-slate-500 " />
    </div>
  );
};

export default Loader;
