"use client";
import { createTopic } from "@/app/actions";
import { TechnologyProps } from "@/types";
import React, { useState } from "react";
import { experimental_useFormStatus as useFormStatus } from "react-dom";

interface Props {
  technologies: TechnologyProps[];
  handleVisibility: any
}

const CreateTopic = ({ technologies,handleVisibility }: Props) => {
  const [pending, setPending] = useState(false);
  const [isCreated, setIsCreated] = useState(false);
  const [name, setName] = useState("");
  const [tech, setTech] = useState("");

  return (
    <div className="z-30 fixed top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[50%] bg-white p-[20px] rounded-lg shadow">
      <p className="w-full text-center font-bold underline underline-offset-4 decoration-primaryBlue">
        Create Topic
      </p>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          setIsCreated(false);
          await createTopic(name, tech);
          setPending(false);
          setIsCreated(true);
          handleVisibility()
        }}
        className="mt-[20px] flex flex-col gap-[10px]"
      >
        <div className="flex flex-col gap-[5px]">
          <label>Name:</label>
          <input
            type="text"
            placeholder="Enter name"
            name="name"
            onChange={(e) => setName(e.target.value)}
            className="bg-slate-300 p-[8px] rounded-[4px]"
          />
        </div>

        <div className="relative flex flex-col gap-[8px]">
          <p>Select Technology</p>
          <div className="flex items-center gap-[20px] flex-wrap bg-slate-300 p-[10px] rounded-[4px] text-black">
            {technologies?.length > 0 &&
              technologies.map((item, index) => (
                <div key={index} className="flex items-center gap-[5px]">
                  <input
                    id={item.name}
                    type="radio"
                    name="tech"
                    value={item._id}
                    onChange={() => setTech(item._id)}
                  />
                  <label htmlFor={item.name}>{item.name}</label>
                </div>
              ))}
          </div>
        </div>

        <button
          type="submit"
          aria-disabled={pending}
          onClick={() => setPending(true)}
          className="bg-yellow1 p-[8px] rounded-[4px] mt-[20px]"
        >
          {pending && !isCreated
            ? "processing..."
            : !pending && isCreated
            ? "Created successfully"
            : "Create"}
        </button>
      </form>
    </div>
  );
};

export default CreateTopic;
