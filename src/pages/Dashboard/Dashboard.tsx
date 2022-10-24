import AnalyticFigure from "../../components/AnalyticFigure/AnalyticFigure";
import Header from "../../components/Header/Header";
import "./Dashboard.scss";
import { DateRangePicker } from "rsuite";
import { Doughnut } from "react-chartjs-2";
import ProgressBar from "@ramonak/react-progress-bar";

const Dashboard = () => {
  const data = {
    datasets: [
      {
        label: "# of Votes",
        data: [1200, 20, 500, 500],
        backgroundColor: ["#9C75F0", "#6695FF", "#66CB9F", "#FFE566"],
        borderColor: ["#9C75F0", "#6695FF", "#66CB9F", "#FFE566"],
        borderWidth: 1,
      },
    ],
    // responsive: true,
  };

  return (
    <div className="dashboard__root">
      <header>
        <Header />
      </header>
      <div className="dashboard__dates">
        <div>
          <p className="dashboard__root__welcome">Welcome Guest!</p>
          <p className="dashboard__root__details">
            Track, manage and monitor your data.
          </p>
        </div>
        <div className="dashboard__dates_picker">
          <DateRangePicker
            value={[new Date("2022-10-8"), new Date()]}
            size="lg"
            readOnly
            format="dd-MM-yyyy"
          />
        </div>
      </div>
      <section className="dashboard__analytics">
        <div className="dashboard__analytics__div1">
          <AnalyticFigure
            label={"Total Tools"}
            figure={1200}
            percentage={40}
            percentageBoolean={true}
          />
          <AnalyticFigure
            label={"Tools Without Information"}
            figure={20}
            percentage={70}
            percentageBoolean={false}
          />
        </div>
        <div className="dashboard__analytics__div2">
          <AnalyticFigure
            label={"Total Tools"}
            figure={500}
            percentage={50}
            percentageBoolean={true}
          />
          <AnalyticFigure
            label={"Total Tools"}
            figure={500}
            percentage={30}
            percentageBoolean={true}
          />
        </div>
      </section>
      <section className="dashboard__chart">
        <div className="dashboard__chart__sd"></div>
        <div className="dashboard__chart__doughnut">
          <div className="doughnut__wrapper">
            <div className="doughnut__header">
              <p>Tools</p>
            </div>
            <div className="doughnut__data">
              <Doughnut data={data} />
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

export default Dashboard;
