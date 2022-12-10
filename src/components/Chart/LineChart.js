import React from "react";
import PropTypes from "prop-types";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import {
  DEFAULT_CHART_DATA,
  DEFAULT_CHART_OPTIONS,
  DEFAULT_CHART_LABELS,
} from "./constants";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
  Title,
  Tooltip,
  Legend
);

const LineChart = ({ title, options, labels, chartData, ...props }) => {
  return (
    <div className="border-2 border-slate-200 p-5 rounded-3xl">
      <h1 className="font-semibold mb-10">{title}</h1>
      <Line data={chartData} options={options} {...props} />
    </div>
  );
};

LineChart.propTypes = {
  title: PropTypes.string,
  chartData: PropTypes.object,
  options: PropTypes.object,
  labels: PropTypes.array,
};

LineChart.defaultProps = {
  title: "",
  chartData: { ...DEFAULT_CHART_DATA },
  options: { ...DEFAULT_CHART_OPTIONS },
  labels: DEFAULT_CHART_LABELS,
};

export default LineChart;
