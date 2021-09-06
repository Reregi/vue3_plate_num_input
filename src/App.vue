<template>
  <!-- <img alt="Vue logo" src="@/assets/logo.png" />
  <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" /> -->
  <button @click="isNewEnergy = !isNewEnergy">
    {{ isNewEnergy ? '新能源' : '油车' }}
  </button>
  <plateNumInput
    :is-new-energy="isNewEnergy"
    v-model:defaultPlateNum="plateNum"
  ></plateNumInput>
</template>

<script lang="ts">
import { defineComponent, Ref, ref } from 'vue';
import plateNumInput from './components/plateNumInput.vue';

export default defineComponent({
  name: 'App',
  components: {
    plateNumInput,
  },
  setup: () => {
    const isNewEnergy: Ref<boolean> = ref(false);
    const plateNum: Ref<string> = ref('');
    return {
      isNewEnergy,
      plateNum,
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
