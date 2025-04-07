## React Components
### Notes on React Components

- React components are the building blocks of a React application.
- They can be either **functional components** or **class components**.
- Components allow you to split the UI into independent, reusable pieces.
- Each component can manage its own state and lifecycle methods.
- Components can be nested, reused, and composed to build complex UIs.


## Props
### Notes on Props

- Props (short for "properties") are used to pass data from a parent component to a child component.
- Props are read-only and cannot be modified by the child component.
- They allow components to be dynamic and reusable by passing different values.
- Props are passed as attributes in JSX and accessed in the child component using `props`.
- Default values for props can be set using `defaultProps`.
- Prop types can be validated using libraries like `PropTypes` or TypeScript.
- Props enable communication between components in a unidirectional data flow.
- Example:
    ```jsx
    function Greeting(props) {
        return <h1>Hello, {props.name}!</h1>;
    }

    <Greeting name="Alice" />
    ```

## Json Data Handling
- Used Dummy Json data and pass to the 