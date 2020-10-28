import { createApp } from "vue";
import App from "./App.vue";
// import Antd from 'ant-design-vue';
// import 'ant-design-vue/dist/antd.css';

import { Button, Form, select } from "ant-design-vue";

const vm = createApp(App);
vm.use(Button);
vm.use(Form);
vm.use(Form);
vm.use(select);
vm.mount("#app");
