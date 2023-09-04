# Modal React Component

This is a simple modal React component that you can use in your projects.

## Installation

You can install the component using npm:

npm i p14-oc-modal

## Usage

To use the modal component, you need to import it into your React project:

```jsx
import Modal from "p14-oc-modal";
const [isOpen, setIsOpen] = useState(false);
<Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
  <p>Modal text content</p>
</Modal>;
```

The isOpen prop controls whether the modal is visible or hidden, and the onClose prop is a function that will be called when the user clicks outside the modal or presses the escape key or clicks on the cross to close.

You can customize the style using the modal.scss folder.

## Props

| Name | Type | Default Value | Description |

| -------------- | -------- | ------------- | ----------------------------------------------- |

| isOpen | boolean | false | Determines whether the modal is open or closed. |

| onClose | function | undefined | Function to close the modal. |

| style | object | {} | Content of the modal. |
