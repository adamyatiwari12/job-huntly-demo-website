import React from "react";

interface LatestCardProps {
  logo: React.ReactNode;
  title: string;
  company: string;
  location: string;
  tags?: string[];
}

const LatestCard = ({
  logo,
  title,
  company,
  location,
  tags,
}: LatestCardProps) => {
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
          <div className="flex gap-2 mt-1">
            <div className="flex items-center justify-center text-[#56CDAD] text-sm font-bold bg-[rgba(86,205,173,0.1)] rounded-full px-3 py-1">
              Full Time
            </div>
            <div className=" w-px bg-[rgba(76,76,76,0.25)]" />
            {tags && (
              <div className="flex flex-wrap gap-2">
                {tags.map((tag, index) => (
                  <span
                    key={index}
                    className={`px-3 py-2 rounded-full text-sm font-bold ${
                      tag === "Marketing"
                        ? "text-[#FFB836] border border-[#FFB836]"
                        : "text-[#4640DE] border border-[#4640DE]"
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestCard;
