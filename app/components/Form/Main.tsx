"use client"
import React, { useState } from "react";
import Count1 from "./Count1";
import Count2 from "./Count2";
import Count3 from "./Count3";
import Link from "next/link";

const Main = () => {
  const [count, setCount] = useState(1);
  const [submitted,setSubmitted] = useState(false);

  return (
    <div className={`w-full max-w-270 mx-auto ${count <= 2 ? 'h-auto' : 'h-auto'} mt-10 shadow-md rounded-lg`}>
      <div className="bg-white rounded-lg h-full">
        <div className="bg-[#4640DE] text-white px-4 sm:px-8 py-6 sm:h-32 flex items-center">
          <div>
            <h2 className="font-bold text-xl sm:text-2xl md:text-[2rem]">Apply Here</h2>
            <p className="text-base sm:text-lg">Join our team and build something great</p>
          </div>
        </div>
        {count === 1 ? <Count1 /> : count === 2 ? <Count2 /> : <Count3 submitted={submitted}/>}
        <div className="px-4 sm:px-8 flex flex-col justify-between gap-6 pt-7 pb-6">
          <div className="flex justify-between mt-3">
            <button 
              className="bg-gray-100 text-gray-400 rounded-md px-4 sm:px-7 py-2 sm:py-3" 
              onClick={() => setCount(count - 1)} 
              disabled={count === 1}
            >
              Previous
            </button>
            {submitted ? <>
              <Link href="/"><button className="bg-[#4640DE] text-white rounded-md px-4 sm:px-6 py-2 sm:py-3">Back to jobs</button></Link>
            </>
            :
            <>
            <button 
              className={`bg-[#4640DE] text-white rounded-md px-4 sm:px-6 py-2 sm:py-3 ${count === 3 ? 'hidden': 'block'}`}
              onClick={() => {
                setCount(count + 1)
                setSubmitted(false);
              }} 
            >
              Next Step
            </button>
            <button className={`bg-[#4640DE] text-white rounded-md px-4 sm:px-6 py-2 sm:py-3 ${count === 3 ? 'block': 'hidden'}`}
              onClick={() => {
                setSubmitted(true);
              }}
            >
              Submit Application
            </button>
            </>
            }
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
