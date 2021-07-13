# Link

Custom External Link.

### Usage

```js
import ELink from "../components/external-link";
```

```jsx
<ELink 
    label="External link"
    href="/"
    target="_blank"
/>
```

### Properties

| Props                     |        Type        | Required |                 Values                    |            Default          | Description       |
| ------------------------- | :----------------: | :------: | :---------------------------------------: | :-------------------------: | ----------------- |
| `className`               |      `string`      |    -     |                   -                       |               -             | Accepts class     |
| `id`                      |      `string`      |    -     |                   -                       |               -             | Accepts id        |
| `label`                   |      `string`      |    -     |                   -                       |               -             | External link text |
| `fontSize`                |      `string`      |    -     |                   -                       |             `14px`          | External link text font-size |
| `fontWeight`              | `number`, `string` |    -     |                   -                       |               -             | External link text font-weight |
| `textTransform`           |      `string`      |    -     |                   -                       |               -             | External link text text-transform |
| `href`                    |      `string`      |    -     |                   -                       |               -             | Used as HTML 'href' property |
| `title`                   |      `string`      |    -     |                   -                       |               -             | Used as HTML 'title' property |
| `tabIndex`                |      `number`      |    -     |                   -                       |              `-1`           | External link tab index |
| `target`                  |      `string`      |    -     |  `_blank`, `_self`, `_parent`, `_top`     |               -             | The target attribute specifies where the linked document will open when the link is clicked |
| `color`                   |      `string`      |    -     |                   -                       |               -             | External link text color |
| `onClick`                 |      `func`        |    -     |                   -                       |               -             | Accepts css style |
| `rel`                     |      `string`      |    -     |                   -                       |    `noopener noreferrer`    | Attribute defines the relationship between a linked resource and the current document |

