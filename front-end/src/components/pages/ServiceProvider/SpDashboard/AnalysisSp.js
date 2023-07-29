import "../../../../style/ServiceProvider/Dashboard.css";
import { Bar } from "react-chartjs-2";
import Chart from "chart.js/auto";

function AnalysisSp() {
  return (
    <div className="graphContainer">
      <Bar
        data={{
          labels: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ],
          datasets: [
            {
              label: "Income Analysis",
              data: [
                15000, 20000, 19000, 27000, 22000, 16000, 13000, 29000, 33000,
                20000, 19000, 27000,
              ],
              backgroundColor: "red",
            },
          ],
        }}
        // height={400}
        // width={600}
        options={{
          maintainAspectRatio: false,
          // responsive:false,
        }}
      />
    </div>
  );
}

export default AnalysisSp;
