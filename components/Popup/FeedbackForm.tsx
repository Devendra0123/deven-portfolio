
import React from "react";

const FeedbackForm = (props: any) => {
  const { formData, loading, success, error, onFormSubmit, onFormChange } =
    props;

  return (
    <div>
      <h1 className="text-xl text-yellow1 font-semibold">Give Feedback</h1>

      <form onSubmit={onFormSubmit} className="flex flex-col gap-[12px] mt-[20px]">
        <input
          type="email"
          placeholder="Enter your Email Id"
          name="email"
          value={formData.email || ""}
          onChange={onFormChange}
          className="outline-none p-[8px] border border-slate-400 rounded-[4px] "
        />
        <textarea
          placeholder="Write Comment..."
          name="comment"
          value={formData.comment || ""}
          onChange={onFormChange}
          className="outline-none p-[8px] border border-slate-400 rounded-[4px] "
        />
        {error && (
          <p className="text-[14px] text-red-500">
            <span className="">*</span> {error}
          </p>
        )}
        <button disabled={loading} className={`w-full ${loading ? "bg-primaryBlue/25" : "bg-primaryBlue"} hover:bg-primaryBlue/75 p-[8px] rounded-[5px] text-white`}>
          Submit
        </button>

        {loading && <p>Wait...</p>}
        {success && <p>Form submitted successfully!</p>}
        {error && <p>Error: {error}</p>}
      </form>
    </div>
  );
};

export default FeedbackForm;
