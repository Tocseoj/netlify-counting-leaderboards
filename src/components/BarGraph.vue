<script>
import Chart from "chart.js/auto";
import _ from "lodash";

export default {
  props: ["chartdata"],
  data() {
    return {
      sortedData: _.cloneDeep(this.chartdata),
    };
  },
  mounted() {
    this.sortedData.sort((a, b) => b.count - a.count);
    new Chart(this.$refs.canvas, {
      type: "bar",
      data: {
        datasets: [
          {
            label: "Counts",
            data: this.sortedData.slice(0, 10),
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
        parsing: {
          xAxisKey: "user",
          yAxisKey: "count",
        },
        backgroundColor: ["rgba(54, 162, 235, 0.2)"],
        borderColor: ["rgba(54, 162, 235, 1)"],
        borderWidth: 1,
      },
    });
  },
};
</script>

<template>
  <div>
    <canvas ref="canvas"></canvas>
  </div>
</template>

<style lang="stylus" scoped></style>
