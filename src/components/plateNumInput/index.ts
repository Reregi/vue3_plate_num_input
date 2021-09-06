import { App } from 'vue';
import plateNumInput from './src';
//组件列表
const components = [plateNumInput];

//遍历组件列表 全局注册
const install = (app: App): void => {
  components.forEach((component) => {
    app.component(component.name, component);
  });
};

//局部注册
export { plateNumInput, install };

export default install;
