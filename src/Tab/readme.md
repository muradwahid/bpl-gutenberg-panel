# Tab Component

The `Tab` component is a WP Gutenberg component that provides a tabbed interface for selecting options. It allows users to click on different tabs to change the active selection.

## Props

- `options`: An array of options to be displayed as tabs.
- `onChange`: A function to handle the change event when a tab is clicked.
- `value`: The currently selected tab value.
- `paddingY`: The vertical padding for the tab content.
- `paddingX`: The horizontal padding for the tab content.

## Usage

```jsx
import { Tab } from 'bpl-gutenberg-panel';


<Tab
  options={['Option 1', 'Option 2', 'Option 3']}
  value="option1"
  onChange={(newValue) => console.log('New tab value:', newValue)}
  paddingY={4}
  paddingX={0}
/>
```

## Functionality

The `Tab` component renders a set of tabs based on the provided options. When a tab is clicked, the `onChange` function is called with the corresponding option value. The active tab is visually distinguished from the inactive tabs.

I hope this README provides a clear understanding of the `Tab` component!