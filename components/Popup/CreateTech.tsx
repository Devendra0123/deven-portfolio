"use client";
import { createTech, createTopic } from "@/app/actions";
import { TechnologyProps } from "@/types";
import React, { useState } from "react";

interface Props {
  handleVisibility: any
}

const CreateTech = ({ handleVisibility }: Props) => {
  const [pending, setPending] = useState(false);
  const [isCreated, setIsCreated] = useState(false);
  const [name, setName] = useState("");
  const [tech, setTech] = useState("");

  return (
    <div className="z-30 fixed top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[50%] bg-white p-[20px] rounded-lg shadow">
      <p className="w-full text-center font-bold underline underline-offset-4 decoration-primaryBlue">
        Create Tech
      </p>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          setIsCreated(false);
          await createTech(name);
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

export default CreateTech;
