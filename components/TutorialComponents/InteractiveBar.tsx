"use client";
import React, { useEffect, useState } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { BiComment, BiSolidComment } from "react-icons/bi";
import { VscLiveShare } from "react-icons/vsc";
import { PiInfo } from "react-icons/pi";
import Tooltip from "../Tooltip";
import { patchComment, patchTutorailLike } from "@/app/actions";
import ShareTutorial from "../Popup/ShareTutorial";
import Overlay from "../Overlay";
import PostDetails from "../Popup/PostDetails";
import FeedbackForm from "../Popup/FeedbackForm";
import withFormHandling from "@/lib/FormHandler";
import { RxCross2 } from "react-icons/rx";

const InteractiveBar = ({
  tutorialId,
  currentLikes,
  postDetails,
  feedback,
  postSlug,
}: {
  tutorialId: string;
  currentLikes: number;
  postDetails: any;
  feedback: any;
  postSlug: string;
}) => {
  const [isLikeHovered, setIsLikeHovered] = useState(false);
  const [isCommentHovered, setIsCommentHovered] = useState(false);
  const [isShareHovered, setIsShareHovered] = useState(false);
  const [isInfoHovered, setIsInfoHovered] = useState(false);
  const [isShareIconClicked, setIsShareIconClicked] = useState(false);
  const [isInfoIconClicked, setIsInfoIconClicked] = useState(false);
  const [isFeedbackIconClicked, setIsFeedbackIconClicked] = useState(false);

  // Handle Like Click
  const handleLike = async () => {
    const likesCount =
      currentLikes === null || currentLikes === undefined
        ? 1
        : currentLikes + 1;

    const updatedLikes = {
      likes: likesCount,
    };

    await patchTutorailLike(tutorialId, updatedLikes).then((res) => {
      setIsLikeHovered(true);
    });
  };

  // Wrapping feedback form with form Handler
  const FormWithHandling = withFormHandling(FeedbackForm);

  // Submit feedback form
  const submitFormLogic = async (formData: any) => {
    await patchComment(tutorialId, formData).then((res) => {
      setIsFeedbackIconClicked(false);
    });
  };

  // Handle Key Press
  const handleKeyPress = (event: any) => {
    if (
      (event.key === "d" || event.key === "D") &&
      !event.target.matches("input, textarea")
    ) {
      handleLike();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  return (
    <div className="w-full flex justify-center sticky top-[40px]">
      <div className="flex flex-col items-center gap-[20px] mt-[30px]">
        <div
          onMouseEnter={() => setIsLikeHovered(true)}
          onMouseLeave={() => setIsLikeHovered(false)}
          onClick={handleLike}
          className="w-max"
        >
          <Tooltip
            icon={
              isLikeHovered ? (
                <AiFillHeart className="text-[19px] text-red-500 " />
              ) : (
                <AiOutlineHeart className="text-[19px] " />
              )
            }
            alignment="left"
            text="like"
            iconContainerStyle="w-[40px] h-[40px] rounded-full shadow-lg border border-slate-300 "
            style="bg-red-500 p-[10px] rounded-[4px]"
          />
        </div>

        <div
          onMouseEnter={() => setIsCommentHovered(true)}
          onMouseLeave={() => setIsCommentHovered(false)}
          onClick={() => setIsFeedbackIconClicked(true)}
          className="w-max"
        >
          <Tooltip
            icon={
              isCommentHovered ? (
                <BiSolidComment className="text-[19px] text-yellow1 " />
              ) : (
                <BiComment className="text-[19px] " />
              )
            }
            alignment="left"
            text="Give feedback"
            iconContainerStyle="w-[40px] h-[40px] rounded-full shadow-lg border border-slate-300 "
            style="bg-yellow1 p-[10px] rounded-[4px]"
          />
        </div>

        <div
          onMouseEnter={() => setIsShareHovered(true)}
          onMouseLeave={() => setIsShareHovered(false)}
          onClick={() => setIsShareIconClicked(true)}
          className="w-max"
        >
          <Tooltip
            icon={
              <VscLiveShare
                className={`text-[19px] ${
                  isShareHovered && "text-primaryBlue"
                } `}
              />
            }
            alignment="left"
            text="Share this post"
            iconContainerStyle="w-[40px] h-[40px] rounded-full shadow-lg border border-slate-300 "
            style="bg-primaryBlue p-[10px] rounded-[4px]"
          />
        </div>

        <div
          onMouseEnter={() => setIsInfoHovered(true)}
          onMouseLeave={() => setIsInfoHovered(false)}
          onClick={() => setIsInfoIconClicked(true)}
          className="w-max"
        >
          <Tooltip
            icon={
              <PiInfo
                className={`text-[19px] ${isInfoHovered && "text-slate-700"} `}
              />
            }
            alignment="left"
            text="Post details"
            iconContainerStyle="w-[40px] h-[40px] rounded-full shadow-lg border border-slate-300 "
            style="bg-slate-700 p-[10px] rounded-[4px] text-white"
          />
        </div>
      </div>

      {isShareIconClicked && (
        <ShareTutorial
          handleCross={() => setIsShareIconClicked(false)}
          postSlug={postSlug}
        />
      )}
      {isFeedbackIconClicked && (
        <div className="z-30 w-full md:w-[450px] fixed top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[50%] flex flex-col gap-[20px] bg-white p-[20px] pb-[40px] rounded-lg shadow">
          <div className="w-full">
            <div
              onClick={() => setIsFeedbackIconClicked(false)}
              className="cursor-pointer float-right w-[35px] h-[35px] rounded-full border border-slate-800 flex items-center justify-center "
            >
              <RxCross2 className="text-[17px] font-bold" />
            </div>
          </div>
          <FormWithHandling
            onSubmit={(formData: any) => submitFormLogic(formData)}
          />
        </div>
      )}
      {isInfoIconClicked && (
        <PostDetails
          handleCross={() => setIsInfoIconClicked(false)}
          currentLikes={currentLikes}
          postDetails={postDetails}
          feedback={feedback}
        />
      )}
      {(isShareIconClicked || isInfoIconClicked || isFeedbackIconClicked) && (
        <Overlay />
      )}
    </div>
  );
};

export default InteractiveBar;
