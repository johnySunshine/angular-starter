#### ui-sliding组件

- 说明

  用来处理图片列表中左右切换以及拖拽处理，显示更多图片

- 最终显示结果

  ![C1cK1jT.png](https://i.imgur.com/C1cK1jT.png)

- 如何使用

  首先进行模块的导入

  ```typescript
  import { UiSlidingPosterModule } from '../sdk';
  ```

  其次在页面中使用标签

  ```html
  <ui-sliding-poster [sliding]="uiSliding1" [slidingType]="types" (onTopHeader)="showPoster($event)" (onSliding)="posterMore($event)"></ui-sliding-poster>
  ```

- 参数说明

  INPUT

  | 名称          | 说明       | 类型         |
  | ----------- | -------- | ---------- |
  | sliding     | 滑动组件基本属性 | Sliding    |
  | slidingType | 图片展示的属性  | SlideTypes |
  | isAdaptive  | 图片是否支持拉伸 | boolean    |

  OUTPUT

  | 名称          | 说明             |
  | ----------- | -------------- |
  | onTopHeader | 滑动组件中header的事件 |
  | onSliding   | 每个图片的点击事件      |

- 对象说明

  Sliding

  | 名称         | 说明      | 类型        |
  | ---------- | ------- | --------- |
  | topHeader  | 滑动组件的标题 | TopHeader |
  | posterList | 滑动组件的海报 | Poster[]  |

  TopHeader

  | 名称    | 说明   | 类型     |
  | ----- | ---- | ------ |
  | title | 标题   | string |
  | count | 内容数量 | string |

  [Poster](https://github.com/johnySunshine/angular-starter/blob/%E4%BC%98%E5%8C%96%E7%BB%93%E6%9E%84/src/app/sdk/ui-layout/ui-poster/README.md)

  SlideTypes【enum类型】

  | 名称         | 说明     | 类型     |
  | ---------- | ------ | ------ |
  | horizontal | 横版16x9 | number |
  | square     | 方版1x1  | number |
  | vertical   | 竖版5x7  | number |

- ui-sliding 

  ![bLwUH1t](https://imgur.com/bLwUH1t.png)

  ​