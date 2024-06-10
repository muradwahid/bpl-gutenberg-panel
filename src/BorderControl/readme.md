# BorderControl Component

The `BorderControl` component is a WP Gutenberg component used to render a control for managing border properties with various options for setting and updating border values.

## Props

- `className` (optional): A string representing the class name for additional styling.
- `label`: The label for the border control.
- `value`: An object representing the border properties.
- `onChange`: A function to handle the change event.
- `defaults` (optional): An object representing the default border properties.

## Usage

```jsx
import { BorderControl } from 'bpl-gutenberg-panel';

<BorderControl
  label="Border Settings"
  value={{
    width: '2px',
    style: 'solid',
    color: '#000000',
    side: 'all',
    radius: '5px',
  }}
  onChange={(value) => console.log('Updated border:', value)}
  defaults={{
    width: '1px',
    style: 'dashed',
    color: '#333333',
    side: 'all',
    radius: '0px',
  }}
/>
```

## Note

The component includes options for setting width, style, color, sides, and radius properties for the border. It also provides the ability to reset each property to its default value.