import faker from "faker";

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
