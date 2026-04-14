import React, { useEffect, useState } from "react";
import Banner from "../components/Banner";
import CardSummary from "../components/CardSummary";

const Home = () => {
  const [friends, setFriends] = useState([]);
  useEffect(() => {
    fetch("/friends.json")
      .then((res) => res.json())
      .then((data) => setFriends(data));
  }, []);
  const totalFriends=friends.length;
  const onTrack=friends.filter(
    (friend)=>friend.status==="on-track").length;
    const needAttention=friends.filter(
      (friend)=>friend.status==="overdue"|| friend.status==="almost due").length;
    
  
const interactionsThisMonth=12;
  return (
    <section className="px-4 py-8 md:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <Banner />
        <div className="-mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          <CardSummary value={totalFriends} label="Total Friends" />
          <CardSummary value={onTrack} label="On Track" />
          <CardSummary value={needAttention} label="Need Attention" />
          <CardSummary
            value={interactionsThisMonth}
            label="Interactions This Month"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
