# Sitarri Storefront

_**Note:** This project is beta quality. We don't advise using it in production._

A GraphQL-powered, PWA, single-page application storefront for [Sitarri](https://erocery.com).

## Features

- Headless ecommerce storefront built with [GraphQL](https://graphql.org/), [Apollo Client](https://www.apollographql.com/client), [React](https://reactjs.org/) and [Typescript](https://www.typescriptlang.org/)
- Offline mode (beta)
- Sitarri GraphQL API integration
- Single-page application experience
- [Braintree Payment Gateway](https://www.braintreepayments.com/) integration

## Demo

See the [public demo](http://erocery.com) of Sitarri Storefront!

Or launch the demo on a free Heroku instance.

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js 10.0+
- A running instance of Sitarri.

  To run the storefront, you have to set the `API_URI` environment variable to point to the Sitarri GraphQL API. If you are running Sitarri locally with the default settings, set `API_URI` to: `http://3.8.208.154:8000/graphql/`.

### Installing

Clone the repository.

Enter the project directory:

```
cd sitarri-store-front
```

#### Using development version

If you want to use the latest development version, checkout to the `master` branch:

```
$ git checkout master
```

Install NPM dependencies:

```
npm i
```

Run the development server:

```
npm start
```

Go to `http://0.0.0.0:3000` to access the storefront.

