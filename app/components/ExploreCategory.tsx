"use client" 
import React from "react";
import { ArrowRight } from "lucide-react";
import { CategoryIcons } from "./icons/CategoryIcons";
import CategoryCard from "./CategoryCard";

const ExploreCategory = () => {

    const categories = [
        { icon: <CategoryIcons.Design />, title: "Design", count: 235 },
        { icon: <CategoryIcons.Sales />, title: "Sales", count: 756 },
        { icon: <CategoryIcons.Marketing />, title: "Marketing", count: 140 },
        { icon: <CategoryIcons.Finance />, title: "Finance", count: 325 },
        { icon: <CategoryIcons.Technology />, title: "Technology", count: 436 },
        { icon: <CategoryIcons.Engineering />, title: "Engineering", count: 542 },
        { icon: <CategoryIcons.Business />, title: "Business", count: 211 },
        { icon: <CategoryIcons.HumanResource />, title: "Human Resource", count: 346 },
      ];
  return (
    <div className="px-30 pt-15 bg-white max-lg:px-20 max-md:px-7 max-sm:px-3">
      <div className="flex justify-between items-center">
        <h2 className="text-5xl font-semibold leading-[52.8px] text-[#25324B] max-md:text-3xl max-md:leading-0">
          Explore by <span className="text-[#26A4FF]">Category</span>
        </h2>
        <h4 className="text-[#4640DE] font-semibold hidden lg:block">Show all jobs <span><ArrowRight className="inline"/></span></h4>
      </div>
      <div className="grid grid-cols-4 gap-8 mt-15 max-lg:grid-cols-2 max-md:grid-cols-1">
      {categories.map((category, index) => (
          <CategoryCard
            key={index}
            icon={category.icon}
            title={category.title}
            count={category.count}
          />
        ))}
      </div>
    </div>
  );
};

export default ExploreCategory;
