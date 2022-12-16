import faker from "faker";

export const DEFAULT_CHART_TYPES = [
  "line",
  "bar",
  "bubble",
  "doughnut",
  "radar",
  "scatter",
  "polarArea",
  "scatter",
];

/* Chart Constants */
export const DEFAULT_CHART_OPTIONS = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    filler: {
      propagate: true,
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
  },
};

export const DEFAULT_CHART_LABELS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
];

export const DEFAULT_CHART_DATA = {
  labels: DEFAULT_CHART_LABELS,
  datasets: [
    {
      label: "Dataset 1",
      data: DEFAULT_CHART_LABELS.map(() =>
        faker.datatype.number({ min: -1000, max: 1000 })
      ),
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
      tension: 0.2,
    },
    {
      label: "Dataset 2",
      data: DEFAULT_CHART_LABELS.map(() =>
        faker.datatype.number({ min: -1000, max: 1000 })
      ),
      borderColor: "rgb(23, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
      tension: 0.2,
      fill: "start",
    },
  ],
};

export const DEFAULT_BUBBLE_CHART_DATA = {
  labels: DEFAULT_CHART_LABELS,
  datasets: [
    {
      label: "Dataset 1",
      data: DEFAULT_CHART_LABELS.map(() => ({
        x: faker.datatype.number({ min: -1000, max: 1000 }),
        y: faker.datatype.number({ min: -1000, max: 1000 }),
        r: faker.datatype.number({ min: 0, max: 20 }),
      })),
    },
    {
      label: "Dataset 2",
      data: DEFAULT_CHART_LABELS.map(() => ({
        x: faker.datatype.number({ min: -1000, max: 1000 }),
        y: faker.datatype.number({ min: -1000, max: 1000 }),
        r: faker.datatype.number({ min: 0, max: 20 }),
      })),
    },
  ],
};

export const LIST_BACKGROUND_COLOR = [
  "rgba(255, 99, 132, 0.2)",
  "rgba(54, 162, 235, 0.2)",
  "rgba(255, 206, 86, 0.2)",
  "rgba(75, 192, 192, 0.2)",
  "rgba(153, 102, 255, 0.2)",
  "rgba(255, 159, 64, 0.2)",
];

export const LIST_BORDER_COLOR = [
  "rgba(255, 99, 132, 1)",
  "rgba(54, 162, 235, 1)",
  "rgba(255, 206, 86, 1)",
  "rgba(75, 192, 192, 1)",
  "rgba(153, 102, 255, 1)",
  "rgba(255, 159, 64, 1)",
];
