import Image from "next/image";
import React from "react";

type FeaturedCardProps = {
  logo: string;
  title: string;
  company: string;
  location: string;
  description: string;
  tags: {
    label: string;
    type: string;
  }[];
};

const FeaturedCard = ({
  logo,
  title,
  company,
  location,
  description,
  tags,
}: FeaturedCardProps) => {
  return (
    <div className="p-6 pb-10 flex flex-col gap-3 bg-white rounded-lg border border-gray-100 shadow-md">
      <div className="flex items-center justify-between">
        <img
          src={logo}
          alt={`${company} logo`}
          className="w-12 h-12 rounded-lg mr-3 object-contain"
        />
        <div className="text-[#4640DE] text-sm font-medium border border-[#4640DE] rounded px-3 py-1 hover:bg-[#4640DE] hover:text-white transition-colors duration-300">
          Full Time
        </div>
      </div>
      <div>
        <h3 className="font-semibold text-lg text-[#25324B] mt-2">{title}</h3>
      </div>

      <div className="flex items-center gap-2 text-[#515B6F] text-sm">
        <span className="group-hover:text-[#25324B] transition-colors duration-300">
          {company}
        </span>
        <span className="w-1 h-1 bg-[#515B6F] opacity-30 rounded-full" />
        <span>{location}</span>
      </div>

      <p className="text-[#7C8493] text-sm line-clamp-2 group-hover:text-[#515B6F] transition-colors duration-300">
        {description}
      </p>

      <div className="flex flex-wrap gap-2 mt-3">
        {tags.map((tag, index) => (
          <span
            key={index}
            className={`px-4 py-1 rounded-full text-sm font-bold ${
              tag.type === "marketing"
                ? "text-[#FFB836] bg-[rgba(235,133,51,0.1)]"
                : tag.type === "design"
                ? "text-[#56CDAD] bg-[rgba(86,205,173,0.1)]"
                : tag.type === "business"
                ? "text-[#4640DE] bg-[rgba(70,64,222,0.1)]"
                : tag.type === "technology"
                ? "text-[#FF6550] bg-[rgba(255,101,80,0.1)]"
                : "bg-gray-50 text-gray-600"
            }`}
          >
            {tag.label}
          </span>
        ))}
      </div>
    </div>
  );
};

export default FeaturedCard;
