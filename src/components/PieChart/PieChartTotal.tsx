import "./PieChartTotal.scss";
import { PieChart } from "react-minimal-pie-chart";
import { useState } from "react";

const PieChartTotal = () => {
  const [selected, setSelected] = useState<number | undefined>(0);
  const lineWidth = 60;

  const data = [
    {
      title: "one",
      value: 100,
      color: "#9C75F0",
    },
    {
      title: "two",
      value: 20,
      color: "#6695FF",
    },
  ];
  return (
    <div className="pieChart__root">
      <div className="pieChart__data">
        <PieChart
          data={data}
          style={{
            fontFamily:
              '"Nunito Sans", -apple-system, Helvetica, Arial, sans-serif',
            fontSize: "8px",
          }}
          segmentsStyle={{ transition: "stroke .3s", cursor: "pointer" }}
          labelStyle={{
            fill: "#fff",
            opacity: 0.75,
            pointerEvents: "none",
          }}
          animate
          label={({ dataEntry }) => Math.round(dataEntry.percentage) + "%"}
          segmentsShift={(index) => (index === selected ? 6 : 1)}
          onClick={(_, index) => {
            setSelected(index === selected ? undefined : index);
          }}
          labelPosition={100 - lineWidth / 2}
        />
      </div>
      <p>sdnkskdsdn</p>
    </div>
  );
};

export default PieChartTotal;
