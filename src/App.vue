<template>
  <img alt="Vue logo" src="@/assets/logo.png" />
  <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
  <PlateNum :is-new-energy="false"></PlateNum>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HelloWorld from "./components/HelloWorld.vue";
import PlateNum from "./components/PlateNum.vue";

export default defineComponent({
  name: "App",
  components: {
    HelloWorld,
    PlateNum,
  },
});
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
