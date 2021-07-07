# Button

Button is used for a action on a page.

### Usage

```js
import Button from "../components/button";
```

```jsx
<Button
  type="primary"
  isDisabled={false}
  onClick={() => alert("Button clicked")}
  label="OK"
/>
```

### Properties

| Props        |      Type      | Required |                Values                 |  Default  | Description                                           |
| ------------ | :------------: | :------: | :-----------------------------------: | :-------: | ----------------------------------------------------- |
| `className`  |    `string`    |    -     |                   -                   |     -     | Accepts class                                         |
| `icon`       |     `node`     |    -     |                   -                   |  `null`   | Icon node element                                     |
| `id`         |    `string`    |    -     |                   -                   |     -     | Accepts id                                            |
| `type`       |    `string`    |    -     | `primary`, `secondary`, `transparent` | `primary` | Tells type of button style                            |
| `isDisabled` |     `bool`     |    -     |                   -                   |  `false`  | Tells when the button should present a disabled state |
| `label`      |    `string`    |    -     |                   -                   |     -     | Button text                                           |
| `onClick`    |     `func`     |    -     |                   -                   |     -     | What the button will trigger when clicked             |
| `scale`      |     `bool`     |    -     |                   -                   |  `false`  | Scale width of button to 100%                         |
| `style`      | `obj`, `array` |    -     |                   -                   |     -     | Accepts css style                                     |
| `tabIndex`   |    `number`    |    -     |                   -                   |   `-1`    | Button tab index                                      |
| `minwidth`   |    `string`    |    -     |                   -                   |  `null`   | Sets the min width of the button                      |
