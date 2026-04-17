import React from "react";
import { Link } from "react-router-dom";
const statusColors = {
  overdue: "bg-[#EF4444] text-white",
  "almost due": "bg-[#EFAD44] text-white",
  "on-track": "bg-[#244D3F] text-white",
};

const FriendsCard = ({ friend }) => {
  const { id, name, picture, days_since_contact, tags, status } = friend;

  return (
    <Link to={`/friend/${id}`} className="block h-full">
      <div className="h-full min-h-64 bg-[#FFFFFF] px-6 py-8 shadow-sm ring-1 ring-slate-200/70 transition duration-200 rounded-sm flex flex-col text-center hover:-translate-y-1 hover:shadow-md">
        <img
          src={picture}
          alt={name}
          className="mx-auto h-16 w-16 rounded-full object-cover md:h-20 md:w-20"
        />
        <h3 className="mt-5 text-3xl font-bold leading-none text-[#1F2937]">
          {name}
        </h3>
        <p className="mt-3 text-sm font-medium text-[#64748B]">
          {days_since_contact}d ago
        </p>
        <div className="mt-4 flex  flex-wrap items-center min-h-[48px]     justify-center gap-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="rounded-full bg-[#CBFADB] px-3 py-1 text-xs font-medium text-[#244D3F] uppercase"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-auto pt-4">
          <span
            className={`inline-block rounded-full px-4 py-1 text-xs font-semibold ${statusColors[status]}`}
          >
            {status === "almost due"
              ? "Almost Due"
              : status === "on-track"
                ? "On-Track"
                : "Overdue"}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default FriendsCard;
