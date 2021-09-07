# plate_input-

## 一、简介

- 基于 vue3+TS 的中国车牌号输入组件

## 二、预览

**试用自定义样式**
[github](https://reregi.github.io/vue3_plateNumInput_Demo/)
[码云]-暂无

## 三、使用

### 引用

[下载组件](https://github.com/Reregi/plate_input-/releases/)

**全局注册**

```ts
import { createApp } from 'vue';
import App from './App.vue';
import plateNumInput from './plateNumInput/';

createApp(App).use(plateNumInput).mount('#app');
```

**组件内引用**

```ts
import { defineComponent, Ref, ref } from 'vue';
import plateNumInput from './plateNumInput/src';

export default defineComponent({
  components: {
    plateNumInput,
  },
});
```

### API

#### v-model

使用`v-model:defaultPlateNum` 进行车牌的双向绑定

```html
<plateNumInput v-model:defaultPlateNum="plateNum"></plateNumInput>
```

#### Props

控制大小的属性需要加上**单位**，方便移动端项目使用的不同像素单位调整，不固定为 px。

| 属性               | 变量名                   | 类型    |
| :----------------- | :----------------------- | :------ |
| isNewEnergy        | 是否新能源               | boolean |
| width              | 字符框宽度               | string  |
| height             | 字符框高度               | string  |
| fontSize           | 字符框字体大小           | string  |
| fontColor          | 字符框字体颜色           | string  |
| borderColor        | 字符框边框颜色           | string  |
| inputPanelBgColor  | 输入面板背景颜色         | string  |
| btnColor           | 输入面板按钮背景颜色     | string  |
| btnActiveColor     | 输入面板按钮 active 颜色 | string  |
| btnFontColor       | 输入面板按钮字体颜色     | string  |
| inputPanelFontSize | 输入面板字体大小         | string  |

## License

MIT

## 问题与建议

**请移步到 issues**
[issues](https://github.com/Reregi/plate_input-/issues)

## 感谢

- KoroLin
- 支付宝停车的那个页面
- [vue-car-number](https://github.com/windy-boy/vue-car-number)

## 版本号

- 1.0.0
  正式版
