
import { App } from 'vue';
import MyButton from './button/Button';
import JSXButton from './JSXButton';
import SFCButton from './SFCButton.vue';

// 导出单独的组件
export { MyButton, SFCButton, JSXButton }

console.log('MyButton', MyButton.name)

// 编写一个插件 
export default {
  install(app: App): void {
    app.component(MyButton.name, MyButton)
    app.component(SFCButton.name, SFCButton)
    app.component(JSXButton.name, JSXButton)
  }
}