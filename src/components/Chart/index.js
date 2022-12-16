import React, { useEffect } from "react";
import PropTypes from "prop-types";
import {
  Bar,
  Bubble,
  Doughnut,
  Line,
  Pie,
  PolarArea,
  Radar,
  Scatter,
} from "react-chartjs-2";
import {
  Title,
  Tooltip,
  Legend,
  Filler,
  CategoryScale,
  LinearScale,
  // Line
  PointElement,
  LineElement,
  // Bar
  BarController,
  BarElement,
  // Bubble
  BubbleController,
  // Doughnut
  DoughnutController,
  ArcElement,
  // Pie
  PieController,
  // PolarArea
  PolarAreaController,
  RadialLinearScale,
  // Radar
  RadarController,
  // Scatter
  ScatterController,
} from "chart.js";
import { Chart as ChartJS } from "chart.js/auto";

import {
  DEFAULT_CHART_DATA,
  DEFAULT_CHART_OPTIONS,
  DEFAULT_CHART_LABELS,
  DEFAULT_CHART_TYPES,
  LIST_BACKGROUND_COLOR,
  LIST_BORDER_COLOR,
} from "./constants";

const Chart = ({ title, type, options, labels, chartData, ...props }) => {
  const handleRegisterChart = (type) => {
    if (!type) return;
    // Plugin tool
    let plugins = [Filler, Title, Tooltip, Legend];
    switch (type) {
      case "bar":
        plugins.push(CategoryScale, LinearScale, BarController, BarElement);
        break;
      case "bubble":
        plugins.push(LinearScale, PointElement, BubbleController);
        break;
      case "doughnut":
        plugins.push(DoughnutController, ArcElement);
        break;
      case "pie":
        plugins.push(PieController, ArcElement);
        break;
      case "polarArea":
        plugins.push(PolarAreaController, ArcElement, RadialLinearScale);
        break;
      case "radar":
        plugins.push(
          RadarController,
          LineElement,
          PointElement,
          RadialLinearScale
        );
        break;
      case "scatter":
        plugins.push(ScatterController, PointElement, LinearScale);
        break;
      default:
        // Default with Line chart plugins
        plugins.push(CategoryScale, LinearScale, PointElement, LineElement);
        break;
    }
    ChartJS.register(plugins);
  };

  const renderChart = (type) => {
    if (!type) return;
    let component;
    let newChartData = { ...chartData };
    newChartData.datasets = newChartData.datasets.map((datasets) => ({
      ...datasets,
      backgroundColor: LIST_BACKGROUND_COLOR,
      borderColor: LIST_BORDER_COLOR,
      borderWidth: 1,
    }));

    switch (type) {
      case "bar":
        component = <Bar data={chartData} options={options} {...props} />;
        break;
      case "bubble":
        component = <Bubble data={chartData} options={options} {...props} />;
        break;
      case "doughnut":
        component = (
          <Doughnut data={newChartData} options={options} {...props} />
        );
        break;
      case "pie":
        component = <Pie data={newChartData} options={options} {...props} />;
        break;
      case "polarArea":
        component = (
          <PolarArea data={newChartData} options={options} {...props} />
        );
        break;
      case "radar":
        component = <Radar data={chartData} options={options} {...props} />;
        break;
      case "scatter":
        component = <Scatter data={chartData} options={options} {...props} />;
        break;
      default:
        // Default with Line chart components
        component = <Line data={chartData} options={options} {...props} />;
        break;
    }
    return component;
  };

  useEffect(() => {
    handleRegisterChart(type);
  }, [type]);

  return (
    <div className="border-2 border-slate-200 p-5 rounded-3xl">
      <h1 className="font-semibold mb-10">{title}</h1>
      {renderChart(type)}
    </div>
  );
};

Chart.propTypes = {
  title: PropTypes.string,
  type: PropTypes.oneOf(DEFAULT_CHART_TYPES),
  chartData: PropTypes.object,
  options: PropTypes.object,
  labels: PropTypes.array,
};

Chart.defaultProps = {
  title: "",
  type: "line",
  chartData: { ...DEFAULT_CHART_DATA },
  options: { ...DEFAULT_CHART_OPTIONS },
  labels: DEFAULT_CHART_LABELS,
};

export default Chart;
