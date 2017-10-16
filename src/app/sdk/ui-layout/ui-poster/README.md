#### ui-poster组件

- 说明

  用来处理工程中所有的图片展示

- 如何使用

  首先进行导入操作

  ```typescript
  import { UiPosterModule } from '../sdk';
  ```

  在页面中使用`ui-poster`标签

  如：

  ```html
  <ui-poster [uiPoster]="uiPoster" [width]="419" [height]="300" [isAdaptive]="true" (onPoster)="showPoster($event)"></ui-poster>
  ```

- 接口参数说明**input**

  | 名称         | 说明       | 类型      |
  | ---------- | -------- | ------- |
  | uiPoster   | 图片的基本属性  | Poster  |
  | with       | 图片的宽度    | number  |
  | height     | 图片的高度    | number  |
  | isAdaptive | 图片是否拉伸处理 | boolean |

  **output**

  | 名称       | 说明                            |
  | -------- | ----------------------------- |
  | onPoster | 图片点击事件（传出event对象包含`posterId`） |

- 对象说明

  **Poster**

  | 名称                 | 说明                                       | 类型     |
  | ------------------ | ---------------------------------------- | ------ |
  | id                 | 图片的id                                    | string |
  | url                | 图片URL                                    | string |
  | defaultPictureName | 默认图片名字,由于支持material design图标库，所以直接写名字图标即可 | string |
  | title              | 图片标题                                     | string |
  | subTitle           | 图片副标题                                    | string |
  | mask               | 图片遮罩层                                    | Mask   |

  **Mask**

  | 名称             | 说明       | 类型      |
  | -------------- | -------- | ------- |
  | spinnerPercent | 进度展示     | string  |
  | isShowPercent  | 是否展示进度   | boolean |
  | title1         | 主标题      | string  |
  | title2         | 位于主标题上方  | string  |
  | title3         | 位于主标题下方  | string  |
  | title4         | 位于海报的右下角 | string  |

- `ui-poster`主体结构

  ![主体结构](https://imgur.com/c6mnUDj.png)