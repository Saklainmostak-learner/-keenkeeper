import { Plus } from "lucide-react";
import React from "react";

const Banner = () => {
  return (
    <div className="bg-[#FFFFFF] px-6 py-12 text-center text-white md:px-10 md:py-16">
      <h1 className="mx-auto max-w-3xl text-3xl font-bold text-[#1F2937]">Friends to keep close in your life</h1>
      <p className="mx-auto mt-4 max-w-sm text-sm text-[#64748B] ">
        Your personal shelf of meaningful connections. Browse, tend, and nurture
        the relationships that matter most.
      </p>
      <button className="mx-auto mt-6 inline-flex items-center gap-2 rounded-sm bg-[#1f5f4a] px-6 py-3 text-sm font-semibold text-white transition hover:scale-[1.02]">
        <Plus size={16} />
        <span>Add a Friend</span>
      </button>
      
    </div>
    
  );
};

export default Banner;
