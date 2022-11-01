import AnalyticFigure from "../../components/AnalyticFigure/AnalyticFigure";
import Header from "../../components/Header/Header";
import "./Dashboard.scss";
import { DateRangePicker } from "rsuite";
import DoughnutChart from "../../components/DoughtnutChart/DoughnutChart";
import PieChartTotal from "../../components/PieChart/PieChartTotal";
import DashboardLeader from "../../components/DashboardLeader/DashboardLeader";

const Dashboard = () => {
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
            value={[new Date("2022-10-8".replace(/-/g, "/")), new Date()]}
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
            figure={100}
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
            label={"Total Tools Edited"}
            figure={40}
            percentage={50}
            percentageBoolean={true}
          />
          <AnalyticFigure
            label={"Total Tools"}
            figure={50}
            percentage={30}
            percentageBoolean={true}
          />
        </div>
      </section>
      <section className="dashboard__chartss">
        <div className="charts__pie">
          <PieChartTotal />
        </div>
        <div className="charts__leader">
          <DashboardLeader />
        </div>
        <div className="charts__dough">
          <div className="test">
            <DoughnutChart />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
