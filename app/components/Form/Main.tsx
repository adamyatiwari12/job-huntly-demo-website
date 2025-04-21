"use client"
import React,{useState} from "react";
import Count1 from "./Count1";
import Count2 from "./Count2";
import Count3 from "./Count3";


const Main = () => {

    const [count, setCount] = useState(1);

  return (
    <div className={`w-270 ${count <= 2 ? 'h-160' : 'h-215'} mt-10 shadow-md rounded-lg`}>
      <div className="bg-white rounded-lg h-full">
        <div className="bg-[#4640DE] text-white px-8 h-32 flex items-center">
          <div>
            <h2 className="font-bold text-[2rem]">Apply Here</h2>
            <p className="text-lg">Join our team and build something great</p>
          </div>
        </div>
        {count===1 ? <Count1/> : count===2 ? <Count2/> : <Count3/>}
          <div className="px-8 flex flex-col justify-between gap-6 pt-7">
          <div className="flex justify-between mt-3">
            <button className="bg-gray-100 text-gray-400 rounded-md px-7 py-3" onClick={()=>setCount(count-1)} disabled={count===1}>
              Previous
            </button>
            <button className="bg-[#4640DE] text-white rounded-md px-6 py-3" onClick={()=>setCount(count+1)} disabled={count===3}>
            {count === 3 ? 'Submit Application' : 'Next Step'}
            </button>
          </div>
        </div>
        </div>
      </div>
  );
};

export default Main;
