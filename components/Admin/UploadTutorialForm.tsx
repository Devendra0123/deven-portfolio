"use client";
import { TechnologyProps, TutorialTopicProps } from "@/types";
import React, { useRef, useState } from "react";
import Dropdown from "../Dropdown";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import { experimental_useFormStatus as useFormStatus } from "react-dom";
import CreateTopic from "../Popup/CreateTopic";
import Overlay from "../Overlay";
import HandleOutsideClick from "../HandleOutsideClick";

const QuillEditor = dynamic(() => import("react-quill"), { ssr: false });

interface Props {
  technologies: TechnologyProps[];
  topics: TutorialTopicProps[];
}

const UploadTutorialForm = ({ technologies, topics }: Props) => {
  const topicRef: any = useRef(null);
  const createTopicRef: any = useRef(null);
  const { pending } = useFormStatus();

  const [isTopicFocused, setIsTopicFocused] = useState(false);
  const [isCreateTopicClicked, setIsCreateTopicClicked] = useState(false);
  const [content, setContent] = useState("");

  const quillModules = {
    toolbar: [
      [{ header: [1, 2, 3, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "image"],
      [{ align: [] }],
      [{ color: [] }],
      ["code-block"],
      ["clean"],
    ],
  };

  const quillFormats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "link",
    "image",
    "align",
    "color",
    "code-block",
  ];

  const handleEditorChange = (newContent: any) => {
    setContent(newContent);
  };
  return (
    <div>
      <form className="w-full bg-dark1 p-[30px] rounded-lg text-white flex flex-col gap-[20px]">
        <div className="flex flex-col gap-[8px]">
          <label>Title</label>
          <input
            type="text"
            placeholder="Enter title"
            className="p-[8px] rounded-[4px] outline-none bg-slate-300 border border-slate-400 text-black"
          />
        </div>

        <div className="relative flex flex-col gap-[8px]">
          <p>Topic</p>
          <button
            type="button"
            onClick={() => setIsTopicFocused((prev) => !prev)}
            className="bg-slate-300 p-[8px] w-max rounded-[4px] text-black"
          >
            Select topic
          </button>
          <div
            ref={topicRef}
            className={`${
              isTopicFocused ? "min-w-[100px] h-max" : "hidden w-0 h-0"
            } bg-gray-400 p-[10px] z-10 shadow shadow-yellow1 absolute top-[80px] left-0 transition duration-150 ease-out`}
          >
            <Dropdown
              data={topics}
              dropdowStyle=" p-[10px] rounded-[4px] text-black"
            />
            <div>
              <button
                type="button"
                onClick={() => setIsCreateTopicClicked(true)}
                className="bg-primaryBlue p-[8px] rounded-[4px] "
              >
                Create Topic
              </button>
            </div>
          </div>
        </div>

        <div className="relative flex flex-col gap-[8px]">
          <p>Select Technology</p>
          <div className="flex items-center gap-[20px] flex-wrap bg-slate-300 p-[10px] rounded-[4px] text-black">
            {technologies?.length > 0 &&
              technologies.map((item, index) => (
                <div key={index} className="flex items-center gap-[5px]">
                  <input type="radio" />
                  <label>{item.name}</label>
                </div>
              ))}
          </div>
        </div>

        <div className="relative flex flex-col gap-[8px]">
          <p>Select main image</p>
          <input
            type="file"
            className="bg-slate-300 p-[8px] rounded-[4px] w-max text-black"
          />
        </div>

        <div className="relative flex flex-col gap-[8px]">
          <p>Write content</p>
          <div className="w-full h-[30vh] bg-white p-0 m-0">
            <QuillEditor
              value={content}
              onChange={handleEditorChange}
              modules={quillModules}
              formats={quillFormats}
              className="w-full h-[70%] bg-white text-black m-0 border-0"
            />
          </div>
        </div>

        <div className="relative flex flex-col gap-[8px]">
          <p>Published at</p>
          <input
            type="date"
            className="bg-slate-300 p-[8px] rounded-[4px] w-max text-black"
          />
        </div>

        <button
          type="submit"
          aria-disabled={pending}
          className="bg-yellow1 p-[8px] rounded-[4px] mt-[20px]"
        >
          Upload Guide
        </button>
      </form>

      {isCreateTopicClicked && <Overlay />}
      {isCreateTopicClicked && (
        <div ref={createTopicRef}>
          <CreateTopic technologies={technologies} />
        </div>
      )}

      <HandleOutsideClick
        containerRef={createTopicRef}
        parameter={isCreateTopicClicked}
        handleFunc={() => {
          if (isCreateTopicClicked) {
            setIsCreateTopicClicked(false);
          }
        }}
      />

      <HandleOutsideClick
        containerRef={topicRef}
        parameter={isTopicFocused}
        handleFunc={() => {
          if (isTopicFocused) {
            setIsTopicFocused(false);
          }
          return;
        }}
      />
    </div>
  );
};

export default UploadTutorialForm;
