import React from "react";
import { Check, CloudUpload } from "lucide-react";

const Count3 = () => {
  return (
    <div className="px-8 flex flex-col justify-between gap-6 pt-7">
      <div className="flex items-center gap-2">
        <div className="flex flex-col items-center gap-2">
          <div className="w-10 h-10 bg-green-400 rounded-full flex items-center justify-center">
            <span className="text-white font-bold">
              <Check />
            </span>
          </div>
          <p className="text-sm text-center w-21 text-gray-600">
            Personal Info
          </p>
        </div>
        <div className="h-1 w-full bg-green-400"></div>
        <div className="flex flex-col items-center gap-2">
          <div className="w-10 h-10 bg-green-400 rounded-full flex items-center justify-center">
            <span className="text-white font-bold">
              <Check />
            </span>
          </div>
          <p className="text-sm text-center text-gray-600">Experience</p>
        </div>
        <div className="h-1 w-full bg-green-400"></div>
        <div className="flex flex-col items-center gap-2">
          <div className="w-10 h-10 bg-[#4640DE] rounded-full flex items-center justify-center">
            <span className="text-white">3</span>
          </div>
          <p className="text-sm text-center text-gray-600">Documents</p>
        </div>
      </div>
      <h1 className="text-2xl font-bold">Documents</h1>
      <p>Upload your resume and cover letter</p>
        <div className="flex flex-col gap-2">
          <p className="text-sm text-gray-800">Resume/CV</p>
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center w-full">
            <input
              type="file"
              id="resume"
              name="resume"
              accept=".pdf,.doc,.docx"
              required
              className="hidden"
            />
            <label htmlFor="resume" className="cursor-pointer flex flex-col items-center justify-center gap-2 py-2">
              <CloudUpload size={36} color="gray" />
              <div className="text-sm text-gray-600">
                <span>
                  <span className="font-medium text-[#4640DE]">Click to upload</span> or drag and drop
                </span>
              </div>
              <p className="text-xs text-gray-500">PDF, DOC, DOCX up to 5MB</p>
            </label>
          </div>
        </div>
      <div className="flex flex-col gap-2">
      <p className="text-sm text-gray-800">Cover Letter</p>
      <div className="border-1 h-40 border-gray-300 rounded-lg py-3 px-4 text-center w-full">
      <input
            id="coverLetter" 
            name="coverLetter" 
            className="w-full rounded-lg focus:outline-none" 
            placeholder="Tell us why you're a good fit for this position...."
          />
      </div>
      </div>
    </div>
  );
};

export default Count3;
