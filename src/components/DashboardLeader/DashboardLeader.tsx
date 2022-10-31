import "./DashboardLeader.scss";
import { data } from "../../pages/Leaderboard/Data";
import "./DashboardLeader.scss";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";

const DashboardLeader = () => {
  return (
    <div className="dashl__root">
      {data
        .sort((a, b) => (a.points > b.points ? -1 : 1))
        .map((data, index) => {
          let rank = index + 1;
          if (index === 0) {
            return (
              <div className="dashl__box">
                <p className="box__header">
                  Leaderboard{" "}
                  <span>
                    <EmojiEventsIcon
                      style={{ color: "#FFD700", fontSize: "1.3rem" }}
                    />
                  </span>
                </p>
                <table className="box__table">
                  <tr>
                    <th>Rank</th>
                    <th>Name</th>
                    <th>ID</th>
                    <th>Points</th>
                  </tr>
                  <tr>
                    <td>{rank}</td>
                    <td>{data.toolName}</td>
                    <td>{data.toolID}</td>
                    <td>{data.points}</td>
                  </tr>
                </table>
              </div>
            );
          }
          return null;
        })}
    </div>
  );
};

export default DashboardLeader;
