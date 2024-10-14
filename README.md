<!-- [![PlayUI React](./public/playui_full_logo.svg)](https://upadhyayprakash.github.io/playui-react/ "PlayUI Logo") -->

<p align="center"><a href="https://upadhyayprakash.github.io/playui-react" target="_blank"><img src="./public/playui_full_logo.svg" alt="PlayUI Logo"></a></p>

<p align="center">A modern, lightweight design system and a React component library for effortless frontend development.</p>

<p align="center">
  <a href="https://bundlephobia.com/package/playui-react">
    <img alt="bundlephobia" style="height:30px" src="https://badgen.net/bundlephobia/minzip/playui-react" />
  </a>
</p>

# playui-react
`playui-react` is an **open-source**, modern, lightweight design system and a React component library for effortless frontend development. It offers accessible components with customizable themes.

## Why `playui-react`?
- **TypeScript**: All the library components are type-safe.

- **Tested**: Components well-tested for usability and accessibility.

- **Storybook**: A centrally hosted documentation with a playground for UI components and sample code snippets.

- **Design Tokens**: Customize your design system to match your branding needs. Extend the default tokens with your own values.

- **Accessible**: Accessibility with support for keyboard users, screen readers.

## Storybook
A playground for components with code snippets can be browsed on the Storybook documentation. Check out the full list of components on the storybook [website](https://upadhyayprakash.github.io/playui-react).


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
    import { Button, ThemeProvider } from "playui-react";

    function App() {
      return (
        <>
          <ThemeProvider mode="dark">
            <Button 
              size="large"
              variant="primary"
              onClick={() => alert("Clicked!")}
            >
              Primary Button
            </Button>
          </ThemeProvider>
        </>
      );
    }

    export default App;
    ```

### Integrating the `playui-react` storybook

It's recommended that you also integrate our publicly hosted `playui-react` storybook within your React project.

You’ll be able to browse the design system components and docs while developing your app.

In your `.stroybook/main.ts` file, add following config,

```ts
// ...
  refs: {
    "design-system": {
      title: 'PlayUI Components',
      //👇 The public url of 'playui-react' storybook
      url: 'https://upadhyayprakash.github.io/playui-react',
    },
  },
// ...
```

> [!NOTE]
> Showcasing the design system during feature development increases the likelihood that developers will reuse existing components instead of wasting time inventing their own.

## Contribute
Husky needs to be activated locally for smooth commit experience. Read more about [husky](https://typicode.github.io/husky/).

Check our [Contributors guideline](https://github.com/upadhyayprakash/playui-react/blob/main/CONTRIBUTING.md) to learn about development process and how you can raise a Pull Request with new changes.

### Contributors
<a href="https://github.com/upadhyayprakash/playui-react/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=upadhyayprakash/playui-react" />
</a>

## Changelog
(coming soon)

## Roadmap

[**playui-react**](https://upadhyayprakash.github.io/playui-react) has a long roadmap to first bring it at par with alternatives and then add features that sets it apart, such as,

- Efficient CI/CD pipeline for publishing artifacts
  - Publish npm package using GitHub Actions
  - Changelog publishing, and more
- Accessibility
- Add i18n extension
- Extendable themes
- Token Guides (Color, Spacing, Icons etc.)
- Interaction Tests using add-on.
- A lots of components
  - Layout (page, section etc.)
  - Form fields
  - DataTable
  - Tabs, Modal and more.

Pick your topic and create an issue to get started.

## License

`playui-react` is distributed under [MIT license](https://github.com/upadhyayprakash/playui-react/blob/main/LICENSE).