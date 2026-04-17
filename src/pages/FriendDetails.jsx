import {
  Archive,
  BellRing,
  LucidePhoneCall,
  MessageSquareMore,
  Trash2,
  VideoIcon,
} from "lucide-react";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { addTimeline } from "../utils/timeline";
import toast from "react-hot-toast";

const statusColor = {
  overdue: "bg-[#EF4444] text-white",
  "almost due": "bg-[#EFAD44] text-white",
  "on-track": "bg-[#244D3F] text-white",
};
const formatStatus = (status) => {
  if (status === "almost due") return "Almost Due";
  if (status === "on-track") return "On-Track";
  return "Overdue";
};
const formatDate = (dataString) => {
  const date = new Date(dataString);
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
};
const FriendDetails = () => {
  const { id } = useParams();
  const [friends, setFriends] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("/friends.json")
      .then((res) => res.json())
      .then((data) => {
        setFriends(data);
        setLoading(false);
      });
  }, []);
  const friend = friends.find((item) => item.id === Number(id));
  if (loading) {
    return (
      <section className="px-4 py-8 md:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <p className="text-slate-500">Loading...</p>
        </div>
      </section>
    );
  }
  if (!friend) {
    return (
      <section className="px-4 py-4 md:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold text-slate-800">
            Friend not found
          </h2>
        </div>
      </section>
    );
  }

  const handleCheckIn = (type) => {
    const entry = {
      id: crypto.randomUUID(),
      friendId: friend.id,
      type: type.toLowerCase(),
      title: `${type} with ${friend.name}`,
      date: new Date().toISOString(),
    };
    addTimeline(entry);
    toast.success(`${type} logged Successfully`);
  };
  return (
    <section className="px-4 py-8 md:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="grid gap-3 xl:grid-cols-[260px_1fr]">
          {/* left */}
          <div className="space-y-3">
            <div className="min-h-64 rounded-xl bg-[#FFFFFF] px-5 py-6 text-center shadow-sm ring-1 ring-slate-200/70">
              <img
                src={friend.picture}
                alt={friend.name}
                className="mx-auto h-16 w-16 rounded-full object-cover"
              />
              <h2 className="mt-4 text-3xl font-bold leading-none text-[#1F2937]">
                {friend.name}
              </h2>
              <div className="mt-2">
                <span
                  className={`inline-block rounded-full px-3 py-1 text-xs font-semibold ${statusColor[friend.status]}`}
                >
                  {formatStatus(friend.status)}
                </span>
              </div>
              <div className="mt-2 flex flex-wrap min-h-[28px] justify-center gap-2">
                {friend.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="rounded-full bg-[#CBFADB] px-2.5 py-1 text-[10px] font-medium uppercase text-[#244D3F]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <p className="mt-4 text-[15px] italic leading-6 text-[#64748B]">
                "{friend.bio}"
              </p>
              <p className="mt-2 text-xs text-[#64748B]">{friend.email}</p>
            </div>
            <button
              className="flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-white text-base font-medium text-[#1F2937] shadow-sm ring-1 ring-slate-200/70
            "
            >
              <BellRing size={18} className="shrink-0 translate-y-px" />
              Snooze 2 Weeks
            </button>
            <button
              className="flex  h-12 w-full items-center justify-center gap-2 rounded-xl bg-white text-base font-medium text-[#1F2937] shadow-sm ring-1 ring-slate-200/70
            "
            >
              <Archive size={16} className="shrink-0 translate-y-px" />
              Archive
            </button>
            <button
              className="flex  h-12 w-full items-center justify-center gap-2 rounded-xl bg-white text-base font-medium text-[#EF4444] shadow-sm ring-1 ring-slate-200/70
            "
            >
              <Trash2 size={16} className="shrink-0 translate-y-px" />
              Delete
            </button>
          </div>
          {/* right */}
          <div className="space-y-3">
            <div className="grid gap-3 md:grid-cols-3">
              <div className="min-h-[112px] rounded-xl bg-white px-4 py-5 text-center shadow-sm ring-1 ring-slate-200/70">
                <h3 className="text-4xl font-bold text-[#244D3F] ">
                  {friend.days_since_contact}
                </h3>
                <p className="mt-2 text-[#64748B] text-sm">
                  Days Since Contact
                </p>
              </div>
              <div className="min-h-28 rounded-xl bg-white px-4 py-5 text-center shadow-sm ring-1 ring-slate-200/70">
                <h3 className="text-4xl font-bold text-[#244D3F] ">
                  {friend.goal}
                </h3>
                <p className="mt-2 text-[#64748B] text-sm">Goals (Days)</p>
              </div>
              <div className="min-h-28 rounded-xl bg-white px-4 py-5 text-center shadow-sm ring-1 ring-slate-200/70">
                <h3 className="text-3xl font-bold text-[#244D3F] ">
                  {formatDate(friend.next_due_date)}
                </h3>
                <p className="mt-2 text-[#64748B] text-sm">Next Due</p>
              </div>
            </div>
            <div className="rounded-xl bg-white px-5 py-5 shadow-sm ring-1 ring-slate-200/70 ">
              <div className="flex justify-between items-start gap-3">
                <div>
                  <h3 className="text-xl font-bold text-[#244D3F]">
                    Relationship Goal
                  </h3>
                  <p className="mt-3 text-sm text-[#64748B]">
                    Connect every{" "}
                    <span className="font-semibold text-[#1F2937] ">
                      {friend.goal} days
                    </span>
                  </p>
                </div>
                <button className="rounded-md bg-[#E9E9E9] px-3 py-2 text-xs font-semibold text-[#1F2937] ring-1 ring-slate-200/70">
                  Edit
                </button>
              </div>
            </div>
            <div className="rounded-xl bg-white px-5 py-5 shadow-sm ring-1 ring-slate-200/70 ">
              <div>
                <h3 className="text-xl font-bold text-[#244D3F]">
                  Quick Check-In
                </h3>
                <div className="mt-4 grid  gap-3 sm:grid-cols-3 ">
                  <button
                    onClick={() => handleCheckIn("Call")}
                    className="flex min-h-[92px] flex-col  items-center justify-center gap-2  rounded-xl bg-[#E9E9E9] text-[#1F2937] ring-1 ring-slate-200/70 transition"
                  >
                    <LucidePhoneCall size={22} />
                    <span className="text-base font-medium">Call</span>
                  </button>
                  <button
                    onClick={() => handleCheckIn("Text")}
                    className="flex min-h-23 flex-col items-center justify-center gap-2  rounded-xl bg-[#E9E9E9] text-[#1F2937] ring-1 ring-slate-200/70 transition"
                  >
                    <MessageSquareMore size={22} />
                    <span className="text-base font-medium">Text</span>
                  </button>
                  <button
                    onClick={() => handleCheckIn("Video")}
                    className="flex min-h-23 flex-col items-center justify-center gap-2 rounded-xl bg-[#E9E9E9] text-[#1F2937] ring-1 ring-slate-200/70 transition"
                  >
                    <VideoIcon size={22} />
                    <span className="text-base font-medium">Video</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FriendDetails;
