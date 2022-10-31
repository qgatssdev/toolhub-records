import ProgressBar from "@ramonak/react-progress-bar";
import { PieChart } from "react-minimal-pie-chart";
import "./DoughtnutChart.scss";

const DoughnutChart = () => {
  const data = [
    {
      title: "one",
      value: 40,
      color: "#9C75F0",
    },
    {
      title: "two",
      value: 5,
      color: "#6695FF",
    },
    {
      title: "three",
      value: 60,
      color: "#66CB9F",
    },
    {
      title: "four",
      value: 50,
      color: "#FFE566",
    },
  ];
  return (
    <div>
      <section className="dashboard__chart">
        <div className="dashboard__chart__doughnut">
          <div className="doughnut__wrapper">
            <div className="doughnut__header">
              <p>Tools</p>
            </div>
            <div className="doughnut__data">
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
              />
            </div>
            <div className="doughnut__bar">
              <div className="doughbut__bar__flex">
                <div className="pp">
                  <ProgressBar
                    completed={40}
                    bgColor={"#9C75F0"}
                    animateOnRender={true}
                  />
                </div>
                <p>Total tools</p>
              </div>
              <div className="doughbut__bar__flex">
                <div className="pp">
                  <ProgressBar
                    completed={1}
                    bgColor={"#6695FF"}
                    animateOnRender={true}
                  />
                </div>
                <p>Tools Without Info</p>
              </div>
              <div className="doughbut__bar__flex">
                <div className="pp">
                  <ProgressBar
                    completed={50}
                    bgColor={"#66CB9F"}
                    animateOnRender={true}
                  />
                </div>
                <p>Total tools</p>
              </div>
              <div className="doughbut__bar__flex">
                <div className="pp">
                  <ProgressBar
                    completed={30}
                    bgColor={"#FFE566"}
                    animateOnRender={true}
                  />
                </div>
                <p>Total tools</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DoughnutChart;
