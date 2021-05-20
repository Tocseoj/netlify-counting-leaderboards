<script>
export default {
  data() {
    return {
      counts: [
        { user: "Joe", count: 20 },
        { user: "Chance", count: 15 },
        { user: "Scotty", count: 3 },
      ],
    };
  },
};
</script>

<template>
  <h1>Top Counters</h1>
  <BarGraph :chartdata="counts" />
</template>

<style lang="stylus" scoped></style>
