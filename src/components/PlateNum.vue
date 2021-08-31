<template>
  <div class="box">{{ num }}</div>
  component
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
export default defineComponent({
  //组件名
  name: 'PlateNum',
  //props值
  props: {
    isNewEnergy: Boolean,
  },
  //setup
  setup: (props) => {
    const num = computed((): number => {
      return props.isNewEnergy ? 8 : 7;
    });
    return {
      num,
    };
  },
});
</script>

<style lang="scss" scoped></style>
