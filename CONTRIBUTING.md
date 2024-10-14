### Welcome to the DevZone!

Congratulations for graduating from **User** to **Contributor**!

This is the **DevZone** where you'd find everything you need to run this project on your local machine and to create a Pull Request, so that, this community driven project can be enhanced and benefit fellow Developers.

## Pull Request
1. Create a `feature` branch off the `main` branch.
    ```sh
    git checkout -b <feature_branch_name>
    ```
2. Check if husky is initialized and working. (`.husky` directory should have a `_` sub-directory along with `commit-msg` and `pre-commit` scripts)
3. Make changes (components, tests, docs, stories etc.)
4. Ensure that all the tests and lint-checks are passing.
5. Commit your changes,
    ```sh
    git add <file_paths>
    git commit -m <commit_message>
    ```
6. Push `feature` branch to the central repository for reviews.
    ```sh
    git push -u origin <feature_branch_name>
    ```
7. Merge the `feature` branch to `main` branch. This triggers the CI.

(In future we may trigger CI for each feature branch)

`main` branch is the release candidate at anytime and should be deployed (CD) periodically with tag based deployment and changelogs for each version. 

## Component checklist

1. Each component should have at least these 4 files,

```sh
|- Button # component folder
|__ Button.tsx # Render component
|__ Button.test.tsx # Test the component
|__ Button.stories.tsx # Storybook Doc for component
|__ index.ts # export file
```

2. Ensure each component is forwarding the `...rest` and the `className` prop from parent to the playui component container.

3. A component file (eg. `Button.tsx`) should have the proptypes defined using `interface` that extends `HTMLAttributes` of the element. Eg.
    ```ts
    interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {

    }
    ```
    This makes sure that users can pass any valid props for that element, such as, `onClick` or `className` or `aria-*` or `data-*` attributes.
4. The styled component should re-use the component proptype interfaces and enhance/edit the interface using Partial/Omit/Pick utility tools for transformations. Eg.
    ```ts
    interface StyledButtonProps extends Omit<ButtonProps, 'size'> {
        size: 'small' | 'medium' | 'large';
    }
    ```
    In above code, the `StyledButtonProps` interface replaces the optional `size?` prop of `ButtonProps` interface, with required `size` prop using `Omit` TypeScript utility.
5. Use `rem` instead of `px` or `em` as it's more predictable.
6. Use `Map` to avoid using excessive ternary operator. Eg.
    ```css
    padding: ${({ size }) => paddingMap[size] || paddingMap['medium']};
    ```

    ```ts
    const paddingMap: { [key: string]: string } = {
        small: '0.625rem 1rem',
        medium: '0.75rem 1.25rem',
        large: '0.75rem 1.5rem',
    };
    ```
7. Make sure your `.stories.tsx` files are following standard patterns. Check for reference `Button.stories.tsx`.
