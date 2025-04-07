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
- Used Dummy Json data and pass to the component as **props**

## Routing
### Notes on Routing in React

- React Router is a library used for handling routing in React applications.
- It allows navigation between different components without reloading the page.
- Routes are defined using the `<Route>` component inside a `<Routes>` wrapper.
- The `<BrowserRouter>` component is used to wrap the application and enable routing.
- Dynamic routing can be achieved using route parameters (e.g., `/user/:id`).
- Navigation between routes is done using the `<Link>` or `<NavLink>` components.
- Programmatic navigation can be achieved using the `useNavigate` hook.
- Nested routes allow defining child routes within parent routes.
- React Router supports features like lazy loading, route guards, and custom hooks.
- Example:
    ```jsx
    import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

    function App() {
        return (
            <BrowserRouter>
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                </nav>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                </Routes>
            </BrowserRouter>
        );
    }
    ```