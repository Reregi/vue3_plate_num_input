<template lang="pug">
.plate_num_box
  .num_box(v-for="(item,index) in plateNumArr" :key="index" :style="style") {{item}} 
</template>

<script lang="ts">
import { defineComponent, computed, ref, StyleValue, onMounted } from 'vue';
export default defineComponent({
  //组件名
  name: 'PlateNum',
  //props值
  props: {
    //默认车牌号码
    defaultPlateNum: {
      type: String,
    },
    //是否新能源
    isNewEnergy: {
      type: Boolean,
      default: false,
    },
    //字符框宽度
    width: {
      type: String,
      default: '20px',
    }, //字符框高度
    height: {
      type: String,
      default: '20px',
    },
    //字体大小
    fontSize: {
      type: String,
      default: '14px',
    },
    //字体颜色
    fontColor: {
      type: String,
      default: 'black',
    },
    //边框颜色
    borderColor: {
      type: String,
      default: 'black',
    },
  },
  //setup
  setup: (props) => {
    //#region data
    //字符数组
    const plateNumArr = ref(['粤', 'A', '5', '5', '5', '5', '5', '5']);

    //#endregion

    //#region 计算属性
    /**
     * [style 输入框样式]
     *
     * @return  {[StyleValue]}  [return 变量样式]
     */
    const style = computed(() => {
      return {
        '--width': props.width,
        '--height': props.height,
        '--fontSize': props.fontSize,
        '--fontColor': props.fontColor,
        '--borderColor': props.borderColor,
      } as StyleValue;
    });
    //#endregion

    //#region method
    function initInputBox(num: number, str?: string) {
      plateNumArr.value = Array.apply(null, { length: num } as any).map(
        (el, index) => {
          return str?.split('')[index] ? str?.split('')[index] : ' ';
        }
      );
    }
    //#endregion

    //#region 生命周期
    onMounted(() => {
      //存入默认车牌号
      if (props.defaultPlateNum) {
        const length = props.defaultPlateNum.length < 8 ? 7 : 8;
        initInputBox(length, props.defaultPlateNum);
      } 
      else {
        const length = props.isNewEnergy ? 8 : 7;
        initInputBox(length, props.defaultPlateNum);
      }
    });
    //#endregion

    return {
      plateNumArr,
      style,
    };
  },
});
</script>

<style lang="scss" scoped>
.plate_num_box {
  display: flex;
  .num_box {
    width: var(--width);
    height: var(--height);
    line-height: var(--height);
    border: 2px solid var(--borderColor);
    font-size: var(--fontSize);
    margin-left: 10px;
    &:first-child {
      margin-left: 0;
    }
  }
}
</style>
