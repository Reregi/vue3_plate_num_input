<template>
  <!-- <img alt="Vue logo" src="@/assets/logo.png" />
  <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" /> -->
  <PlateNum :is-new-energy="false" :default-plate-num="'粤A555555'"></PlateNum>
  <PlateNumInput></PlateNumInput>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import PlateNum from './components/PlateNum.vue';
import PlateNumInput from './components/input.vue';

export default defineComponent({
  name: 'App',
  components: {
    PlateNum,
    PlateNumInput,
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
