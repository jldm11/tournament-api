# Tournament API

API implemented with Swagger 2.0

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

[Node JS](https://nodejs.org)
[Homebrew](https://brew.sh/)
[Yarn](https://yarnpkg.com)

### Installing

First of all you need to install [Swagger](https://swagger.io/)

```
$ npm install -g swagger
```
Clone the project and then run the following command to install dependencies

```
$ yarn
```

And now to start the server use

```
$ yarn start
```

Now your API is running on http://localhost:10010/

If you want to edit the YAML file using Swagger Editor run the command

```
$ yarn edit-yaml
```

## Running the tests

```
$ yarn test
```

## Running lint

```
$ yarn lint
```

If you want to fix lint errors automatically please use

```
$ yarn delint
```

## Documentation

[Swagger 2.0 Specs](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/2.0.md)
[Express](http://expressjs.com/)

## Authors

* **María Dolores Delgado Lara** - [madodela](https://github.com/madodela)
* **José Luis Díaz Montellano** - [jldm11](https://github.com/jldm11)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
