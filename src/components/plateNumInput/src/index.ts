import plateNumInput from './plateNumInput.vue';
import { App } from 'vue';

plateNumInput.install = function (app: App) {
  app.component(plateNumInput.name, plateNumInput);
};

export default plateNumInput;
