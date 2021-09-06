<template>
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

export default defineComponent({
  name: 'App',
  components: {
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
