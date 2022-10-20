import Header from "../../components/Header/Header";
import "./Leaderboard.scss";
import { DateRangePicker } from "rsuite";
import React from "react";

const Leaderboard = () => {
  return (
    <div className="leaderboard__root">
      <Header />
      <section className="leaderboard__root__heading">
        <div className="heading__div1">
          <p className="heading__div1__leaderboard">Leaderboard</p>
          <p className="heading__div1__details">
            Monitor overall performance of all students
          </p>
        </div>
        <div className="heading__div2">
          <DateRangePicker
            value={[new Date("2022-10-8"), new Date()]}
            size="lg"
            readOnly
            format="dd-MM-yyyy"
          />
        </div>
      </section>
    </div>
  );
};

export default Leaderboard;
