'use client'
import React, { useState } from 'react'

interface FormFields {
    title: string;

}

const UploadBlogForm = () => {

    const [billingDetails, setBillingDetails] = useState({
        title: "",
        
      });

      const handleFormFields = (field: string, value: string) => {
        setBillingDetails((prev) => {
          const updatedInfo :any = { ...prev };
          updatedInfo[field] = value;
          return updatedInfo;
        });
      };

  return (
    <div>
        <form className="w-full bg-dark1 p-[30px] rounded-lg text-white flex flex-col gap-[20px]">
        <div className="flex flex-col gap-[8px]">
          <label>Title</label>
          <input
            type="text"
            placeholder="Enter title"
            onChange={(e) => handleFormFields("title",e.target.value)}
            className="p-[8px] rounded-[4px] outline-none bg-slate-300 border border-slate-400 text-black"
          />
        </div>
        </form>
    </div>
  )
}

export default UploadBlogForm