import React from "react";
import { Check, CloudUpload } from "lucide-react";

type Count3Props = {
  submitted: boolean;
};

const Count3 = ({submitted}:Count3Props) => {
  return (
    <div>
    {submitted ? 
      <div className="px-4 sm:px-8 pt-6 sm:pt-7 flex flex-col items-center gap-3 sm:gap-4 h-auto">
      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-green-400 rounded-full flex items-center justify-center">
        <span className="text-white font-bold">
          <Check size={16} className="sm:size-auto" />
        </span>
      </div>
      <h1 className="text-xl sm:text-2xl font-bold text-center">Application Submitted</h1>
      <p className="text-sm sm:text-base text-gray-600 text-center">
        Thank you for applying!
      </p>
    </div> 
      :
      <div className="px-4 sm:px-8 flex flex-col justify-between gap-4 sm:gap-6 pt-6 sm:pt-7">
      <div className="flex items-center gap-1 sm:gap-2">
        <div className="flex flex-col items-center gap-1 sm:gap-2">
          <div className="w-8 h-8 sm:w-10 sm:h-10 bg-green-400 rounded-full flex items-center justify-center">
            <span className="text-white font-bold">
              <Check size={16} className="sm:size-auto" />
            </span>
          </div>
          <p className="text-xs sm:text-sm text-center w-16 sm:w-21 text-gray-600">
            Personal Info
          </p>
        </div>
        <div className="h-1 w-full bg-green-400"></div>
        <div className="flex flex-col items-center gap-1 sm:gap-2">
          <div className="w-8 h-8 sm:w-10 sm:h-10 bg-green-400 rounded-full flex items-center justify-center">
            <span className="text-white font-bold">
              <Check size={16} className="sm:size-auto" />
            </span>
          </div>
          <p className="text-xs sm:text-sm text-center text-gray-600">Experience</p>
        </div>
        <div className="h-1 w-full bg-green-400"></div>
        <div className="flex flex-col items-center gap-1 sm:gap-2">
          <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#4640DE] rounded-full flex items-center justify-center">
            <span className="text-white text-sm sm:text-base">3</span>
          </div>
          <p className="text-xs sm:text-sm text-center text-gray-600">Documents</p>
        </div>
      </div>
      <div className="mt-2 sm:mt-0">
        <h1 className="text-xl sm:text-2xl font-bold">Documents</h1>
        <p className="text-sm sm:text-base">Upload your resume and cover letter</p>
      </div>
      <div className="flex flex-col gap-1 sm:gap-2">
        <p className="text-xs sm:text-sm text-gray-800">Resume/CV</p>
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 sm:p-6 text-center w-full">
          <input
            type="file"
            id="resume"
            name="resume"
            accept=".pdf,.doc,.docx"
            required
            className="hidden"
          />
          <label htmlFor="resume" className="cursor-pointer flex flex-col items-center justify-center gap-2 py-2">
            <CloudUpload size={24} className="sm:size-18" color="gray" />
            <div className="text-xs sm:text-sm text-gray-600">
              <span>
                <span className="font-medium text-[#4640DE]">Click to upload</span> or drag and drop
              </span>
            </div>
            <p className="text-xs text-gray-500">PDF, DOC, DOCX up to 5MB</p>
          </label>
        </div>
      </div>
      <div className="flex flex-col gap-1 sm:gap-2">
        <p className="text-xs sm:text-sm text-gray-800">Cover Letter</p>
        <div className="border border-gray-300 rounded-lg py-2 sm:py-3 px-3 sm:px-4 w-full h-32 sm:h-40">
          <textarea
            id="coverLetter" 
            name="coverLetter" 
            className="w-full h-full rounded-lg focus:outline-none resize-none text-sm" 
            placeholder="Tell us why you're a good fit for this position...."
          ></textarea>
        </div>
      </div>
    </div>
    }
  
  </div>
    
  );
};

export default Count3;