<script>
export default {
  data() {
    return {
      foundUsers: [],
      counts: [
        { user: "Joe", count: 20 },
        { user: "Chance", count: 15 },
        { user: "Scotty", count: 3 },
        { user: "Scotty0", count: 3 },
        { user: "Scotty2", count: 3 },
        { user: "Scotty3", count: 3 },
        { user: "Scotty4", count: 3 },
        { user: "Scotty5", count: 3 },
        { user: "Scotty6", count: 3 },
        { user: "Scotty7", count: 3 },
        { user: "Scotty8", count: 2 },
        { user: "Scotty9", count: 2 },
        { user: "Scotty10", count: 2 },
        { user: "Scotty11", count: 2 },
        { user: "Scotty12", count: 1 },
        { user: "Scotty13", count: 1 },
        { user: "Scotty14", count: 1 },
        { user: "Scotty15", count: 1 },
        { user: "Scotty16", count: 1 },
        { user: "Scotty17", count: 1 },
        { user: "Scotty18", count: 1 },
        { user: "Scotty19", count: 1 },
        { user: "Scotty20", count: 1 },
        { user: "Scotty21", count: 1 },
        { user: "Scotty22", count: 1 },
        { user: "Scotty23", count: 1 },
        { user: "Scotty24", count: 1 },
        { user: "Scotty25", count: 1 },
        { user: "Scotty26", count: 1 },
        { user: "Scotty27", count: 1 },
        { user: "Scotty28", count: 1 },
        { user: "Scotty29", count: 1 },
        { user: "Sctty2", count: 1 },
        { user: "Sotty22", count: 1 },
        { user: "Sotty23", count: 1 },
        { user: "Sctty24", count: 1 },
        { user: "Sctty25", count: 1 },
        { user: "Sotty26", count: 1 },
        { user: "Sctty27", count: 1 },
        { user: "Sctty28", count: 1 },
        { user: "Sctty29", count: 1 },
      ],
    };
  },
};
</script>

<template>
  <h1>Top Counters this week</h1>
  <BarGraph :chartdata="counts" />
  <h1>Top Counters all time</h1>
  <BarGraph :chartdata="counts" />
  <h2>Search for your stats</h2>
  <input type="text" placeholder="Username" />
  <table v-for="user in foundUsers">
    <tr>
      <th>Total count</th>
      <th>Wrong numbers</th>
      <th>Hasty</th>
      <th>Not a number</th>
    </tr>
    <tr>
      <td>1</td>
      <td>2</td>
      <td>3</td>
      <td>4</td>
    </tr>
  </table>

  <div class="bottom-bar"></div>
</template>

<style lang="stylus" scoped>
.bottom-bar
  margin-top 5rem
</style>
