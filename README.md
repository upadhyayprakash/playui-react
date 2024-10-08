<!-- [![PlayUI React](./public/playui_full_logo.svg)](https://example.com/ "PlayUI Logo") -->

<p align="center"><a href="https://example.com" target="_blank"><img src="./public/playui_full_logo.svg" alt="PlayUI Logo"></a></p>

# playui-react
`playui-react` is a modern, lightweight design system and a React Component library for effortless frontend development. It offers accessible components with customizable themes.

## Why `playui`?
- **TypeScript**: All the library components are type-safe.

- **Tested**: Components well-tested for usability and accessibility.

- **Storybook**: A centrally hosted documentation with a playground for UI components and sample code snippets.

- **Design Tokens**: Customize your design system to match your branding needs. Extend the default tokens with your own values.

- **Accessible**: Accessibility with support for keyboard users, screen readers.

## Storybook
A playground for components with code snippets can be browsed on the Storybook documentation. Check out the full list of components on the storybook [website](http://localhost:6006/?path=/docs).


## Installation

To install the `playui-react` using `npm`:
```sh
npm install playui-react
```

## Usage

The `playui-react` component library can be installed in any React project. As the components are shipped with type declarations, developers can easily explore the props and their allowed values.

1. Install the `playui-react` from `npm` registry.
    ```sh
    npm install playui-react
    ```
2. Use in React component.
    ```jsx
    import { Button } from 'playui-react';
    
    function App() {
      return (
        <>
          <Button size="medium">My Button</Button>
        </>
      );
    }
    ```

### Integrating the `playui-react` storybook

It's recommended that you also integrate our publicly hosted `playui-react` storybook within your React project.

You’ll now be able to browse the design system components and docs while developing your app. In your `.stroybook/main.ts` file, add following config,

```ts
// ...
  refs: {
    "design-system": {
      title: 'PlayUI Design System',
      //👇 The public url of 'playui-react' storybook
      url: 'https://storybook-url-of-playui-react-library',
    },
  },
// ...
```

> [!NOTE]
> Showcasing the design system during feature development increases the likelihood that developers will reuse existing components instead of wasting time inventing their own.

## Contribute

## Changelog