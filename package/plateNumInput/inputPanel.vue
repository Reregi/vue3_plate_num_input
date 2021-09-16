<template>
<div class="input_box" :style="inputPanelStyle"><div class="header_box"><span @click.stop="done">完成</span></div><div class="province_box" v-if="isProvinceInput"><div class="row flex_center row_10" v-for="(item,index) in province" :key="index"><button class="plate_num_button flex_center" v-for="el in item" :key="el" @click.stop="inputNum(el)">{{el}}</button><button v-if="index == 3" @click.stop="deleteNum"><svg class="icon" t="1630548501438" viewBox="0 0 1861 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2821" width="40" height="40"><path d="M1659.21212145 839.27272695c0 40.90909131-32.72727305 81.81818174-81.81818174 81.81818174H620.12121187c-16.36363653 0-24.54545479 0-40.90909042-8.18181738-8.18181826-8.18181826-16.36363653-16.36363653-24.54545479-16.36363652v-8.18181827l-8.18181826-8.18181826L161.93939361 512C268.30303014 413.81818174 481.03030318 209.27272695 562.84848492 127.45454521l16.36363653-16.36363652c8.18181826-8.18181826 24.54545479-8.18181826 40.90909042-8.18181738h965.4545461c40.90909131 0 81.81818174 32.72727305 81.81818174 81.81818174v654.5454539z m-490.90909131-310.90909043l122.72727305-122.72727304c24.54545479-24.54545479 24.54545479-57.27272695 0-81.81818174-24.54545479-24.54545479-57.27272695-24.54545479-81.81818174 0L1086.4848484 446.54545479l-122.72727305-122.72727305c-24.54545479-24.54545479-57.27272695-24.54545479-81.81818174 0-24.54545479 24.54545479-24.54545479 57.27272695 0 81.81818173L1004.66666666 528.36363653 881.93939361 651.09090869c-24.54545479 24.54545479-24.54545479 57.27272695 0 81.81818262 24.54545479 24.54545479 57.27272695 24.54545479 81.81818174 0L1086.4848484 610.18181826l122.72727305 122.72727305c24.54545479 24.54545479 57.27272695 24.54545479 81.81818174 0 24.54545479-24.54545479 24.54545479-57.27272695 0-81.81818262L1168.30303013 528.36363653z" fill="#2c2c2c" p-id="2822"></path></svg></button></div></div><div class="alphanumeric_box" v-else><div class="row flex_center" v-for="(item,index) in alphanumeric" :key="index"><button class="plate_num_button flex_center" v-for="el in item" :key="el" @click.stop="inputNum(el)">{{el}}</button><button class="del_button" v-if="index == 3" @click.stop="deleteNum"><svg class="icon" t="1630548501438" viewBox="0 0 1861 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2821" width="40" height="40"><path d="M1659.21212145 839.27272695c0 40.90909131-32.72727305 81.81818174-81.81818174 81.81818174H620.12121187c-16.36363653 0-24.54545479 0-40.90909042-8.18181738-8.18181826-8.18181826-16.36363653-16.36363653-24.54545479-16.36363652v-8.18181827l-8.18181826-8.18181826L161.93939361 512C268.30303014 413.81818174 481.03030318 209.27272695 562.84848492 127.45454521l16.36363653-16.36363652c8.18181826-8.18181826 24.54545479-8.18181826 40.90909042-8.18181738h965.4545461c40.90909131 0 81.81818174 32.72727305 81.81818174 81.81818174v654.5454539z m-490.90909131-310.90909043l122.72727305-122.72727304c24.54545479-24.54545479 24.54545479-57.27272695 0-81.81818174-24.54545479-24.54545479-57.27272695-24.54545479-81.81818174 0L1086.4848484 446.54545479l-122.72727305-122.72727305c-24.54545479-24.54545479-57.27272695-24.54545479-81.81818174 0-24.54545479 24.54545479-24.54545479 57.27272695 0 81.81818173L1004.66666666 528.36363653 881.93939361 651.09090869c-24.54545479 24.54545479-24.54545479 57.27272695 0 81.81818262 24.54545479 24.54545479 57.27272695 24.54545479 81.81818174 0L1086.4848484 610.18181826l122.72727305 122.72727305c24.54545479 24.54545479 57.27272695 24.54545479 81.81818174 0 24.54545479-24.54545479 24.54545479-57.27272695 0-81.81818262L1168.30303013 528.36363653z" fill="#2c2c2c" p-id="2822"></path></svg></button></div></div></div>
</template>
<script lang="ts">
import { defineComponent, inject, computed, StyleValue } from 'vue';
export default defineComponent({
  //组件名
  name: 'inputPanel',
  //props
  props: {
    //是否省份输入
    isProvinceInput: Boolean,
  },
  emits: ['done', 'inputNum', 'deleteNum'],
  //setup
  setup: (props, { emit }) => {
    //#region data
    const province: string[][] = [
      ['京', '津', '渝', '沪', '冀', '晋', '辽', '吉', '黑', '苏'],
      ['浙', '皖', '闽', '赣', '鲁', '豫', '鄂', '湘', '粤', '琼'],
      ['川', '贵', '云', '陕', '甘', '青', '蒙', '桂', '宁', '新'],
      ['藏', '使', '领', '警', '学', '港', '澳'],
    ];
    const alphanumeric: string[][] = [
      ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
      ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'O', 'P'],
      ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
      ['Z', 'X', 'C', 'V', 'B', 'N', 'M'],
    ];
    const style = inject('inputPanelStyle') as {
      inputPanelBgColor: string;
      btnColor: string;
      btnActiveColor: string;
      btnFontColor: string;
      inputPanelFontSize: string;
    };
    //#endregion

    //#region 计算属性
    const inputPanelStyle = computed(() => {
      return {
        backgroundColor: style.inputPanelBgColor,
        '--fontSize': style.inputPanelFontSize || '16px',
        '--btnColor': style.btnColor || '#ffffff',
        '--btnActiveColor': style.btnActiveColor || '#56AEF7',
        '--btnFontColor': style.btnFontColor || '#3e3e3e',
      };
    }) as StyleValue;
    //#endregion

    //#region emit
    function done() {
      emit('done');
    }

    function inputNum(str: string) {
      emit('inputNum', str);
    }

    function deleteNum() {
      emit('deleteNum');
    }
    //#endregion

    return {
      province,
      alphanumeric,
      done,
      inputNum,
      deleteNum,
      inputPanelStyle,
      style,
    };
  },
});
</script>

<style lang="scss" scoped>
.input_box {
  width: 100%;
  background-color: #ededed;
  padding-bottom: 10px;
  position: fixed;
  z-index: 999;
  bottom: 0;
  left: 0;
  .header_box {
    padding: 5px;
    text-align: right;
    color: var(--btnActiveColor);
    font-size: var(--fontSize);
  }
  .province_box,
  .alphanumeric_box {
    width: 100%;
    .row {
      justify-content: space-evenly;
      margin-bottom: 10px;
      &:last-child {
        margin-bottom: 0;
        padding: 0 10px;
      }
      button {
        height: 40px;
        font-size: var(--fontSize);
        line-height: 40px;
        color: var(--btnFontColor);
        background-color: var(--btnColor);
        border: none;
        border-radius: 5px;
        user-select: none;
        svg {
          height: 100%;
        }
        &:active {
          background-color: var(--btnActiveColor);
          color: #ffffff;
        }
      }
      .plate_num_button {
        width: calc(10% - 10px);
      }
      .del_num {
        min-width: 55px;
        width: 10%;
      }
    }
  }
}
.flex_center {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
