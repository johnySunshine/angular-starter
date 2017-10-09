## slide-list 组件

#### API参考

- **导入模板**

   `import { SlideListModule } from './slide-list';`

- 使用slide-list元素标签`<slide-list></slide-list>`

- 组件入口参数

  | 属性             | 说明                 | 类型         |
  | -------------- | ------------------ | ---------- |
  | types          | 滑动组建的类型            | SlideTypes |
  | showSlide      | 整个Slide数据接口        | Slide      |
  | multipleMove   | 移动的倍数              | number     |
  | posterTypes    | 图片海报类型，用来确定图片的默认图片 | string     |
  | adaptiveImages | 图片是否自适应            | boolean    |

- 组件事件

  | 属性         | 说明          | 类型           |
  | ---------- | ----------- | ------------ |
  | onShowMore | 滑动组建的显示标题事件 | EventEmitter |
  | onPoster   | 图片海报事件      | EventEmitter |

  ​