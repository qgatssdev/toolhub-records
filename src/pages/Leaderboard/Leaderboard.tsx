import Header from "../../components/Header/Header";
import "./Leaderboard.scss";
import { DateRangePicker } from "rsuite";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import { data } from "./Data";

const Leaderboard = () => {
  return (
    <div className="leaderboard__root">
      <header>
        <Header />
      </header>
      <section className="leaderboard__root__heading">
        <div className="heading__div1">
          <p className="heading__div1__leaderboard">Leaderboard</p>
          <p className="heading__div1__details">
            Monitor overall performance of all Tools
          </p>
        </div>
        <div className="heading__div2">
          <DateRangePicker
            value={[new Date("2022-10-8".replace(/-/g, "/")), new Date()]}
            size="lg"
            readOnly
            format="dd-MM-yyyy"
          />
        </div>
      </section>
      <section className="Section__Leader">
        <Table className="Leader__table">
          <Thead>
            <Tr className="Tr">
              <Th className="Th">Rank</Th>
              <Th className="Th">Tool</Th>
              <Th className="Th">Tool ID</Th>
              <Th className="Th">Points</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data
              .sort((a, b) => (a.points > b.points ? -1 : 1))
              .map((data, index) => {
                const rank = index + 1;
                return (
                  <Tr className="Tr" key={data.toolID}>
                    <Td className="Td">{rank}</Td>
                    <Td className="Td">{data.toolName}</Td>
                    <Td className="Td">{data.toolID}</Td>
                    <Td className="Td">{data.points}</Td>
                  </Tr>
                );
              })}
          </Tbody>
        </Table>
      </section>
    </div>
  );
};

export default Leaderboard;
