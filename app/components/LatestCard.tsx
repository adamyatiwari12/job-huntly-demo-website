import React from "react";

interface LatestCardProps {
  logo: React.ReactNode;
  title: string;
  company: string;
  location: string;
  tags?: string[];
}

const LatestCard: React.FC<LatestCardProps> = ({ logo, title, company, location, tags }) => {
  return (
    <div className="border border-solid border-[#D6DDEB] rounded-lg p-6 bg-white">
      <div className="flex gap-4">
        <div>{logo}</div>
        <div className="flex flex-col gap-2">
          <h1 className="text-[#25324B] text-xl font-bold">{title}</h1>
          <div className="flex items-center gap-2 text-[#515B6F] text-md">
            <span>{company}</span>
            <span className="w-1 h-1 bg-[#515B6F] opacity-30 rounded-full" />
            <span>{location}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestCard;
