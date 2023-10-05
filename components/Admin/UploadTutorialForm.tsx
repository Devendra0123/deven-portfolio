"use client";
import { TechnologyProps, TutorialTopicProps } from "@/types";
import React, { useRef, useState } from "react";
import Dropdown from "../Dropdown";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import CreateTopic from "../Popup/CreateTopic";
import Overlay from "../Overlay";
import HandleOutsideClick from "../HandleOutsideClick";
import { createTutorialPost } from "@/app/actions";
import { quillFormats, quillModules } from "@/utils/quillFormat";
import CreateTech from "../Popup/CreateTech";

const QuillEditor = dynamic(() => import("react-quill"), { ssr: false });

interface Props {
  technologies: TechnologyProps[];
  topics: TutorialTopicProps[];
}

const UploadTutorialForm = ({ technologies, topics }: Props) => {
  const topicRef: any = useRef(null);
  const createTopicRef: any = useRef(null);
  const createTechRef: any = useRef(null);

  const [pending, setPending] = useState(false);
  const [isUploaded, setIsUploaded] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isTopicFocused, setIsTopicFocused] = useState(false);
  const [isCreateTopicClicked, setIsCreateTopicClicked] = useState(false);
  const [isTechnologyClicked, setIsTechnologyClicked] = useState(false);
  const [selectedTopic, setSelectedTopic] =
    useState<TutorialTopicProps | null>();
  const [selectedTechId, setSelectedTechId] = useState("");
  const [title, setTitle] = useState("");
  const [mainImage, setMainImage] = useState<any>();
  const [publishedAt, setPublishedAt] = useState<string>();
  const [content, setContent] = useState("");

  const handleEditorChange = (newContent: any) => {
    setContent(newContent);
  };

  const handleImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;

    if (files?.length === 0 || files === null) {
      return;
    }

    setMainImage(files[0]);

    const data = new FormData()
    data.set('file', files[0])

    const imageId = await fetch("/api/image-upload", {
      method: "POST",
      headers: {
        'Content-Type': 'multipart/formdata'
      },
      body: data,
    });
  };

  // Reset form
  const resetForm = () => {
    setSelectedTopic(null);
    setSelectedTechId("");
    setTitle("");
    setPublishedAt("");
    setContent("");
    setMainImage("");
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setIsUploaded(false);
      setPending(true);
      const imageId = "";
      const formData = {
        title,
        selectedTechId,
        selectedTopicId: selectedTopic?._id,
        imageId: imageId,
        content: content,
        publishedAt,
      };

      await createTutorialPost(formData);
      setPending(false);
      setIsUploaded(true);
      setErrorMessage("");
      resetForm();
    } catch (err: any) {
      setPending(false);
      setIsUploaded(false);
      setErrorMessage(err.message);
    }
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="w-full bg-dark1 p-[30px] rounded-lg text-white flex flex-col gap-[20px]"
      >
        <div className="flex flex-col gap-[8px]">
          <label>Title</label>
          <input
            type="text"
            placeholder="Enter title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="p-[8px] rounded-[4px] outline-none bg-slate-300 border border-slate-400 text-black"
          />
        </div>

        <div className="relative flex flex-col gap-[8px]">
          <p>Select Topic</p>
          <button
            type="button"
            onClick={() => setIsTopicFocused((prev) => !prev)}
            className="bg-slate-300 p-[8px] w-max rounded-[4px] text-black"
          >
            {selectedTopic ? selectedTopic.name : "Select topic"}
          </button>
          <div
            ref={topicRef}
            className={`${isTopicFocused ? "min-w-[100px] h-max" : "hidden w-0 h-0"
              } bg-gray-400 p-[10px] z-10 shadow shadow-yellow1 absolute top-[80px] left-0 transition duration-150 ease-out`}
          >
            <Dropdown
              data={topics}
              dropdowStyle="w-full max-h-[200px] overflow-auto p-[10px] rounded-[4px] text-black"
              handleDropdownItemClick={(topic: TutorialTopicProps) => {
                setSelectedTopic(topic);
                setIsTopicFocused(false);
              }}
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

        <div ref={createTechRef} className="relative flex flex-col gap-[8px]">
          <p>Select Technology</p>
          <div className="flex items-center gap-[20px] flex-wrap bg-slate-300 p-[10px] rounded-[4px] text-black">
            {technologies?.length > 0 &&
              technologies.map((item, index) => (
                <div key={index} className="flex items-center gap-[5px]">
                  <input
                    type="radio"
                    id={item._id}
                    name="tech"
                    onChange={() => setSelectedTechId(item._id)}
                  />
                  <label htmlFor={item._id}>{item.name}</label>
                </div>
              ))}

            <div>
              <button
                type="button"
                onClick={() => setIsTechnologyClicked(true)}
                className="bg-dark1 p-[8px] rounded-[4px] text-white "
              >
                Create technology
              </button>
            </div>
          </div>
        </div>

        <div className="relative flex flex-col gap-[8px]">
          <p>Select main image</p>
          <input
            type="file"
            accept="image/*"
            name="image"
            onChange={handleImage}
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
            onChange={(e) => setPublishedAt(e.target.value)}
            className="bg-slate-300 p-[8px] rounded-[4px] w-max text-black"
          />
        </div>

        {errorMessage && (
          <p className="py-[10px] text-red-500">*{errorMessage}</p>
        )}

        <button
          type="submit"
          aria-disabled={pending}
          className="bg-yellow1 p-[8px] rounded-[4px] mt-[20px]"
        >
          {pending
            ? "processing"
            : !pending && isUploaded
              ? "Uploaded Successfully"
              : !pending && !isUploaded && errorMessage
                ? "Try Again"
                : "Upload Guide"}
        </button>
      </form>

      {(isCreateTopicClicked || isTechnologyClicked) && <Overlay />}
      {isCreateTopicClicked && (
        <div ref={createTopicRef}>
          <CreateTopic
            technologies={technologies}
            handleVisibility={() => setIsCreateTopicClicked(false)}
          />
        </div>
      )}

      {isTechnologyClicked && (
        <div ref={createTechRef}>
          <CreateTech handleVisibility={() => setIsTechnologyClicked(false)} />
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

      <HandleOutsideClick
        containerRef={createTechRef}
        parameter={isTechnologyClicked}
        handleFunc={() => {
          if (isTechnologyClicked) {
            setIsTechnologyClicked(false);
          }
          return;
        }}
      />
    </div>
  );
};

export default UploadTutorialForm;
