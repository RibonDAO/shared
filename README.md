# @ribon.io/shared
Small library used to share resources between our frontends
<hr/>



### Usage:
- Install via yarn
 ```console
yarn add @ribon.io/shared
```

- Import and use whatever you want!
```js
import { defaultDisplayLarge, theme } from '@ribon.io/shared/styles';
import { useNonProfits } from '@ribon.io/shared/hooks';

export const Title = styled.h1`
      ${defaultDisplayLarge};
      color: ${({ theme }) => theme.colors.green30};
      font-weight: ${({ theme }) => theme.font.light};
`;

// in a component (check setup hooks for using api hooks)
function MyComponent() {
  const { nonProfits, loading, error } = useNonProfits();
  // ...
}
```

### Setup hooks:
@ribon.io/shared lib uses the react-query lib to make caches of api calls. In order to use the
hooks you need to wrap your app with the `QueryClientComponent` component:
```js
import { QueryClientComponent } from "@ribon.io/shared/hooks";

function App() {
  return (
    <QueryClientProvider>
        ...
    </QueryClientProvider>
  );
}
```

### Developing locally:
- Clone the repo:
```console
git clone git@github.com:RibonDAO/shared.git  
```
- Install dependencies
```console
yarn
```
You can code and test directly in the project using the jest test runner. To run the tests:
```console
yarn test
```

If you want to use the lib in another project, you can start the project (it will build the lib and watch for changes) and link it to the other project:
```console
yarn start
cd dist
yarn link
```
Notice you need to link the dist folder, that is generated after the build process.

Then in the project you want to test the changes:
```console
yarn link @ribon.io/shared
```
This will link the local version of the lib to the project. Instead of using the @ribon.io/shared package from npm, it will use
from your local machine. When you make changes to the @ribon.io/shared lib locally, it will be reflected in the project you are testing.

### Publishing:
To make a new release, you need to bump the version in the package.json and create a new git tag for it. Use the npm version command:
```console
npm version patch //(or other version type command)
git push -u origin main --tags // this will push the new github tag that is correspondent to the npm version
```

To deploy the new version, you have to create a new release in the github UI.

### Tips:
- Normally, before creating a new hook, lib, api call or other resource, you can first create this on the project you are working with, and after if
you see a necessity, you can move it to the shared lib. This way you can test it and see if it is really necessary to move it to the shared lib.

### What can we share?
- Types (entities, responses and enums)
- Styles (theme and typography)
- Hooks and services
- Small libs (NOT IMPLEMENTED YET)



### React-native problems
React-native doesn't recognize stylized typography (that one using the Gambarino font). So we need to use a different approach to load custom fonts on mobile frontends.
It will be implemented until the end of 2022.



