<template lang="pug">
.mobile_phone_box.flex_center
  .header_box
    button(@click="isNewEnergy = !isNewEnergy")
      | {{ isNewEnergy ? '新能源' : '油车' }}
  plateNumInput(
    :is-new-energy="isNewEnergy" v-model:defaultPlateNum="plateNum"

    :width="style.width" :height="style.height"
    :fontColor="style.fontColor" :fontSize="style.fontSize"
    :borderColor="style.borderColor"

    :inputPanelBgColor="style.inputPanelBgColor" :btnColor="style.btnColor"
    :btnActiveColor="style.btnActiveColor" :btnFontColor="style.btnFontColor"
    :inputPanelFontSize="style.inputPanelFontSize"
    )
  .params_input_box
    .label 车牌号:
    .input {{plateNum}}
  .params_input_box
    .label 字符框宽度:
    .input 
      input(type="text" v-model="style.width")
  .params_input_box
    .label 字符框高度:
    .input
      input(type="text" v-model="style.height")
  .params_input_box
    .label 字体大小:
    .input
      input(type="text" v-model="style.fontSize")
  .params_input_box
    .label 字体颜色:
    .input
      input(type="text" v-model="style.fontColor")
  .params_input_box
    .label 边框颜色:
    .input
      input(type="text" v-model="style.borderColor")
  .params_input_box
    .label 输入面板背景颜色:
    .input
      input(type="text" v-model="style.inputPanelBgColor")
  .params_input_box
    .label 输入面板按钮背景颜色:
    .input
      input(type="text" v-model="style.btnColor")
  .params_input_box
    .label 输入面板按钮active颜色:
    .input
      input(type="text" v-model="style.btnActiveColor")
  .params_input_box
    .label 输入面板按钮字体颜色:
    .input
      input(type="text" v-model="style.btnFontColor")
  .params_input_box
    .label 输入面板字体大小:
    .input
      input(type="text" v-model="style.inputPanelFontSize")
</template>

<script lang="ts">
import { defineComponent, Ref, ref, reactive } from 'vue';
// import plateNumInput from './components/plateNumInput/src';
// import { plateNumInput } from 'vue3_plate_num_input';

export default defineComponent({
  name: 'App',
  components: {
    // plateNumInput,
  },
  setup: () => {
    const isNewEnergy: Ref<boolean> = ref(false);
    const plateNum: Ref<string> = ref('');
    const style = reactive({
      width: '20px',
      height: '20px',
      fontSize: '14px',
      fontColor: 'pink',
      borderColor: 'pink',
      inputPanelBgColor: '',
      btnColor: '',
      btnActiveColor: '',
      btnFontColor: '',
      inputPanelFontSize: '',
    });
    return {
      isNewEnergy,
      plateNum,
      style,
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
  display: flex;
  .mobile_phone_box {
    margin: 0 auto;
    flex-direction: column;
    align-items: start;
    .plate_num_box {
      align-self: center;
      margin: 5px 0;
    }
    .params_input_box {
      display: flex;
      min-width: 100%;
      margin: 5px 0;
      padding: 5px;
      border-bottom: blueviolet 2px dashed;
      font-weight: bold;
      box-sizing: border-box;
      align-items: center;
      .label {
        margin-right: 5px;
        width: 90px;
      }
      input {
        font-weight: bold;
      }
    }
  }
}
</style>
