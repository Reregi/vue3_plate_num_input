<template lang="pug">
.province_box
.alphanumeric_box
</template>
<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  //组件名
  name: 'PlateNumInput',
  //setup
  setup: () => {
    //#region data
    const province: string[][] = [
      ['京', '津', '渝', '沪', '冀', '晋', '辽', '吉', '黑', '苏'],
      ['浙', '皖', '闽', '赣', '鲁', '豫', '鄂', '湘', '粤', '琼'],
      ['川', '贵', '云', '陕', '甘', '青', '蒙', '桂', '宁', '新'],
      ['藏', '使', '领', '警', '学', '港', '澳'],
    ];
    //#endregion
  },
});
</script>
<style lang="scss" scoped>
.province_box,
.alphanumeric_box {
  background-color: #ededed;
}
</style>
