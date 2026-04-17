import React, { useEffect, useState } from "react";
import { getTimeline } from "../utils/timeline";
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

const COLORS = ["#7E35E1", "#244D3F", "#37A163"];

const Stats = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const timeline = getTimeline();

    const counts = {
      text: timeline.filter((item) => item.type === "text").length,
      call: timeline.filter((item) => item.type === "call").length,
      video: timeline.filter((item) => item.type === "video").length,
    };

    const chartData = [
      { name: "Text", value: counts.text },
      { name: "Call", value: counts.call },
      { name: "Video", value: counts.video },
    ];

    setData(chartData);
  }, []);

  const totalInteractions = data.reduce((sum, item) => sum + item.value, 0);

  return (
    <section className="px-4 py-8 md:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-4xl font-bold text-[#1F2937]">
          Friendship Analytics
        </h2>

        <div className="mt-6 rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-200/70">
          <p className="text-sm font-medium text-[#244D3F]">
            By Interaction Type
          </p>

          {totalInteractions === 0 ? (
            <div className="mt-6 flex h-[260px] items-center justify-center">
              <p className="text-slate-500">
                No interaction data yet. Add Call, Text, or Video activity first.
              </p>
            </div>
          ) : (
            <div className="mt-6 h-[260px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={data}
                    innerRadius={70}
                    outerRadius={100}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {data.map((entry, index) => (
                      <Cell key={entry.name} fill={COLORS[index]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          )}

          <div className="mt-4 flex justify-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-[#7E35E1]"></span>
              Text
            </div>
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-[#244D3F]"></span>
              Call
            </div>
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-[#37A163]"></span>
              Video
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;