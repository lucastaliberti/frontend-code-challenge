# McMakler Frontend Code Challenge

---

This is my attemp on the McMakler Frontend code challenge from the following
repository.

https://github.com/mcmakler/frontend-code-challenge

This project renders a page with 10 realstate advertisiments queried from the
McMakler API.

The layout was based on the provided asset located in the
[assest folder](/assets/fe_test_example_screen.png).

## My design choices

For this project I choose to go with
[Create React App](https://github.com/facebookincubator/create-react-app) for
its simplicity and the "ready-to-go" boilerblate.

I also added [Redux](https://redux.js.org/) for state management and
[Redux-Sagas](https://github.com/redux-saga/redux-saga) for the side effects.

I choose the feature aproach to organize the folders, so inside a component
folder you'll find:

* an index containing the actual component
* its CSS (vanila .css file)
* its types, actions, reducer and sagas, if needed
* any other util class, like an API client or data handling functions

I also added [Prettier](https://github.com/prettier/prettier) for linting the
code with a precommit hook using [Husky](https://github.com/typicode/husky) to automatically fix the files on stage.

## To run

1. First install all dependencies

```bash
$ yarn
```

2. Run it

```bash
$ yarn start
```

4. Browse localhost:3000

---

* You can also run the tests or coverage

```bash
$ yarn test
```

```bash
$ yarn run coverage
```
