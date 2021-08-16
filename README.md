# **Cryptly: a crypto news aggregator / feed**

This is a React application which provides access to crypto related news using a fun, engaging user experience.

![](./assets/cryptly.png?raw=true "Title")

## **Getting Started** ##

This project uses nodeJS, NPM, and yarn.  In other words, it presumes that your computer is configured properly as a development machine.  Male sure you meet these requirements before continuing.

**First**, clone the repo by typing the folllwing into your terminal:

```
git clone https://github.com/ttupper92618/crypto-news.git
```

**Second**, navigate to the newly created project directory:

```
cd crypto-news
```

**Third**, install dependencies:

```
yarn
```

## **Running the App**

To run the app, type the following into terminal from inside the project directory:

```
yarn start
```

## **Storybook**

This project employs storybook to allow a user to inspect each of the components out of which the app is built.  To run Storybook, simply execute the following from your terminal whil inside the project directory:

```
yarn storybook
```

Storybook will load in your local browser at http://localhost:6006/, and should appear like so:

![](./assets/storybook.png?raw=true "Title")

## **Running Tests** ##

Run the tests for this project simply by executing the following from your terminal:

```
yarn test
```

You'll see the tests execute, as below:

![](./assets/tests.png?raw=true "Title")

## **Hooks**

This project enforces some best practices via the use of **husky** to lint all code on commit, and to run all tests before a push.  It also will run prettier when a file is staged.  If there are linting errors, you won't be able to commit the offending code.  If tests are failing, you won't be able to push that code.  These are best practices that help keep bad code from entering the repo.  If you don't like it, sorry not sorry... that's the way I've set this up.  However, if you really **hate** it and you simply *must* fly by the seat of your pants, you can disable all that by simply deleting the **.huskyrc.json** file in the project root:

![](./assets/husky.png?raw=true "Title")

## **Known Issues**

- This is a work in progress; no complaining! ;-)
- Prettier is broken; no complaining! ;-)

## **Next Steps**

- Clean up the redux implementation
- Paging
- Real tests
- CI/CD using GitHub actions
- Mobile support
- Fix prettier


