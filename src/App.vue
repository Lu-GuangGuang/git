<template>
  <div id="app">
    <div class="cla" v-show="ty">
      <router-link class="home" to="/lz">绿钻</router-link>
      <router-link class="ch" to="/ch">超会</router-link>
    </div>
    {{ this.$store.state.type }}
    {{ ty }}
    <router-view></router-view>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      // type: this.$store.state.type,
    };
  },
  computed: {
    ...mapGetters(["ty"]),
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
* {
  color: black;
  text-decoration: none;
}
.cla {
  margin: 20px auto;
  width: 500px;
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.home.router-link-active,
.ch.router-link-active {
  color: red;
}
</style>
