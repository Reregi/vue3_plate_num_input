<template>
  <!-- <img alt="Vue logo" src="@/assets/logo.png" />
  <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" /> -->
  <button @click="isNewEnergy = !isNewEnergy">
    {{ isNewEnergy ? '新能源' : '油车' }}
  </button>
  <PlateNum :is-new-energy="isNewEnergy" :default-plate-num="'粤A555555'"></PlateNum>
</template>

<script lang="ts">
import { defineComponent, Ref, ref } from 'vue';
import PlateNum from './components/PlateNum.vue';

export default defineComponent({
  name: 'App',
  components: {
    PlateNum,
  },
  setup: () => {
    const isNewEnergy: Ref<boolean> = ref(false);
    return {
      isNewEnergy,
    };
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
