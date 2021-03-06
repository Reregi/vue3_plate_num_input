<template>
<div class="plate_num_box" @click="openInput"><div class="num_box" v-for="(item, index) in plateNumArr" :key="index" :style="{width:width,height:height,lineHeight:height,borderColor:borderColor,fontSize:fontSize,color:fontColor}">{{ item }}</div><div class="modal_box" v-show="showInput" @click.stop="close"></div><inputPanel v-show="showInput" :is-province-input="isProvinceInput" @done="close" @inputNum="inputNum" @deleteNum="deleteNum"></inputPanel></div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, Ref, watch, provide } from 'vue';
import inputPanel from './inputPanel.vue';

export default defineComponent({
  //组件名
  name: 'plateNumInput',
  components: {
    inputPanel,
  },
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
    },
    //字符框高度
    height: {
      type: String,
    },
    //字体大小
    fontSize: {
      type: String,
    },
    //字体颜色
    fontColor: {
      type: String,
    },
    //边框颜色
    borderColor: {
      type: String,
    },
    //输入面板背景颜色
    inputPanelBgColor: {
      type: String,
    },
    //输入面板按钮背景颜色
    btnColor: {
      type: String,
    },
    //输入面板按钮active颜色
    btnActiveColor: {
      type: String,
    },
    //输入面板按钮字体颜色
    btnFontColor: {
      type: String,
    },
    //输入面板字体大小
    inputPanelFontSize: {
      type: String,
    },
  },
  //setup
  setup: (props, { emit }) => {
    //#region data
    //字符数组
    const plateNumArr: Ref<string[]> = ref([]);
    //控制输入板显示
    const showInput: Ref<boolean> = ref(false);
    //控制面板显示省份还是数字字母
    const isProvinceInput: Ref<boolean> = ref(true);
    //#endregion

    //#region provide [跨级组件传递]
    provide('inputPanelStyle', props);
    //#endregion

    //#region method
    /**
     * [initInputBox 初始化处理车牌号]
     *
     * @param   {number}  num  [num 字符个数]
     * @param   {string}  str  [str 车牌号字符串]
     *
     */
    function initInputBox(num: number, str?: string) {
      plateNumArr.value = Array.apply(null, { length: num } as unknown[]).map(
        (el, index) => {
          return str?.split('')[index] ? str?.split('')[index] : ' ';
        }
      );
      isProvinceInput.value = str && str?.length > 0 ? false : true;
    }
    /**
     * [openInput 打开输入板]
     *
     */
    function openInput() {
      showInput.value = true;
    }
    /**
     * [close 关闭面板触发更新VModel]
     *
     */
    function close() {
      showInput.value = false;
      emit(
        'update:defaultPlateNum',
        plateNumArr.value.join('').replaceAll(' ', '')
      );
    }
    /**
     * [inputNum 输入]
     *
     * @param   {string}  str  [str 输入的字符]
     */
    function inputNum(str: string) {
      const string = plateNumArr.value.join('').replaceAll(' ', '') + str;
      initInputBox(plateNumArr.value.length, string);
    }
    /**
     * [deleteNum 删除]
     *
     */
    function deleteNum() {
      const str = plateNumArr.value.join('').replaceAll(' ', '');
      initInputBox(plateNumArr.value.length, str.slice(0, -1));
    }
    //#endregion

    //#region watch
    /**
     * [watch 监听是否新能源]
     *
     */
    watch(
      () => props.isNewEnergy,
      (flag) => {
        const length = flag ? 8 : 7;
        initInputBox(length, plateNumArr.value.join('').replaceAll(' ', ''));
        emit(
          'update:defaultPlateNum',
          plateNumArr.value.join('').replaceAll(' ', '')
        );
      }
    );
    //#endregion

    //#region 生命周期
    onMounted(() => {
      //存入默认车牌号
      if (props.defaultPlateNum) {
        const length =
          props.defaultPlateNum.length < 8 && !props.isNewEnergy ? 7 : 8;
        initInputBox(length, props.defaultPlateNum);
      } else {
        const length = props.isNewEnergy ? 8 : 7;
        initInputBox(length, props.defaultPlateNum);
      }
    });
    //#endregion

    return {
      plateNumArr,
      showInput,
      openInput,
      close,
      inputNum,
      deleteNum,
      isProvinceInput,
    };
  },
});
</script>

<style lang="scss" scoped>
.plate_num_box {
  display: flex;
  .num_box {
    width: 20px;
    height: 20px;
    line-height: 20px;
    border: 2px solid black;
    font-size: 14px;
    color: black;
    margin-left: 10px;
    &:first-child {
      margin-left: 0;
    }
  }
  .modal_box {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
}
.flex_center {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
