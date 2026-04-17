import React, { useEffect, useState } from "react";
import { getTimeline } from "../utils/timeline";
// import callIcon from "../assets/call.png";
// import textIcon from "../assets/text.png";
// import videoIcon from "../assets/video.png";
import { ChevronDown, LucidePhoneCall, MessageSquareCheckIcon, VideoIcon } from "lucide-react";
const Timeline = () => {
  const [timeline, setTimeline] = useState([]);
  const [filter, setFilter] = useState("all");
  useEffect(() => {
    const data = getTimeline();
    console.log(data);
    setTimeline(data);
  }, []);
  const filterData =
    filter === "all"
      ? timeline
      : timeline.filter((item) => item.type === filter);
  const formatData = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  };
  const getIcon = (type) => {
    if (type === "call") return <LucidePhoneCall size={24} className="text-slate-600"/>;
    if (type === "text") return <MessageSquareCheckIcon size={24} className="text-slate-600" />
    if (type === "video") return <VideoIcon size={24} className="text-slate-600"/>
  };
  return (
    <section className="px-4 py-8 md:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-4xl font-bold text-[#1F2937]">Timeline</h2>
        <div className="relative mt-6 w-full max-w-53">
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="h-12 w-full appearance-none rounded-xl border border-slate-200 bg-white px-4 pr-10 text-sm text-slate-500 shadow-sm outline-none"
          >
            <option value="all">Filter timeline</option>
            <option value="call">Call</option>
            <option value="text">Text</option>
            <option value="video">Video</option>
          </select>
          <ChevronDown
            size={18}
            className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 "
          />
        </div>
        <div className="mt-6 space-y-4">
          {filterData.length === 0 ? (
            <div className="rounded-xl bg-white px-5 py-4 shadow-sm ring-1 ring-slate-200/70">
              <p className="text-slate-500">No Activity yet.</p>
            </div>
          ) : (
            filterData.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-4 rounded-xl bg-white px-5 py-4 shadow-sm ring-1 ring-slate-200/70 "
              >
               <div className="shrink-0">{getIcon(item.type)}</div>
                <div>
                  <h3 className="text-[17px] font-medium text-[#244D3F]">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm text-[#64748B]">
                    {formatData(item.date)}
                  </p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
