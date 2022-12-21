import React from "react";
import Chart from "./index";

import {
  DEFAULT_CHART_DATA,
  DEFAULT_CHART_OPTIONS,
  DEFAULT_CHART_LABELS,
  DEFAULT_CHART_TYPES,
  DEFAULT_BUBBLE_CHART_DATA,
} from "./constants";

const CHART_CONFIGURATION = {
  title: "Components/Charts",
  component: Chart,
  args: {
    title: "Line Chart",
    type: "line",
    chartData: { ...DEFAULT_CHART_DATA },
    options: { ...DEFAULT_CHART_OPTIONS },
    labels: DEFAULT_CHART_LABELS,
  },
  argTypes: {
    type: {
      control: {
        type: "select",
        options: DEFAULT_CHART_TYPES,
      },
    },
  },
};

/* Component template */
/* Line Chart */
const ChartTemplate = (args) => <Chart {...args} />;
const Line = ChartTemplate.bind({});
Line.args = {};

/* Bar Chart */
const Bar = ChartTemplate.bind({});
Bar.args = {
  title: "Bar Chart",
  type: "bar",
};

/* Bubble Chart */
const Bubble = ChartTemplate.bind({});
Bubble.args = {
  title: "Bubble Chart",
  type: "bubble",
  chartData: { ...DEFAULT_BUBBLE_CHART_DATA },
};

/* Doughnut Chart */
const Doughnut = ChartTemplate.bind({});
Doughnut.args = {
  title: "Doughnut Chart",
  type: "doughnut",
};

/* Pie Chart */
const Pie = ChartTemplate.bind({});
Pie.args = {
  title: "Pie Chart",
  type: "pie",
};

/* PolarArea Chart */
const PolarArea = ChartTemplate.bind({});
PolarArea.args = {
  title: "Polar Area Chart",
  type: "polarArea",
};

/* Radar Chart */
const Radar = ChartTemplate.bind({});
Radar.args = {
  title: "Radar Chart",
  type: "radar",
};

/* Scatter Chart */
const Scatter = ChartTemplate.bind({});
Scatter.args = {
  title: "Scatter Chart",
  type: "scatter",
  chartData: { ...DEFAULT_BUBBLE_CHART_DATA },
};

export { Line, Bar, Bubble, Doughnut, Pie, PolarArea, Radar, Scatter };
export default CHART_CONFIGURATION;
