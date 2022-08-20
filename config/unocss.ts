import { presetUno, presetAttributify, presetIcons } from 'unocss';
import Unocss from 'unocss/vite';


/**
 * UnoCSS 默认是按需生成方式。也就是说只生成代码中使用过的样式。那如果在 class 属性中使用变量，是无法分析变量的取值的。这样也就无法动态生成样式了。为了解决这个问题，UnoCSS 提供了安全列表选项。也就是说，把样式定义中变量的取值添加到 Safelist 中去。这样 UnoCSS 就会根据 Safelist 生成样式了。
 */

//  1.引入UnoCSS实现原子化CSS样式；
//  2.使用安全列表实现在UnoCSS中使用变量定制样式；
//  3.引入 @unocss/preset-icons预设实现字体图标按钮

const colors = [
  "white",
  "black",
  "gray",
  "red",
  "yellow",
  "green",
  "blue",
  "indigo",
  "purple",
  "pink",
]

const icons = [
  "search",
  "edit",
  "check",
  "message",
  "star-off",
  "delete",
  "add",
  "share"
]
const safelist = [
  ...colors.map((v) => `bg-${v}-100`),
  ...colors.map((v) => `bg-${v}-400`),
  ...colors.map((v) => `bg-${v}-500`),
  ...colors.map((v) => `hover:bg-${v}-100`),
  ...colors.map((v) => `hover:bg-${v}-300`),
  ...colors.map((v) => `hover:bg-${v}-400`),
  ...colors.map((v) => `hover:bg-${v}-500`),
  ...colors.map((v) => `border-${v}-400`),
  ...colors.map((v) => `border-${v}-500`),
  ...colors.map((v) => `text-${v}-500`),
  ...colors.map((v) => `hover:text-${v}-500`),
  'text-white',

  ...["xs", "sm", "base", "lg", "xl", "2xl", "3xl"].map((v) => `text-${v}`),
  ...["rounded-full", "rounded-lg"],
  ...icons.map((v) => `i-ic-baseline-${v}`)
]

export default () => (
  Unocss({
    safelist,
    presets: [
      presetUno(),
      presetAttributify(),
      presetIcons() // 添加图标预设
    ]
  })
)
