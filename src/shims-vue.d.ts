declare module "*.vue" {
  // ts 默认不支持.vue类型的模块的  自己添加一个模块的类型定义
  import { DefineComponent } from "vue";
  const component: DefineComponent<{}, {}, any>;
  export default component;
}
