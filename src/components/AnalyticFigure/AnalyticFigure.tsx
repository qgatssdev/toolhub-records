import InfoIcon from "@mui/icons-material/Info";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import "./AnalyticFigure.scss";

interface data {
  label: string;
  figure: number;
  percentage: number;
  percentageBoolean: boolean;
}

const AnalyticFigure = ({
  label,
  figure,
  percentage,
  percentageBoolean,
}: data) => {
  return (
    <div className="analyticsFigure__root">
      <div className="analyticsFigure__root__label">
        <p>{label}</p>
        <InfoIcon style={{ cursor: "pointer" }} />
      </div>
      <div className="analyticsFigure__root__figure">
        <p>{figure.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
      </div>
      <div>
        {percentageBoolean === true ? (
          <div>
            <div className="analyticsFigure__root__percentage">
              <ArrowUpwardIcon style={{ color: "#1bca84" }} />
              <p>
                <span style={{ color: "#1bca84" }}>{percentage}%</span> vs last
                month
              </p>
            </div>
          </div>
        ) : (
          <div>
            <div className="analyticsFigure__root__percentage">
              <ArrowDownwardIcon style={{ color: "#e31616" }} />
              <p>
                <span style={{ color: "#e31616" }}>{percentage}%</span> vs last
                month
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AnalyticFigure;
