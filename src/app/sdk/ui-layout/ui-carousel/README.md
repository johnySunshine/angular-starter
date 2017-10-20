
#### ui-carousel组件

- 说明

  用来处理图片的轮播

- 最终显示结果

- 如何使用

  首先进行模块的导入

  ```typescript
  import { UiCarouselModule } from '../sdk';
  ```

  其次在页面中使用标签

  ```html
  <ui-carousel [carousels]="carousels" [isAutoSwitch]="true" [isShowBackground]="true"
               (onCarousel)="showPoster($event)"></ui-carousel>
  ```

- 参数说明

  INPUT

  | 名称               | 说明         | 类型        |
  | ---------------- | ---------- | --------- |
  | carousels        | 轮播组件基本属性   | Carousels |
  | isAutoSwitch     | 是否支持自动切换   | boolean   |
  | isShowBackground | 是否显示添加背景图片 | boolean   |
  | delay            | 延迟时间       | number    |

  OUTPUT

  | 名称         | 说明      |
  | ---------- | ------- |
  | onCarousel | 每张图片的点击 |

- 对象说明

  carousels

  | 名称              | 说明   | 类型     |
  | --------------- | ---- | ------ |
  | id              | 图片ID | number |
  | url             | 图片地址 | string |
  | title           | 标题   | string |
  | subTitle        | 子标题  | string |
  | button          | 按钮名字 | string |
  | longDescription | 描述   | string |


