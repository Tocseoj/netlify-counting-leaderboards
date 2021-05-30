<script>
import fitty from "fitty";

export default {
  data() {
    return {
      foundUsers: [],
      counters: [
        {
          snowflake: "142801087194333184",
          username: "Tocseoj",
          discriminator: "5982",
          avatar: "dc5e2c0df21c6ab5e05df595781acce8",
          fouls_hasty: "1",
          fouls_badnumber: "2",
          fouls_badcount: "8",
          bonuses_mario: "0",
          bonuses_runs: "0",
          bonuses_sets: "0",
          bonuses_primes: "0",
        },
        {
          snowflake: "184132571389493248",
          username: "Chance",
          discriminator: "9820",
          avatar: "c8080feb074317d809c7b190de909d2c",
          fouls_hasty: "0",
          fouls_badnumber: "1",
          fouls_badcount: "0",
          bonuses_mario: "0",
          bonuses_runs: "0",
          bonuses_sets: "0",
          bonuses_primes: "0",
        },
        {
          snowflake: "414298299487617026",
          username: "pachiform",
          discriminator: "3539",
          avatar: "c81b7205e701df001becc13a3397b244",
          fouls_hasty: "2",
          fouls_badnumber: "0",
          fouls_badcount: "2",
          bonuses_mario: "0",
          bonuses_runs: "0",
          bonuses_sets: "0",
          bonuses_primes: "0",
        },
        {
          snowflake: "551886362337345543",
          username: "Zesty Tony",
          discriminator: "4391",
          avatar: "642254c5804ecaa63cb5b61ee35a50bc",
          fouls_hasty: "0",
          fouls_badnumber: "0",
          fouls_badcount: "5",
          bonuses_mario: "0",
          bonuses_runs: "0",
          bonuses_sets: "0",
          bonuses_primes: "0",
        },
        {
          snowflake: "380334992074473474",
          username: "mehehehe",
          discriminator: "3717",
          avatar: "c78f12b9e5e2c04737cfce4a7bfbc748",
          fouls_hasty: "0",
          fouls_badnumber: "0",
          fouls_badcount: "2",
          bonuses_mario: "0",
          bonuses_runs: "0",
          bonuses_sets: "0",
          bonuses_primes: "0",
        },
        {
          snowflake: "159805325736673280",
          username: "顔のない",
          discriminator: "4756",
          avatar: "8faf3982f2cfadf9fba0beed6a8cc86b",
          fouls_hasty: "0",
          fouls_badnumber: "0",
          fouls_badcount: "1",
          bonuses_mario: "0",
          bonuses_runs: "0",
          bonuses_sets: "0",
          bonuses_primes: "0",
        },
        {
          snowflake: "321115167062491146",
          username: "Vibrose",
          discriminator: "0013",
          avatar: "ba1100dc4aaecdde44ee51f31f2ce01d",
          fouls_hasty: "0",
          fouls_badnumber: "0",
          fouls_badcount: "1",
          bonuses_mario: "0",
          bonuses_runs: "0",
          bonuses_sets: "0",
          bonuses_primes: "0",
        },
      ],
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
      image_base_url: "https://cdn.discordapp.com/",
      user_avatar_url: "avatars/${user_id}/${user_avatar}.png",
    };
  },
  mounted() {
    // this.$refs["top-of-page"].scrollIntoView({
    //   behavior: "smooth",
    //   block: "start",
    //   inline: "start",
    // });
    fitty(".fit", {
      minSize: 12,
      maxSize: 50,
    });
  },
  methods: {
    avatar(counter) {
      const user = counter.snowflake;
      const hash = counter.avatar;

      let extension = ".png";
      if (counter.avatar.substring(0, 2) === "a_") {
        extension = ".gif";
      }
      return this.image_base_url + `avatars/${user}/${hash}` + extension;
    },
  },
};
</script>

<template>
  <div class="chevron top green"></div>
  <div class="case green">
    <h1 ref="top-of-page">Top Counters this week</h1>
    <div class="leaderboard-grid">
      <div class="user second">
        <img
          :src="avatar(counters[0])"
          alt="discord avatar"
          :style="{
            height: '100px',
            borderRadius: '100%',
          }"
        />
      </div>
      <div class="podium second ash-gray">
        <div style="margin: 10px">
          <div class="fit">{{ counters[0].username }}</div>
        </div>
      </div>
      <div class="podium first teal-blue"></div>
      <div class="podium third beige"></div>
    </div>
  </div>
  <div class="chevron bottom green"></div>

  <div class="capsule top blue"></div>
  <div class="case blue">
    <h1>Top Counters all time</h1>
    <BarGraph :chartdata="counts" />
  </div>
  <div class="capsule bottom blue"></div>

  <div class="case yellow">
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
  </div>

  <div class="bottom-bar"></div>
</template>

<style lang="stylus" scoped>
@import '../global'

.bottom-bar
  margin-top 5rem
.top-bar
  margin-bottom 5rem

.leaderboard-grid
  display: grid;
  grid-template-columns: 5% 30% 30% 30% 5%;
  grid-template-rows: 100px 100px 100px 100px;
  grid-template-areas:
    ". .      fuser .     ."\
    ". suser  first .     ."\
    ". second first tuser ."\
    ". second first third .";


.first.podium
  grid-area: first;
.second.podium
  grid-area second
.third.podium
  grid-area third

.first.user
  grid-area: fuser;
.second.user
  grid-area suser
.third.user
  grid-area tuser

.podium
  // margin-left 5px
  // margin-right 5px
  border-top-left-radius 10px
  border-top-right-radius 10px
  border solid green-sheen 5px
  border-bottom-color charleston-green

.charleston-green
  background-color charleston-green
.teal-blue
  background-color teal-blue
.green-sheen
  background-color green-sheen
.ash-gray
  background-color ash-gray
.beige
  background-color beige

.case
  &.green
    background-color green-sheen
  &.blue
    background-color teal-blue
  &.yellow
    background-color beige

.chevron
  border 383px solid transparent
  &.top
    margin-top -383px
    &.green
      border-bottom-color green-sheen
    &.blue
      border-bottom-color teal-blue
  &.bottom
    margin-bottom -383px
    &.green
      border-top-color green-sheen
    &.blue
      border-top-color teal-blue

.capsule
  &.top.blue
    border-top 383px solid teal-blue
    border-top-left-radius 383px
    border-top-right-radius 383px
  &.bottom.blue
    border-bottom 383px solid teal-blue
    border-bottom-left-radius 383px
    border-bottom-right-radius 383px
</style>
