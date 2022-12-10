import React from "react";
import LineChart from "./LineChart";
import {
  DEFAULT_CHART_DATA,
  DEFAULT_CHART_OPTIONS,
  DEFAULT_CHART_LABELS,
} from "./constants";

const LINE_CHART_CONFIGURATION = {
  title: "Components/Charts",
  component: LineChart,
};

/* Component template */
const Template = (args) => <LineChart {...args} />;

const Line = Template.bind({});
Line.args = {
  title: "Line Chart",
  chartData: { ...DEFAULT_CHART_DATA },
  options: { ...DEFAULT_CHART_OPTIONS },
  labels: DEFAULT_CHART_LABELS,
};

export { Line };
export default LINE_CHART_CONFIGURATION;
