# BMultiShadowControl Component

The `BMultiShadowControl` component is a WP Gutenberg component used to render a control for managing multiple shadow properties with various options for setting and updating shadow values.

## Props

- `className` (optional): A string representing the class name for additional styling.
- `label`: The label for the shadow control.
- `value`: An array of shadow properties.
- `onChange`: A function to handle the change event.
- `type` (optional): The type of shadow control (default is "box").
- `defaults` (optional): An array of default shadow properties.

## Usage

```jsx
import { BMultiShadowControl } from 'bpl-gutenberg-panel';

<BMultiShadowControl
  label="Shadow"
  value={[ { hOffset: '2px', vOffset: '2px', blur: '4px', spreed: '0px', color: '#000000', isInset: false }]}
  onChange={(value) => console.log('Updated shadow:', value)}
  type="box"
  defaults={[
    { hOffset: '0px', vOffset: '0px', blur: '0px', spreed: '0px', color: '#7090b0', isInset: false },
  ]}
/>
```


## Note

The component includes options for setting horizontal offset, vertical offset, blur, spread, color, and inset properties for each shadow. It also provides the ability to add, remove, and duplicate shadow properties.